import { json } from "@sveltejs/kit";
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    console.log("[EXPORT_TRACK]", JSON.stringify({
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      exportType: data.exportType,
      url: data.url,
      quote: data.quote,
      author: data.author,
      themeId: data.themeId
    }));
    return json({ success: true });
  } catch (error) {
    console.error("[EXPORT_TRACK_ERROR]", error);
    return json({ success: false }, { status: 500 });
  }
};
export {
  POST
};
