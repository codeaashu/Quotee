import { error, json } from "@sveltejs/kit";
const containsUrl = (text) => /https?:\/\/\S+/.test(text);
const hasTwitterMedia = (text) => /pic\.twitter\.com/.test(text);
const MICROLINK_HOSTS = {
  peerlist: ["peerlist.io"],
  linkedin: ["linkedin.com", "lnkd.in"],
  substack: ["substack.com"],
  facebook: ["facebook.com", "fb.watch"],
  threads: ["threads.net"]
};
const detectMicrolinkPlatform = (targetUrl) => {
  try {
    const parsed = new URL(targetUrl);
    const host = parsed.hostname.toLowerCase().replace(/^www\./, "");
    for (const [platform, hosts] of Object.entries(MICROLINK_HOSTS)) {
      if (hosts.some((domain) => host === domain || host.endsWith(`.${domain}`))) {
        return platform;
      }
    }
  } catch {
    return null;
  }
  return null;
};
const decodeEntities = (text) => {
  return text.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&mdash;/g, "—").replace(/&ndash;/g, "–");
};
const GET = async ({ url }) => {
  const targetUrl = url.searchParams.get("url");
  const microlinkPlatform = targetUrl ? detectMicrolinkPlatform(targetUrl) : null;
  if (!targetUrl) {
    throw error(400, "URL is required");
  }
  try {
    if (targetUrl.includes("x.com") || targetUrl.includes("twitter.com")) {
      const res = await fetch(`https://publish.twitter.com/oembed?url=${targetUrl}`);
      if (!res.ok) {
        throw error(res.status, "Failed to fetch from Twitter");
      }
      const data = await res.json();
      const pMatch = data.html.match(/<p[^>]*>(.*?)<\/p>/s);
      const rawHtml = pMatch ? pMatch[1] : data.html;
      const isTruncated = rawHtml.includes("…") || rawHtml.includes("&hellip;");
      let rawText = decodeEntities(rawHtml.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
      if (isTruncated) {
        throw error(400, "This post is too long (Long-form). We can only import full, short posts.");
      }
      if (hasTwitterMedia(rawText)) {
        throw error(400, "This post contains media (images/video) which is not supported for quotes.");
      }
      if (containsUrl(rawText)) {
        throw error(400, "Post contains a URL. Quotes must be text-only.");
      }
      if (rawText.length < 10) {
        throw error(400, "Post text is too short to be a quote.");
      }
      if (rawText.length > 500) {
        throw error(400, "Post is too long. We specialize in short, beautiful quotes!");
      }
      return json({
        text: rawText,
        author: data.author_name,
        platform: "x",
        isLong: rawText.length > 200
      });
    }
    if (microlinkPlatform) {
      const microlinkUrl = `https://api.microlink.io?url=${encodeURIComponent(targetUrl)}`;
      const res = await fetch(microlinkUrl);
      if (!res.ok) {
        if (res.status === 429 || res.status === 402) {
          throw error(429, "Import limit reached for today. Please try again tomorrow or enter the text manually.");
        }
        if (res.status === 403) {
          throw error(403, "Access to Peerlist is temporarily restricted. Please try again later.");
        }
        const errorData = await res.json().catch(() => ({}));
        throw error(res.status, errorData.message || "Failed to fetch from Microlink");
      }
      const { data } = await res.json();
      const hasPeerlistMediaImage = microlinkPlatform === "peerlist" && data.image?.url && (data.image.url.includes("peerlist-media.s3.amazonaws.com") || data.image.url.includes("image.mux.com"));
      if (data.video || hasPeerlistMediaImage) {
        throw error(400, "This post contains media which is not supported for quotes.");
      }
      let rawText = data.description || data.text || data.title || "";
      rawText = decodeEntities(rawText).replace(/\s+/g, " ").trim();
      if (!rawText) {
        throw error(400, "Could not extract text from this post. Please try another link.");
      }
      if (containsUrl(rawText)) {
        throw error(400, "Post contains a URL. Quotes must be text-only.");
      }
      if (rawText.length < 10) {
        throw error(400, "Post text is too short to be a quote.");
      }
      if (rawText.length > 500) {
        throw error(400, "Post is too long. We specialize in short, beautiful quotes!");
      }
      return json({
        text: rawText,
        author: data.author || data.publisher || "",
        platform: microlinkPlatform,
        isLong: rawText.length > 200
      });
    }
    throw error(
      400,
      "Unsupported platform. Try links from X, Peerlist, LinkedIn, Substack, Facebook, or Threads."
    );
  } catch (e) {
    if (e.status && e.body) {
      throw e;
    }
    throw error(500, e.message || "Failed to parse post");
  }
};
export {
  GET
};
