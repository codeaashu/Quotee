import { a9 as ATTACHMENT_KEY, aa as ssr_context, ab as lifecycle_function_unavailable, ac as fallback, ad as attr, ae as bind_props, af as attributes, ag as clsx, ah as store_get, ai as attr_class, aj as attr_style, ak as stringify, al as unsubscribe_stores, a8 as derived$1, am as hasContext, g as getContext, a7 as setContext, an as run, ao as getAllContexts, ap as on, aq as spread_props, ar as props_id, as as ensure_array_like, e as escape_html, at as head } from "../../chunks/index2.js";
import { w as writable, g as get$2, d as derived } from "../../chunks/index.js";
import { clsx as clsx$1 } from "clsx";
import { computePosition, offset, shift, limitShift, flip, size, arrow, hide } from "@floating-ui/dom";
import parse from "style-to-object";
import { tabbable, focusable, isFocusable } from "tabbable";
import "html-to-image";
function createAttachmentKey() {
  return Symbol(ATTACHMENT_KEY);
}
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function mount() {
  lifecycle_function_unavailable("mount");
}
function unmount() {
  lifecycle_function_unavailable("unmount");
}
async function tick() {
}
const FONTS = {
  "geist": {
    name: "Geist",
    css: '"Geist", sans-serif'
  },
  "inter": {
    name: "Inter",
    css: '"Inter", sans-serif'
  },
  "playfair": {
    name: "Playfair Display",
    css: '"Playfair Display", serif'
  },
  "old-standard": {
    name: "Old Standard TT",
    css: '"Old Standard TT", serif'
  },
  "mono": {
    name: "JetBrains Mono",
    css: '"JetBrains Mono", monospace'
  },
  "instrument-serif": {
    name: "Instrument Serif",
    css: '"Instrument Serif", serif'
  }
};
const THEMES = {
  "vercel-dark": {
    id: "vercel-dark",
    name: "Vercel Dark",
    quoteStyle: "brutalist",
    background: "#000000",
    backgroundImage: "url(/vercel-dark-bg.jpg)",
    backgroundSize: "cover",
    cardBackground: "#000000",
    text: "#ffffff",
    accent: "#A0A0A0",
    quoteMark: "#0070F3",
    border: "#FFFFFF20",
    font: "geist",
    authorFont: "geist",
    brand: "vercel",
    defaultAlignment: "left"
  },
  "vercel-light": {
    id: "vercel-light",
    name: "Vercel Light",
    quoteStyle: "brutalist",
    background: "#ffffff",
    backgroundImage: "url(/vercel-light-bg.jpg)",
    backgroundSize: "cover",
    cardBackground: "#ffffff",
    text: "#111827",
    accent: "#666666",
    quoteMark: "#0070F3",
    border: "#0000001A",
    font: "geist",
    authorFont: "geist",
    brand: "vercel",
    defaultAlignment: "left"
  },
  "peerlist-dark": {
    id: "peerlist-dark",
    name: "Peerlist Dark",
    quoteStyle: "startup",
    background: "#171717",
    text: "#fafafa",
    accent: "#A0A0A0",
    quoteMark: "#00AA45",
    border: "#FFFFFF20",
    font: "instrument-serif",
    authorFont: "geist",
    brand: "peerlist",
    defaultAlignment: "left"
  },
  "peerlist-light": {
    id: "peerlist-light",
    name: "Peerlist Light",
    quoteStyle: "startup",
    background: "#FFFFFF",
    text: "#0d0d0d",
    accent: "#666666",
    quoteMark: "#00AA45",
    border: "#0000001A",
    font: "instrument-serif",
    authorFont: "geist",
    brand: "peerlist",
    defaultAlignment: "left"
  },
  "x-dark": {
    id: "x-dark",
    name: "X Dark",
    quoteStyle: "chirp",
    background: "#000000",
    text: "#ffffff",
    accent: "#71767b",
    quoteMark: "#1D9BF0",
    border: "#2f3336",
    font: "inter",
    authorFont: "inter",
    brand: "x",
    defaultAlignment: "left"
  },
  "x-light": {
    id: "x-light",
    name: "X Light",
    quoteStyle: "chirp",
    background: "#ffffff",
    text: "#000000",
    accent: "#71767b",
    quoteMark: "#1D9BF0",
    border: "#EFF3F4",
    font: "inter",
    authorFont: "inter",
    brand: "x",
    defaultAlignment: "left"
  },
  "linkedin-dark": {
    id: "linkedin-dark",
    name: "LinkedIn Dark",
    quoteStyle: "chirp",
    background: "#052333",
    text: "#EAF3FB",
    accent: "#95ABC0",
    quoteMark: "#70B5F9",
    border: "#2A3A52",
    font: "inter",
    authorFont: "inter",
    brand: "linkedin",
    defaultAlignment: "left"
  },
  "linkedin-light": {
    id: "linkedin-light",
    name: "LinkedIn Light",
    quoteStyle: "chirp",
    background: "#FFFFFF",
    text: "#1F2328",
    accent: "#5E6A75",
    quoteMark: "#0A66C2",
    border: "#DDE7F1",
    font: "inter",
    authorFont: "inter",
    brand: "linkedin",
    defaultAlignment: "left"
  },
  "threads-dark": {
    id: "threads-dark",
    name: "Threads Dark",
    quoteStyle: "chirp",
    background: "#101010",
    text: "#F5F5F5",
    accent: "#A0A0A0",
    quoteMark: "#FFFFFF",
    border: "#2B2B2B",
    font: "inter",
    authorFont: "inter",
    brand: "threads",
    defaultAlignment: "left"
  },
  "threads-light": {
    id: "threads-light",
    name: "Threads Light",
    quoteStyle: "chirp",
    background: "#FFFFFF",
    text: "#111111",
    accent: "#6B6B6B",
    quoteMark: "#111111",
    border: "#E5E7EB",
    font: "inter",
    authorFont: "inter",
    brand: "threads",
    defaultAlignment: "left"
  },
  "pinterest-dark": {
    id: "pinterest-dark",
    name: "Pinterest Dark",
    quoteStyle: "chirp",
    background: "#1A0F12",
    text: "#FFF2F5",
    accent: "#D9A8B3",
    quoteMark: "#E60023",
    border: "#432028",
    font: "inter",
    authorFont: "inter",
    brand: "pinterest",
    defaultAlignment: "left"
  },
  "pinterest-light": {
    id: "pinterest-light",
    name: "Pinterest Light",
    quoteStyle: "chirp",
    background: "#FFF7F8",
    text: "#2B0E14",
    accent: "#9A6A75",
    quoteMark: "#E60023",
    border: "#F2D5DC",
    font: "inter",
    authorFont: "inter",
    brand: "pinterest",
    defaultAlignment: "left"
  },
  "snapchat-dark": {
    id: "snapchat-dark",
    name: "Snapchat Dark",
    quoteStyle: "chirp",
    background: "#121212",
    text: "#FFFDE6",
    accent: "#B8B37A",
    quoteMark: "#FFFC00",
    border: "#3A3A1A",
    font: "inter",
    authorFont: "inter",
    brand: "snapchat",
    defaultAlignment: "left"
  },
  "snapchat-light": {
    id: "snapchat-light",
    name: "Snapchat Light",
    quoteStyle: "chirp",
    background: "#FFFEEA",
    text: "#1A1A1A",
    accent: "#6E6E3A",
    quoteMark: "#FFFC00",
    border: "#EEE7A8",
    font: "inter",
    authorFont: "inter",
    brand: "snapchat",
    defaultAlignment: "left"
  },
  "whatsapp-dark": {
    id: "whatsapp-dark",
    name: "WhatsApp Dark",
    quoteStyle: "chirp",
    background: "#0B1F16",
    text: "#EAFBF2",
    accent: "#8ECBA8",
    quoteMark: "#25D366",
    border: "#274A3A",
    font: "inter",
    authorFont: "inter",
    brand: "whatsapp",
    defaultAlignment: "left"
  },
  "whatsapp-light": {
    id: "whatsapp-light",
    name: "WhatsApp Light",
    quoteStyle: "chirp",
    background: "#F4FFF8",
    text: "#102117",
    accent: "#4E7A62",
    quoteMark: "#25D366",
    border: "#CBEFD9",
    font: "inter",
    authorFont: "inter",
    brand: "whatsapp",
    defaultAlignment: "left"
  },
  "discord-dark": {
    id: "discord-dark",
    name: "Discord Dark",
    quoteStyle: "chirp",
    background: "#1E1F2A",
    text: "#F3F5FF",
    accent: "#A8AFE9",
    quoteMark: "#5865F2",
    border: "#3A3F7A",
    font: "inter",
    authorFont: "inter",
    brand: "discord",
    defaultAlignment: "left"
  },
  "discord-light": {
    id: "discord-light",
    name: "Discord Light",
    quoteStyle: "chirp",
    background: "#F6F7FF",
    text: "#1E2340",
    accent: "#6971B5",
    quoteMark: "#5865F2",
    border: "#D9DCF7",
    font: "inter",
    authorFont: "inter",
    brand: "discord",
    defaultAlignment: "left"
  },
  "sharechat-dark": {
    id: "sharechat-dark",
    name: "ShareChat Dark",
    quoteStyle: "chirp",
    background: "#22170F",
    text: "#FFF3EA",
    accent: "#CFA38C",
    quoteMark: "#FF6D3A",
    border: "#4A2C1E",
    font: "inter",
    authorFont: "inter",
    brand: "sharechat",
    defaultAlignment: "left"
  },
  "sharechat-light": {
    id: "sharechat-light",
    name: "ShareChat Light",
    quoteStyle: "chirp",
    background: "#FFF6F0",
    text: "#2B1A13",
    accent: "#9E6A58",
    quoteMark: "#FF6D3A",
    border: "#F2D9CC",
    font: "inter",
    authorFont: "inter",
    brand: "sharechat",
    defaultAlignment: "left"
  },
  "substack-dark": {
    id: "substack-dark",
    name: "Substack Dark",
    quoteStyle: "chirp",
    background: "#22160F",
    text: "#FFF4EC",
    accent: "#D9A788",
    quoteMark: "#FF6719",
    border: "#4A2C1E",
    font: "inter",
    authorFont: "inter",
    brand: "substack",
    defaultAlignment: "left"
  },
  "substack-light": {
    id: "substack-light",
    name: "Substack Light",
    quoteStyle: "chirp",
    background: "#FFF8F3",
    text: "#2A1A12",
    accent: "#9C6D55",
    quoteMark: "#FF6719",
    border: "#F3DED1",
    font: "inter",
    authorFont: "inter",
    brand: "substack",
    defaultAlignment: "left"
  },
  "telegram-dark": {
    id: "telegram-dark",
    name: "Telegram Dark",
    quoteStyle: "chirp",
    background: "#0C1E2A",
    text: "#EAF7FF",
    accent: "#8EBBD3",
    quoteMark: "#24A1DE",
    border: "#274255",
    font: "inter",
    authorFont: "inter",
    brand: "telegram",
    defaultAlignment: "left"
  },
  "telegram-light": {
    id: "telegram-light",
    name: "Telegram Light",
    quoteStyle: "chirp",
    background: "#F2FAFF",
    text: "#0E2431",
    accent: "#5E8AA3",
    quoteMark: "#24A1DE",
    border: "#CFE7F5",
    font: "inter",
    authorFont: "inter",
    brand: "telegram",
    defaultAlignment: "left"
  },
  "tiktok-dark": {
    id: "tiktok-dark",
    name: "TikTok Dark",
    quoteStyle: "chirp",
    background: "#121212",
    text: "#F8F8F8",
    accent: "#A6A6A6",
    quoteMark: "#25F4EE",
    border: "#3A3A3A",
    font: "inter",
    authorFont: "inter",
    brand: "tiktok",
    defaultAlignment: "left"
  },
  "tiktok-light": {
    id: "tiktok-light",
    name: "TikTok Light",
    quoteStyle: "chirp",
    background: "#FFFFFF",
    text: "#111111",
    accent: "#6A6A6A",
    quoteMark: "#FE2C55",
    border: "#EBEBEB",
    font: "inter",
    authorFont: "inter",
    brand: "tiktok",
    defaultAlignment: "left"
  },
  "instagram-dark": {
    id: "instagram-dark",
    name: "Instagram Dark",
    quoteStyle: "chirp",
    background: "#1A1025",
    text: "#F8F0FF",
    accent: "#B8A3C9",
    quoteMark: "#E1306C",
    border: "#4A345A",
    font: "inter",
    authorFont: "inter",
    brand: "instagram",
    defaultAlignment: "left"
  },
  "instagram-light": {
    id: "instagram-light",
    name: "Instagram Light",
    quoteStyle: "chirp",
    background: "#FFF5FB",
    text: "#2A1022",
    accent: "#8E5C76",
    quoteMark: "#E1306C",
    border: "#F0D5E5",
    font: "inter",
    authorFont: "inter",
    brand: "instagram",
    defaultAlignment: "left"
  },
  "facebook-dark": {
    id: "facebook-dark",
    name: "Facebook Dark",
    quoteStyle: "chirp",
    background: "#0D1C2E",
    text: "#EAF2FF",
    accent: "#8AAED8",
    quoteMark: "#1877F2",
    border: "#284567",
    font: "inter",
    authorFont: "inter",
    brand: "facebook",
    defaultAlignment: "left"
  },
  "facebook-light": {
    id: "facebook-light",
    name: "Facebook Light",
    quoteStyle: "chirp",
    background: "#F4F8FF",
    text: "#10203A",
    accent: "#5F7DA6",
    quoteMark: "#1877F2",
    border: "#D6E3FA",
    font: "inter",
    authorFont: "inter",
    brand: "facebook",
    defaultAlignment: "left"
  },
  "editorial": {
    id: "editorial",
    name: "Editorial",
    quoteStyle: "editorial",
    background: "#FFFFF0",
    text: "#000000",
    accent: "#666666",
    quoteMark: "#000000",
    border: "#E5E7EB",
    font: "playfair",
    authorFont: "inter"
  },
  "breeze": {
    id: "breeze",
    name: "Breeze",
    quoteStyle: "breeze",
    backgroundImage: "linear-gradient(180deg, rgb(196, 213, 255), rgb(255, 255, 255))",
    background: "#AEC6FF",
    cardBackground: "#FFFFFFF2",
    text: "#374151",
    accent: "#666666",
    quoteMark: "#AEC6FF",
    border: "#AEC6FF",
    font: "old-standard",
    authorFont: "inter",
    defaultAlignment: "left"
  },
  "aura": {
    id: "aura",
    name: "Aura",
    quoteStyle: "aura",
    backgroundImage: "linear-gradient(0deg, rgba(162, 89, 255, 0.5), rgb(255, 135, 38))",
    background: "#FFFFFF",
    cardBackground: "#FFFFFF80",
    text: "#514437",
    accent: "#666666",
    quoteMark: "#FF943E99",
    border: "#FF943E99",
    font: "inter",
    authorFont: "inter"
  },
  "paper": {
    id: "paper",
    name: "Paper",
    quoteStyle: "paper",
    background: "#FFFFFF",
    backgroundImage: "url(/paper-texture-bg.jpg)",
    backgroundSize: "cover",
    text: "#3F3F46",
    accent: "#666666",
    quoteMark: "#A1A1A1",
    border: "#A1A1A1",
    font: "inter",
    authorFont: "inter",
    defaultAlignment: "left"
  },
  "noir": {
    id: "noir",
    name: "Noir",
    quoteStyle: "noir",
    background: "#000000",
    text: "#FFFFFF",
    accent: "#A0A0A0",
    quoteMark: "#FFCC00",
    border: "#FFCC00",
    font: "playfair",
    authorFont: "inter"
  },
  "glass": {
    id: "glass",
    name: "Glass",
    quoteStyle: "glass",
    backgroundImage: "linear-gradient(140deg, rgb(177, 177, 177), rgb(24, 24, 24))",
    background: "#000000",
    text: "#FFFFFF",
    accent: "#EDEDED",
    quoteMark: "#FFFFFF",
    border: "#EAEAEA",
    font: "old-standard",
    authorFont: "inter"
  },
  "claude-code": {
    id: "claude-code",
    name: "Claude code",
    quoteStyle: "claude-code",
    background: "#DE7356",
    cardBackground: "#1a1815",
    text: "#737568",
    accent: "#DE7356",
    quoteMark: "#DE7356",
    border: "#3d3d3d",
    font: "mono",
    defaultAlignment: "left"
  }
};
const PADDING_PRESETS = [32, 64, 96, 128];
const DEFAULT_QUOTE = "Writing doesn't just communicate ideas; it generates them. If you're bad at writing and don't like to do it, you'll miss out on most of the ideas writing would have generated.";
const DEFAULT_AUTHOR = "aashuu";
function createBase64HashStore(key, defaultValue) {
  const { subscribe, set } = writable(defaultValue);
  const setWithHash = (value) => {
    set(value);
  };
  const setSilent = (value) => {
    set(value);
  };
  return {
    subscribe,
    set: setWithHash,
    setSilent,
    update: (fn) => {
      const currentVal = get$2({ subscribe });
      setWithHash(fn(currentVal));
    }
  };
}
createBase64HashStore("quote", DEFAULT_QUOTE);
createBase64HashStore("author", DEFAULT_AUTHOR);
function createHashStore(key, defaultValue, serialize = String, deserialize = (s) => s) {
  const { subscribe, set, update } = writable(defaultValue);
  const setWithHash = (value) => {
    set(value);
  };
  return {
    subscribe,
    set: setWithHash,
    update: (fn) => {
      const currentVal = get$2({ subscribe });
      setWithHash(fn(currentVal));
    }
  };
}
const selectedThemeId = createHashStore(
  "theme",
  "editorial",
  (val) => val,
  (str) => str
);
const selectedTheme = derived(selectedThemeId, ($id) => THEMES[$id] || THEMES["editorial"]);
const alignment = createHashStore(
  "align",
  "center",
  (val) => val,
  (str) => str
);
const padding = createHashStore(
  "padding",
  64,
  (val) => String(val),
  (str) => parseInt(str, 10) || 64
);
const selectedFontId = createHashStore(
  "font",
  "",
  (val) => val,
  (str) => str
);
const currentFont = derived(
  [selectedFontId, selectedTheme],
  ([$fontId, $theme]) => $fontId || $theme.font
);
const currentFontCSS = derived(currentFont, ($font) => FONTS[$font].css);
const authorFontCSS = derived(
  selectedTheme,
  ($theme) => $theme.authorFont ? FONTS[$theme.authorFont].css : null
);
const showBackground = createHashStore(
  "bg",
  true,
  (val) => val ? "true" : "false",
  (str) => str === "true"
);
const showQuoteMarks = createHashStore(
  "marks",
  true,
  (val) => val ? "true" : "false",
  (str) => str === "true"
);
const frameWidth = createHashStore(
  "width",
  null,
  (val) => val === null ? "" : String(val),
  (str) => str === "" ? null : parseInt(str, 10) || null
);
const showBrandLogo = writable(true);
const showXVerifiedBadge = writable(false);
function Vercel_wordmark($$renderer, $$props) {
  let color = fallback($$props["color"], "currentColor");
  let size2 = fallback($$props["size"], 24);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 262 52"><path${attr("fill", color)} d="M59.8019 52L29.9019 0L0.00190544 52H59.8019ZM89.9593 49.6328L114.947 2.36365H104.139L86.9018 36.6921L69.6647 2.36365H58.8564L83.8442 49.6328H89.9593ZM260.25 2.36365V49.6329H251.302V2.36365H260.25ZM210.442 31.99C210.442 28.3062 211.211 25.0661 212.749 22.2699C214.287 19.4737 216.431 17.321 219.181 15.812C221.93 14.3029 225.146 13.5484 228.828 13.5484C232.09 13.5484 235.026 14.2585 237.636 15.6788C240.245 17.0991 242.319 19.2074 243.857 22.0036C245.395 24.7998 246.187 28.2174 246.234 32.2564V34.3202H219.88C220.066 37.2496 220.928 39.5576 222.466 41.2442C224.051 42.8864 226.171 43.7075 228.828 43.7075C230.505 43.7075 232.043 43.2637 233.441 42.376C234.839 41.4883 235.888 40.2899 236.587 38.7808L245.745 39.4466C244.626 42.7754 242.529 45.4385 239.453 47.4358C236.377 49.4331 232.835 50.4317 228.828 50.4317C225.146 50.4317 221.93 49.6772 219.181 48.1681C216.431 46.6591 214.287 44.5064 212.749 41.7102C211.211 38.914 210.442 35.6739 210.442 31.99ZM237.006 28.6612C236.68 25.7762 235.771 23.668 234.28 22.3365C232.789 20.9606 230.971 20.2726 228.828 20.2726C226.358 20.2726 224.354 21.0049 222.816 22.4696C221.278 23.9343 220.322 25.9982 219.95 28.6612H237.006ZM195.347 22.3365C196.838 23.5348 197.77 25.1993 198.143 27.3297L207.371 26.8637C207.044 24.1562 206.089 21.8039 204.505 19.8066C202.92 17.8093 200.869 16.278 198.353 15.2128C195.883 14.1032 193.157 13.5484 190.174 13.5484C186.492 13.5484 183.277 14.3029 180.527 15.812C177.777 17.321 175.634 19.4737 174.096 22.2699C172.558 25.0661 171.789 28.3062 171.789 31.99C171.789 35.6739 172.558 38.914 174.096 41.7102C175.634 44.5064 177.777 46.6591 180.527 48.1681C183.277 49.6772 186.492 50.4317 190.174 50.4317C193.25 50.4317 196.046 49.8769 198.563 48.7673C201.079 47.6133 203.13 45.9933 204.714 43.9072C206.299 41.8212 207.254 39.38 207.58 36.5838L198.283 36.1844C197.957 38.5367 197.048 40.3565 195.557 41.6436C194.065 42.8864 192.271 43.5078 190.174 43.5078C187.285 43.5078 185.048 42.5091 183.463 40.5118C181.879 38.5145 181.086 35.6739 181.086 31.99C181.086 28.3062 181.879 25.4656 183.463 23.4683C185.048 21.471 187.285 20.4723 190.174 20.4723C192.178 20.4723 193.902 21.0937 195.347 22.3365ZM149.955 14.3457H158.281L158.522 21.1369C159.113 19.2146 159.935 17.7218 160.988 16.6585C162.514 15.1166 164.642 14.3457 167.371 14.3457H170.771V21.6146H167.302C165.359 21.6146 163.763 21.8789 162.514 22.4075C161.311 22.9362 160.386 23.7732 159.739 24.9186C159.137 26.064 158.837 27.5178 158.837 29.2799V49.6328H149.955V14.3457ZM111.548 22.2699C110.01 25.0661 109.241 28.3062 109.241 31.99C109.241 35.6739 110.01 38.914 111.548 41.7102C113.086 44.5064 115.229 46.6591 117.979 48.1681C120.729 49.6772 123.944 50.4317 127.626 50.4317C131.634 50.4317 135.176 49.4331 138.252 47.4358C141.327 45.4385 143.425 42.7754 144.543 39.4466L135.385 38.7808C134.686 40.2899 133.638 41.4883 132.24 42.376C130.842 43.2637 129.304 43.7075 127.626 43.7075C124.97 43.7075 122.849 42.8864 121.265 41.2442C119.727 39.5576 118.865 37.2496 118.678 34.3202H145.032V32.2564C144.986 28.2174 144.194 24.7998 142.656 22.0036C141.118 19.2074 139.044 17.0991 136.434 15.6788C133.824 14.2585 130.888 13.5484 127.626 13.5484C123.944 13.5484 120.729 14.3029 117.979 15.812C115.229 17.321 113.086 19.4737 111.548 22.2699ZM133.079 22.3365C134.57 23.668 135.479 25.7762 135.805 28.6612H118.748C119.121 25.9982 120.076 23.9343 121.614 22.4696C123.152 21.0049 125.156 20.2726 127.626 20.2726C129.77 20.2726 131.587 20.9606 133.079 22.3365Z"></path></svg>`);
  bind_props($$props, { color, size: size2 });
}
function Peerlist_wordmark($$renderer, $$props) {
  let color = fallback($$props["color"], "currentColor");
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 62 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_14_193)"><path d="M7.9633 0C1.76962 0 0 1.77778 0 8C0 14.2222 1.77405 16 7.9633 16C14.1526 16 15.9266 14.2222 15.9266 8C15.9266 1.77778 14.1526 0 7.9633 0Z" fill="#00AA45"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.06123 2.07073C1.0203 3.11646 0.568807 4.90086 0.568807 8C0.568807 11.0989 1.02132 12.8834 2.0628 13.9292C3.10435 14.9751 4.88071 15.4286 7.9633 15.4286C11.0459 15.4286 12.8223 14.9751 13.8638 13.9292C14.9053 12.8834 15.3578 11.0989 15.3578 8C15.3578 4.90111 14.9053 3.11663 13.8638 2.07082C12.8223 1.02495 11.0459 0.571429 7.9633 0.571429C4.87838 0.571429 3.10216 1.025 2.06123 2.07073ZM0 8C0 1.77778 1.76962 0 7.9633 0C14.1526 0 15.9266 1.77778 15.9266 8C15.9266 14.2222 14.1526 16 7.9633 16C1.77405 16 0 14.2222 0 8Z" fill="#219653"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.70077 3.71423H4.26605V13.4285H6.93507V11.3968H7.70077C9.87748 11.3968 11.6605 9.68703 11.6605 7.55549C11.6605 5.42395 9.87748 3.71423 7.70077 3.71423ZM6.93507 8.7936V6.3174H7.70077C8.42386 6.3174 8.99153 6.88178 8.99153 7.55549C8.99153 8.22921 8.42386 8.7936 7.70077 8.7936H6.93507Z" fill="#24292E"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.11926 3.42859H8.26957C10.2994 3.42859 11.945 5.02047 11.945 6.98413C11.945 8.94782 10.2994 10.5397 8.26957 10.5397H7.21947V12.5714H5.11926V3.42859ZM7.21947 8.50796H8.26957C9.13951 8.50796 9.84474 7.82573 9.84474 6.98413C9.84474 6.14256 9.13951 5.46033 8.26957 5.46033H7.21947V8.50796Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.83487 3.14282H8.26958C10.4463 3.14282 12.2294 4.85254 12.2294 6.98408C12.2294 9.11562 10.4463 10.8254 8.26958 10.8254H7.50388V12.8571H4.83487V3.14282ZM5.40368 3.71425V12.2857H6.93508V10.2539H8.26958C10.1526 10.2539 11.6606 8.77991 11.6606 6.98408C11.6606 5.18828 10.1526 3.71425 8.26958 3.71425H5.40368ZM6.93508 5.17457H8.26958C9.28638 5.17457 10.1292 5.97465 10.1292 6.98408C10.1292 7.99354 9.28638 8.79362 8.26958 8.79362H6.93508V5.17457ZM7.50388 5.74599V8.22219H8.26958C8.99268 8.22219 9.56035 7.65779 9.56035 6.98408C9.56035 6.31037 8.99268 5.74599 8.26958 5.74599H7.50388Z" fill="#24292E"></path><path d="M26.767 7.03848C26.767 7.56253 26.6326 8.01605 26.3638 8.39902C26.0989 8.78199 25.7217 9.07828 25.2322 9.2879C24.7466 9.49753 24.1728 9.60236 23.5107 9.60236C23.0693 9.60236 22.666 9.55599 22.3009 9.46327C21.9357 9.37056 21.6167 9.23953 21.3438 9.07022L21.4281 8.53205C21.5725 8.63285 21.729 8.7175 21.8976 8.78602C22.0661 8.85053 22.2447 8.9009 22.4333 8.93719C22.6219 8.96945 22.8185 8.98556 23.0232 8.98556C23.3923 8.98556 23.7214 8.90899 24.0103 8.75579C24.2992 8.60259 24.5259 8.37685 24.6904 8.07853C24.855 7.78022 24.9372 7.41742 24.9372 6.9901C24.9372 6.49428 24.8389 6.06493 24.6423 5.70213C24.4497 5.3393 24.1768 5.05713 23.8237 4.85556C23.4706 4.65399 23.0553 4.55322 22.5777 4.55322H22.1022V11.4104C22.1022 11.499 22.1263 11.5756 22.1745 11.6401C22.2226 11.7006 22.2988 11.7389 22.4032 11.755L22.9269 11.8276C23.0272 11.8478 23.0994 11.882 23.1435 11.9304C23.1877 11.9788 23.2098 12.0493 23.2098 12.142C23.2098 12.2267 23.1796 12.2952 23.1195 12.3476C23.0633 12.396 22.973 12.4202 22.8486 12.4202H19.7066C19.5822 12.4202 19.4899 12.396 19.4297 12.3476C19.3695 12.2952 19.3394 12.2267 19.3394 12.142C19.3394 11.9888 19.4237 11.886 19.5923 11.8336L19.9414 11.755C20.0377 11.7268 20.1099 11.6845 20.158 11.628C20.2102 11.5716 20.2363 11.499 20.2363 11.4104V4.96442C20.2363 4.87573 20.2102 4.80316 20.158 4.74673C20.1099 4.69028 20.0377 4.64796 19.9414 4.61973L19.5923 4.54113C19.4237 4.48873 19.3394 4.38593 19.3394 4.23273C19.3394 4.14405 19.3695 4.07553 19.4297 4.02713C19.4899 3.97876 19.5822 3.95459 19.7066 3.95459H22.6259C23.5007 3.95459 24.247 4.08762 24.865 4.35368C25.483 4.6157 25.9545 4.98053 26.2795 5.44816C26.6045 5.91176 26.767 6.44185 26.767 7.03848Z"${attr("fill", color)}></path><path d="M32.5796 8.84646C32.5796 9.06012 32.5193 9.22537 32.399 9.34229C32.2784 9.45517 32.1021 9.5116 31.8691 9.5116H28.1133V9.05203H30.5751C30.7799 9.05203 30.882 8.95932 30.882 8.77389C30.882 8.24177 30.7858 7.83863 30.593 7.56452C30.4005 7.28634 30.1417 7.14729 29.8166 7.14729C29.5677 7.14729 29.347 7.22386 29.1545 7.37706C28.962 7.53026 28.8115 7.74995 28.7032 8.03617C28.5948 8.31835 28.5408 8.661 28.5408 9.06414C28.5408 9.84217 28.7211 10.4267 29.0823 10.8177C29.4474 11.2087 29.9329 11.4043 30.539 11.4043C30.8922 11.4043 31.2011 11.3337 31.4659 11.1926C31.7349 11.0515 31.9434 10.85 32.0918 10.5879C32.1641 10.5073 32.2204 10.4529 32.2605 10.4247C32.3046 10.3965 32.3486 10.3823 32.3927 10.3823C32.457 10.3823 32.5031 10.4126 32.5312 10.4731C32.5594 10.5295 32.5733 10.598 32.5733 10.6787C32.5574 11.0173 32.4371 11.3317 32.2124 11.6219C31.9875 11.9082 31.6846 12.1379 31.3035 12.3113C30.9221 12.4846 30.4847 12.5713 29.9912 12.5713C29.4093 12.5713 28.8937 12.4524 28.4444 12.2145C27.9949 11.9727 27.6418 11.6361 27.3849 11.2047C27.1321 10.7693 27.0058 10.2614 27.0058 9.68092C27.0058 9.0722 27.1261 8.532 27.3669 8.06034C27.6117 7.58869 27.9608 7.21983 28.4142 6.95377C28.8675 6.68772 29.4093 6.55469 30.0393 6.55469C30.5771 6.55469 31.0344 6.65346 31.4118 6.85097C31.7929 7.04449 32.0819 7.31457 32.2784 7.66126C32.4792 8.00392 32.5796 8.39897 32.5796 8.84646Z"${attr("fill", color)}></path><path d="M38.7574 8.84646C38.7574 9.06012 38.6974 9.22537 38.5771 9.34229C38.4565 9.45517 38.2799 9.5116 38.0472 9.5116H34.2914V9.05203H36.7532C36.9577 9.05203 37.0601 8.95932 37.0601 8.77389C37.0601 8.24177 36.964 7.83863 36.7711 7.56452C36.5786 7.28634 36.3198 7.14729 35.9947 7.14729C35.7459 7.14729 35.5252 7.22386 35.3326 7.37706C35.1401 7.53026 34.9896 7.74995 34.8813 8.03617C34.7729 8.31835 34.7186 8.661 34.7186 9.06414C34.7186 9.84217 34.8992 10.4267 35.2604 10.8177C35.6256 11.2087 36.111 11.4043 36.7171 11.4043C37.07 11.4043 37.3792 11.3337 37.644 11.1926C37.9127 11.0515 38.1215 10.85 38.2699 10.5879C38.3422 10.5073 38.3985 10.4529 38.4386 10.4247C38.4827 10.3965 38.5268 10.3823 38.5708 10.3823C38.6351 10.3823 38.6812 10.4126 38.7093 10.4731C38.7375 10.5295 38.7514 10.598 38.7514 10.6787C38.7355 11.0173 38.6152 11.3317 38.3902 11.6219C38.1656 11.9082 37.8627 12.1379 37.4816 12.3113C37.1002 12.4846 36.6628 12.5713 36.1693 12.5713C35.5874 12.5713 35.0718 12.4524 34.6225 12.2145C34.1731 11.9727 33.8199 11.6361 33.5631 11.2047C33.3102 10.7693 33.1839 10.2614 33.1839 9.68092C33.1839 9.0722 33.3042 8.532 33.5449 8.06034C33.7897 7.58869 34.139 7.21983 34.5923 6.95377C35.0456 6.68772 35.5874 6.55469 36.2174 6.55469C36.7552 6.55469 37.2125 6.65346 37.5899 6.85097C37.971 7.04449 38.26 7.31457 38.4565 7.66126C38.6573 8.00392 38.7574 8.39897 38.7574 8.84646Z"${attr("fill", color)}></path><path d="M41.5647 9.21532C41.5647 8.63077 41.6472 8.14097 41.8116 7.74592C41.9763 7.35086 42.193 7.05457 42.4618 6.85703C42.7305 6.65546 43.0195 6.55469 43.3286 6.55469C43.7097 6.55469 44.0046 6.66352 44.2134 6.88123C44.4219 7.09892 44.5262 7.41132 44.5262 7.81849C44.5262 8.18129 44.452 8.45137 44.3035 8.62877C44.1551 8.80614 43.9626 8.89483 43.7256 8.89483C43.485 8.89483 43.3025 8.83032 43.1779 8.70132C43.0536 8.57232 42.9913 8.39294 42.9913 8.16314V7.94546C42.9873 7.81646 42.9572 7.72172 42.9012 7.66126C42.8448 7.59677 42.7527 7.56452 42.6241 7.56452C42.4839 7.56452 42.3474 7.62297 42.2149 7.73986C42.0866 7.85677 41.9803 8.03414 41.8958 8.272C41.8156 8.50983 41.7755 8.8142 41.7755 9.18506L41.5647 9.21532ZM41.6794 6.97192L41.7755 8.34455V11.4466C41.7755 11.5635 41.7977 11.6502 41.8418 11.7066C41.8898 11.759 41.9743 11.7953 42.0946 11.8155L42.6122 11.8941C42.7046 11.9102 42.7726 11.9404 42.817 11.9848C42.865 12.0291 42.8892 12.0896 42.8892 12.1662C42.8892 12.2468 42.8591 12.3093 42.7988 12.3536C42.7427 12.398 42.6603 12.4201 42.5519 12.4201H39.7411C39.6288 12.4201 39.5463 12.398 39.4943 12.3536C39.4422 12.3093 39.4161 12.2488 39.4161 12.1722C39.4161 12.1117 39.434 12.0614 39.4701 12.0211C39.5062 11.9767 39.5625 11.9404 39.6388 11.9122L39.8734 11.8517C39.9456 11.8275 39.998 11.7872 40.0301 11.7308C40.0662 11.6703 40.0841 11.5776 40.0841 11.4526V7.99989C40.0841 7.89509 40.0682 7.82049 40.0361 7.77614C40.0079 7.7318 39.9599 7.7036 39.8916 7.69149L39.5725 7.66732C39.5003 7.65117 39.4482 7.62497 39.4161 7.58869C39.3839 7.55243 39.368 7.50606 39.368 7.44963C39.368 7.38109 39.3879 7.32666 39.428 7.28634C39.4681 7.24603 39.5404 7.20574 39.6447 7.16543L40.7403 6.76632C40.9368 6.68975 41.0813 6.64135 41.1737 6.6212C41.2658 6.597 41.3381 6.58492 41.3904 6.58492C41.4786 6.58492 41.5448 6.61515 41.5889 6.67563C41.633 6.73206 41.6631 6.83083 41.6794 6.97192Z"${attr("fill", color)}></path><path d="M47.3012 3.81547V11.4526C47.3012 11.5776 47.3174 11.6703 47.3495 11.7308C47.3856 11.7872 47.4397 11.8276 47.5119 11.8518L47.7406 11.9122C47.8168 11.9364 47.8731 11.9707 47.9092 12.015C47.9453 12.0553 47.9633 12.1077 47.9633 12.1722C47.9633 12.2488 47.9374 12.3093 47.885 12.3536C47.833 12.398 47.7488 12.4202 47.6322 12.4202H45.2609C45.1485 12.4202 45.0663 12.398 45.014 12.3536C44.9619 12.3093 44.9358 12.2488 44.9358 12.1722C44.9358 12.1118 44.9537 12.0614 44.9898 12.0211C45.0259 11.9767 45.0823 11.9404 45.1585 11.9122L45.3931 11.8518C45.4653 11.8235 45.5177 11.7812 45.5498 11.7248C45.5859 11.6683 45.6038 11.5776 45.6038 11.4526V4.83135C45.6038 4.73055 45.5879 4.65798 45.5558 4.61364C45.5276 4.5693 45.4796 4.5411 45.4113 4.52901L45.0922 4.50481C45.02 4.48464 44.9679 4.45644 44.9358 4.42015C44.9036 4.38387 44.8877 4.33752 44.8877 4.28107C44.8877 4.21658 44.9076 4.16418 44.9477 4.12387C44.9878 4.08355 45.0601 4.04324 45.1644 4.00292L46.2841 3.59172C46.4445 3.53127 46.5711 3.48892 46.6633 3.46475C46.7557 3.44055 46.8359 3.42847 46.9041 3.42847C47.0364 3.42847 47.1348 3.46475 47.1991 3.53732C47.267 3.60584 47.3012 3.69855 47.3012 3.81547Z"${attr("fill", color)}></path><path d="M50.9049 6.96587V11.4526C50.9049 11.5776 50.9208 11.6703 50.9529 11.7308C50.989 11.7872 51.0431 11.8276 51.1153 11.8518L51.3443 11.9122C51.4205 11.9364 51.4765 11.9707 51.5126 12.015C51.5487 12.0553 51.5669 12.1077 51.5669 12.1722C51.5669 12.2488 51.5408 12.3093 51.4887 12.3536C51.4364 12.398 51.3522 12.4202 51.2359 12.4202H48.8643C48.7519 12.4202 48.6697 12.398 48.6174 12.3536C48.5653 12.3093 48.5392 12.2488 48.5392 12.1722C48.5392 12.1118 48.5574 12.0614 48.5935 12.0211C48.6296 11.9767 48.6857 11.9404 48.7619 11.9122L48.9968 11.8518C49.069 11.8235 49.1211 11.7812 49.1532 11.7248C49.1893 11.6683 49.2072 11.5776 49.2072 11.4526V7.98782C49.2072 7.88299 49.1913 7.80842 49.1592 7.76407C49.131 7.71973 49.083 7.6915 49.0147 7.67942L48.6959 7.65522C48.6236 7.6391 48.5713 7.6129 48.5392 7.57662C48.507 7.54033 48.4911 7.49399 48.4911 7.43753C48.4911 7.36902 48.509 7.31459 48.5452 7.27427C48.5855 7.23396 48.6598 7.19365 48.7681 7.15333L49.8875 6.74216C50.044 6.6857 50.1685 6.64542 50.2607 6.62122C50.3571 6.59702 50.4373 6.58493 50.5016 6.58493C50.6378 6.58493 50.7382 6.62122 50.8025 6.69379C50.8707 6.7623 50.9049 6.85302 50.9049 6.96587ZM49.9237 5.65976C49.6026 5.65976 49.3438 5.57713 49.1472 5.41185C48.9547 5.24253 48.8583 5.02282 48.8583 4.75273C48.8583 4.48265 48.9547 4.26696 49.1472 4.10573C49.3438 3.94045 49.6026 3.85779 49.9237 3.85779C50.2487 3.85779 50.5075 3.94045 50.7001 4.10573C50.8969 4.26696 50.995 4.48265 50.995 4.75273C50.995 5.02282 50.8969 5.24253 50.7001 5.41185C50.5075 5.57713 50.2487 5.65976 49.9237 5.65976Z"${attr("fill", color)}></path><path d="M54.4727 7.09892C54.1957 7.09892 53.9792 7.16946 53.8225 7.31054C53.6701 7.4476 53.5939 7.62297 53.5939 7.83663C53.5939 7.96966 53.622 8.0906 53.6781 8.19943C53.7384 8.30423 53.8507 8.401 54.0154 8.48969C54.1798 8.57837 54.4206 8.661 54.7375 8.7376C55.3555 8.8666 55.833 9.02786 56.17 9.22134C56.507 9.41486 56.7419 9.63857 56.8742 9.89254C57.0067 10.1425 57.073 10.4227 57.073 10.7331C57.073 11.2934 56.8765 11.7409 56.4831 12.0755C56.0898 12.406 55.5182 12.5713 54.7676 12.5713C54.5028 12.5713 54.2861 12.5471 54.1175 12.4987C53.9491 12.4544 53.8106 12.4101 53.7022 12.3657C53.5939 12.3173 53.4975 12.2931 53.4133 12.2931C53.3291 12.2931 53.2589 12.3173 53.2025 12.3657C53.1505 12.4101 53.1004 12.4544 53.0521 12.4987C53.004 12.5471 52.9398 12.5713 52.8595 12.5713C52.7873 12.5713 52.7333 12.5511 52.6972 12.5108C52.661 12.4705 52.6269 12.3959 52.5948 12.2871L52.1975 11.0717C52.1534 10.9306 52.1392 10.8157 52.1554 10.727C52.1753 10.6383 52.2296 10.5759 52.3178 10.5396C52.4102 10.5073 52.4904 10.5093 52.5587 10.5456C52.6269 10.5779 52.6909 10.6403 52.7512 10.7331C52.9318 11.0475 53.1243 11.2995 53.3291 11.4889C53.5336 11.6744 53.7483 11.8094 53.973 11.8941C54.2019 11.9787 54.4346 12.0211 54.6712 12.0211C55.0165 12.0211 55.2733 11.9505 55.4417 11.8094C55.6143 11.6683 55.7005 11.4809 55.7005 11.2471C55.7005 11.1059 55.6646 10.979 55.5924 10.8661C55.5201 10.7492 55.3856 10.6444 55.1891 10.5517C54.9923 10.4549 54.7073 10.3642 54.3342 10.2795C53.8166 10.1667 53.4033 10.0215 53.0942 9.84417C52.7893 9.66277 52.5686 9.44509 52.4321 9.19112C52.2998 8.93714 52.2336 8.64286 52.2336 8.30829C52.2336 7.95754 52.3237 7.65117 52.5043 7.38914C52.6849 7.12712 52.9358 6.92354 53.2569 6.77843C53.578 6.62926 53.9491 6.55469 54.3703 6.55469C54.6433 6.55469 54.862 6.57889 55.0264 6.62726C55.1911 6.67563 55.3253 6.726 55.4297 6.77843C55.5381 6.8268 55.6365 6.85097 55.7246 6.85097C55.821 6.85097 55.8973 6.8268 55.9533 6.77843C56.0096 6.726 56.0636 6.67563 56.116 6.62726C56.168 6.57889 56.2323 6.55469 56.3085 6.55469C56.3688 6.55469 56.4189 6.57686 56.459 6.6212C56.503 6.66152 56.5352 6.73409 56.5554 6.83889L56.8503 7.99383C56.8785 8.143 56.8844 8.25989 56.8682 8.34455C56.8563 8.4292 56.8042 8.48969 56.7118 8.52597C56.6236 8.56223 56.5451 8.5582 56.4772 8.51386C56.4089 8.46952 56.3407 8.39092 56.2724 8.27803C56.0235 7.85072 55.7408 7.54837 55.4237 7.371C55.1106 7.1896 54.7938 7.09892 54.4727 7.09892Z"${attr("fill", color)}></path><path d="M58.0394 7.28641L57.7624 7.20176C57.6663 7.16953 57.598 7.13324 57.5579 7.09293C57.5178 7.04858 57.4976 6.99818 57.4976 6.94176C57.4976 6.86113 57.5238 6.80067 57.5758 6.76036C57.6321 6.71601 57.7064 6.69384 57.7985 6.69384H58.1657C58.2621 6.69384 58.3423 6.6757 58.4066 6.63941C58.4708 6.60313 58.5371 6.53864 58.6051 6.4459L59.2612 5.52073C59.3457 5.41593 59.4259 5.33933 59.5021 5.29096C59.5783 5.24258 59.6545 5.21838 59.7307 5.21838C59.8149 5.21838 59.8812 5.24461 59.9295 5.29701C59.9776 5.34941 60.0015 5.42601 60.0015 5.52678V10.6968C60.0015 10.979 60.0558 11.1947 60.1642 11.3439C60.2765 11.493 60.4309 11.5676 60.6278 11.5676C60.7762 11.5676 60.8905 11.5394 60.9707 11.483C61.0549 11.4225 61.1212 11.354 61.1693 11.2774C61.2176 11.2008 61.2637 11.1342 61.3078 11.0778C61.3558 11.0173 61.4161 10.9851 61.4884 10.9811C61.5486 10.9811 61.5947 11.0012 61.6269 11.0415C61.663 11.0818 61.6809 11.1484 61.6809 11.2411C61.6769 11.4708 61.6007 11.6845 61.4522 11.882C61.3078 12.0796 61.1053 12.2408 60.8442 12.3658C60.5834 12.4867 60.2865 12.5472 59.9534 12.5472C59.4398 12.5472 59.0365 12.4182 58.7436 12.1602C58.4546 11.8982 58.3101 11.5051 58.3101 10.9811V7.64318C58.3101 7.53838 58.2882 7.46178 58.2442 7.41341C58.2041 7.36101 58.1358 7.31867 58.0394 7.28641ZM59.3334 7.29247V6.69384H61.326C61.4181 6.69384 61.4903 6.71398 61.5424 6.7543C61.5987 6.79058 61.6269 6.84501 61.6269 6.91755C61.6269 7.02238 61.5745 7.11107 61.4702 7.18364C61.3661 7.25618 61.1974 7.29247 60.9648 7.29247H59.3334Z"${attr("fill", color)}></path></g><defs><clipPath id="clip0_14_193"><rect width="62" height="16" fill="white"></rect></clipPath></defs></svg>`);
  bind_props($$props, { color, size: size2 });
}
function Linkedin_logo_mark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 960 960" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><image href="/LinkedinLogoMark.png" width="960" height="960" preserveAspectRatio="xMidYMid meet"></image></svg>`);
  bind_props($$props, { size: size2 });
}
function Linkedin_wordmark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 64);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 3316 1076" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><image href="/LinkedinWordMark.png" width="3316" height="1076" preserveAspectRatio="xMidYMid meet"></image></svg>`);
  bind_props($$props, { size: size2 });
}
function Threads_logo_mark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 672 672" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><image href="/Threads.png" width="672" height="672" preserveAspectRatio="xMidYMid meet"></image></svg>`);
  bind_props($$props, { size: size2 });
}
function Pinterest_logo_mark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><image href="/Pinterest.png" width="512" height="512" preserveAspectRatio="xMidYMid meet"></image></svg>`);
  bind_props($$props, { size: size2 });
}
function Snapchat_logo_mark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 980 980" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><image href="/Snapchat.png" width="980" height="980" preserveAspectRatio="xMidYMid meet"></image></svg>`);
  bind_props($$props, { size: size2 });
}
function Whatsapp_logo_mark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 662 664" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><image href="/WhatsApp.png" width="662" height="664" preserveAspectRatio="xMidYMid meet"></image></svg>`);
  bind_props($$props, { size: size2 });
}
function Discord_logo_mark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 980 980" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><image href="/Discord.png" width="980" height="980" preserveAspectRatio="xMidYMid meet"></image></svg>`);
  bind_props($$props, { size: size2 });
}
function Sharechat_logo_mark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 316 316" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><image href="/ShareChat.png" width="316" height="316" preserveAspectRatio="xMidYMid meet"></image></svg>`);
  bind_props($$props, { size: size2 });
}
function Substack_logo_mark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><image href="/Substack.png" width="1000" height="1000" preserveAspectRatio="xMidYMid meet"></image></svg>`);
  bind_props($$props, { size: size2 });
}
function Telegram_logo_mark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 980 980" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><image href="/Telegram.png" width="980" height="980" preserveAspectRatio="xMidYMid meet"></image></svg>`);
  bind_props($$props, { size: size2 });
}
function Tiktok_logo_mark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 1097 1280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><image href="/TikTok.png" width="1097" height="1280" preserveAspectRatio="xMidYMid meet"></image></svg>`);
  bind_props($$props, { size: size2 });
}
function Instagram_logo_mark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 1280 1280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><image href="/Instagram.png" width="1280" height="1280" preserveAspectRatio="xMidYMid meet"></image></svg>`);
  bind_props($$props, { size: size2 });
}
function Facebook_logo_mark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 980 980" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><image href="/Facebook.png" width="980" height="980" preserveAspectRatio="xMidYMid meet"></image></svg>`);
  bind_props($$props, { size: size2 });
}
function X_logo_mark($$renderer, $$props) {
  let color = fallback($$props["color"], "currentColor");
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.117 5.081L11.4885 0H10.4525L6.657 4.412L3.6255 0H0.128998L4.713 6.6715L0.128998 12H1.165L5.173 7.341L8.3745 12H11.871L7.117 5.081ZM5.6985 6.7305L5.234 6.066L1.538 0.78H3.129L6.1115 5.046L6.576 5.7105L10.453 11.2555H8.862L5.6985 6.7305Z"${attr("fill", color)}></path></svg>`);
  bind_props($$props, { color, size: size2 });
}
function X_verified_badge($$renderer, $$props) {
  let color = fallback($$props["color"], "#1D9BF0");
  let size2 = fallback($$props["size"], 18);
  $$renderer.push(`<svg class="shrink-0"${attr("width", size2)}${attr("height", size2)} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20.396 11C20.378 10.354 20.181 9.725 19.826 9.184C19.472 8.644 18.974 8.212 18.388 7.938C18.611 7.331 18.658 6.674 18.528 6.041C18.397 5.407 18.091 4.823 17.646 4.354C17.176 3.909 16.593 3.604 15.959 3.472C15.326 3.342 14.669 3.389 14.062 3.612C13.789 3.025 13.358 2.526 12.817 2.172C12.276 1.818 11.647 1.62 11 1.604C10.354 1.621 9.727 1.817 9.187 2.172C8.647 2.527 8.218 3.026 7.947 3.612C7.339 3.389 6.68 3.34 6.045 3.472C5.41 3.602 4.825 3.908 4.355 4.354C3.91 4.824 3.606 5.409 3.477 6.042C3.347 6.675 3.397 7.332 3.621 7.938C3.034 8.212 2.534 8.643 2.178 9.183C1.822 9.723 1.623 10.353 1.604 11C1.624 11.647 1.822 12.276 2.178 12.817C2.534 13.357 3.034 13.789 3.621 14.062C3.397 14.668 3.347 15.325 3.477 15.958C3.607 16.592 3.91 17.176 4.354 17.646C4.824 18.089 5.408 18.393 6.041 18.524C6.674 18.656 7.331 18.608 7.938 18.388C8.212 18.974 8.643 19.472 9.184 19.827C9.724 20.181 10.354 20.378 11 20.396C11.647 20.38 12.276 20.183 12.817 19.829C13.358 19.475 13.789 18.975 14.062 18.389C14.666 18.628 15.328 18.685 15.965 18.553C16.601 18.421 17.185 18.106 17.645 17.646C18.105 17.186 18.421 16.602 18.553 15.965C18.685 15.328 18.628 14.666 18.388 14.062C18.974 13.788 19.472 13.357 19.827 12.816C20.181 12.276 20.378 11.646 20.396 11ZM9.662 14.85L6.233 11.422L7.526 10.12L9.598 12.192L13.998 7.398L15.345 8.644L9.662 14.85Z"${attr("fill", color)}></path></svg>`);
  bind_props($$props, { color, size: size2 });
}
function Quote_brutalist($$renderer, $$props) {
  let {
    color = "currentColor",
    size: size2 = 40,
    class: className,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$renderer.push(`<svg${attributes(
    {
      width: size2,
      height: size2,
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: clsx(className),
      ...rest
    },
    void 0,
    void 0,
    void 0,
    3
  )}><path d="M9.11227 7.04386L2.58066 20.1084V33.1729H15.6452V20.1084H9.11227L15.6452 7.04386H9.11227ZM37.4194 6.82709H30.8878L24.3549 19.8916V32.9561H37.4194V19.8916H30.8878L37.4194 6.82709Z"${attr("fill", color)}></path></svg>`);
}
function Quote_startup($$renderer, $$props) {
  let {
    color = "currentColor",
    size: size2 = 40,
    class: className,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$renderer.push(`<svg${attributes(
    {
      width: size2,
      height: size2,
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: clsx(className),
      ...rest
    },
    void 0,
    void 0,
    void 0,
    3
  )}><path d="M6.15166 10.4866C8.48999 7.95163 12.0283 6.66663 16.6667 6.66663H18.3333V11.365L16.9933 11.6333C14.71 12.09 13.1217 12.9883 12.2717 14.3066C11.8281 15.0168 11.5766 15.83 11.5417 16.6666H16.6667C17.1087 16.6666 17.5326 16.8422 17.8452 17.1548C18.1577 17.4673 18.3333 17.8913 18.3333 18.3333V30C18.3333 31.8383 16.8383 33.3333 15 33.3333H4.99999C4.55796 33.3333 4.13404 33.1577 3.82148 32.8451C3.50892 32.5326 3.33333 32.1087 3.33333 31.6666V23.3333L3.33833 18.4683C3.32333 18.2833 3.00666 13.9 6.15166 10.4866ZM33.3333 33.3333H23.3333C22.8913 33.3333 22.4674 33.1577 22.1548 32.8451C21.8423 32.5326 21.6667 32.1087 21.6667 31.6666V23.3333L21.6717 18.4683C21.6567 18.2833 21.34 13.9 24.485 10.4866C26.8233 7.95163 30.3617 6.66663 35 6.66663H36.6667V11.365L35.3267 11.6333C33.0433 12.09 31.455 12.9883 30.605 14.3066C30.1615 15.0168 29.9099 15.83 29.875 16.6666H35C35.442 16.6666 35.8659 16.8422 36.1785 17.1548C36.4911 17.4673 36.6667 17.8913 36.6667 18.3333V30C36.6667 31.8383 35.1717 33.3333 33.3333 33.3333Z"${attr("fill", color)}></path></svg>`);
}
function Quote_chirp($$renderer, $$props) {
  let {
    color = "currentColor",
    size: size2 = 40,
    class: className,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$renderer.push(`<svg${attributes(
    {
      width: size2,
      height: size2,
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: clsx(className),
      ...rest
    },
    void 0,
    void 0,
    void 0,
    3
  )}><path d="M14.5111 17.0749H10.1291L13.4969 12.7807C13.9523 12.2 13.902 11.3716 13.3807 10.8504L11.3033 8.77294C10.6814 8.151 9.65299 8.21681 9.11621 8.91487L5.90847 13.0852C3.91771 15.6733 2.83848 18.8471 2.83879 22.1123V28.7471C2.83879 30.3536 4.14073 31.6555 5.74718 31.6555H14.5098C16.1162 31.6555 17.4182 30.3536 17.4182 28.7471V19.9846C17.4194 18.3768 16.1175 17.0749 14.5111 17.0749ZM34.253 17.0749H29.8711L33.2388 12.7807C33.6943 12.2 33.644 11.3716 33.1227 10.8504L31.0452 8.77294C30.4233 8.151 29.3949 8.21681 28.8582 8.91487L25.6504 13.0852C23.6596 15.6733 22.5804 18.8471 22.5807 22.1123V28.7471C22.5807 30.3536 23.8827 31.6555 25.4891 31.6555H34.253C35.8594 31.6555 37.1614 30.3536 37.1614 28.7471V19.9846C37.1614 18.3768 35.8594 17.0749 34.253 17.0749Z"${attr("fill", color)}></path></svg>`);
}
function Quote_editorial($$renderer, $$props) {
  let {
    color = "currentColor",
    size: size2 = 40,
    class: className,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$renderer.push(`<svg${attributes(
    {
      width: size2,
      height: size2 * 29 / 40,
      viewBox: "0 0 40 29",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: clsx(className),
      ...rest
    },
    void 0,
    void 0,
    void 0,
    3
  )}><path d="M15.0225 15.7243C12.3947 13.2525 8.31954 12.7186 5.69977 15.0925C6.79979 11.2247 9.74602 7.28017 12.6746 4.45565C15.0949 2.12093 11.4298 -1.59014 9.01429 0.739687C3.12182 6.41975 -3.58761 17.1562 2.24374 25.1187C4.89567 28.7384 10.2253 30.371 14.0833 27.6184C17.8996 24.8951 18.514 19.0093 15.0225 15.7243ZM37.6982 15.7243C35.0704 13.2525 30.9952 12.7186 28.3755 15.0925C29.4755 11.2247 32.4217 7.28017 35.3503 4.45565C37.7706 2.12093 34.1055 -1.59014 31.69 0.739687C25.7975 6.42138 19.0881 17.1578 24.921 25.1187C27.573 28.7384 32.9026 30.371 36.7607 27.6184C40.5753 24.8951 41.1897 19.0093 37.6982 15.7243Z"${attr("fill", color)}></path></svg>`);
}
function Quote_breeze($$renderer, $$props) {
  let {
    color = "currentColor",
    size: size2 = 40,
    class: className,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$renderer.push(`<svg${attributes(
    {
      width: size2,
      height: size2 * 28 / 35,
      viewBox: "0 0 35 28",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: clsx(className),
      ...rest
    },
    void 0,
    void 0,
    void 0,
    3
  )}><path d="M7.45677 12.1032C6.68258 12.1032 5.98968 12.1394 5.36774 12.2065C6.40258 7.97161 8.88645 6.00516 12.5045 4.41935L10.5665 0C6.96387 1.58065 4.60516 3.39097 2.91613 5.87226C0.954839 8.75613 0 12.5458 0 17.4606V19.5845C0 23.6916 0.0141936 27.0168 7.45677 27.0168C14.9135 27.0168 14.9135 23.6787 14.9135 19.56C14.9135 15.4426 14.9613 12.1032 7.45677 12.1032ZM27.0697 12.1032C26.2955 12.1032 25.6026 12.1394 24.9806 12.2065C26.0155 7.97161 28.4994 6.00516 32.1174 4.41935L30.1794 0C26.5768 1.58065 24.2181 3.39097 22.529 5.87226C20.5677 8.75613 19.6129 12.5458 19.6129 17.4606V19.5845C19.6129 23.6916 19.6271 27.0168 27.0697 27.0168C34.5265 27.0168 34.5265 23.6787 34.5265 19.56C34.5265 15.4426 34.5742 12.1032 27.0697 12.1032Z"${attr("fill", color)}></path></svg>`);
}
function Quote_claude($$renderer, $$props) {
  let {
    color = "currentColor",
    size: size2 = 40,
    class: className,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$renderer.push(`<svg${attributes(
    {
      width: size2,
      height: size2 * 27 / 34,
      viewBox: "0 0 34 27",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: clsx(className),
      ...rest
    },
    void 0,
    void 0,
    void 0,
    3
  )}><path d="M10.1084 0L0 13.4787V26.9574H13.4774V13.4787H6.73806L13.9587 3.85161L10.1084 0ZM33.6594 3.85161L29.809 0L19.7006 13.4787V26.9574H33.1781V13.4787H26.4387L33.6594 3.85161Z"${attr("fill", color)}></path></svg>`);
}
function Quote_frame($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let theme, bg, bgImage, bgSize, textColor, accentColor, quoteMarkColor, borderColor, isGradient, hasBackgroundImage, alignmentClass, justifyClass, isChirpBrand, frameFontFamily, authorFontInline;
    let frameRef = fallback($$props["frameRef"], null);
    let editable = fallback($$props["editable"], true);
    theme = store_get($$store_subs ??= {}, "$selectedTheme", selectedTheme);
    bg = theme.background;
    bgImage = theme.backgroundImage || null;
    bgSize = theme.backgroundSize || "cover";
    textColor = theme.text;
    accentColor = theme.accent;
    quoteMarkColor = theme.quoteMark;
    borderColor = theme.border || "transparent";
    isGradient = bg.includes("gradient");
    hasBackgroundImage = !!bgImage && store_get($$store_subs ??= {}, "$showBackground", showBackground);
    alignmentClass = {
      left: "text-left items-start",
      center: "text-center items-center",
      right: "text-right items-end"
    }[store_get($$store_subs ??= {}, "$alignment", alignment)];
    justifyClass = {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end"
    }[store_get($$store_subs ??= {}, "$alignment", alignment)];
    isChirpBrand = theme.quoteStyle === "chirp" && !!theme.brand;
    frameFontFamily = isChirpBrand && !store_get($$store_subs ??= {}, "$selectedFontId", selectedFontId) ? "" : `font-family: ${store_get($$store_subs ??= {}, "$currentFontCSS", currentFontCSS)};`;
    authorFontInline = store_get($$store_subs ??= {}, "$authorFontCSS", authorFontCSS) && (!isChirpBrand || store_get($$store_subs ??= {}, "$selectedFontId", selectedFontId)) ? ` font-family: ${store_get($$store_subs ??= {}, "$authorFontCSS", authorFontCSS)}` : "";
    function auraOverlay($$renderer3) {
      if (store_get($$store_subs ??= {}, "$showBackground", showBackground)) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="absolute inset-0 z-0 pointer-events-none"><div class="absolute inset-0 bg-white/50"></div> <div class="absolute inset-0 bg-[linear-gradient(to_bottom,#A259FF_0%,#A259FF_65%,rgba(255,255,255,0.65)_100%)] opacity-60"></div> <div class="absolute inset-0 bg-[linear-gradient(to_bottom,#FF8726_0%,rgba(255,255,255,0.65)_100%)] opacity-60"></div> <div class="absolute inset-0 bg-[radial-gradient(circle_300px_at_50%_-15%,transparent_20%,white_70%,transparent_85%,white_100%)] opacity-50 mix-blend-soft-light"></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]-->`);
    }
    function editableQuote($$renderer3, extraClass = "") {
      $$renderer3.push(`<blockquote${attr_class(`${stringify(extraClass)} outline-none min-h-[1.5em] w-full`, "svelte-1btlh44")}${attr("contenteditable", editable)} data-placeholder="Enter your quote..."></blockquote>`);
    }
    function editableAuthor($$renderer3, extraClass = "", fieldColor = accentColor) {
      $$renderer3.push(`<cite${attr_class(`${stringify(extraClass)} outline-none min-h-[1.5em] not-italic whitespace-nowrap`, "svelte-1btlh44")}${attr_style(`color: ${stringify(fieldColor)};${stringify(authorFontInline)}`)}${attr("contenteditable", editable)} data-field="author" data-placeholder="Author" role="textbox" tabindex="0"></cite>`);
    }
    function quoteIcon($$renderer3, type) {
      if (store_get($$store_subs ??= {}, "$showQuoteMarks", showQuoteMarks)) {
        $$renderer3.push("<!--[0-->");
        if (type === "brutalist") {
          $$renderer3.push("<!--[0-->");
          Quote_brutalist($$renderer3, { color: quoteMarkColor, size: 40, class: "mb-8" });
        } else if (type === "startup") {
          $$renderer3.push("<!--[1-->");
          Quote_startup($$renderer3, { color: quoteMarkColor, size: 40, class: "mb-8 shrink-0" });
        } else if (type === "chirp") {
          $$renderer3.push("<!--[2-->");
          Quote_chirp($$renderer3, { color: quoteMarkColor, size: 40, class: "mb-4 shrink-0" });
        } else if (type === "editorial" || type === "noir") {
          $$renderer3.push("<!--[3-->");
          Quote_editorial($$renderer3, { color: quoteMarkColor, size: 40, class: "mb-8 shrink-0" });
        } else if (type === "breeze" || type === "aura" || type === "glass" || type === "paper") {
          $$renderer3.push("<!--[4-->");
          Quote_breeze($$renderer3, {
            color: quoteMarkColor,
            size: 40,
            class: "mb-4 md:mb-8 shrink-0"
          });
        } else if (type === "claude-code") {
          $$renderer3.push("<!--[5-->");
          Quote_claude($$renderer3, {
            color: quoteMarkColor,
            size: 40,
            class: "mb-4 md:mb-8 shrink-0"
          });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]-->`);
    }
    function quoteContent($$renderer3) {
      if (theme.quoteStyle === "brutalist") {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="relative z-10 flex w-full max-w-3xl mx-auto shadow-2xl p-4 md:p-8"${attr_style(`background-color: ${stringify(theme.cardBackground || bg)};`)}><div class="relative flex flex-col w-full"${attr_style(`border: 1px solid ${stringify(borderColor)};`)}><div class="absolute w-4 h-4 -top-2 -left-2 pointer-events-none"><div class="absolute top-1/2 left-0 w-full h-[0.5px] -translate-y-1/2"${attr_style(`background-color: ${stringify(accentColor)};`)}></div> <div class="absolute left-1/2 top-0 h-full w-[0.5px] -translate-x-1/2"${attr_style(`background-color: ${stringify(accentColor)};`)}></div></div> <div class="absolute w-4 h-4 -bottom-2 -right-2 pointer-events-none"><div class="absolute top-1/2 left-0 w-full h-[0.5px] -translate-y-1/2"${attr_style(`background-color: ${stringify(accentColor)};`)}></div> <div class="absolute left-1/2 top-0 h-full w-[0.5px] -translate-x-1/2"${attr_style(`background-color: ${stringify(accentColor)};`)}></div></div> <div${attr_class(`relative z-10 flex flex-col pt-2 px-2 pb-2 md:pt-10 md:px-10 md:pb-8 min-h-50 ${stringify(alignmentClass)}`, "svelte-1btlh44")}>`);
        quoteIcon($$renderer3, "brutalist");
        $$renderer3.push(`<!----> `);
        editableQuote($$renderer3, "text-xl md:text-2xl font-medium leading-snug");
        $$renderer3.push(`<!----></div> <div${attr_class(`relative z-10 flex items-center ${stringify(justifyClass)} px-10 min-h-14 py-4 mt-auto`, "svelte-1btlh44")}${attr_style(`border-top: 1px solid ${stringify(borderColor)};`)}>`);
        editableAuthor($$renderer3, "text-sm font-semibold tracking-widest");
        $$renderer3.push(`<!----> `);
        if (store_get($$store_subs ??= {}, "$showBrandLogo", showBrandLogo)) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<span class="mx-3 text-lg opacity-40 font-light"${attr_style(`color: ${stringify(accentColor)}`)}>|</span> `);
          Vercel_wordmark($$renderer3, { color: textColor, size: 60 });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (theme.quoteStyle === "startup") {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div${attr_class(`relative flex flex-col w-full max-w-2xl mx-auto p-2 md:p-8 ${stringify(alignmentClass)}`, "svelte-1btlh44")}${attr_style(`background-color: ${stringify(theme.background)};`)}>`);
        quoteIcon($$renderer3, "startup");
        $$renderer3.push(`<!----> `);
        editableQuote($$renderer3, "text-xl md:text-3xl font-normal leading-relaxed");
        $$renderer3.push(`<!----> <div class="w-full h-px mt-8 mb-6"${attr_style(`background-color: ${stringify(borderColor)};`)}></div> <div${attr_class(`flex items-center ${stringify(justifyClass)} h-8 w-full`, "svelte-1btlh44")}>`);
        editableAuthor($$renderer3, "text-sm font-medium tracking-wider mr-4");
        $$renderer3.push(`<!----> `);
        if (store_get($$store_subs ??= {}, "$showBrandLogo", showBrandLogo)) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<span class="mr-4 text-sm font-light opacity-50"${attr_style(`color: ${stringify(accentColor)}`)}>|</span> `);
          Peerlist_wordmark($$renderer3, { color: textColor, size: 60 });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (theme.quoteStyle === "chirp") {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div${attr_class(`relative flex flex-col w-full max-w-2xl mx-auto p-2 md:p-8 ${stringify(alignmentClass)}`, "svelte-1btlh44")}${attr_style(`background-color: ${stringify(theme.background)};`)}>`);
        quoteIcon($$renderer3, "chirp");
        $$renderer3.push(`<!----> `);
        editableQuote($$renderer3, "text-xl md:text-2xl font-normal leading-normal tracking-normal");
        $$renderer3.push(`<!----> <div class="w-full h-px mt-8 mb-6"${attr_style(`background-color: ${stringify(borderColor)};`)}></div> <div${attr_class(`flex items-center ${stringify(justifyClass)} h-8 w-full gap-1`, "svelte-1btlh44")}><div class="flex min-w-0 items-center gap-1 mr-2">`);
        editableAuthor($$renderer3, "text-sm font-medium tracking-wider");
        $$renderer3.push(`<!----> `);
        if (theme.brand === "x" && store_get($$store_subs ??= {}, "$showXVerifiedBadge", showXVerifiedBadge)) {
          $$renderer3.push("<!--[0-->");
          X_verified_badge($$renderer3, { color: quoteMarkColor, size: 18 });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div> `);
        if (store_get($$store_subs ??= {}, "$showBrandLogo", showBrandLogo)) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<span class="mr-2 text-sm font-light opacity-50"${attr_style(`color: ${stringify(accentColor)}`)}>|</span> `);
          if (theme.brand === "linkedin") {
            $$renderer3.push("<!--[0-->");
            if (theme.id === "linkedin-dark") {
              $$renderer3.push("<!--[0-->");
              Linkedin_logo_mark($$renderer3, { size: 16 });
            } else {
              $$renderer3.push("<!--[-1-->");
              Linkedin_wordmark($$renderer3, { size: 64 });
            }
            $$renderer3.push(`<!--]-->`);
          } else if (theme.brand === "threads") {
            $$renderer3.push("<!--[1-->");
            Threads_logo_mark($$renderer3, { size: 16 });
          } else if (theme.brand === "pinterest") {
            $$renderer3.push("<!--[2-->");
            Pinterest_logo_mark($$renderer3, { size: 16 });
          } else if (theme.brand === "snapchat") {
            $$renderer3.push("<!--[3-->");
            Snapchat_logo_mark($$renderer3, { size: 16 });
          } else if (theme.brand === "whatsapp") {
            $$renderer3.push("<!--[4-->");
            Whatsapp_logo_mark($$renderer3, { size: 16 });
          } else if (theme.brand === "discord") {
            $$renderer3.push("<!--[5-->");
            Discord_logo_mark($$renderer3, { size: 16 });
          } else if (theme.brand === "sharechat") {
            $$renderer3.push("<!--[6-->");
            Sharechat_logo_mark($$renderer3, { size: 16 });
          } else if (theme.brand === "substack") {
            $$renderer3.push("<!--[7-->");
            Substack_logo_mark($$renderer3, { size: 16 });
          } else if (theme.brand === "telegram") {
            $$renderer3.push("<!--[8-->");
            Telegram_logo_mark($$renderer3, { size: 16 });
          } else if (theme.brand === "tiktok") {
            $$renderer3.push("<!--[9-->");
            Tiktok_logo_mark($$renderer3, { size: 16 });
          } else if (theme.brand === "instagram") {
            $$renderer3.push("<!--[10-->");
            Instagram_logo_mark($$renderer3, { size: 16 });
          } else if (theme.brand === "facebook") {
            $$renderer3.push("<!--[11-->");
            Facebook_logo_mark($$renderer3, { size: 16 });
          } else {
            $$renderer3.push("<!--[-1-->");
            X_logo_mark($$renderer3, { color: textColor, size: 14 });
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (theme.quoteStyle === "editorial") {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div${attr_class(`relative flex flex-col w-full max-w-2xl mx-auto p-2 md:p-8 ${stringify(alignmentClass)}`, "svelte-1btlh44")}${attr_style(`background-color: ${stringify(theme.background)};`)}>`);
        quoteIcon($$renderer3, "editorial");
        $$renderer3.push(`<!----> `);
        editableQuote($$renderer3, "text-xl md:text-2xl font-normal italic leading-relaxed");
        $$renderer3.push(`<!----> <div class="w-full h-px mt-8 mb-6"${attr_style(`background-color: ${stringify(borderColor)};`)}></div> `);
        editableAuthor($$renderer3, "text-sm font-medium tracking-wider mr-4");
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (theme.quoteStyle === "breeze") {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div${attr_class(`relative z-10 flex flex-col w-full max-w-3xl mx-auto p-4 md:p-8 rounded-xl md:rounded-3xl card-shadow ${stringify(alignmentClass)}`, "svelte-1btlh44")}${attr_style(`background-color: ${stringify(theme.cardBackground || bg)};`)}><div class="relative z-10 flex flex-col min-h-50">`);
        quoteIcon($$renderer3, "breeze");
        $$renderer3.push(`<!----> `);
        editableQuote($$renderer3, "text-xl md:text-2xl lg:text-3xl font-medium leading-snug");
        $$renderer3.push(`<!----></div> <div class="w-full h-px mt-5 md:mt-10 mb-3 md:mb-6"${attr_style(`background-color: ${stringify(borderColor)};`)}></div> `);
        editableAuthor($$renderer3, "text-base font-medium tracking-wider mr-4");
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (theme.quoteStyle === "aura") {
        $$renderer3.push("<!--[0-->");
        auraOverlay($$renderer3);
        $$renderer3.push(`<!----> <div${attr_class(`relative z-10 flex flex-col w-full max-w-3xl mx-auto p-4 md:p-8 rounded-xl md:rounded-3xl card-shadow ${stringify(alignmentClass)}`, "svelte-1btlh44")}${attr_style(`background-color: ${stringify(theme.cardBackground || bg)};`)}><div class="relative z-10 flex flex-col min-h-50">`);
        quoteIcon($$renderer3, "aura");
        $$renderer3.push(`<!----> `);
        editableQuote($$renderer3, "text-xl md:text-2xl lg:text-3xl font-medium leading-snug");
        $$renderer3.push(`<!----></div> <div class="w-full h-px mt-5 md:mt-10 mb-3 md:mb-6"${attr_style(`background-color: ${stringify(borderColor)};`)}></div> `);
        editableAuthor($$renderer3, "text-sm font-semibold tracking-widest");
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (theme.quoteStyle === "paper") {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div${attr_class(`relative flex flex-col w-full max-w-2xl mx-auto p-2 md:p-8 ${stringify(alignmentClass)}`, "svelte-1btlh44")}>`);
        quoteIcon($$renderer3, "paper");
        $$renderer3.push(`<!----> `);
        editableQuote($$renderer3, "text-xl md:text-3xl font-medium italic leading-relaxed");
        $$renderer3.push(`<!----> <div class="w-full h-px mt-8 mb-6"${attr_style(`background-color: ${stringify(borderColor)};`)}></div> `);
        editableAuthor($$renderer3, "text-base font-medium tracking-wider mr-4");
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (theme.quoteStyle === "noir") {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div${attr_class(`relative flex flex-col w-full max-w-2xl mx-auto p-2 md:p-8 ${stringify(alignmentClass)}`, "svelte-1btlh44")}${attr_style(`background-color: ${stringify(theme.background)};`)}>`);
        quoteIcon($$renderer3, "noir");
        $$renderer3.push(`<!----> `);
        editableQuote($$renderer3, "text-xl md:text-2xl font-normal leading-relaxed");
        $$renderer3.push(`<!----> <div class="w-full h-px mt-8 mb-6"${attr_style(`background-color: ${stringify(borderColor)};`)}></div> `);
        editableAuthor($$renderer3, "text-sm font-medium tracking-wider mr-4");
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (theme.quoteStyle === "glass") {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div${attr_class(`relative z-10 flex flex-col w-full max-w-3xl mx-auto p-4 md:p-8 rounded-xl md:rounded-3xl glassmorphism ${stringify(alignmentClass)}`, "svelte-1btlh44")}><div class="relative z-10 flex flex-col min-h-50">`);
        quoteIcon($$renderer3, "glass");
        $$renderer3.push(`<!----> `);
        editableQuote($$renderer3, "text-xl md:text-2xl lg:text-3xl font-medium leading-snug");
        $$renderer3.push(`<!----></div> <div class="w-full h-px mt-5 md:mt-10 mb-3 md:mb-6"${attr_style(`background-color: ${stringify(borderColor)};`)}></div> `);
        editableAuthor($$renderer3, "text-base font-medium tracking-wider mr-4");
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (theme.quoteStyle === "claude-code") {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="relative z-10 flex flex-col w-full max-w-3xl mx-auto rounded-md md:rounded-lg card-shadow overflow-hidden"${attr_style(`background-color: ${stringify(theme.cardBackground || bg)};`)}><div class="flex items-center gap-2 px-4 h-9 shrink-0" style="background-color: #2d2d2d;" aria-hidden="true"><div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div> <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div> <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div></div> <div class="flex flex-col p-4 md:p-6"><div${attr_class(`relative z-10 flex flex-col min-h-50 ${stringify(alignmentClass)}`, "svelte-1btlh44")}>`);
        quoteIcon($$renderer3, "claude-code");
        $$renderer3.push(`<!----> `);
        editableQuote($$renderer3, "text-xl md:text-2xl font-light leading-snug");
        $$renderer3.push(`<!----></div> <div class="w-full h-[0.5px] mt-6 mb-3"${attr_style(`background-color: ${stringify(borderColor)};`)}></div> <div class="flex items-center h-8 w-full"><span class="mr-3 font-bold text-lg select-none"${attr_style(`color: ${stringify(accentColor)}`)}>></span> `);
        editableAuthor($$renderer3, "text-base font-medium tracking-wider mr-4");
        $$renderer3.push(`<!----></div> <div class="w-full h-[0.5px] mt-3"${attr_style(`background-color: ${stringify(borderColor)};`)}></div></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]-->`);
    }
    $$renderer2.push(`<div${attr_class("quote-frame quote-card svelte-1btlh44", void 0, { "style-x": isChirpBrand })}${attr_style(` padding: ${stringify(store_get($$store_subs ??= {}, "$padding", padding))}px; ${stringify(hasBackgroundImage ? `background-color: ${bg}; background-image: ${bgImage}; background-size: ${bgSize}; background-position: center;` : isGradient ? `background: ${store_get($$store_subs ??= {}, "$showBackground", showBackground) ? bg : "transparent"}` : `background-color: ${store_get($$store_subs ??= {}, "$showBackground", showBackground) ? bg : "transparent"}`)}; ${stringify(frameFontFamily)} `)}>`);
    if (!store_get($$store_subs ??= {}, "$showBackground", showBackground)) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="transparent-pattern absolute inset-0" data-ignore-in-export=""></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="quote-content svelte-1btlh44"${attr_style(`color: ${stringify(textColor)}`)}>`);
    quoteContent($$renderer2);
    $$renderer2.push(`<!----></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { frameRef, editable });
  });
}
function isFunction$1(value) {
  return typeof value === "function";
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
const CLASS_VALUE_PRIMITIVE_TYPES = ["string", "number", "bigint", "boolean"];
function isClassValue(value) {
  if (value === null || value === void 0)
    return true;
  if (CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof value))
    return true;
  if (Array.isArray(value))
    return value.every((item) => isClassValue(item));
  if (typeof value === "object") {
    if (Object.getPrototypeOf(value) !== Object.prototype)
      return false;
    return true;
  }
  return false;
}
const BoxSymbol = Symbol("box");
const isWritableSymbol = Symbol("is-writable");
function boxWith(getter, setter) {
  const derived2 = derived$1(getter);
  if (setter) {
    return {
      [BoxSymbol]: true,
      [isWritableSymbol]: true,
      get current() {
        return derived2();
      },
      set current(v) {
        setter(v);
      }
    };
  }
  return {
    [BoxSymbol]: true,
    get current() {
      return getter();
    }
  };
}
function isBox(value) {
  return isObject(value) && BoxSymbol in value;
}
function boxFrom(value) {
  if (isBox(value)) return value;
  if (isFunction$1(value)) return boxWith(value);
  return simpleBox(value);
}
function simpleBox(initialValue) {
  let current = initialValue;
  return {
    [BoxSymbol]: true,
    [isWritableSymbol]: true,
    get current() {
      return current;
    },
    set current(v) {
      current = v;
    }
  };
}
function composeHandlers(...handlers) {
  return function(e) {
    for (const handler of handlers) {
      if (!handler)
        continue;
      if (e.defaultPrevented)
        return;
      if (typeof handler === "function") {
        handler.call(this, e);
      } else {
        handler.current?.call(this, e);
      }
    }
  };
}
const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char))
    return void 0;
  return char !== char.toLowerCase();
}
function splitByCase(str) {
  const parts = [];
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = STR_SPLITTERS.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function pascalCase(str) {
  if (!str)
    return "";
  return splitByCase(str).map((p) => upperFirst(p)).join("");
}
function camelCase(str) {
  return lowerFirst(pascalCase(str || ""));
}
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
  return str ? str[0].toLowerCase() + str.slice(1) : "";
}
function cssToStyleObj(css) {
  if (!css)
    return {};
  const styleObj = {};
  function iterator(name, value) {
    if (name.startsWith("-moz-") || name.startsWith("-webkit-") || name.startsWith("-ms-") || name.startsWith("-o-")) {
      styleObj[pascalCase(name)] = value;
      return;
    }
    if (name.startsWith("--")) {
      styleObj[name] = value;
      return;
    }
    styleObj[camelCase(name)] = value;
  }
  parse(css, iterator);
  return styleObj;
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function createParser(matcher, replacer) {
  const regex = RegExp(matcher, "g");
  return (str) => {
    if (typeof str !== "string") {
      throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
    }
    if (!str.match(regex))
      return str;
    return str.replace(regex, replacer);
  };
}
const camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS(styleObj) {
  if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) {
    throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
  }
  return Object.keys(styleObj).map((property) => `${camelToKebab(property)}: ${styleObj[property]};`).join("\n");
}
function styleToString(style = {}) {
  return styleToCSS(style).replace("\n", " ");
}
const EVENT_LIST = [
  "onabort",
  "onanimationcancel",
  "onanimationend",
  "onanimationiteration",
  "onanimationstart",
  "onauxclick",
  "onbeforeinput",
  "onbeforetoggle",
  "onblur",
  "oncancel",
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "onclose",
  "oncompositionend",
  "oncompositionstart",
  "oncompositionupdate",
  "oncontextlost",
  "oncontextmenu",
  "oncontextrestored",
  "oncopy",
  "oncuechange",
  "oncut",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "ondurationchange",
  "onemptied",
  "onended",
  "onerror",
  "onfocus",
  "onfocusin",
  "onfocusout",
  "onformdata",
  "ongotpointercapture",
  "oninput",
  "oninvalid",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onload",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onlostpointercapture",
  "onmousedown",
  "onmouseenter",
  "onmouseleave",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onpaste",
  "onpause",
  "onplay",
  "onplaying",
  "onpointercancel",
  "onpointerdown",
  "onpointerenter",
  "onpointerleave",
  "onpointermove",
  "onpointerout",
  "onpointerover",
  "onpointerup",
  "onprogress",
  "onratechange",
  "onreset",
  "onresize",
  "onscroll",
  "onscrollend",
  "onsecuritypolicyviolation",
  "onseeked",
  "onseeking",
  "onselect",
  "onselectionchange",
  "onselectstart",
  "onslotchange",
  "onstalled",
  "onsubmit",
  "onsuspend",
  "ontimeupdate",
  "ontoggle",
  "ontouchcancel",
  "ontouchend",
  "ontouchmove",
  "ontouchstart",
  "ontransitioncancel",
  "ontransitionend",
  "ontransitionrun",
  "ontransitionstart",
  "onvolumechange",
  "onwaiting",
  "onwebkitanimationend",
  "onwebkitanimationiteration",
  "onwebkitanimationstart",
  "onwebkittransitionend",
  "onwheel"
];
const EVENT_LIST_SET = new Set(EVENT_LIST);
function isEventHandler(key) {
  return EVENT_LIST_SET.has(key);
}
function mergeProps(...args) {
  const result = { ...args[0] };
  for (let i = 1; i < args.length; i++) {
    const props = args[i];
    if (!props)
      continue;
    for (const key of Object.keys(props)) {
      const a = result[key];
      const b = props[key];
      const aIsFunction = typeof a === "function";
      const bIsFunction = typeof b === "function";
      if (aIsFunction && typeof bIsFunction && isEventHandler(key)) {
        const aHandler = a;
        const bHandler = b;
        result[key] = composeHandlers(aHandler, bHandler);
      } else if (aIsFunction && bIsFunction) {
        result[key] = executeCallbacks(a, b);
      } else if (key === "class") {
        const aIsClassValue = isClassValue(a);
        const bIsClassValue = isClassValue(b);
        if (aIsClassValue && bIsClassValue) {
          result[key] = clsx$1(a, b);
        } else if (aIsClassValue) {
          result[key] = clsx$1(a);
        } else if (bIsClassValue) {
          result[key] = clsx$1(b);
        }
      } else if (key === "style") {
        const aIsObject = typeof a === "object";
        const bIsObject = typeof b === "object";
        const aIsString = typeof a === "string";
        const bIsString = typeof b === "string";
        if (aIsObject && bIsObject) {
          result[key] = { ...a, ...b };
        } else if (aIsObject && bIsString) {
          const parsedStyle = cssToStyleObj(b);
          result[key] = { ...a, ...parsedStyle };
        } else if (aIsString && bIsObject) {
          const parsedStyle = cssToStyleObj(a);
          result[key] = { ...parsedStyle, ...b };
        } else if (aIsString && bIsString) {
          const parsedStyleA = cssToStyleObj(a);
          const parsedStyleB = cssToStyleObj(b);
          result[key] = { ...parsedStyleA, ...parsedStyleB };
        } else if (aIsObject) {
          result[key] = a;
        } else if (bIsObject) {
          result[key] = b;
        } else if (aIsString) {
          result[key] = a;
        } else if (bIsString) {
          result[key] = b;
        }
      } else {
        result[key] = b !== void 0 ? b : a;
      }
    }
    for (const key of Object.getOwnPropertySymbols(props)) {
      const a = result[key];
      const b = props[key];
      result[key] = b !== void 0 ? b : a;
    }
  }
  if (typeof result.style === "object") {
    result.style = styleToString(result.style).replaceAll("\n", " ");
  }
  if (result.hidden === false) {
    result.hidden = void 0;
    delete result.hidden;
  }
  if (result.disabled === false) {
    result.disabled = void 0;
    delete result.disabled;
  }
  return result;
}
const srOnlyStyles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
const srOnlyStylesString = styleToString(srOnlyStyles);
const defaultWindow = void 0;
function getActiveElement$1(document2) {
  let activeElement = document2.activeElement;
  while (activeElement?.shadowRoot) {
    const node = activeElement.shadowRoot.activeElement;
    if (node === activeElement)
      break;
    else
      activeElement = node;
  }
  return activeElement;
}
const SvelteMap = globalThis.Map;
function createSubscriber(_) {
  return () => {
  };
}
class ActiveElement {
  #document;
  #subscribe;
  constructor(options = {}) {
    const { window: window2 = defaultWindow, document: document2 = window2?.document } = options;
    if (window2 === void 0) return;
    this.#document = document2;
    this.#subscribe = createSubscriber();
  }
  get current() {
    this.#subscribe?.();
    if (!this.#document) return null;
    return getActiveElement$1(this.#document);
  }
}
new ActiveElement();
function isFunction(value) {
  return typeof value === "function";
}
class Context {
  #name;
  #key;
  /**
   * @param name The name of the context.
   * This is used for generating the context key and error messages.
   */
  constructor(name) {
    this.#name = name;
    this.#key = Symbol(name);
  }
  /**
   * The key used to get and set the context.
   *
   * It is not recommended to use this value directly.
   * Instead, use the methods provided by this class.
   */
  get key() {
    return this.#key;
  }
  /**
   * Checks whether this has been set in the context of a parent component.
   *
   * Must be called during component initialisation.
   */
  exists() {
    return hasContext(this.#key);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const context = getContext(this.#key);
    if (context === void 0) {
      throw new Error(`Context "${this.#name}" not found`);
    }
    return context;
  }
  /**
   * Retrieves the context that belongs to the closest parent component,
   * or the given fallback value if the context does not exist.
   *
   * Must be called during component initialisation.
   */
  getOr(fallback2) {
    const context = getContext(this.#key);
    if (context === void 0) {
      return fallback2;
    }
    return context;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(context) {
    return setContext(this.#key, context);
  }
}
function runWatcher(sources, flush, effect, options = {}) {
  const { lazy = false } = options;
}
function watch(sources, effect, options) {
  runWatcher(sources, "post", effect, options);
}
function watchPre(sources, effect, options) {
  runWatcher(sources, "pre", effect, options);
}
watch.pre = watchPre;
function get$1(value) {
  if (isFunction(value)) {
    return value();
  }
  return value;
}
class ElementSize {
  // no need to use `$state` here since we are using createSubscriber
  #size = { width: 0, height: 0 };
  #observed = false;
  #options;
  #node;
  #window;
  // we use a derived here to extract the width so that if the width doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #width = derived$1(() => {
    this.#subscribe()?.();
    return this.getSize().width;
  });
  // we use a derived here to extract the height so that if the height doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #height = derived$1(() => {
    this.#subscribe()?.();
    return this.getSize().height;
  });
  // we need to use a derived here because the class will be created before the node is bound to the ref
  #subscribe = derived$1(() => {
    const node$ = get$1(this.#node);
    if (!node$) return;
    return createSubscriber();
  });
  constructor(node, options = { box: "border-box" }) {
    this.#window = options.window ?? defaultWindow;
    this.#options = options;
    this.#node = node;
    this.#size = { width: 0, height: 0 };
  }
  calculateSize() {
    const element = get$1(this.#node);
    if (!element || !this.#window) {
      return;
    }
    const offsetWidth = element.offsetWidth;
    const offsetHeight = element.offsetHeight;
    if (this.#options.box === "border-box") {
      return { width: offsetWidth, height: offsetHeight };
    }
    const style = this.#window.getComputedStyle(element);
    const paddingWidth = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    const borderWidth = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
    const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    const contentWidth = offsetWidth - paddingWidth - borderWidth;
    const contentHeight = offsetHeight - paddingHeight - borderHeight;
    return { width: contentWidth, height: contentHeight };
  }
  getSize() {
    return this.#observed ? this.#size : this.calculateSize() ?? this.#size;
  }
  get current() {
    this.#subscribe()?.();
    return this.getSize();
  }
  get width() {
    return this.#width();
  }
  get height() {
    return this.#height();
  }
}
class Previous {
  #previousCallback = () => void 0;
  #previous = derived$1(() => this.#previousCallback());
  constructor(getter, initialValue) {
    let actualPrevious = void 0;
    if (initialValue !== void 0) actualPrevious = initialValue;
    this.#previousCallback = () => {
      try {
        return actualPrevious;
      } finally {
        actualPrevious = getter();
      }
    };
  }
  get current() {
    return this.#previous();
  }
}
function afterSleep(ms, cb) {
  return setTimeout(cb, ms);
}
function afterTick(fn) {
  tick().then(fn);
}
const ELEMENT_NODE = 1;
const DOCUMENT_NODE = 9;
const DOCUMENT_FRAGMENT_NODE = 11;
function isHTMLElement$1(node) {
  return isObject(node) && node.nodeType === ELEMENT_NODE && typeof node.nodeName === "string";
}
function isDocument(node) {
  return isObject(node) && node.nodeType === DOCUMENT_NODE;
}
function isWindow(node) {
  return isObject(node) && node.constructor?.name === "VisualViewport";
}
function isNode(node) {
  return isObject(node) && node.nodeType !== void 0;
}
function isShadowRoot(node) {
  return isNode(node) && node.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in node;
}
function contains(parent, child) {
  if (!parent || !child)
    return false;
  if (!isHTMLElement$1(parent) || !isHTMLElement$1(child))
    return false;
  const rootNode = child.getRootNode?.();
  if (parent === child)
    return true;
  if (parent.contains(child))
    return true;
  if (rootNode && isShadowRoot(rootNode)) {
    let next2 = child;
    while (next2) {
      if (parent === next2)
        return true;
      next2 = next2.parentNode || next2.host;
    }
  }
  return false;
}
function getDocument(node) {
  if (isDocument(node))
    return node;
  if (isWindow(node))
    return node.document;
  return node?.ownerDocument ?? document;
}
function getWindow(node) {
  if (isShadowRoot(node))
    return getWindow(node.host);
  if (isDocument(node))
    return node.defaultView ?? window;
  if (isHTMLElement$1(node))
    return node.ownerDocument?.defaultView ?? window;
  return window;
}
function getActiveElement(rootNode) {
  let activeElement = rootNode.activeElement;
  while (activeElement?.shadowRoot) {
    const el = activeElement.shadowRoot.activeElement;
    if (el === activeElement)
      break;
    else
      activeElement = el;
  }
  return activeElement;
}
class DOMContext {
  element;
  #root = derived$1(() => {
    if (!this.element.current) return document;
    const rootNode = this.element.current.getRootNode() ?? document;
    return rootNode;
  });
  get root() {
    return this.#root();
  }
  set root($$value) {
    return this.#root($$value);
  }
  constructor(element) {
    if (typeof element === "function") {
      this.element = boxWith(element);
    } else {
      this.element = element;
    }
  }
  getDocument = () => {
    return getDocument(this.root);
  };
  getWindow = () => {
    return this.getDocument().defaultView ?? window;
  };
  getActiveElement = () => {
    return getActiveElement(this.root);
  };
  isActiveElement = (node) => {
    return node === this.getActiveElement();
  };
  getElementById(id) {
    return this.root.getElementById(id);
  }
  querySelector = (selector) => {
    if (!this.root) return null;
    return this.root.querySelector(selector);
  };
  querySelectorAll = (selector) => {
    if (!this.root) return [];
    return this.root.querySelectorAll(selector);
  };
  setTimeout = (callback, delay) => {
    return this.getWindow().setTimeout(callback, delay);
  };
  clearTimeout = (timeoutId) => {
    return this.getWindow().clearTimeout(timeoutId);
  };
}
function attachRef(ref, onChange) {
  return {
    [createAttachmentKey()]: (node) => {
      if (isBox(ref)) {
        ref.current = node;
        run(() => onChange?.(node));
        return () => {
          if ("isConnected" in node && node.isConnected)
            return;
          ref.current = null;
          onChange?.(null);
        };
      }
      ref(node);
      run(() => onChange?.(node));
      return () => {
        if ("isConnected" in node && node.isConnected)
          return;
        ref(null);
        onChange?.(null);
      };
    }
  };
}
function boolToStr(condition) {
  return condition ? "true" : "false";
}
function boolToEmptyStrOrUndef(condition) {
  return condition ? "" : void 0;
}
function boolToTrueOrUndef(condition) {
  return condition ? true : void 0;
}
function getDataOpenClosed(condition) {
  return condition ? "open" : "closed";
}
class BitsAttrs {
  #variant;
  #prefix;
  attrs;
  constructor(config) {
    this.#variant = config.getVariant ? config.getVariant() : null;
    this.#prefix = this.#variant ? `data-${this.#variant}-` : `data-${config.component}-`;
    this.getAttr = this.getAttr.bind(this);
    this.selector = this.selector.bind(this);
    this.attrs = Object.fromEntries(config.parts.map((part) => [part, this.getAttr(part)]));
  }
  getAttr(part, variantOverride) {
    if (variantOverride)
      return `data-${variantOverride}-${part}`;
    return `${this.#prefix}${part}`;
  }
  selector(part, variantOverride) {
    return `[${this.getAttr(part, variantOverride)}]`;
  }
}
function createBitsAttrs(config) {
  const bitsAttrs = new BitsAttrs(config);
  return {
    ...bitsAttrs.attrs,
    selector: bitsAttrs.selector,
    getAttr: bitsAttrs.getAttr
  };
}
const ARROW_DOWN = "ArrowDown";
const ARROW_UP = "ArrowUp";
const END = "End";
const ENTER = "Enter";
const ESCAPE = "Escape";
const HOME = "Home";
const PAGE_DOWN = "PageDown";
const PAGE_UP = "PageUp";
const SPACE = " ";
const TAB = "Tab";
const isBrowser = typeof document !== "undefined";
const isIOS = getIsIOS();
function getIsIOS() {
  return isBrowser && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function isHTMLElement(element) {
  return element instanceof HTMLElement;
}
function isElementOrSVGElement(element) {
  return element instanceof Element || element instanceof SVGElement;
}
function isNotNull(value) {
  return value !== null;
}
class AnimationsComplete {
  #opts;
  #currentFrame = null;
  constructor(opts) {
    this.#opts = opts;
  }
  #cleanup() {
    if (!this.#currentFrame)
      return;
    window.cancelAnimationFrame(this.#currentFrame);
    this.#currentFrame = null;
  }
  run(fn) {
    this.#cleanup();
    const node = this.#opts.ref.current;
    if (!node)
      return;
    if (typeof node.getAnimations !== "function") {
      this.#executeCallback(fn);
      return;
    }
    this.#currentFrame = window.requestAnimationFrame(() => {
      const animations = node.getAnimations();
      if (animations.length === 0) {
        this.#executeCallback(fn);
        return;
      }
      Promise.allSettled(animations.map((animation) => animation.finished)).then(() => {
        this.#executeCallback(fn);
      });
    });
  }
  #executeCallback(fn) {
    const execute = () => {
      fn();
    };
    if (this.#opts.afterTick) {
      afterTick(execute);
    } else {
      execute();
    }
  }
}
class PresenceManager {
  #opts;
  #enabled;
  #afterAnimations;
  #shouldRender = false;
  constructor(opts) {
    this.#opts = opts;
    this.#shouldRender = opts.open.current;
    this.#enabled = opts.enabled ?? true;
    this.#afterAnimations = new AnimationsComplete({ ref: this.#opts.ref, afterTick: this.#opts.open });
    watch(() => this.#opts.open.current, (isOpen) => {
      if (isOpen) this.#shouldRender = true;
      if (!this.#enabled) return;
      this.#afterAnimations.run(() => {
        if (isOpen === this.#opts.open.current) {
          if (!this.#opts.open.current) {
            this.#shouldRender = false;
          }
          this.#opts.onComplete?.();
        }
      });
    });
  }
  get shouldRender() {
    return this.#shouldRender;
  }
}
function noop() {
}
function createId(prefixOrUid, uid) {
  return `bits-${prefixOrUid}`;
}
const BitsConfigContext = new Context("BitsConfig");
function getBitsConfig() {
  const fallback2 = new BitsConfigState(null, {});
  return BitsConfigContext.getOr(fallback2).opts;
}
class BitsConfigState {
  opts;
  constructor(parent, opts) {
    const resolveConfigOption = createConfigResolver(parent, opts);
    this.opts = {
      defaultPortalTo: resolveConfigOption((config) => config.defaultPortalTo),
      defaultLocale: resolveConfigOption((config) => config.defaultLocale)
    };
  }
}
function createConfigResolver(parent, currentOpts) {
  return (getter) => {
    const configOption = boxWith(() => {
      const value = getter(currentOpts)?.current;
      if (value !== void 0)
        return value;
      if (parent === null)
        return void 0;
      return getter(parent.opts)?.current;
    });
    return configOption;
  };
}
function createPropResolver(configOption, fallback2) {
  return (getProp) => {
    const config = getBitsConfig();
    return boxWith(() => {
      const propValue = getProp();
      if (propValue !== void 0)
        return propValue;
      const option = configOption(config).current;
      if (option !== void 0)
        return option;
      return fallback2;
    });
  };
}
const resolvePortalToProp = createPropResolver((config) => config.defaultPortalTo, "body");
function Portal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { to: toProp, children, disabled } = $$props;
    const to = resolvePortalToProp(() => toProp);
    getAllContexts();
    let target = derived$1(getTarget);
    function getTarget() {
      if (!isBrowser || disabled) return null;
      let localTarget = null;
      if (typeof to.current === "string") {
        const target2 = document.querySelector(to.current);
        localTarget = target2;
      } else {
        localTarget = to.current;
      }
      return localTarget;
    }
    let instance;
    function unmountInstance() {
      if (instance) {
        unmount();
        instance = null;
      }
    }
    watch([() => target(), () => disabled], ([target2, disabled2]) => {
      if (!target2 || disabled2) {
        unmountInstance();
        return;
      }
      instance = mount();
      return () => {
        unmountInstance();
      };
    });
    if (disabled) {
      $$renderer2.push("<!--[0-->");
      children?.($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function debounce(fn, wait = 500) {
  let timeout = null;
  const debounced = (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, wait);
  };
  debounced.destroy = () => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounced;
}
function isOrContainsTarget(node, target) {
  return node === target || node.contains(target);
}
function getOwnerDocument(el) {
  return el?.ownerDocument ?? document;
}
function isClickTrulyOutside(event, contentNode) {
  const { clientX, clientY } = event;
  const rect = contentNode.getBoundingClientRect();
  return clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom;
}
function next(array, index, loop = true) {
  if (array.length === 0 || index < 0 || index >= array.length)
    return;
  if (array.length === 1 && index === 0)
    return array[0];
  if (index === array.length - 1)
    return loop ? array[0] : void 0;
  return array[index + 1];
}
function prev(array, index, loop = true) {
  if (array.length === 0 || index < 0 || index >= array.length)
    return;
  if (array.length === 1 && index === 0)
    return array[0];
  if (index === 0)
    return loop ? array[array.length - 1] : void 0;
  return array[index - 1];
}
function forward(array, index, increment, loop = true) {
  if (array.length === 0 || index < 0 || index >= array.length)
    return;
  let targetIndex = index + increment;
  if (loop) {
    targetIndex = (targetIndex % array.length + array.length) % array.length;
  } else {
    targetIndex = Math.max(0, Math.min(targetIndex, array.length - 1));
  }
  return array[targetIndex];
}
function backward(array, index, decrement, loop = true) {
  if (array.length === 0 || index < 0 || index >= array.length)
    return;
  let targetIndex = index - decrement;
  if (loop) {
    targetIndex = (targetIndex % array.length + array.length) % array.length;
  } else {
    targetIndex = Math.max(0, Math.min(targetIndex, array.length - 1));
  }
  return array[targetIndex];
}
function getNextMatch(values, search, currentMatch) {
  const lowerSearch = search.toLowerCase();
  if (lowerSearch.endsWith(" ")) {
    const searchWithoutSpace = lowerSearch.slice(0, -1);
    const matchesWithoutSpace = values.filter((value) => value.toLowerCase().startsWith(searchWithoutSpace));
    if (matchesWithoutSpace.length <= 1) {
      return getNextMatch(values, searchWithoutSpace, currentMatch);
    }
    const currentMatchLowercase = currentMatch?.toLowerCase();
    if (currentMatchLowercase && currentMatchLowercase.startsWith(searchWithoutSpace) && currentMatchLowercase.charAt(searchWithoutSpace.length) === " " && search.trim() === searchWithoutSpace) {
      return currentMatch;
    }
    const spacedMatches = values.filter((value) => value.toLowerCase().startsWith(lowerSearch));
    if (spacedMatches.length > 0) {
      const currentMatchIndex2 = currentMatch ? values.indexOf(currentMatch) : -1;
      let wrappedMatches = wrapArray(spacedMatches, Math.max(currentMatchIndex2, 0));
      const nextMatch2 = wrappedMatches.find((match) => match !== currentMatch);
      return nextMatch2 || currentMatch;
    }
  }
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const normalizedLowerSearch = normalizedSearch.toLowerCase();
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
  const nextMatch = wrappedValues.find((value) => value?.toLowerCase().startsWith(normalizedLowerSearch));
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
const defaultOptions = { afterMs: 1e4, onChange: noop };
function boxAutoReset(defaultValue, options) {
  const { afterMs, onChange, getWindow: getWindow2 } = { ...defaultOptions, ...options };
  let timeout = null;
  let value = defaultValue;
  function resetAfter() {
    return getWindow2().setTimeout(
      () => {
        value = defaultValue;
        onChange?.(defaultValue);
      },
      afterMs
    );
  }
  return boxWith(() => value, (v) => {
    value = v;
    onChange?.(v);
    if (timeout) getWindow2().clearTimeout(timeout);
    timeout = resetAfter();
  });
}
class DOMTypeahead {
  #opts;
  #search;
  #onMatch = derived$1(() => {
    if (this.#opts.onMatch) return this.#opts.onMatch;
    return (node) => node.focus();
  });
  #getCurrentItem = derived$1(() => {
    if (this.#opts.getCurrentItem) return this.#opts.getCurrentItem;
    return this.#opts.getActiveElement;
  });
  constructor(opts) {
    this.#opts = opts;
    this.#search = boxAutoReset("", { afterMs: 1e3, getWindow: opts.getWindow });
    this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this);
    this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(key, candidates) {
    if (!candidates.length) return;
    this.#search.current = this.#search.current + key;
    const currentItem = this.#getCurrentItem()();
    const currentMatch = candidates.find((item) => item === currentItem)?.textContent?.trim() ?? "";
    const values = candidates.map((item) => item.textContent?.trim() ?? "");
    const nextMatch = getNextMatch(values, this.#search.current, currentMatch);
    const newItem = candidates.find((item) => item.textContent?.trim() === nextMatch);
    if (newItem) this.#onMatch()(newItem);
    return newItem;
  }
  resetTypeahead() {
    this.#search.current = "";
  }
  get search() {
    return this.#search.current;
  }
}
const CONTEXT_MENU_TRIGGER_ATTR = "data-context-menu-trigger";
const CONTEXT_MENU_CONTENT_ATTR = "data-context-menu-content";
createBitsAttrs({
  component: "menu",
  parts: [
    "trigger",
    "content",
    "sub-trigger",
    "item",
    "group",
    "group-heading",
    "checkbox-group",
    "checkbox-item",
    "radio-group",
    "radio-item",
    "separator",
    "sub-content",
    "arrow"
  ]
});
globalThis.bitsDismissableLayers ??= /* @__PURE__ */ new Map();
class DismissibleLayerState {
  static create(opts) {
    return new DismissibleLayerState(opts);
  }
  opts;
  #interactOutsideProp;
  #behaviorType;
  #interceptedEvents = { pointerdown: false };
  #isResponsibleLayer = false;
  #isFocusInsideDOMTree = false;
  #documentObj = void 0;
  #onFocusOutside;
  #unsubClickListener = noop;
  constructor(opts) {
    this.opts = opts;
    this.#behaviorType = opts.interactOutsideBehavior;
    this.#interactOutsideProp = opts.onInteractOutside;
    this.#onFocusOutside = opts.onFocusOutside;
    let unsubEvents = noop;
    const cleanup = () => {
      this.#resetState();
      globalThis.bitsDismissableLayers.delete(this);
      this.#handleInteractOutside.destroy();
      unsubEvents();
    };
    watch([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!this.opts.enabled.current || !this.opts.ref.current) return;
      afterSleep(1, () => {
        if (!this.opts.ref.current) return;
        globalThis.bitsDismissableLayers.set(this, this.#behaviorType);
        unsubEvents();
        unsubEvents = this.#addEventListeners();
      });
      return cleanup;
    });
  }
  #handleFocus = (event) => {
    if (event.defaultPrevented) return;
    if (!this.opts.ref.current) return;
    afterTick(() => {
      if (!this.opts.ref.current || this.#isTargetWithinLayer(event.target)) return;
      if (event.target && !this.#isFocusInsideDOMTree) {
        this.#onFocusOutside.current?.(event);
      }
    });
  };
  #addEventListeners() {
    return executeCallbacks(
      /**
       * CAPTURE INTERACTION START
       * mark interaction-start event as intercepted.
       * mark responsible layer during interaction start
       * to avoid checking if is responsible layer during interaction end
       * when a new floating element may have been opened.
       */
      on(this.#documentObj, "pointerdown", executeCallbacks(this.#markInterceptedEvent, this.#markResponsibleLayer), { capture: true }),
      /**
       * BUBBLE INTERACTION START
       * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
       * to avoid prematurely checking if other events were intercepted.
       */
      on(this.#documentObj, "pointerdown", executeCallbacks(this.#markNonInterceptedEvent, this.#handleInteractOutside)),
      /**
       * HANDLE FOCUS OUTSIDE
       */
      on(this.#documentObj, "focusin", this.#handleFocus)
    );
  }
  #handleDismiss = (e) => {
    let event = e;
    if (event.defaultPrevented) {
      event = createWrappedEvent(e);
    }
    this.#interactOutsideProp.current(e);
  };
  #handleInteractOutside = debounce(
    (e) => {
      if (!this.opts.ref.current) {
        this.#unsubClickListener();
        return;
      }
      const isEventValid = this.opts.isValidEvent.current(e, this.opts.ref.current) || isValidEvent(e, this.opts.ref.current);
      if (!this.#isResponsibleLayer || this.#isAnyEventIntercepted() || !isEventValid) {
        this.#unsubClickListener();
        return;
      }
      let event = e;
      if (event.defaultPrevented) {
        event = createWrappedEvent(event);
      }
      if (this.#behaviorType.current !== "close" && this.#behaviorType.current !== "defer-otherwise-close") {
        this.#unsubClickListener();
        return;
      }
      if (e.pointerType === "touch") {
        this.#unsubClickListener();
        this.#unsubClickListener = on(this.#documentObj, "click", this.#handleDismiss, { once: true });
      } else {
        this.#interactOutsideProp.current(event);
      }
    },
    10
  );
  #markInterceptedEvent = (e) => {
    this.#interceptedEvents[e.type] = true;
  };
  #markNonInterceptedEvent = (e) => {
    this.#interceptedEvents[e.type] = false;
  };
  #markResponsibleLayer = () => {
    if (!this.opts.ref.current) return;
    this.#isResponsibleLayer = isResponsibleLayer(this.opts.ref.current);
  };
  #isTargetWithinLayer = (target) => {
    if (!this.opts.ref.current) return false;
    return isOrContainsTarget(this.opts.ref.current, target);
  };
  #resetState = debounce(
    () => {
      for (const eventType in this.#interceptedEvents) {
        this.#interceptedEvents[eventType] = false;
      }
      this.#isResponsibleLayer = false;
    },
    20
  );
  #isAnyEventIntercepted() {
    const i = Object.values(this.#interceptedEvents).some(Boolean);
    return i;
  }
  #onfocuscapture = () => {
    this.#isFocusInsideDOMTree = true;
  };
  #onblurcapture = () => {
    this.#isFocusInsideDOMTree = false;
  };
  props = {
    onfocuscapture: this.#onfocuscapture,
    onblurcapture: this.#onblurcapture
  };
}
function getTopMostDismissableLayer(layersArr = [...globalThis.bitsDismissableLayers]) {
  return layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
}
function isResponsibleLayer(node) {
  const layersArr = [...globalThis.bitsDismissableLayers];
  const topMostLayer = getTopMostDismissableLayer(layersArr);
  if (topMostLayer) return topMostLayer[0].opts.ref.current === node;
  const [firstLayerNode] = layersArr[0];
  return firstLayerNode.opts.ref.current === node;
}
function isValidEvent(e, node) {
  const target = e.target;
  if (!isElementOrSVGElement(target)) return false;
  const targetIsContextMenuTrigger = Boolean(target.closest(`[${CONTEXT_MENU_TRIGGER_ATTR}]`));
  if ("button" in e && e.button > 0 && !targetIsContextMenuTrigger) return false;
  if ("button" in e && e.button === 0 && targetIsContextMenuTrigger) return true;
  const nodeIsContextMenu = Boolean(node.closest(`[${CONTEXT_MENU_CONTENT_ATTR}]`));
  if (targetIsContextMenuTrigger && nodeIsContextMenu) return false;
  const ownerDocument = getOwnerDocument(target);
  const isValid = ownerDocument.documentElement.contains(target) && !isOrContainsTarget(node, target) && isClickTrulyOutside(e, node);
  return isValid;
}
function createWrappedEvent(e) {
  const capturedCurrentTarget = e.currentTarget;
  const capturedTarget = e.target;
  let newEvent;
  if (e instanceof PointerEvent) {
    newEvent = new PointerEvent(e.type, e);
  } else {
    newEvent = new PointerEvent("pointerdown", e);
  }
  let isPrevented = false;
  const wrappedEvent = new Proxy(newEvent, {
    get: (target, prop) => {
      if (prop === "currentTarget") {
        return capturedCurrentTarget;
      }
      if (prop === "target") {
        return capturedTarget;
      }
      if (prop === "preventDefault") {
        return () => {
          isPrevented = true;
          if (typeof target.preventDefault === "function") {
            target.preventDefault();
          }
        };
      }
      if (prop === "defaultPrevented") {
        return isPrevented;
      }
      if (prop in target) {
        return target[prop];
      }
      return e[prop];
    }
  });
  return wrappedEvent;
}
function Dismissible_layer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      interactOutsideBehavior = "close",
      onInteractOutside = noop,
      onFocusOutside = noop,
      id,
      children,
      enabled,
      isValidEvent: isValidEvent2 = () => false,
      ref
    } = $$props;
    const dismissibleLayerState = DismissibleLayerState.create({
      id: boxWith(() => id),
      interactOutsideBehavior: boxWith(() => interactOutsideBehavior),
      onInteractOutside: boxWith(() => onInteractOutside),
      enabled: boxWith(() => enabled),
      onFocusOutside: boxWith(() => onFocusOutside),
      isValidEvent: boxWith(() => isValidEvent2),
      ref
    });
    children?.($$renderer2, { props: dismissibleLayerState.props });
    $$renderer2.push(`<!---->`);
  });
}
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
class EscapeLayerState {
  static create(opts) {
    return new EscapeLayerState(opts);
  }
  opts;
  domContext;
  constructor(opts) {
    this.opts = opts;
    this.domContext = new DOMContext(this.opts.ref);
    let unsubEvents = noop;
    watch(() => opts.enabled.current, (enabled) => {
      if (enabled) {
        globalThis.bitsEscapeLayers.set(this, opts.escapeKeydownBehavior);
        unsubEvents = this.#addEventListener();
      }
      return () => {
        unsubEvents();
        globalThis.bitsEscapeLayers.delete(this);
      };
    });
  }
  #addEventListener = () => {
    return on(this.domContext.getDocument(), "keydown", this.#onkeydown, { passive: false });
  };
  #onkeydown = (e) => {
    if (e.key !== ESCAPE || !isResponsibleEscapeLayer(this)) return;
    const clonedEvent = new KeyboardEvent(e.type, e);
    e.preventDefault();
    const behaviorType = this.opts.escapeKeydownBehavior.current;
    if (behaviorType !== "close" && behaviorType !== "defer-otherwise-close") return;
    this.opts.onEscapeKeydown.current(clonedEvent);
  };
}
function isResponsibleEscapeLayer(instance) {
  const layersArr = [...globalThis.bitsEscapeLayers];
  const topMostLayer = layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
  if (topMostLayer) return topMostLayer[0] === instance;
  const [firstLayerNode] = layersArr[0];
  return firstLayerNode === instance;
}
function Escape_layer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      escapeKeydownBehavior = "close",
      onEscapeKeydown = noop,
      children,
      enabled,
      ref
    } = $$props;
    EscapeLayerState.create({
      escapeKeydownBehavior: boxWith(() => escapeKeydownBehavior),
      onEscapeKeydown: boxWith(() => onEscapeKeydown),
      enabled: boxWith(() => enabled),
      ref
    });
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
class FocusScopeManager {
  static instance;
  #scopeStack = simpleBox([]);
  #focusHistory = /* @__PURE__ */ new WeakMap();
  #preFocusHistory = /* @__PURE__ */ new WeakMap();
  static getInstance() {
    if (!this.instance) {
      this.instance = new FocusScopeManager();
    }
    return this.instance;
  }
  register(scope) {
    const current = this.getActive();
    if (current && current !== scope) {
      current.pause();
    }
    const activeElement = document.activeElement;
    if (activeElement && activeElement !== document.body) {
      this.#preFocusHistory.set(scope, activeElement);
    }
    this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
    this.#scopeStack.current.unshift(scope);
  }
  unregister(scope) {
    this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
    const next2 = this.getActive();
    if (next2) {
      next2.resume();
    }
  }
  getActive() {
    return this.#scopeStack.current[0];
  }
  setFocusMemory(scope, element) {
    this.#focusHistory.set(scope, element);
  }
  getFocusMemory(scope) {
    return this.#focusHistory.get(scope);
  }
  isActiveScope(scope) {
    return this.getActive() === scope;
  }
  setPreFocusMemory(scope, element) {
    this.#preFocusHistory.set(scope, element);
  }
  getPreFocusMemory(scope) {
    return this.#preFocusHistory.get(scope);
  }
  clearPreFocusMemory(scope) {
    this.#preFocusHistory.delete(scope);
  }
}
class FocusScope {
  #paused = false;
  #container = null;
  #manager = FocusScopeManager.getInstance();
  #cleanupFns = [];
  #opts;
  constructor(opts) {
    this.#opts = opts;
  }
  get paused() {
    return this.#paused;
  }
  pause() {
    this.#paused = true;
  }
  resume() {
    this.#paused = false;
  }
  #cleanup() {
    for (const fn of this.#cleanupFns) {
      fn();
    }
    this.#cleanupFns = [];
  }
  mount(container) {
    if (this.#container) {
      this.unmount();
    }
    this.#container = container;
    this.#manager.register(this);
    this.#setupEventListeners();
    this.#handleOpenAutoFocus();
  }
  unmount() {
    if (!this.#container) return;
    this.#cleanup();
    this.#handleCloseAutoFocus();
    this.#manager.unregister(this);
    this.#manager.clearPreFocusMemory(this);
    this.#container = null;
  }
  #handleOpenAutoFocus() {
    if (!this.#container) return;
    const event = new CustomEvent("focusScope.onOpenAutoFocus", { bubbles: false, cancelable: true });
    this.#opts.onOpenAutoFocus.current(event);
    if (!event.defaultPrevented) {
      requestAnimationFrame(() => {
        if (!this.#container) return;
        const firstTabbable = this.#getFirstTabbable();
        if (firstTabbable) {
          firstTabbable.focus();
          this.#manager.setFocusMemory(this, firstTabbable);
        } else {
          this.#container.focus();
        }
      });
    }
  }
  #handleCloseAutoFocus() {
    const event = new CustomEvent("focusScope.onCloseAutoFocus", { bubbles: false, cancelable: true });
    this.#opts.onCloseAutoFocus.current?.(event);
    if (!event.defaultPrevented) {
      const preFocusedElement = this.#manager.getPreFocusMemory(this);
      if (preFocusedElement && document.contains(preFocusedElement)) {
        try {
          preFocusedElement.focus();
        } catch {
          document.body.focus();
        }
      }
    }
  }
  #setupEventListeners() {
    if (!this.#container || !this.#opts.trap.current) return;
    const container = this.#container;
    const doc = container.ownerDocument;
    const handleFocus = (e) => {
      if (this.#paused || !this.#manager.isActiveScope(this)) return;
      const target = e.target;
      if (!target) return;
      const isInside = container.contains(target);
      if (isInside) {
        this.#manager.setFocusMemory(this, target);
      } else {
        const lastFocused = this.#manager.getFocusMemory(this);
        if (lastFocused && container.contains(lastFocused) && isFocusable(lastFocused)) {
          e.preventDefault();
          lastFocused.focus();
        } else {
          const firstTabbable = this.#getFirstTabbable();
          const firstFocusable = this.#getAllFocusables()[0];
          (firstTabbable || firstFocusable || container).focus();
        }
      }
    };
    const handleKeydown = (e) => {
      if (!this.#opts.loop || this.#paused || e.key !== "Tab") return;
      if (!this.#manager.isActiveScope(this)) return;
      const tabbables = this.#getTabbables();
      if (tabbables.length < 2) return;
      const first = tabbables[0];
      const last = tabbables[tabbables.length - 1];
      if (!e.shiftKey && doc.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && doc.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    };
    this.#cleanupFns.push(on(doc, "focusin", handleFocus, { capture: true }), on(container, "keydown", handleKeydown));
    const observer = new MutationObserver(() => {
      const lastFocused = this.#manager.getFocusMemory(this);
      if (lastFocused && !container.contains(lastFocused)) {
        const firstTabbable = this.#getFirstTabbable();
        const firstFocusable = this.#getAllFocusables()[0];
        const elementToFocus = firstTabbable || firstFocusable;
        if (elementToFocus) {
          elementToFocus.focus();
          this.#manager.setFocusMemory(this, elementToFocus);
        } else {
          container.focus();
        }
      }
    });
    observer.observe(container, { childList: true, subtree: true });
    this.#cleanupFns.push(() => observer.disconnect());
  }
  #getTabbables() {
    if (!this.#container) return [];
    return tabbable(this.#container, { includeContainer: false, getShadowRoot: true });
  }
  #getFirstTabbable() {
    const tabbables = this.#getTabbables();
    return tabbables[0] || null;
  }
  #getAllFocusables() {
    if (!this.#container) return [];
    return focusable(this.#container, { includeContainer: false, getShadowRoot: true });
  }
  static use(opts) {
    let scope = null;
    watch([() => opts.ref.current, () => opts.enabled.current], ([ref, enabled]) => {
      if (ref && enabled) {
        if (!scope) {
          scope = new FocusScope(opts);
        }
        scope.mount(ref);
      } else if (scope) {
        scope.unmount();
        scope = null;
      }
    });
    return {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
}
function Focus_scope($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      enabled = false,
      trapFocus = false,
      loop = false,
      onCloseAutoFocus = noop,
      onOpenAutoFocus = noop,
      focusScope,
      ref
    } = $$props;
    const focusScopeState = FocusScope.use({
      enabled: boxWith(() => enabled),
      trap: boxWith(() => trapFocus),
      loop,
      onCloseAutoFocus: boxWith(() => onCloseAutoFocus),
      onOpenAutoFocus: boxWith(() => onOpenAutoFocus),
      ref
    });
    focusScope?.($$renderer2, { props: focusScopeState.props });
    $$renderer2.push(`<!---->`);
  });
}
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
class TextSelectionLayerState {
  static create(opts) {
    return new TextSelectionLayerState(opts);
  }
  opts;
  domContext;
  #unsubSelectionLock = noop;
  constructor(opts) {
    this.opts = opts;
    this.domContext = new DOMContext(opts.ref);
    let unsubEvents = noop;
    watch(() => this.opts.enabled.current, (isEnabled) => {
      if (isEnabled) {
        globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled);
        unsubEvents();
        unsubEvents = this.#addEventListeners();
      }
      return () => {
        unsubEvents();
        this.#resetSelectionLock();
        globalThis.bitsTextSelectionLayers.delete(this);
      };
    });
  }
  #addEventListeners() {
    return executeCallbacks(on(this.domContext.getDocument(), "pointerdown", this.#pointerdown), on(this.domContext.getDocument(), "pointerup", composeHandlers(this.#resetSelectionLock, this.opts.onPointerUp.current)));
  }
  #pointerdown = (e) => {
    const node = this.opts.ref.current;
    const target = e.target;
    if (!isHTMLElement(node) || !isHTMLElement(target) || !this.opts.enabled.current) return;
    if (!isHighestLayer(this) || !contains(node, target)) return;
    this.opts.onPointerDown.current(e);
    if (e.defaultPrevented) return;
    this.#unsubSelectionLock = preventTextSelectionOverflow(node, this.domContext.getDocument().body);
  };
  #resetSelectionLock = () => {
    this.#unsubSelectionLock();
    this.#unsubSelectionLock = noop;
  };
}
const getUserSelect = (node) => node.style.userSelect || node.style.webkitUserSelect;
function preventTextSelectionOverflow(node, body) {
  const originalBodyUserSelect = getUserSelect(body);
  const originalNodeUserSelect = getUserSelect(node);
  setUserSelect(body, "none");
  setUserSelect(node, "text");
  return () => {
    setUserSelect(body, originalBodyUserSelect);
    setUserSelect(node, originalNodeUserSelect);
  };
}
function setUserSelect(node, value) {
  node.style.userSelect = value;
  node.style.webkitUserSelect = value;
}
function isHighestLayer(instance) {
  const layersArr = [...globalThis.bitsTextSelectionLayers];
  if (!layersArr.length) return false;
  const highestLayer = layersArr.at(-1);
  if (!highestLayer) return false;
  return highestLayer[0] === instance;
}
function Text_selection_layer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      preventOverflowTextSelection = true,
      onPointerDown = noop,
      onPointerUp = noop,
      id,
      children,
      enabled,
      ref
    } = $$props;
    TextSelectionLayerState.create({
      id: boxWith(() => id),
      onPointerDown: boxWith(() => onPointerDown),
      onPointerUp: boxWith(() => onPointerUp),
      enabled: boxWith(() => enabled && preventOverflowTextSelection),
      ref
    });
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
globalThis.bitsIdCounter ??= { current: 0 };
function useId(prefix = "bits") {
  globalThis.bitsIdCounter.current++;
  return `${prefix}-${globalThis.bitsIdCounter.current}`;
}
class SharedState {
  #factory;
  #subscribers = 0;
  #state;
  #scope;
  constructor(factory) {
    this.#factory = factory;
  }
  #dispose() {
    this.#subscribers -= 1;
    if (this.#scope && this.#subscribers <= 0) {
      this.#scope();
      this.#state = void 0;
      this.#scope = void 0;
    }
  }
  get(...args) {
    this.#subscribers += 1;
    if (this.#state === void 0) {
      this.#scope = () => {
      };
    }
    return this.#state;
  }
}
const lockMap = new SvelteMap();
let initialBodyStyle = null;
let cleanupTimeoutId = null;
let isInCleanupTransition = false;
const anyLocked = boxWith(() => {
  for (const value of lockMap.values()) {
    if (value) return true;
  }
  return false;
});
let cleanupScheduledAt = null;
const bodyLockStackCount = new SharedState(() => {
  function resetBodyStyle() {
    return;
  }
  function cancelPendingCleanup() {
    if (cleanupTimeoutId === null) return;
    window.clearTimeout(cleanupTimeoutId);
    cleanupTimeoutId = null;
  }
  function scheduleCleanupIfNoNewLocks(delay, callback) {
    cancelPendingCleanup();
    isInCleanupTransition = true;
    cleanupScheduledAt = Date.now();
    const currentCleanupId = cleanupScheduledAt;
    const cleanupFn = () => {
      cleanupTimeoutId = null;
      if (cleanupScheduledAt !== currentCleanupId) return;
      if (!isAnyLocked(lockMap)) {
        isInCleanupTransition = false;
        callback();
      } else {
        isInCleanupTransition = false;
      }
    };
    const actualDelay = delay === null ? 24 : delay;
    cleanupTimeoutId = window.setTimeout(cleanupFn, actualDelay);
  }
  function ensureInitialStyleCaptured() {
    if (initialBodyStyle === null && lockMap.size === 0 && !isInCleanupTransition) {
      initialBodyStyle = document.body.getAttribute("style");
    }
  }
  watch(() => anyLocked.current, () => {
    if (!anyLocked.current) return;
    ensureInitialStyleCaptured();
    isInCleanupTransition = false;
    const htmlStyle = getComputedStyle(document.documentElement);
    const bodyStyle = getComputedStyle(document.body);
    const hasStableGutter = htmlStyle.scrollbarGutter?.includes("stable") || bodyStyle.scrollbarGutter?.includes("stable");
    const verticalScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const paddingRight = Number.parseInt(bodyStyle.paddingRight ?? "0", 10);
    const config = {
      padding: paddingRight + verticalScrollbarWidth,
      margin: Number.parseInt(bodyStyle.marginRight ?? "0", 10)
    };
    if (verticalScrollbarWidth > 0 && !hasStableGutter) {
      document.body.style.paddingRight = `${config.padding}px`;
      document.body.style.marginRight = `${config.margin}px`;
      document.body.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
    }
    document.body.style.overflow = "hidden";
    if (isIOS) {
      on(
        document,
        "touchmove",
        (e) => {
          if (e.target !== document.documentElement) return;
          if (e.touches.length > 1) return;
          e.preventDefault();
        },
        { passive: false }
      );
    }
    afterTick(() => {
      document.body.style.pointerEvents = "none";
      document.body.style.overflow = "hidden";
    });
  });
  return {
    get lockMap() {
      return lockMap;
    },
    resetBodyStyle,
    scheduleCleanupIfNoNewLocks,
    cancelPendingCleanup,
    ensureInitialStyleCaptured
  };
});
class BodyScrollLock {
  #id = useId();
  #initialState;
  #restoreScrollDelay = () => null;
  #countState;
  locked;
  constructor(initialState, restoreScrollDelay = () => null) {
    this.#initialState = initialState;
    this.#restoreScrollDelay = restoreScrollDelay;
    this.#countState = bodyLockStackCount.get();
    if (!this.#countState) return;
    this.#countState.cancelPendingCleanup();
    this.#countState.ensureInitialStyleCaptured();
    this.#countState.lockMap.set(this.#id, this.#initialState ?? false);
    this.locked = boxWith(() => this.#countState.lockMap.get(this.#id) ?? false, (v) => this.#countState.lockMap.set(this.#id, v));
  }
}
function isAnyLocked(map) {
  for (const [_, value] of map) {
    if (value) return true;
  }
  return false;
}
function Scroll_lock($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { preventScroll = true, restoreScrollDelay = null } = $$props;
    if (preventScroll) {
      new BodyScrollLock(preventScroll, () => restoreScrollDelay);
    }
  });
}
function Hidden_input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value = void 0, $$slots, $$events, ...restProps } = $$props;
    const mergedProps = derived$1(() => mergeProps(restProps, {
      "aria-hidden": "true",
      tabindex: -1,
      style: srOnlyStylesString
    }));
    if (mergedProps().type === "checkbox") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<input${attributes({ ...mergedProps(), value }, void 0, void 0, void 0, 4)}/>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<input${attributes({ value, ...mergedProps() }, void 0, void 0, void 0, 4)}/>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { value });
  });
}
function get(valueOrGetValue) {
  return typeof valueOrGetValue === "function" ? valueOrGetValue() : valueOrGetValue;
}
function getDPR(element) {
  if (typeof window === "undefined") return 1;
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function getFloatingContentCSSVars(name) {
  return {
    [`--bits-${name}-content-transform-origin`]: `var(--bits-floating-transform-origin)`,
    [`--bits-${name}-content-available-width`]: `var(--bits-floating-available-width)`,
    [`--bits-${name}-content-available-height`]: `var(--bits-floating-available-height)`,
    [`--bits-${name}-anchor-width`]: `var(--bits-floating-anchor-width)`,
    [`--bits-${name}-anchor-height`]: `var(--bits-floating-anchor-height)`
  };
}
function useFloating(options) {
  const openOption = derived$1(() => get(options.open) ?? true);
  const middlewareOption = derived$1(() => get(options.middleware));
  const transformOption = derived$1(() => get(options.transform) ?? true);
  const placementOption = derived$1(() => get(options.placement) ?? "bottom");
  const strategyOption = derived$1(() => get(options.strategy) ?? "absolute");
  const sideOffsetOption = derived$1(() => get(options.sideOffset) ?? 0);
  const alignOffsetOption = derived$1(() => get(options.alignOffset) ?? 0);
  const reference = options.reference;
  let x = 0;
  let y = 0;
  const floating = simpleBox(null);
  let strategy = strategyOption();
  let placement = placementOption();
  let middlewareData = {};
  let isPositioned = false;
  const floatingStyles = derived$1(() => {
    const xVal = floating.current ? roundByDPR(floating.current, x) : x;
    const yVal = floating.current ? roundByDPR(floating.current, y) : y;
    if (transformOption()) {
      return {
        position: strategy,
        left: "0",
        top: "0",
        transform: `translate(${xVal}px, ${yVal}px)`,
        ...floating.current && getDPR(floating.current) >= 1.5 && { willChange: "transform" }
      };
    }
    return { position: strategy, left: `${xVal}px`, top: `${yVal}px` };
  });
  function update() {
    if (reference.current === null || floating.current === null) return;
    computePosition(reference.current, floating.current, {
      middleware: middlewareOption(),
      placement: placementOption(),
      strategy: strategyOption()
    }).then((position) => {
      if (!openOption() && x !== 0 && y !== 0) {
        const maxExpectedOffset = Math.max(Math.abs(sideOffsetOption()), Math.abs(alignOffsetOption()), 15);
        if (position.x <= maxExpectedOffset && position.y <= maxExpectedOffset) return;
      }
      x = position.x;
      y = position.y;
      strategy = position.strategy;
      placement = position.placement;
      middlewareData = position.middlewareData;
      isPositioned = true;
    });
  }
  return {
    floating,
    reference,
    get strategy() {
      return strategy;
    },
    get placement() {
      return placement;
    },
    get middlewareData() {
      return middlewareData;
    },
    get isPositioned() {
      return isPositioned;
    },
    get floatingStyles() {
      return floatingStyles();
    },
    get update() {
      return update;
    }
  };
}
const OPPOSITE_SIDE = { top: "bottom", right: "left", bottom: "top", left: "right" };
const FloatingRootContext = new Context("Floating.Root");
const FloatingContentContext = new Context("Floating.Content");
const FloatingTooltipRootContext = new Context("Floating.Root");
class FloatingRootState {
  static create(tooltip = false) {
    return tooltip ? FloatingTooltipRootContext.set(new FloatingRootState()) : FloatingRootContext.set(new FloatingRootState());
  }
  anchorNode = simpleBox(null);
  customAnchorNode = simpleBox(null);
  triggerNode = simpleBox(null);
  constructor() {
  }
}
class FloatingContentState {
  static create(opts, tooltip = false) {
    return tooltip ? FloatingContentContext.set(new FloatingContentState(opts, FloatingTooltipRootContext.get())) : FloatingContentContext.set(new FloatingContentState(opts, FloatingRootContext.get()));
  }
  opts;
  root;
  // nodes
  contentRef = simpleBox(null);
  wrapperRef = simpleBox(null);
  arrowRef = simpleBox(null);
  contentAttachment = attachRef(this.contentRef);
  wrapperAttachment = attachRef(this.wrapperRef);
  arrowAttachment = attachRef(this.arrowRef);
  // ids
  arrowId = simpleBox(useId());
  #transformedStyle = derived$1(() => {
    if (typeof this.opts.style === "string") return cssToStyleObj(this.opts.style);
    if (!this.opts.style) return {};
  });
  #updatePositionStrategy = void 0;
  #arrowSize = new ElementSize(() => this.arrowRef.current ?? void 0);
  #arrowWidth = derived$1(() => this.#arrowSize?.width ?? 0);
  #arrowHeight = derived$1(() => this.#arrowSize?.height ?? 0);
  #desiredPlacement = derived$1(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));
  #boundary = derived$1(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
  #hasExplicitBoundaries = derived$1(() => this.#boundary().length > 0);
  get hasExplicitBoundaries() {
    return this.#hasExplicitBoundaries();
  }
  set hasExplicitBoundaries($$value) {
    return this.#hasExplicitBoundaries($$value);
  }
  #detectOverflowOptions = derived$1(() => ({
    padding: this.opts.collisionPadding.current,
    boundary: this.#boundary().filter(isNotNull),
    altBoundary: this.hasExplicitBoundaries
  }));
  get detectOverflowOptions() {
    return this.#detectOverflowOptions();
  }
  set detectOverflowOptions($$value) {
    return this.#detectOverflowOptions($$value);
  }
  #availableWidth = void 0;
  #availableHeight = void 0;
  #anchorWidth = void 0;
  #anchorHeight = void 0;
  #middleware = derived$1(() => [
    offset({
      mainAxis: this.opts.sideOffset.current + this.#arrowHeight(),
      alignmentAxis: this.opts.alignOffset.current
    }),
    this.opts.avoidCollisions.current && shift({
      mainAxis: true,
      crossAxis: false,
      limiter: this.opts.sticky.current === "partial" ? limitShift() : void 0,
      ...this.detectOverflowOptions
    }),
    this.opts.avoidCollisions.current && flip({ ...this.detectOverflowOptions }),
    size({
      ...this.detectOverflowOptions,
      apply: ({ rects, availableWidth, availableHeight }) => {
        const { width: anchorWidth, height: anchorHeight } = rects.reference;
        this.#availableWidth = availableWidth;
        this.#availableHeight = availableHeight;
        this.#anchorWidth = anchorWidth;
        this.#anchorHeight = anchorHeight;
      }
    }),
    this.arrowRef.current && arrow({
      element: this.arrowRef.current,
      padding: this.opts.arrowPadding.current
    }),
    transformOrigin({
      arrowWidth: this.#arrowWidth(),
      arrowHeight: this.#arrowHeight()
    }),
    this.opts.hideWhenDetached.current && hide({ strategy: "referenceHidden", ...this.detectOverflowOptions })
  ].filter(Boolean));
  get middleware() {
    return this.#middleware();
  }
  set middleware($$value) {
    return this.#middleware($$value);
  }
  floating;
  #placedSide = derived$1(() => getSideFromPlacement(this.floating.placement));
  get placedSide() {
    return this.#placedSide();
  }
  set placedSide($$value) {
    return this.#placedSide($$value);
  }
  #placedAlign = derived$1(() => getAlignFromPlacement(this.floating.placement));
  get placedAlign() {
    return this.#placedAlign();
  }
  set placedAlign($$value) {
    return this.#placedAlign($$value);
  }
  #arrowX = derived$1(() => this.floating.middlewareData.arrow?.x ?? 0);
  get arrowX() {
    return this.#arrowX();
  }
  set arrowX($$value) {
    return this.#arrowX($$value);
  }
  #arrowY = derived$1(() => this.floating.middlewareData.arrow?.y ?? 0);
  get arrowY() {
    return this.#arrowY();
  }
  set arrowY($$value) {
    return this.#arrowY($$value);
  }
  #cannotCenterArrow = derived$1(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
  get cannotCenterArrow() {
    return this.#cannotCenterArrow();
  }
  set cannotCenterArrow($$value) {
    return this.#cannotCenterArrow($$value);
  }
  contentZIndex;
  #arrowBaseSide = derived$1(() => OPPOSITE_SIDE[this.placedSide]);
  get arrowBaseSide() {
    return this.#arrowBaseSide();
  }
  set arrowBaseSide($$value) {
    return this.#arrowBaseSide($$value);
  }
  #wrapperProps = derived$1(() => ({
    id: this.opts.wrapperId.current,
    "data-bits-floating-content-wrapper": "",
    style: {
      ...this.floating.floatingStyles,
      transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
      minWidth: "max-content",
      zIndex: this.contentZIndex,
      "--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
      "--bits-floating-available-width": `${this.#availableWidth}px`,
      "--bits-floating-available-height": `${this.#availableHeight}px`,
      "--bits-floating-anchor-width": `${this.#anchorWidth}px`,
      "--bits-floating-anchor-height": `${this.#anchorHeight}px`,
      ...this.floating.middlewareData.hide?.referenceHidden && { visibility: "hidden", "pointer-events": "none" },
      ...this.#transformedStyle()
    },
    dir: this.opts.dir.current,
    ...this.wrapperAttachment
  }));
  get wrapperProps() {
    return this.#wrapperProps();
  }
  set wrapperProps($$value) {
    return this.#wrapperProps($$value);
  }
  #props = derived$1(() => ({
    "data-side": this.placedSide,
    "data-align": this.placedAlign,
    style: styleToString({ ...this.#transformedStyle() }),
    ...this.contentAttachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
  #arrowStyle = derived$1(() => ({
    position: "absolute",
    left: this.arrowX ? `${this.arrowX}px` : void 0,
    top: this.arrowY ? `${this.arrowY}px` : void 0,
    [this.arrowBaseSide]: 0,
    "transform-origin": { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[this.placedSide],
    transform: {
      top: "translateY(100%)",
      right: "translateY(50%) rotate(90deg) translateX(-50%)",
      bottom: "rotate(180deg)",
      left: "translateY(50%) rotate(-90deg) translateX(50%)"
    }[this.placedSide],
    visibility: this.cannotCenterArrow ? "hidden" : void 0
  }));
  get arrowStyle() {
    return this.#arrowStyle();
  }
  set arrowStyle($$value) {
    return this.#arrowStyle($$value);
  }
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    if (opts.customAnchor) {
      this.root.customAnchorNode.current = opts.customAnchor.current;
    }
    watch(() => opts.customAnchor.current, (customAnchor) => {
      this.root.customAnchorNode.current = customAnchor;
    });
    this.floating = useFloating({
      strategy: () => this.opts.strategy.current,
      placement: () => this.#desiredPlacement(),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    });
    watch(() => this.contentRef.current, (contentNode) => {
      if (!contentNode) return;
      const win = getWindow(contentNode);
      this.contentZIndex = win.getComputedStyle(contentNode).zIndex;
    });
  }
}
class FloatingAnchorState {
  static create(opts, tooltip = false) {
    return tooltip ? new FloatingAnchorState(opts, FloatingTooltipRootContext.get()) : new FloatingAnchorState(opts, FloatingRootContext.get());
  }
  opts;
  root;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    if (opts.virtualEl && opts.virtualEl.current) {
      root.triggerNode = boxFrom(opts.virtualEl.current);
    } else {
      root.triggerNode = opts.ref;
    }
  }
}
function transformOrigin(options) {
  return {
    name: "transformOrigin",
    options,
    fn(data) {
      const { placement, rects, middlewareData } = data;
      const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
      const isArrowHidden = cannotCenterArrow;
      const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
      const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
      const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
      const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
      const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
      const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
      let x = "";
      let y = "";
      if (placedSide === "bottom") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${-arrowHeight}px`;
      } else if (placedSide === "top") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${rects.floating.height + arrowHeight}px`;
      } else if (placedSide === "right") {
        x = `${-arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      } else if (placedSide === "left") {
        x = `${rects.floating.width + arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      }
      return { data: { x, y } };
    }
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
function getSideFromPlacement(placement) {
  return getSideAndAlignFromPlacement(placement)[0];
}
function getAlignFromPlacement(placement) {
  return getSideAndAlignFromPlacement(placement)[1];
}
function Floating_layer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, tooltip = false } = $$props;
    FloatingRootState.create(tooltip);
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
class DataTypeahead {
  #opts;
  #candidateValues = derived$1(() => this.#opts.candidateValues());
  #search;
  constructor(opts) {
    this.#opts = opts;
    this.#search = boxAutoReset("", { afterMs: 1e3, getWindow: this.#opts.getWindow });
    this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this);
    this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(key) {
    if (!this.#opts.enabled() || !this.#candidateValues().length) return;
    this.#search.current = this.#search.current + key;
    const currentItem = this.#opts.getCurrentItem();
    const currentMatch = this.#candidateValues().find((item) => item === currentItem) ?? "";
    const values = this.#candidateValues().map((item) => item ?? "");
    const nextMatch = getNextMatch(values, this.#search.current, currentMatch);
    const newItem = this.#candidateValues().find((item) => item === nextMatch);
    if (newItem) {
      this.#opts.onMatch(newItem);
    }
    return newItem;
  }
  resetTypeahead() {
    this.#search.current = "";
  }
}
const FIRST_KEYS = [ARROW_DOWN, PAGE_UP, HOME];
const LAST_KEYS = [ARROW_UP, PAGE_DOWN, END];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
const selectAttrs = createBitsAttrs({
  component: "select",
  parts: [
    "trigger",
    "content",
    "item",
    "viewport",
    "scroll-up-button",
    "scroll-down-button",
    "group",
    "group-label",
    "separator",
    "arrow",
    "input",
    "content-wrapper",
    "item-text",
    "value"
  ]
});
const SelectRootContext = new Context("Select.Root | Combobox.Root");
const SelectGroupContext = new Context("Select.Group | Combobox.Group");
const SelectContentContext = new Context("Select.Content | Combobox.Content");
class SelectBaseRootState {
  opts;
  touchedInput = false;
  inputNode = null;
  contentNode = null;
  contentPresence;
  viewportNode = null;
  triggerNode = null;
  valueId = "";
  highlightedNode = null;
  #highlightedValue = derived$1(() => {
    if (!this.highlightedNode) return null;
    return this.highlightedNode.getAttribute("data-value");
  });
  get highlightedValue() {
    return this.#highlightedValue();
  }
  set highlightedValue($$value) {
    return this.#highlightedValue($$value);
  }
  #highlightedId = derived$1(() => {
    if (!this.highlightedNode) return void 0;
    return this.highlightedNode.id;
  });
  get highlightedId() {
    return this.#highlightedId();
  }
  set highlightedId($$value) {
    return this.#highlightedId($$value);
  }
  #highlightedLabel = derived$1(() => {
    if (!this.highlightedNode) return null;
    return this.highlightedNode.getAttribute("data-label");
  });
  get highlightedLabel() {
    return this.#highlightedLabel();
  }
  set highlightedLabel($$value) {
    return this.#highlightedLabel($$value);
  }
  isUsingKeyboard = false;
  isCombobox = false;
  domContext = new DOMContext(() => null);
  constructor(opts) {
    this.opts = opts;
    this.isCombobox = opts.isCombobox;
    this.contentPresence = new PresenceManager({
      ref: boxWith(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
  }
  setHighlightedNode(node, initial = false) {
    this.highlightedNode = node;
    if (node && (this.isUsingKeyboard || initial)) {
      node.scrollIntoView({ block: this.opts.scrollAlignment.current });
    }
  }
  getCandidateNodes() {
    const node = this.contentNode;
    if (!node) return [];
    return Array.from(node.querySelectorAll(`[${this.getBitsAttr("item")}]:not([data-disabled])`));
  }
  setHighlightedToFirstCandidate(initial = false) {
    this.setHighlightedNode(null);
    let nodes = this.getCandidateNodes();
    if (!nodes.length) return;
    if (this.viewportNode) {
      const viewportRect = this.viewportNode.getBoundingClientRect();
      nodes = nodes.filter((node) => {
        if (!this.viewportNode) return false;
        const nodeRect = node.getBoundingClientRect();
        const isNodeFullyVisible = nodeRect.right < viewportRect.right && nodeRect.left > viewportRect.left && nodeRect.bottom < viewportRect.bottom && nodeRect.top > viewportRect.top;
        return isNodeFullyVisible;
      });
    }
    this.setHighlightedNode(nodes[0], initial);
  }
  getNodeByValue(value) {
    const candidateNodes = this.getCandidateNodes();
    return candidateNodes.find((node) => node.dataset.value === value) ?? null;
  }
  setOpen(open) {
    this.opts.open.current = open;
  }
  toggleOpen() {
    this.opts.open.current = !this.opts.open.current;
  }
  handleOpen() {
    this.setOpen(true);
  }
  handleClose() {
    this.setHighlightedNode(null);
    this.setOpen(false);
  }
  toggleMenu() {
    this.toggleOpen();
  }
  getBitsAttr = (part) => {
    return selectAttrs.getAttr(part, this.isCombobox ? "combobox" : void 0);
  };
}
class SelectSingleRootState extends SelectBaseRootState {
  opts;
  isMulti = false;
  #hasValue = derived$1(() => this.opts.value.current !== "");
  get hasValue() {
    return this.#hasValue();
  }
  set hasValue($$value) {
    return this.#hasValue($$value);
  }
  #currentLabel = derived$1(() => {
    if (!this.opts.items.current.length) return "";
    return this.opts.items.current.find((item) => item.value === this.opts.value.current)?.label ?? "";
  });
  get currentLabel() {
    return this.#currentLabel();
  }
  set currentLabel($$value) {
    return this.#currentLabel($$value);
  }
  #candidateLabels = derived$1(() => {
    if (!this.opts.items.current.length) return [];
    const filteredItems = this.opts.items.current.filter((item) => !item.disabled);
    return filteredItems.map((item) => item.label);
  });
  get candidateLabels() {
    return this.#candidateLabels();
  }
  set candidateLabels($$value) {
    return this.#candidateLabels($$value);
  }
  #dataTypeaheadEnabled = derived$1(() => {
    if (this.isMulti) return false;
    if (this.opts.items.current.length === 0) return false;
    return true;
  });
  get dataTypeaheadEnabled() {
    return this.#dataTypeaheadEnabled();
  }
  set dataTypeaheadEnabled($$value) {
    return this.#dataTypeaheadEnabled($$value);
  }
  constructor(opts) {
    super(opts);
    this.opts = opts;
    watch(() => this.opts.open.current, () => {
      if (!this.opts.open.current) return;
      this.setInitialHighlightedNode();
    });
  }
  includesItem(itemValue) {
    return this.opts.value.current === itemValue;
  }
  toggleItem(itemValue, itemLabel = itemValue) {
    const newValue = this.includesItem(itemValue) ? "" : itemValue;
    this.opts.value.current = newValue;
    if (newValue !== "") {
      this.opts.inputValue.current = itemLabel;
    }
  }
  setInitialHighlightedNode() {
    afterTick(() => {
      if (this.highlightedNode && this.domContext.getDocument().contains(this.highlightedNode)) return;
      if (this.opts.value.current !== "") {
        const node = this.getNodeByValue(this.opts.value.current);
        if (node) {
          this.setHighlightedNode(node, true);
          return;
        }
      }
      this.setHighlightedToFirstCandidate(true);
    });
  }
}
class SelectMultipleRootState extends SelectBaseRootState {
  opts;
  isMulti = true;
  #hasValue = derived$1(() => this.opts.value.current.length > 0);
  get hasValue() {
    return this.#hasValue();
  }
  set hasValue($$value) {
    return this.#hasValue($$value);
  }
  constructor(opts) {
    super(opts);
    this.opts = opts;
    watch(() => this.opts.open.current, () => {
      if (!this.opts.open.current) return;
      this.setInitialHighlightedNode();
    });
  }
  includesItem(itemValue) {
    return this.opts.value.current.includes(itemValue);
  }
  toggleItem(itemValue, itemLabel = itemValue) {
    if (this.includesItem(itemValue)) {
      this.opts.value.current = this.opts.value.current.filter((v) => v !== itemValue);
    } else {
      this.opts.value.current = [...this.opts.value.current, itemValue];
    }
    this.opts.inputValue.current = itemLabel;
  }
  setInitialHighlightedNode() {
    afterTick(() => {
      if (!this.domContext) return;
      if (this.highlightedNode && this.domContext.getDocument().contains(this.highlightedNode)) return;
      if (this.opts.value.current.length && this.opts.value.current[0] !== "") {
        const node = this.getNodeByValue(this.opts.value.current[0]);
        if (node) {
          this.setHighlightedNode(node, true);
          return;
        }
      }
      this.setHighlightedToFirstCandidate(true);
    });
  }
}
class SelectRootState {
  static create(props) {
    const { type, ...rest } = props;
    const rootState = type === "single" ? new SelectSingleRootState(rest) : new SelectMultipleRootState(rest);
    return SelectRootContext.set(rootState);
  }
}
class SelectTriggerState {
  static create(opts) {
    return new SelectTriggerState(opts, SelectRootContext.get());
  }
  opts;
  root;
  attachment;
  #domTypeahead;
  #dataTypeahead;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref, (v) => this.root.triggerNode = v);
    this.root.domContext = new DOMContext(opts.ref);
    this.#domTypeahead = new DOMTypeahead({
      getCurrentItem: () => this.root.highlightedNode,
      onMatch: (node) => {
        this.root.setHighlightedNode(node);
      },
      getActiveElement: () => this.root.domContext.getActiveElement(),
      getWindow: () => this.root.domContext.getWindow()
    });
    this.#dataTypeahead = new DataTypeahead({
      getCurrentItem: () => {
        if (this.root.isMulti) return "";
        return this.root.currentLabel;
      },
      onMatch: (label) => {
        if (this.root.isMulti) return;
        if (!this.root.opts.items.current) return;
        const matchedItem = this.root.opts.items.current.find((item) => item.label === label);
        if (!matchedItem) return;
        this.root.opts.value.current = matchedItem.value;
      },
      enabled: () => !this.root.isMulti && this.root.dataTypeaheadEnabled,
      candidateValues: () => this.root.isMulti ? [] : this.root.candidateLabels,
      getWindow: () => this.root.domContext.getWindow()
    });
    this.onkeydown = this.onkeydown.bind(this);
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
    this.onclick = this.onclick.bind(this);
  }
  #handleOpen() {
    this.root.opts.open.current = true;
    this.#dataTypeahead.resetTypeahead();
    this.#domTypeahead.resetTypeahead();
  }
  #handlePointerOpen(_) {
    this.#handleOpen();
  }
  /**
   * Logic used to handle keyboard selection/deselection.
   *
   * If it returns true, it means the item was selected and whatever is calling
   * this function should return early
   *
   */
  #handleKeyboardSelection() {
    const isCurrentSelectedValue = this.root.highlightedValue === this.root.opts.value.current;
    if (!this.root.opts.allowDeselect.current && isCurrentSelectedValue && !this.root.isMulti) {
      this.root.handleClose();
      return true;
    }
    if (this.root.highlightedValue !== null) {
      this.root.toggleItem(this.root.highlightedValue, this.root.highlightedLabel ?? void 0);
    }
    if (!this.root.isMulti && !isCurrentSelectedValue) {
      this.root.handleClose();
      return true;
    }
    return false;
  }
  onkeydown(e) {
    this.root.isUsingKeyboard = true;
    if (e.key === ARROW_UP || e.key === ARROW_DOWN) e.preventDefault();
    if (!this.root.opts.open.current) {
      if (e.key === ENTER || e.key === SPACE || e.key === ARROW_DOWN || e.key === ARROW_UP) {
        e.preventDefault();
        this.root.handleOpen();
      } else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
        this.#dataTypeahead.handleTypeaheadSearch(e.key);
        return;
      }
      if (this.root.hasValue) return;
      const candidateNodes2 = this.root.getCandidateNodes();
      if (!candidateNodes2.length) return;
      if (e.key === ARROW_DOWN) {
        const firstCandidate = candidateNodes2[0];
        this.root.setHighlightedNode(firstCandidate);
      } else if (e.key === ARROW_UP) {
        const lastCandidate = candidateNodes2[candidateNodes2.length - 1];
        this.root.setHighlightedNode(lastCandidate);
      }
      return;
    }
    if (e.key === TAB) {
      this.root.handleClose();
      return;
    }
    if ((e.key === ENTER || // if we're currently "typing ahead", we don't want to select the item
    // just yet as the item the user is trying to get to may have a space in it,
    // so we defer handling the close for this case until further down
    e.key === SPACE && this.#domTypeahead.search === "") && !e.isComposing) {
      e.preventDefault();
      const shouldReturn = this.#handleKeyboardSelection();
      if (shouldReturn) return;
    }
    if (e.key === ARROW_UP && e.altKey) {
      this.root.handleClose();
    }
    if (FIRST_LAST_KEYS.includes(e.key)) {
      e.preventDefault();
      const candidateNodes2 = this.root.getCandidateNodes();
      const currHighlightedNode = this.root.highlightedNode;
      const currIndex = currHighlightedNode ? candidateNodes2.indexOf(currHighlightedNode) : -1;
      const loop = this.root.opts.loop.current;
      let nextItem;
      if (e.key === ARROW_DOWN) {
        nextItem = next(candidateNodes2, currIndex, loop);
      } else if (e.key === ARROW_UP) {
        nextItem = prev(candidateNodes2, currIndex, loop);
      } else if (e.key === PAGE_DOWN) {
        nextItem = forward(candidateNodes2, currIndex, 10, loop);
      } else if (e.key === PAGE_UP) {
        nextItem = backward(candidateNodes2, currIndex, 10, loop);
      } else if (e.key === HOME) {
        nextItem = candidateNodes2[0];
      } else if (e.key === END) {
        nextItem = candidateNodes2[candidateNodes2.length - 1];
      }
      if (!nextItem) return;
      this.root.setHighlightedNode(nextItem);
      return;
    }
    const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
    const isCharacterKey = e.key.length === 1;
    const isSpaceKey = e.key === SPACE;
    const candidateNodes = this.root.getCandidateNodes();
    if (e.key === TAB) return;
    if (!isModifierKey && (isCharacterKey || isSpaceKey)) {
      const matchedNode = this.#domTypeahead.handleTypeaheadSearch(e.key, candidateNodes);
      if (!matchedNode && isSpaceKey) {
        e.preventDefault();
        this.#handleKeyboardSelection();
      }
      return;
    }
    if (!this.root.highlightedNode) {
      this.root.setHighlightedToFirstCandidate();
    }
  }
  onclick(e) {
    const currTarget = e.currentTarget;
    currTarget.focus();
  }
  onpointerdown(e) {
    if (this.root.opts.disabled.current) return;
    if (e.pointerType === "touch") return e.preventDefault();
    const target = e.target;
    if (target?.hasPointerCapture(e.pointerId)) {
      target?.releasePointerCapture(e.pointerId);
    }
    if (e.button === 0 && e.ctrlKey === false) {
      if (this.root.opts.open.current === false) {
        this.#handlePointerOpen(e);
      } else {
        this.root.handleClose();
      }
    }
  }
  onpointerup(e) {
    if (this.root.opts.disabled.current) return;
    e.preventDefault();
    if (e.pointerType === "touch") {
      if (this.root.opts.open.current === false) {
        this.#handlePointerOpen(e);
      } else {
        this.root.handleClose();
      }
    }
  }
  #props = derived$1(() => ({
    id: this.opts.id.current,
    disabled: this.root.opts.disabled.current ? true : void 0,
    "aria-haspopup": "listbox",
    "aria-expanded": boolToStr(this.root.opts.open.current),
    "aria-activedescendant": this.root.highlightedId,
    "data-state": getDataOpenClosed(this.root.opts.open.current),
    "data-disabled": boolToEmptyStrOrUndef(this.root.opts.disabled.current),
    "data-placeholder": this.root.hasValue ? void 0 : "",
    [this.root.getBitsAttr("trigger")]: "",
    onpointerdown: this.onpointerdown,
    onkeydown: this.onkeydown,
    onclick: this.onclick,
    onpointerup: this.onpointerup,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SelectContentState {
  static create(opts) {
    return SelectContentContext.set(new SelectContentState(opts, SelectRootContext.get()));
  }
  opts;
  root;
  attachment;
  isPositioned = false;
  domContext;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref, (v) => this.root.contentNode = v);
    this.domContext = new DOMContext(this.opts.ref);
    if (this.root.domContext === null) {
      this.root.domContext = this.domContext;
    }
    watch(() => this.root.opts.open.current, () => {
      if (this.root.opts.open.current) return;
      this.isPositioned = false;
    });
    this.onpointermove = this.onpointermove.bind(this);
  }
  onpointermove(_) {
    this.root.isUsingKeyboard = false;
  }
  #styles = derived$1(() => {
    return getFloatingContentCSSVars(this.root.isCombobox ? "combobox" : "select");
  });
  onInteractOutside = (e) => {
    if (e.target === this.root.triggerNode || e.target === this.root.inputNode) {
      e.preventDefault();
      return;
    }
    this.opts.onInteractOutside.current(e);
    if (e.defaultPrevented) return;
    this.root.handleClose();
  };
  onEscapeKeydown = (e) => {
    this.opts.onEscapeKeydown.current(e);
    if (e.defaultPrevented) return;
    this.root.handleClose();
  };
  onOpenAutoFocus = (e) => {
    e.preventDefault();
  };
  onCloseAutoFocus = (e) => {
    e.preventDefault();
  };
  get shouldRender() {
    return this.root.contentPresence.shouldRender;
  }
  #snippetProps = derived$1(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived$1(() => ({
    id: this.opts.id.current,
    role: "listbox",
    "aria-multiselectable": this.root.isMulti ? "true" : void 0,
    "data-state": getDataOpenClosed(this.root.opts.open.current),
    [this.root.getBitsAttr("content")]: "",
    style: {
      display: "flex",
      flexDirection: "column",
      outline: "none",
      boxSizing: "border-box",
      pointerEvents: "auto",
      ...this.#styles()
    },
    onpointermove: this.onpointermove,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
  popperProps = {
    onInteractOutside: this.onInteractOutside,
    onEscapeKeydown: this.onEscapeKeydown,
    onOpenAutoFocus: this.onOpenAutoFocus,
    onCloseAutoFocus: this.onCloseAutoFocus,
    trapFocus: false,
    loop: false,
    onPlaced: () => {
      if (this.root.opts.open.current) {
        this.isPositioned = true;
      }
    }
  };
}
class SelectItemState {
  static create(opts) {
    return new SelectItemState(opts, SelectRootContext.get());
  }
  opts;
  root;
  attachment;
  #isSelected = derived$1(() => this.root.includesItem(this.opts.value.current));
  get isSelected() {
    return this.#isSelected();
  }
  set isSelected($$value) {
    return this.#isSelected($$value);
  }
  #isHighlighted = derived$1(() => this.root.highlightedValue === this.opts.value.current);
  get isHighlighted() {
    return this.#isHighlighted();
  }
  set isHighlighted($$value) {
    return this.#isHighlighted($$value);
  }
  prevHighlighted = new Previous(() => this.isHighlighted);
  mounted = false;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref);
    watch([() => this.isHighlighted, () => this.prevHighlighted.current], () => {
      if (this.isHighlighted) {
        this.opts.onHighlight.current();
      } else if (this.prevHighlighted.current) {
        this.opts.onUnhighlight.current();
      }
    });
    watch(() => this.mounted, () => {
      if (!this.mounted) return;
      this.root.setInitialHighlightedNode();
    });
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
    this.onpointermove = this.onpointermove.bind(this);
  }
  handleSelect() {
    if (this.opts.disabled.current) return;
    const isCurrentSelectedValue = this.opts.value.current === this.root.opts.value.current;
    if (!this.root.opts.allowDeselect.current && isCurrentSelectedValue && !this.root.isMulti) {
      this.root.handleClose();
      return;
    }
    this.root.toggleItem(this.opts.value.current, this.opts.label.current);
    if (!this.root.isMulti && !isCurrentSelectedValue) {
      this.root.handleClose();
    }
  }
  #snippetProps = derived$1(() => ({ selected: this.isSelected, highlighted: this.isHighlighted }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  onpointerdown(e) {
    e.preventDefault();
  }
  /**
   * Using `pointerup` instead of `click` allows power users to pointerdown
   * the trigger, then release pointerup on an item to select it vs having to do
   * multiple clicks.
   */
  onpointerup(e) {
    if (e.defaultPrevented || !this.opts.ref.current) return;
    if (e.pointerType === "touch" && !isIOS) {
      on(
        this.opts.ref.current,
        "click",
        () => {
          this.handleSelect();
          this.root.setHighlightedNode(this.opts.ref.current);
        },
        { once: true }
      );
      return;
    }
    e.preventDefault();
    this.handleSelect();
    if (e.pointerType === "touch") {
      this.root.setHighlightedNode(this.opts.ref.current);
    }
  }
  onpointermove(e) {
    if (e.pointerType === "touch") return;
    if (this.root.highlightedNode !== this.opts.ref.current) {
      this.root.setHighlightedNode(this.opts.ref.current);
    }
  }
  #props = derived$1(() => ({
    id: this.opts.id.current,
    role: "option",
    "aria-selected": this.root.includesItem(this.opts.value.current) ? "true" : void 0,
    "data-value": this.opts.value.current,
    "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
    "data-highlighted": this.root.highlightedValue === this.opts.value.current && !this.opts.disabled.current ? "" : void 0,
    "data-selected": this.root.includesItem(this.opts.value.current) ? "" : void 0,
    "data-label": this.opts.label.current,
    [this.root.getBitsAttr("item")]: "",
    onpointermove: this.onpointermove,
    onpointerdown: this.onpointerdown,
    onpointerup: this.onpointerup,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SelectGroupState {
  static create(opts) {
    return SelectGroupContext.set(new SelectGroupState(opts, SelectRootContext.get()));
  }
  opts;
  root;
  labelNode = null;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref);
  }
  #props = derived$1(() => ({
    id: this.opts.id.current,
    role: "group",
    [this.root.getBitsAttr("group")]: "",
    "aria-labelledby": this.labelNode?.id ?? void 0,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SelectGroupHeadingState {
  static create(opts) {
    return new SelectGroupHeadingState(opts, SelectGroupContext.get());
  }
  opts;
  group;
  attachment;
  constructor(opts, group) {
    this.opts = opts;
    this.group = group;
    this.attachment = attachRef(opts.ref, (v) => this.group.labelNode = v);
  }
  #props = derived$1(() => ({
    id: this.opts.id.current,
    [this.group.root.getBitsAttr("group-label")]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SelectHiddenInputState {
  static create(opts) {
    return new SelectHiddenInputState(opts, SelectRootContext.get());
  }
  opts;
  root;
  #shouldRender = derived$1(() => this.root.opts.name.current !== "");
  get shouldRender() {
    return this.#shouldRender();
  }
  set shouldRender($$value) {
    return this.#shouldRender($$value);
  }
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.onfocus = this.onfocus.bind(this);
  }
  onfocus(e) {
    e.preventDefault();
    if (!this.root.isCombobox) {
      this.root.triggerNode?.focus();
    } else {
      this.root.inputNode?.focus();
    }
  }
  #props = derived$1(() => ({
    disabled: boolToTrueOrUndef(this.root.opts.disabled.current),
    required: boolToTrueOrUndef(this.root.opts.required.current),
    name: this.root.opts.name.current,
    value: this.opts.value.current,
    onfocus: this.onfocus
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SelectViewportState {
  static create(opts) {
    return new SelectViewportState(opts, SelectContentContext.get());
  }
  opts;
  content;
  root;
  attachment;
  prevScrollTop = 0;
  constructor(opts, content) {
    this.opts = opts;
    this.content = content;
    this.root = content.root;
    this.attachment = attachRef(opts.ref, (v) => {
      this.root.viewportNode = v;
    });
  }
  #props = derived$1(() => ({
    id: this.opts.id.current,
    role: "presentation",
    [this.root.getBitsAttr("viewport")]: "",
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto"
    },
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function Select_hidden_input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value = void 0, autocomplete } = $$props;
    const hiddenInputState = SelectHiddenInputState.create({ value: boxWith(() => value) });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (hiddenInputState.shouldRender) {
        $$renderer3.push("<!--[0-->");
        Hidden_input($$renderer3, spread_props([
          hiddenInputState.props,
          {
            autocomplete,
            get value() {
              return value;
            },
            set value($$value) {
              value = $$value;
              $$settled = false;
            }
          }
        ]));
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { value });
  });
}
function Floating_layer_anchor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { id, children, virtualEl, ref, tooltip = false } = $$props;
    FloatingAnchorState.create(
      {
        id: boxWith(() => id),
        virtualEl: boxWith(() => virtualEl),
        ref
      },
      tooltip
    );
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
function Floating_layer_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      content,
      side = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      id,
      arrowPadding = 0,
      avoidCollisions = true,
      collisionBoundary = [],
      collisionPadding = 0,
      hideWhenDetached = false,
      onPlaced = () => {
      },
      sticky = "partial",
      updatePositionStrategy = "optimized",
      strategy = "fixed",
      dir = "ltr",
      style = {},
      wrapperId = useId(),
      customAnchor = null,
      enabled,
      tooltip = false
    } = $$props;
    const contentState = FloatingContentState.create(
      {
        side: boxWith(() => side),
        sideOffset: boxWith(() => sideOffset),
        align: boxWith(() => align),
        alignOffset: boxWith(() => alignOffset),
        id: boxWith(() => id),
        arrowPadding: boxWith(() => arrowPadding),
        avoidCollisions: boxWith(() => avoidCollisions),
        collisionBoundary: boxWith(() => collisionBoundary),
        collisionPadding: boxWith(() => collisionPadding),
        hideWhenDetached: boxWith(() => hideWhenDetached),
        onPlaced: boxWith(() => onPlaced),
        sticky: boxWith(() => sticky),
        updatePositionStrategy: boxWith(() => updatePositionStrategy),
        strategy: boxWith(() => strategy),
        dir: boxWith(() => dir),
        style: boxWith(() => style),
        enabled: boxWith(() => enabled),
        wrapperId: boxWith(() => wrapperId),
        customAnchor: boxWith(() => customAnchor)
      },
      tooltip
    );
    const mergedProps = derived$1(() => mergeProps(contentState.wrapperProps, { style: { pointerEvents: "auto" } }));
    content?.($$renderer2, { props: contentState.props, wrapperProps: mergedProps() });
    $$renderer2.push(`<!---->`);
  });
}
function Floating_layer_content_static($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { content } = $$props;
    content?.($$renderer2, { props: {}, wrapperProps: {} });
    $$renderer2.push(`<!---->`);
  });
}
function Popper_content($$renderer, $$props) {
  let {
    content,
    isStatic = false,
    onPlaced,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  if (isStatic) {
    $$renderer.push("<!--[0-->");
    Floating_layer_content_static($$renderer, { content });
  } else {
    $$renderer.push("<!--[-1-->");
    Floating_layer_content($$renderer, spread_props([{ content, onPlaced }, restProps]));
  }
  $$renderer.push(`<!--]-->`);
}
function Popper_layer_inner($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      popper,
      onEscapeKeydown,
      escapeKeydownBehavior,
      preventOverflowTextSelection,
      id,
      onPointerDown,
      onPointerUp,
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      avoidCollisions,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      updatePositionStrategy,
      strategy,
      dir,
      preventScroll,
      wrapperId,
      style,
      onPlaced,
      onInteractOutside,
      onCloseAutoFocus,
      onOpenAutoFocus,
      onFocusOutside,
      interactOutsideBehavior = "close",
      loop,
      trapFocus = true,
      isValidEvent: isValidEvent2 = () => false,
      customAnchor = null,
      isStatic = false,
      enabled,
      ref,
      tooltip = false,
      contentPointerEvents = "auto",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    {
      let content = function($$renderer3, { props: floatingProps, wrapperProps }) {
        if (restProps.forceMount && enabled) {
          $$renderer3.push("<!--[0-->");
          Scroll_lock($$renderer3, { preventScroll });
        } else if (!restProps.forceMount) {
          $$renderer3.push("<!--[1-->");
          Scroll_lock($$renderer3, { preventScroll });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        {
          let focusScope = function($$renderer4, { props: focusScopeProps }) {
            Escape_layer($$renderer4, {
              onEscapeKeydown,
              escapeKeydownBehavior,
              enabled,
              ref,
              children: ($$renderer5) => {
                {
                  let children = function($$renderer6, { props: dismissibleProps }) {
                    Text_selection_layer($$renderer6, {
                      id,
                      preventOverflowTextSelection,
                      onPointerDown,
                      onPointerUp,
                      enabled,
                      ref,
                      children: ($$renderer7) => {
                        popper?.($$renderer7, {
                          props: mergeProps(restProps, floatingProps, dismissibleProps, focusScopeProps, { style: { pointerEvents: contentPointerEvents } }),
                          wrapperProps
                        });
                        $$renderer7.push(`<!---->`);
                      }
                    });
                  };
                  Dismissible_layer($$renderer5, {
                    id,
                    onInteractOutside,
                    onFocusOutside,
                    interactOutsideBehavior,
                    isValidEvent: isValidEvent2,
                    enabled,
                    ref,
                    children
                  });
                }
              }
            });
          };
          Focus_scope($$renderer3, {
            onOpenAutoFocus,
            onCloseAutoFocus,
            loop,
            enabled,
            trapFocus,
            forceMount: restProps.forceMount,
            ref,
            focusScope
          });
        }
        $$renderer3.push(`<!---->`);
      };
      Popper_content($$renderer2, {
        isStatic,
        id,
        side,
        sideOffset,
        align,
        alignOffset,
        arrowPadding,
        avoidCollisions,
        collisionBoundary,
        collisionPadding,
        sticky,
        hideWhenDetached,
        updatePositionStrategy,
        strategy,
        dir,
        wrapperId,
        style,
        onPlaced,
        customAnchor,
        enabled,
        tooltip,
        content,
        $$slots: { content: true }
      });
    }
  });
}
function Popper_layer($$renderer, $$props) {
  let {
    popper,
    open,
    onEscapeKeydown,
    escapeKeydownBehavior,
    preventOverflowTextSelection,
    id,
    onPointerDown,
    onPointerUp,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    avoidCollisions,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    updatePositionStrategy,
    strategy,
    dir,
    preventScroll,
    wrapperId,
    style,
    onPlaced,
    onInteractOutside,
    onCloseAutoFocus,
    onOpenAutoFocus,
    onFocusOutside,
    interactOutsideBehavior = "close",
    loop,
    trapFocus = true,
    isValidEvent: isValidEvent2 = () => false,
    customAnchor = null,
    isStatic = false,
    ref,
    shouldRender,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  if (shouldRender) {
    $$renderer.push("<!--[0-->");
    Popper_layer_inner($$renderer, spread_props([
      {
        popper,
        onEscapeKeydown,
        escapeKeydownBehavior,
        preventOverflowTextSelection,
        id,
        onPointerDown,
        onPointerUp,
        side,
        sideOffset,
        align,
        alignOffset,
        arrowPadding,
        avoidCollisions,
        collisionBoundary,
        collisionPadding,
        sticky,
        hideWhenDetached,
        updatePositionStrategy,
        strategy,
        dir,
        preventScroll,
        wrapperId,
        style,
        onPlaced,
        customAnchor,
        isStatic,
        enabled: open,
        onInteractOutside,
        onCloseAutoFocus,
        onOpenAutoFocus,
        interactOutsideBehavior,
        loop,
        trapFocus,
        isValidEvent: isValidEvent2,
        onFocusOutside,
        forceMount: false,
        ref
      },
      restProps
    ]));
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]-->`);
}
function Popper_layer_force_mount($$renderer, $$props) {
  let {
    popper,
    onEscapeKeydown,
    escapeKeydownBehavior,
    preventOverflowTextSelection,
    id,
    onPointerDown,
    onPointerUp,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    avoidCollisions,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    updatePositionStrategy,
    strategy,
    dir,
    preventScroll,
    wrapperId,
    style,
    onPlaced,
    onInteractOutside,
    onCloseAutoFocus,
    onOpenAutoFocus,
    onFocusOutside,
    interactOutsideBehavior = "close",
    loop,
    trapFocus = true,
    isValidEvent: isValidEvent2 = () => false,
    customAnchor = null,
    isStatic = false,
    enabled,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  Popper_layer_inner($$renderer, spread_props([
    {
      popper,
      onEscapeKeydown,
      escapeKeydownBehavior,
      preventOverflowTextSelection,
      id,
      onPointerDown,
      onPointerUp,
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      avoidCollisions,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      updatePositionStrategy,
      strategy,
      dir,
      preventScroll,
      wrapperId,
      style,
      onPlaced,
      customAnchor,
      isStatic,
      enabled,
      onInteractOutside,
      onCloseAutoFocus,
      onOpenAutoFocus,
      interactOutsideBehavior,
      loop,
      trapFocus,
      isValidEvent: isValidEvent2,
      onFocusOutside
    },
    restProps,
    { forceMount: true }
  ]));
}
function Select_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      forceMount = false,
      side = "bottom",
      onInteractOutside = noop,
      onEscapeKeydown = noop,
      children,
      child,
      preventScroll = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const contentState = SelectContentState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      onInteractOutside: boxWith(() => onInteractOutside),
      onEscapeKeydown: boxWith(() => onEscapeKeydown)
    });
    const mergedProps = derived$1(() => mergeProps(restProps, contentState.props));
    if (forceMount) {
      $$renderer2.push("<!--[0-->");
      {
        let popper = function($$renderer3, { props, wrapperProps }) {
          const finalProps = mergeProps(props, { style: contentState.props.style });
          if (child) {
            $$renderer3.push("<!--[0-->");
            child($$renderer3, {
              props: finalProps,
              wrapperProps,
              ...contentState.snippetProps
            });
            $$renderer3.push(`<!---->`);
          } else {
            $$renderer3.push("<!--[-1-->");
            $$renderer3.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
            children?.($$renderer3);
            $$renderer3.push(`<!----></div></div>`);
          }
          $$renderer3.push(`<!--]-->`);
        };
        Popper_layer_force_mount($$renderer2, spread_props([
          mergedProps(),
          contentState.popperProps,
          {
            ref: contentState.opts.ref,
            side,
            enabled: contentState.root.opts.open.current,
            id,
            preventScroll,
            forceMount: true,
            shouldRender: contentState.shouldRender,
            popper,
            $$slots: { popper: true }
          }
        ]));
      }
    } else if (!forceMount) {
      $$renderer2.push("<!--[1-->");
      {
        let popper = function($$renderer3, { props, wrapperProps }) {
          const finalProps = mergeProps(props, { style: contentState.props.style });
          if (child) {
            $$renderer3.push("<!--[0-->");
            child($$renderer3, {
              props: finalProps,
              wrapperProps,
              ...contentState.snippetProps
            });
            $$renderer3.push(`<!---->`);
          } else {
            $$renderer3.push("<!--[-1-->");
            $$renderer3.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
            children?.($$renderer3);
            $$renderer3.push(`<!----></div></div>`);
          }
          $$renderer3.push(`<!--]-->`);
        };
        Popper_layer($$renderer2, spread_props([
          mergedProps(),
          contentState.popperProps,
          {
            ref: contentState.opts.ref,
            side,
            open: contentState.root.opts.open.current,
            id,
            preventScroll,
            forceMount: false,
            shouldRender: contentState.shouldRender,
            popper,
            $$slots: { popper: true }
          }
        ]));
      }
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Mounted($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { mounted = false, onMountedChange = noop } = $$props;
    bind_props($$props, { mounted });
  });
}
function Select_item($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      value,
      label = value,
      disabled = false,
      children,
      child,
      onHighlight = noop,
      onUnhighlight = noop,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const itemState = SelectItemState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      value: boxWith(() => value),
      disabled: boxWith(() => disabled),
      label: boxWith(() => label),
      onHighlight: boxWith(() => onHighlight),
      onUnhighlight: boxWith(() => onUnhighlight)
    });
    const mergedProps = derived$1(() => mergeProps(restProps, itemState.props));
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (child) {
        $$renderer3.push("<!--[0-->");
        child($$renderer3, { props: mergedProps(), ...itemState.snippetProps });
        $$renderer3.push(`<!---->`);
      } else {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<div${attributes({ ...mergedProps() })}>`);
        children?.($$renderer3, itemState.snippetProps);
        $$renderer3.push(`<!----></div>`);
      }
      $$renderer3.push(`<!--]--> `);
      Mounted($$renderer3, {
        get mounted() {
          return itemState.mounted;
        },
        set mounted($$value) {
          itemState.mounted = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Select_group($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      children,
      child,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const groupState = SelectGroupState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = derived$1(() => mergeProps(restProps, groupState.props));
    if (child) {
      $$renderer2.push("<!--[0-->");
      child($$renderer2, { props: mergedProps() });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps() })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Select_group_heading($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      child,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const groupHeadingState = SelectGroupHeadingState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = derived$1(() => mergeProps(restProps, groupHeadingState.props));
    if (child) {
      $$renderer2.push("<!--[0-->");
      child($$renderer2, { props: mergedProps() });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps() })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Select_viewport($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      children,
      child,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const viewportState = SelectViewportState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = derived$1(() => mergeProps(restProps, viewportState.props));
    if (child) {
      $$renderer2.push("<!--[0-->");
      child($$renderer2, { props: mergedProps() });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps() })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Select($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = void 0,
      onValueChange = noop,
      name = "",
      disabled = false,
      type,
      open = false,
      onOpenChange = noop,
      onOpenChangeComplete = noop,
      loop = false,
      scrollAlignment = "nearest",
      required = false,
      items = [],
      allowDeselect = false,
      autocomplete,
      children
    } = $$props;
    function handleDefaultValue() {
      if (value !== void 0) return;
      value = type === "single" ? "" : [];
    }
    handleDefaultValue();
    watch.pre(() => value, () => {
      handleDefaultValue();
    });
    let inputValue = "";
    const rootState = SelectRootState.create({
      type,
      value: boxWith(() => value, (v) => {
        value = v;
        onValueChange(v);
      }),
      disabled: boxWith(() => disabled),
      required: boxWith(() => required),
      open: boxWith(() => open, (v) => {
        open = v;
        onOpenChange(v);
      }),
      loop: boxWith(() => loop),
      scrollAlignment: boxWith(() => scrollAlignment),
      name: boxWith(() => name),
      isCombobox: false,
      items: boxWith(() => items),
      allowDeselect: boxWith(() => allowDeselect),
      inputValue: boxWith(() => inputValue, (v) => inputValue = v),
      onOpenChangeComplete: boxWith(() => onOpenChangeComplete)
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Floating_layer($$renderer3, {
        children: ($$renderer4) => {
          children?.($$renderer4);
          $$renderer4.push(`<!---->`);
        }
      });
      $$renderer3.push(`<!----> `);
      if (Array.isArray(rootState.opts.value.current)) {
        $$renderer3.push("<!--[0-->");
        if (rootState.opts.value.current.length === 0) {
          $$renderer3.push("<!--[0-->");
          Select_hidden_input($$renderer3, { autocomplete });
        } else {
          $$renderer3.push("<!--[-1-->");
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(rootState.opts.value.current);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let item = each_array[$$index];
            Select_hidden_input($$renderer3, { value: item, autocomplete });
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[-1-->");
        Select_hidden_input($$renderer3, {
          autocomplete,
          get value() {
            return rootState.opts.value.current;
          },
          set value($$value) {
            rootState.opts.value.current = $$value;
            $$settled = false;
          }
        });
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { value, open });
  });
}
function Select_trigger($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      child,
      children,
      type = "button",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const triggerState = SelectTriggerState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = derived$1(() => mergeProps(restProps, triggerState.props, { type }));
    if (Floating_layer_anchor) {
      $$renderer2.push("<!--[-->");
      Floating_layer_anchor($$renderer2, {
        id,
        ref: triggerState.opts.ref,
        children: ($$renderer3) => {
          if (child) {
            $$renderer3.push("<!--[0-->");
            child($$renderer3, { props: mergedProps() });
            $$renderer3.push(`<!---->`);
          } else {
            $$renderer3.push("<!--[-1-->");
            $$renderer3.push(`<button${attributes({ ...mergedProps() })}>`);
            children?.($$renderer3);
            $$renderer3.push(`<!----></button>`);
          }
          $$renderer3.push(`<!--]-->`);
        }
      });
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
    bind_props($$props, { ref });
  });
}
function Vercel_logo_mark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="black"></path></svg>`);
  bind_props($$props, { size: size2 });
}
function Peerlist_logo_mark($$renderer, $$props) {
  let size2 = fallback($$props["size"], 16);
  $$renderer.push(`<svg${attr("width", size2)}${attr("height", size2)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.9633 0C1.76962 0 0 1.77778 0 8C0 14.2222 1.77405 16 7.9633 16C14.1526 16 15.9266 14.2222 15.9266 8C15.9266 1.77778 14.1526 0 7.9633 0Z" fill="#00AA45"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.06123 2.07073C1.0203 3.11646 0.568807 4.90086 0.568807 8C0.568807 11.0989 1.02132 12.8834 2.0628 13.9292C3.10435 14.9751 4.88071 15.4286 7.9633 15.4286C11.0459 15.4286 12.8223 14.9751 13.8638 13.9292C14.9053 12.8834 15.3578 11.0989 15.3578 8C15.3578 4.90111 14.9053 3.11663 13.8638 2.07082C12.8223 1.02495 11.0459 0.571429 7.9633 0.571429C4.87838 0.571429 3.10216 1.025 2.06123 2.07073ZM0 8C0 1.77778 1.76962 0 7.9633 0C14.1526 0 15.9266 1.77778 15.9266 8C15.9266 14.2222 14.1526 16 7.9633 16C1.77405 16 0 14.2222 0 8Z" fill="#219653"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.70077 3.71423H4.26605V13.4285H6.93507V11.3968H7.70077C9.87748 11.3968 11.6605 9.68703 11.6605 7.55549C11.6605 5.42395 9.87748 3.71423 7.70077 3.71423ZM6.93507 8.7936V6.3174H7.70077C8.42386 6.3174 8.99153 6.88178 8.99153 7.55549C8.99153 8.22921 8.42386 8.7936 7.70077 8.7936H6.93507Z" fill="#24292E"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.11926 3.42859H8.26957C10.2994 3.42859 11.945 5.02047 11.945 6.98413C11.945 8.94782 10.2994 10.5397 8.26957 10.5397H7.21947V12.5714H5.11926V3.42859ZM7.21947 8.50796H8.26957C9.13951 8.50796 9.84474 7.82573 9.84474 6.98413C9.84474 6.14256 9.13951 5.46033 8.26957 5.46033H7.21947V8.50796Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.83487 3.14282H8.26958C10.4463 3.14282 12.2294 4.85254 12.2294 6.98408C12.2294 9.11562 10.4463 10.8254 8.26958 10.8254H7.50388V12.8571H4.83487V3.14282ZM5.40368 3.71425V12.2857H6.93508V10.2539H8.26958C10.1526 10.2539 11.6606 8.77991 11.6606 6.98408C11.6606 5.18828 10.1526 3.71425 8.26958 3.71425H5.40368ZM6.93508 5.17457H8.26958C9.28638 5.17457 10.1292 5.97465 10.1292 6.98408C10.1292 7.99354 9.28638 8.79362 8.26958 8.79362H6.93508V5.17457ZM7.50388 5.74599V8.22219H8.26958C8.99268 8.22219 9.56035 7.65779 9.56035 6.98408C9.56035 6.31037 8.99268 5.74599 8.26958 5.74599H7.50388Z" fill="#24292E"></path></svg>`);
  bind_props($$props, { size: size2 });
}
function Chevron_down($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"${attr_class(clsx(className))}><path d="M17.2929 8.79289C17.6834 8.40237 18.3164 8.40237 18.707 8.79289C19.0975 9.18342 19.0975 9.81643 18.707 10.207L12.707 16.207C12.3164 16.5975 11.6834 16.5975 11.2929 16.207L5.29289 10.207C4.90237 9.81643 4.90237 9.18342 5.29289 8.79289C5.68342 8.40237 6.31643 8.40237 6.70696 8.79289L11.9999 14.0859L17.2929 8.79289Z" fill="currentColor"></path></svg>`);
}
function themeIcon($$renderer, option) {
  if (option.brand === "vercel" || option.value === "vercel") {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    Vercel_logo_mark($$renderer, { size: 16 });
    $$renderer.push(`<!----></span>`);
  } else if (option.brand === "peerlist" || option.value === "peerlist") {
    $$renderer.push("<!--[1-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    Peerlist_logo_mark($$renderer, { size: 16 });
    $$renderer.push(`<!----></span>`);
  } else if (option.brand === "x" || option.value === "x") {
    $$renderer.push("<!--[2-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    X_logo_mark($$renderer, { size: 12 });
    $$renderer.push(`<!----></span>`);
  } else if (option.brand === "linkedin" || option.value === "linkedin") {
    $$renderer.push("<!--[3-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    Linkedin_logo_mark($$renderer, { size: 16 });
    $$renderer.push(`<!----></span>`);
  } else if (option.brand === "threads" || option.value === "threads") {
    $$renderer.push("<!--[4-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    Threads_logo_mark($$renderer, { size: 16 });
    $$renderer.push(`<!----></span>`);
  } else if (option.brand === "pinterest" || option.value === "pinterest") {
    $$renderer.push("<!--[5-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    Pinterest_logo_mark($$renderer, { size: 16 });
    $$renderer.push(`<!----></span>`);
  } else if (option.brand === "snapchat" || option.value === "snapchat") {
    $$renderer.push("<!--[6-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    Snapchat_logo_mark($$renderer, { size: 16 });
    $$renderer.push(`<!----></span>`);
  } else if (option.brand === "whatsapp" || option.value === "whatsapp") {
    $$renderer.push("<!--[7-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    Whatsapp_logo_mark($$renderer, { size: 16 });
    $$renderer.push(`<!----></span>`);
  } else if (option.brand === "discord" || option.value === "discord") {
    $$renderer.push("<!--[8-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    Discord_logo_mark($$renderer, { size: 16 });
    $$renderer.push(`<!----></span>`);
  } else if (option.brand === "sharechat" || option.value === "sharechat") {
    $$renderer.push("<!--[9-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    Sharechat_logo_mark($$renderer, { size: 16 });
    $$renderer.push(`<!----></span>`);
  } else if (option.brand === "substack" || option.value === "substack") {
    $$renderer.push("<!--[10-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    Substack_logo_mark($$renderer, { size: 16 });
    $$renderer.push(`<!----></span>`);
  } else if (option.brand === "telegram" || option.value === "telegram") {
    $$renderer.push("<!--[11-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    Telegram_logo_mark($$renderer, { size: 16 });
    $$renderer.push(`<!----></span>`);
  } else if (option.brand === "tiktok" || option.value === "tiktok") {
    $$renderer.push("<!--[12-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    Tiktok_logo_mark($$renderer, { size: 16 });
    $$renderer.push(`<!----></span>`);
  } else if (option.brand === "instagram" || option.value === "instagram") {
    $$renderer.push("<!--[13-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    Instagram_logo_mark($$renderer, { size: 16 });
    $$renderer.push(`<!----></span>`);
  } else if (option.brand === "facebook" || option.value === "facebook") {
    $$renderer.push("<!--[14-->");
    $$renderer.push(`<span class="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">`);
    Facebook_logo_mark($$renderer, { size: 16 });
    $$renderer.push(`<!----></span>`);
  } else {
    $$renderer.push("<!--[-1-->");
    $$renderer.push(`<span class="flex items-center justify-center w-4 h-4 rounded-full border-shadow"${attr_style(`background: ${stringify(option.preview)};`)}></span>`);
  }
  $$renderer.push(`<!--]-->`);
}
function Theme_select($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value, label = "", options, handleValueChange } = $$props;
    let open = false;
    const selectedOption = derived$1(() => options.find((item) => item.value === value));
    const brandOptions = derived$1(() => options.filter((o) => o.brand));
    const themeOptions = derived$1(() => options.filter((o) => !o.brand));
    function onValueChange(val) {
      if (typeof val === "string" && handleValueChange) {
        handleValueChange(val);
      }
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="flex flex-col gap-1.5">`);
      if (label) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<span class="text-[10px] text-ink-700 font-medium uppercase tracking-wide">${escape_html(label)}</span>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (Select) {
        $$renderer3.push("<!--[-->");
        Select($$renderer3, {
          type: "single",
          value,
          onValueChange,
          get open() {
            return open;
          },
          set open($$value) {
            open = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            if (Select_trigger) {
              $$renderer4.push("<!--[-->");
              Select_trigger($$renderer4, {
                class: "select-trigger border-shadow hover:border-shadow-hover transition-shadow duration-150",
                "aria-label": "Select theme",
                children: ($$renderer5) => {
                  if (selectedOption()) {
                    $$renderer5.push("<!--[0-->");
                    themeIcon($$renderer5, selectedOption());
                  } else {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--> `);
                  Chevron_down($$renderer5, {
                    class: `size-4.5 text-ink-500 transition-transform duration-150 ${stringify(open ? "rotate-180" : "")}`
                  });
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
            $$renderer4.push(` `);
            if (Portal) {
              $$renderer4.push("<!--[-->");
              Portal($$renderer4, {
                children: ($$renderer5) => {
                  if (Select_content) {
                    $$renderer5.push("<!--[-->");
                    Select_content($$renderer5, {
                      class: "select-dropdown select-dropdown--start",
                      sideOffset: 4,
                      side: "top",
                      align: "start",
                      children: ($$renderer6) => {
                        if (Select_viewport) {
                          $$renderer6.push("<!--[-->");
                          Select_viewport($$renderer6, {
                            class: "options-viewport",
                            children: ($$renderer7) => {
                              if (brandOptions().length > 0) {
                                $$renderer7.push("<!--[0-->");
                                if (Select_group) {
                                  $$renderer7.push("<!--[-->");
                                  Select_group($$renderer7, {
                                    children: ($$renderer8) => {
                                      if (Select_group_heading) {
                                        $$renderer8.push("<!--[-->");
                                        Select_group_heading($$renderer8, {
                                          class: "select-group-heading",
                                          children: ($$renderer9) => {
                                            $$renderer9.push(`<!---->Brand`);
                                          },
                                          $$slots: { default: true }
                                        });
                                        $$renderer8.push("<!--]-->");
                                      } else {
                                        $$renderer8.push("<!--[!-->");
                                        $$renderer8.push("<!--]-->");
                                      }
                                      $$renderer8.push(` <!--[-->`);
                                      const each_array = ensure_array_like(brandOptions());
                                      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                                        let option = each_array[$$index];
                                        if (Select_item) {
                                          $$renderer8.push("<!--[-->");
                                          Select_item($$renderer8, {
                                            class: `select-option ${stringify(option.value === value ? "select-option-active" : "")}`,
                                            value: option.value,
                                            label: option.label,
                                            disabled: option.disabled ?? false,
                                            children: ($$renderer9) => {
                                              $$renderer9.push(`<div class="option-content">`);
                                              themeIcon($$renderer9, option);
                                              $$renderer9.push(`<!----> <span class="option-label">${escape_html(option.label)}</span></div>`);
                                            },
                                            $$slots: { default: true }
                                          });
                                          $$renderer8.push("<!--]-->");
                                        } else {
                                          $$renderer8.push("<!--[!-->");
                                          $$renderer8.push("<!--]-->");
                                        }
                                      }
                                      $$renderer8.push(`<!--]-->`);
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer7.push("<!--]-->");
                                } else {
                                  $$renderer7.push("<!--[!-->");
                                  $$renderer7.push("<!--]-->");
                                }
                              } else {
                                $$renderer7.push("<!--[-1-->");
                              }
                              $$renderer7.push(`<!--]--> `);
                              if (brandOptions().length > 0 && themeOptions().length > 0) {
                                $$renderer7.push("<!--[0-->");
                                $$renderer7.push(`<div class="my-1 -mx-1.5 h-px bg-black/10"></div>`);
                              } else {
                                $$renderer7.push("<!--[-1-->");
                              }
                              $$renderer7.push(`<!--]--> `);
                              if (themeOptions().length > 0) {
                                $$renderer7.push("<!--[0-->");
                                if (Select_group) {
                                  $$renderer7.push("<!--[-->");
                                  Select_group($$renderer7, {
                                    children: ($$renderer8) => {
                                      if (Select_group_heading) {
                                        $$renderer8.push("<!--[-->");
                                        Select_group_heading($$renderer8, {
                                          class: "select-group-heading",
                                          children: ($$renderer9) => {
                                            $$renderer9.push(`<!---->Themes`);
                                          },
                                          $$slots: { default: true }
                                        });
                                        $$renderer8.push("<!--]-->");
                                      } else {
                                        $$renderer8.push("<!--[!-->");
                                        $$renderer8.push("<!--]-->");
                                      }
                                      $$renderer8.push(` <!--[-->`);
                                      const each_array_1 = ensure_array_like(themeOptions());
                                      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                                        let option = each_array_1[$$index_1];
                                        if (Select_item) {
                                          $$renderer8.push("<!--[-->");
                                          Select_item($$renderer8, {
                                            class: `select-option ${stringify(option.value === value ? "select-option-active" : "")}`,
                                            value: option.value,
                                            label: option.label,
                                            disabled: option.disabled ?? false,
                                            children: ($$renderer9) => {
                                              $$renderer9.push(`<div class="option-content">`);
                                              themeIcon($$renderer9, option);
                                              $$renderer9.push(`<!----> <span class="option-label">${escape_html(option.label)}</span></div>`);
                                            },
                                            $$slots: { default: true }
                                          });
                                          $$renderer8.push("<!--]-->");
                                        } else {
                                          $$renderer8.push("<!--[!-->");
                                          $$renderer8.push("<!--]-->");
                                        }
                                      }
                                      $$renderer8.push(`<!--]-->`);
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer7.push("<!--]-->");
                                } else {
                                  $$renderer7.push("<!--[!-->");
                                  $$renderer7.push("<!--]-->");
                                }
                              } else {
                                $$renderer7.push("<!--[-1-->");
                              }
                              $$renderer7.push(`<!--]-->`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer6.push("<!--]-->");
                        } else {
                          $$renderer6.push("<!--[!-->");
                          $$renderer6.push("<!--]-->");
                        }
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push("<!--]-->");
                  } else {
                    $$renderer5.push("<!--[!-->");
                    $$renderer5.push("<!--]-->");
                  }
                }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
          },
          $$slots: { default: true }
        });
        $$renderer3.push("<!--]-->");
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push("<!--]-->");
      }
      $$renderer3.push(`</div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function Theme_selector($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let currentValue;
    const themes = Object.values(THEMES);
    const BRAND_LABELS = {
      vercel: "Vercel",
      peerlist: "Peerlist",
      x: "X",
      linkedin: "LinkedIn",
      threads: "Threads",
      pinterest: "Pinterest",
      snapchat: "Snapchat",
      whatsapp: "WhatsApp",
      discord: "Discord",
      sharechat: "ShareChat",
      substack: "Substack",
      telegram: "Telegram",
      tiktok: "TikTok",
      instagram: "Instagram",
      facebook: "Facebook"
    };
    const BRAND_DEFAULT_THEME = {
      vercel: "vercel-dark",
      peerlist: "peerlist-dark",
      x: "x-dark",
      linkedin: "linkedin-dark",
      threads: "threads-dark",
      pinterest: "pinterest-dark",
      snapchat: "snapchat-dark",
      whatsapp: "whatsapp-dark",
      discord: "discord-dark",
      sharechat: "sharechat-dark",
      substack: "substack-dark",
      telegram: "telegram-dark",
      tiktok: "tiktok-dark",
      instagram: "instagram-dark",
      facebook: "facebook-dark"
    };
    function getThemePreviewBg(theme) {
      if (theme?.backgroundImage) {
        return theme.backgroundImage;
      }
      return theme?.background || "#fdfcf9";
    }
    const groupedOptions = [];
    const brandSeen = /* @__PURE__ */ new Set();
    themes.forEach((theme) => {
      if (theme.brand) {
        if (!brandSeen.has(theme.brand)) {
          brandSeen.add(theme.brand);
          groupedOptions.push({
            value: theme.brand,
            label: BRAND_LABELS[theme.brand] || theme.brand.charAt(0).toUpperCase() + theme.brand.slice(1),
            preview: getThemePreviewBg(theme),
            brand: theme.brand
          });
        }
      } else {
        groupedOptions.push({
          value: theme.id,
          label: theme.name,
          preview: getThemePreviewBg(theme)
        });
      }
    });
    function handleChange(value) {
      selectedThemeId.set(BRAND_DEFAULT_THEME[value] || value);
    }
    currentValue = THEMES[store_get($$store_subs ??= {}, "$selectedThemeId", selectedThemeId)]?.brand || store_get($$store_subs ??= {}, "$selectedThemeId", selectedThemeId);
    Theme_select($$renderer2, {
      value: currentValue,
      options: groupedOptions,
      label: "Theme",
      handleValueChange: handleChange
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Align_left($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"${attr_class(clsx(className))}><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="15" y2="12"></line><line x1="3" y1="18" x2="18" y2="18"></line></svg>`);
}
function Align_center($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"${attr_class(clsx(className))}><line x1="3" y1="6" x2="21" y2="6"></line><line x1="6" y1="12" x2="18" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>`);
}
function Align_right($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"${attr_class(clsx(className))}><line x1="3" y1="6" x2="21" y2="6"></line><line x1="9" y1="12" x2="21" y2="12"></line><line x1="6" y1="18" x2="21" y2="18"></line></svg>`);
}
function Alignment_control($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const alignments = [
      { id: "left", label: "Align left" },
      { id: "center", label: "Align center" },
      { id: "right", label: "Align right" }
    ];
    $$renderer2.push(`<div class="flex flex-col gap-1.5"><span class="text-[10px] text-ink-700 font-medium uppercase tracking-wide">Align</span> <div class="flex items-center bg-parchment-50 gap-0.5 h-8 p-1 border-shadow hover:border-shadow-hover transition-shadow duration-150 rounded-lg"><!--[-->`);
    const each_array = ensure_array_like(alignments);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let align = each_array[$$index];
      $$renderer2.push(`<button${attr_class("flex items-center justify-center py-1 px-1.5 border-none rounded-sm cursor-pointer transition-colors duration-150 ease-out text-ink-700 [&amp;.active]:text-ink-900 hover:bg-parchment-200 [&amp;.active]:bg-parchment-300 [&amp;>svg]:w-4 [&amp;>svg]:h-4", void 0, {
        "active": store_get($$store_subs ??= {}, "$alignment", alignment) === align.id
      })}${attr("title", align.label)}${attr("aria-label", align.label)}>`);
      if (align.id === "left") {
        $$renderer2.push("<!--[0-->");
        Align_left($$renderer2, {});
      } else if (align.id === "center") {
        $$renderer2.push("<!--[1-->");
        Align_center($$renderer2, {});
      } else {
        $$renderer2.push("<!--[-1-->");
        Align_right($$renderer2, {});
      }
      $$renderer2.push(`<!--]--></button>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Padding_control($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="flex flex-col gap-1.5"><span class="text-[10px] text-ink-700 font-medium uppercase tracking-wide">Padding</span> <div class="flex items-center bg-parchment-50 gap-0.5 h-8 p-1 border-shadow hover:border-shadow-hover transition-shadow duration-150 rounded-lg"><!--[-->`);
    const each_array = ensure_array_like(PADDING_PRESETS);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let preset = each_array[$$index];
      $$renderer2.push(`<button${attr_class("py-1 px-1.5 text-[11px] font-medium border-none rounded-sm cursor-pointer transition-colors duration-150 ease-out text-ink-700 [&amp;.active]:text-ink-900 hover:bg-parchment-200 [&amp;.active]:bg-parchment-300", void 0, {
        "active": store_get($$store_subs ??= {}, "$padding", padding) === preset
      })}>${escape_html(preset)}</button>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Font_select($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value, label = "", options, handleValueChange } = $$props;
    let open = false;
    const selectedOption = derived$1(() => options.find((item) => item.value === value));
    const selectedFontFamily = derived$1(() => selectedOption()?.fontFamily || "");
    function onValueChange(val) {
      if (typeof val === "string" && handleValueChange) {
        handleValueChange(val);
      }
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="flex flex-col gap-1.5">`);
      if (label) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<span class="text-[10px] text-ink-700 font-medium uppercase tracking-wide">${escape_html(label)}</span>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (Select) {
        $$renderer3.push("<!--[-->");
        Select($$renderer3, {
          type: "single",
          value,
          onValueChange,
          get open() {
            return open;
          },
          set open($$value) {
            open = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            if (Select_trigger) {
              $$renderer4.push("<!--[-->");
              Select_trigger($$renderer4, {
                class: "select-trigger border-shadow hover:border-shadow-hover transition-shadow duration-150",
                "aria-label": "Select font",
                children: ($$renderer5) => {
                  $$renderer5.push(`<span class="text-base font-medium w-6 text-center"${attr_style(`font-family: ${stringify(selectedFontFamily())}`)}>Aa</span> `);
                  Chevron_down($$renderer5, {
                    class: `size-4.5 text-ink-500 transition-transform duration-150 ${stringify(open ? "rotate-180" : "")}`
                  });
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
            $$renderer4.push(` `);
            if (Portal) {
              $$renderer4.push("<!--[-->");
              Portal($$renderer4, {
                children: ($$renderer5) => {
                  if (Select_content) {
                    $$renderer5.push("<!--[-->");
                    Select_content($$renderer5, {
                      class: "select-dropdown select-dropdown--start",
                      sideOffset: 4,
                      side: "top",
                      align: "start",
                      children: ($$renderer6) => {
                        if (Select_viewport) {
                          $$renderer6.push("<!--[-->");
                          Select_viewport($$renderer6, {
                            class: "options-viewport",
                            children: ($$renderer7) => {
                              $$renderer7.push(`<!--[-->`);
                              const each_array = ensure_array_like(options);
                              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                                let option = each_array[$$index];
                                if (Select_item) {
                                  $$renderer7.push("<!--[-->");
                                  Select_item($$renderer7, {
                                    class: `select-option ${stringify(option.value === value ? "select-option-active" : "")}`,
                                    value: option.value,
                                    label: option.label,
                                    disabled: option.disabled ?? false,
                                    children: ($$renderer8) => {
                                      $$renderer8.push(`<div class="option-content"><span class="option-label">${escape_html(option.label)}</span></div>`);
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer7.push("<!--]-->");
                                } else {
                                  $$renderer7.push("<!--[!-->");
                                  $$renderer7.push("<!--]-->");
                                }
                              }
                              $$renderer7.push(`<!--]-->`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer6.push("<!--]-->");
                        } else {
                          $$renderer6.push("<!--[!-->");
                          $$renderer6.push("<!--]-->");
                        }
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push("<!--]-->");
                  } else {
                    $$renderer5.push("<!--[!-->");
                    $$renderer5.push("<!--]-->");
                  }
                }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
          },
          $$slots: { default: true }
        });
        $$renderer3.push("<!--]-->");
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push("<!--]-->");
      }
      $$renderer3.push(`</div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function Font_selector($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let effectiveFont;
    const fonts = Object.entries(FONTS);
    const fontOptions = fonts.map(([fontId, font]) => ({ value: fontId, label: font.name, fontFamily: font.css }));
    function handleChange(value) {
      selectedFontId.set(value);
    }
    effectiveFont = store_get($$store_subs ??= {}, "$selectedFontId", selectedFontId) || store_get($$store_subs ??= {}, "$selectedTheme", selectedTheme)?.font || "playfair";
    Font_select($$renderer2, {
      value: effectiveFont,
      options: fontOptions,
      label: "Font",
      handleValueChange: handleChange
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Toggle_control($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let store = $$props["store"];
    let label = $$props["label"];
    $$renderer2.push(`<div class="flex flex-col gap-1.5"><span class="text-[10px] text-ink-700 font-medium uppercase tracking-wide whitespace-nowrap">${escape_html(label)}</span> <div class="flex items-center h-8"><button${attr_class(`group relative w-10 h-[22px] p-0.5 rounded-full cursor-pointer transition-colors duration-200 border-shadow hover:border-shadow-hover focus-visible:outline-none ${stringify(store_get($$store_subs ??= {}, "$store", store) ? "bg-parchment-300" : "bg-parchment-100 hover:bg-parchment-200")}`)} role="switch"${attr("aria-checked", store_get($$store_subs ??= {}, "$store", store))}${attr("aria-label", `Toggle ${stringify(label)}`)}><span${attr_class(`block size-[18px] rounded-full bg-parchment-50 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_4px_rgba(0,0,0,0.08)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-active:scale-90 ${stringify(store_get($$store_subs ??= {}, "$store", store) ? "translate-x-[18px]" : "translate-x-0")}`)}></span></button></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { store, label });
  });
}
function Spinner($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<svg${attr_class(clsx(className))} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.8"><path stroke-dasharray="16" stroke-dashoffset="16" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="16;0"></animate><animateTransform attributeName="transform" dur="0.4s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path><path stroke-opacity=".3" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"></path></g></svg>`);
}
function Export($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"${attr_class(clsx(className))}><path fill-rule="evenodd" clip-rule="evenodd" d="M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V4H7C4.79086 4 3 5.79086 3 8V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V8C21 5.79086 19.2091 4 17 4H13V2ZM13 4H11V12.0858L9.20711 10.2929C8.81658 9.90237 8.18342 9.90237 7.79289 10.2929C7.40237 10.6834 7.40237 11.3166 7.79289 11.7071L11.2929 15.2071C11.6834 15.5976 12.3166 15.5976 12.7071 15.2071L16.2071 11.7071C16.5976 11.3166 16.5976 10.6834 16.2071 10.2929C15.8166 9.90237 15.1834 9.90237 14.7929 10.2929L13 12.0858V4Z" fill="currentColor"></path></svg>`);
}
function Export_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let frameRef = fallback($$props["frameRef"], null);
    const variant = "default";
    let onToast = fallback($$props["onToast"], void 0);
    let isExporting = false;
    let showDropdown = false;
    $$renderer2.push(`<div class="relative export-dropdown"><button${attr_class("inline-flex items-center h-[30px] rounded-lg overflow-hidden text-sm font-medium bg-parchment-200/50 ml-2 sm:ml-3 hover:bg-parchment-200 transition-colors duration-150 ease-out cursor-pointer shadow-custom [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4", void 0, { "opacity-50": isExporting })} aria-label="Export options"${attr("aria-expanded", showDropdown)}${attr("aria-busy", isExporting)}><span class="group flex items-center gap-1.5 px-3 h-full">`);
    {
      $$renderer2.push("<!--[-1-->");
      Export($$renderer2, { class: "size-5 text-ink-900" });
    }
    $$renderer2.push(`<!--]--> <span class="text-ink-900">${escape_html("Export")}</span></span> <span class="w-px h-[30px] bg-parchment-300 shrink-0"></span> <span class="flex items-center px-3 h-full">`);
    Chevron_down($$renderer2, {
      class: `size-4.5 transition-transform duration-150 text-ink-900 ${stringify("")}`
    });
    $$renderer2.push(`<!----></span></button> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { frameRef, onToast, variant });
  });
}
function Checkmark($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"${attr_class(clsx(className))}><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.774 10.1333C16.1237 9.70582 16.0607 9.0758 15.6332 8.72607C15.2058 8.37635 14.5758 8.43935 14.226 8.86679L10.4258 13.5116L9.20711 12.2929C8.81658 11.9024 8.18342 11.9024 7.79289 12.2929C7.40237 12.6834 7.40237 13.3166 7.79289 13.7071L9.79289 15.7071C9.99267 15.9069 10.2676 16.0129 10.5498 15.9988C10.832 15.9847 11.095 15.8519 11.274 15.6333L15.774 10.1333Z" fill="currentColor"></path></svg>`);
}
function Alert($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"${attr_class(clsx(className))}><path fill-rule="evenodd" clip-rule="evenodd" d="M8.6026 4.07088C10.1677 1.5532 13.8318 1.5532 15.3969 4.07088L21.4996 13.8884C23.156 16.5529 21.2399 20.0001 18.1025 20.0001H5.89699C2.75962 20.0001 0.843525 16.5529 2.49985 13.8884L8.6026 4.07088ZM12 8C12.5523 8 13 8.44771 13 9V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V9C11 8.44771 11.4477 8 12 8ZM10.75 15C10.75 14.3096 11.3096 13.75 12 13.75C12.6904 13.75 13.25 14.3096 13.25 15C13.25 15.6904 12.6904 16.25 12 16.25C11.3096 16.25 10.75 15.6904 10.75 15Z" fill="currentColor"></path></svg>`);
}
function Toast($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      message = "",
      type = "info"
    } = $$props;
    $$renderer2.push(`<div class="fixed bottom-4 right-4 z-50"><div${attr_class(`px-4 py-3 rounded-xl border-shadow flex items-center gap-2 ${stringify(
      // Reset dismiss timer when copy or duration changes (onMount alone left a stale timer).
      // track dependencies explicitly
      type === "success" ? "bg-green-500 text-green-100" : ""
    )} ${stringify(type === "error" ? "bg-red-500 text-red-100" : "")} ${stringify(type === "info" ? "bg-parchment-400 text-ink-900" : "")}`)}>`);
    if (type === "success") {
      $$renderer2.push("<!--[0-->");
      Checkmark($$renderer2, { class: "size-5" });
    } else if (type === "error") {
      $$renderer2.push("<!--[1-->");
      Alert($$renderer2, { class: "size-5" });
    } else {
      $$renderer2.push("<!--[-1-->");
      Spinner($$renderer2, { class: "size-5 animate-spin text-ink-900" });
    }
    $$renderer2.push(`<!--]--> <span class="text-sm font-medium">${escape_html(message)}</span></div></div>`);
  });
}
function Resizable_frame($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { children } = $$props;
    let isResizing = false;
    onDestroy(() => {
    });
    $$renderer2.push(`<div${attr_class("resizable-frame svelte-1k6lkwh", void 0, { "is-resizing": isResizing })}>`);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (store_get($$store_subs ??= {}, "$frameWidth", frameWidth) && !isResizing) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="reset-container svelte-1k6lkwh"><button class="reset-button svelte-1k6lkwh">Set to auto width</button></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->  <div class="drag-handle left svelte-1k6lkwh"></div>  <div class="drag-handle right svelte-1k6lkwh"></div> <div class="frame-content svelte-1k6lkwh"${attr_style(`width: ${stringify(store_get($$store_subs ??= {}, "$frameWidth", frameWidth) ? `${store_get($$store_subs ??= {}, "$frameWidth", frameWidth)}px` : "auto")}`)}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Aashuu_logo_mark($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1080 1080" fill="none"><image href="/aashuu.png" width="1080" height="1080" preserveAspectRatio="xMidYMid meet"></image></svg>`);
}
function Close($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"${attr_class(clsx(className))}><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z" fill="currentColor"></path></svg>`);
}
function About_modal($$renderer, $$props) {
  let open = fallback($$props["open"], false);
  if (open) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<div class="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300"><div class="modal relative w-full max-w-md p-6 bg-parchment-100 rounded-3xl border border-parchment-500 overflow-hidden transition-all duration-300 transform scale-100 shadow-sm svelte-1z0z2wd"><div class="flex items-center justify-between mb-4"><h2 class="text-2xl font-semibold text-ink-900">About</h2> <button class="group flex items-center justify-center rounded-full size-7 bg-parchment-50 border border-ink-300" aria-label="close">`);
    Close($$renderer, {
      class: "size-5 text-ink-400 group-hover:text-ink-500 transition-colors ease-out duration-200"
    });
    $$renderer.push(`<!----></button></div> <div class="space-y-3 text-sm leading-relaxed text-ink-700 mb-4"><p>Quotee is a tool to create beautiful, shareable images of your favorite quotes.</p> <p>Pick a theme from a range of styles and backgrounds, customize the font, alignment, and
          padding.</p> <p>When you're ready, click export to save the image as a PNG, SVG or copy it to your
          clipboard.</p> <p>If you have any questions or feedback, write to us on <a href="https://x.com/warrioraashuu" target="_blank" rel="noopener noreferrer" class="underline text-ink-900">𝕏</a> or <a aria-label="mail" href="mailto:hellow.ashutosh@gmail.com" target="_blank" rel="noopener noreferrer" class="underline font-medium text-ink-900">email us</a>.</p></div> <div class="my-1 -mx-4 h-px bg-black/20"></div> <div class="flex items-center justify-between mt-4"><a href="https://www.aashuu.tech/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:underline text-ink-900 transition"><div class="flex items-center justify-center">`);
    Aashuu_logo_mark($$renderer, { class: "w-6 h-6" });
    $$renderer.push(`<!----></div> <span class="text-[13px] font-medium">creator ✦ aashuu</span></a> <a href="https://x.com/warrioraashuu" target="_blank" rel="noopener noreferrer" class="text-ink-900 transition hover:text-ink-800" aria-label="Follow on X">`);
    X_logo_mark($$renderer, { size: 14, color: "black" });
    $$renderer.push(`<!----></a></div></div></div>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]-->`);
  bind_props($$props, { open });
}
function Quotee_logo_mark($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" width="32" height="32" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg"><image href="/Quotee.png" width="1080" height="1080" preserveAspectRatio="xMidYMid meet"></image></svg>`);
}
function Import_modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let open = fallback($$props["open"], false);
    let url = "";
    let messageInterval;
    const placeholderMessages = [
      "https://x.com/username/status/...",
      "https://peerlist.io/scroll/post/...",
      "https://www.linkedin.com/posts/...",
      "https://www.threads.net/@username/post/...",
      "https://www.facebook.com/...",
      "https://your-publication.substack.com/p/..."
    ];
    let currentPlaceholderIndex = 0;
    onDestroy(() => {
      if (messageInterval) clearInterval(messageInterval);
    });
    {
      clearInterval(messageInterval);
      messageInterval = null;
    }
    if (
      // Smart theme switching based on detected platform
      open
    ) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300 svelte-1036lzz"><div class="bg-parchment-100 p-4 w-full max-w-md h-75 flex flex-col rounded-3xl border border-parchment-500 overflow-hidden transition-all duration-300 transform scale-100 shadow-sm svelte-1036lzz"><div class="flex items-center justify-between mb-4 shrink-0 svelte-1036lzz"><h2 class="text-2xl font-semibold text-ink-900 svelte-1036lzz">Import from Social</h2> <button class="group flex items-center justify-center rounded-full size-7 bg-parchment-50 border border-ink-300 svelte-1036lzz" aria-label="close">`);
      Close($$renderer2, {
        class: "size-5 text-ink-400 group-hover:text-ink-500 transition-colors ease-out duration-200"
      });
      $$renderer2.push(`<!----></button></div> <div class="flex-1 flex flex-col svelte-1036lzz">`);
      {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="flex-1 flex flex-col justify-end svelte-1036lzz"><div class="mb-6 text-center svelte-1036lzz"><p class="text-ink-700 text-base leading-relaxed svelte-1036lzz">Paste a link from</p> <div class="mt-2 flex items-center justify-center gap-3 svelte-1036lzz" aria-label="Supported platforms"><span class="inline-flex items-center svelte-1036lzz" aria-hidden="true">`);
        X_logo_mark($$renderer2, { size: 13, color: "black" });
        $$renderer2.push(`<!----></span> <span class="inline-flex items-center svelte-1036lzz" aria-hidden="true">`);
        Linkedin_logo_mark($$renderer2, { size: 18 });
        $$renderer2.push(`<!----></span> <span class="inline-flex items-center svelte-1036lzz" aria-hidden="true">`);
        Substack_logo_mark($$renderer2, { size: 18 });
        $$renderer2.push(`<!----></span> <span class="inline-flex items-center svelte-1036lzz" aria-hidden="true">`);
        Facebook_logo_mark($$renderer2, { size: 18 });
        $$renderer2.push(`<!----></span> <span class="inline-flex items-center svelte-1036lzz" aria-hidden="true">`);
        Threads_logo_mark($$renderer2, { size: 18 });
        $$renderer2.push(`<!----></span> <span class="inline-flex items-center svelte-1036lzz" aria-hidden="true">`);
        Peerlist_logo_mark($$renderer2, { size: 18 });
        $$renderer2.push(`<!----></span></div> <p class="mt-2 text-sm text-ink-500 svelte-1036lzz">Post link to automatically extract quotes from the post!</p></div> <div class="flex flex-col gap-4 svelte-1036lzz"><div class="relative w-full h-10 group svelte-1036lzz"><input type="url"${attr("value", url)} class="w-full h-full px-4 py-2 rounded-lg shadow-custom bg-parchment-50 text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-500/20 transition-all svelte-1036lzz"/> `);
        {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="absolute inset-0 px-4 flex items-center pointer-events-none overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] svelte-1036lzz"><!---->`);
          {
            $$renderer2.push(`<p class="text-ink-300 text-sm absolute whitespace-nowrap svelte-1036lzz">${escape_html(placeholderMessages[currentPlaceholderIndex])}</p>`);
          }
          $$renderer2.push(`<!----></div>`);
        }
        $$renderer2.push(`<!--]--></div> <button${attr("disabled", !url, true)} class="w-full py-2 px-4 bg-ink-950 text-parchment-50 border-shadow rounded-lg font-medium hover:bg-ink-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer svelte-1036lzz">Import Quote</button></div></div>`);
      }
      $$renderer2.push(`<!--]--></div></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { open });
  });
}
function Info($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"${attr_class(clsx(className))}><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12.0098 7C12.5621 7 13.0098 7.44772 13.0098 8C13.0098 8.55228 12.5621 9 12.0098 9H12C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7H12.0098ZM11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" fill="currentColor"></path></svg>`);
}
function Social_link($$renderer, $$props) {
  let { class: className = "" } = $$props;
  $$renderer.push(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"${attr_class(clsx(className))}><path fill-rule="evenodd" clip-rule="evenodd" d="M6.46447 9.12169C8.4171 7.16907 11.5829 7.16907 13.5355 9.12169L13.8787 9.46484C14.695 10.2811 15.1709 11.3121 15.3042 12.3761C15.3729 12.9241 14.9843 13.424 14.4363 13.4926C13.8883 13.5613 13.3884 13.1727 13.3197 12.6247C13.2397 11.9862 12.9554 11.37 12.4645 10.8791L12.1213 10.5359C10.9498 9.36433 9.05026 9.36433 7.87869 10.5359L4.53554 13.8791C3.36397 15.0506 3.36397 16.9501 4.53554 18.1217L4.87869 18.4648C6.05026 19.6364 7.94976 19.6364 9.12133 18.4648L9.29287 18.2933C9.68338 17.9027 10.3165 17.9027 10.7071 18.2932C11.0976 18.6837 11.0976 19.3169 10.7071 19.7074L10.5356 19.879C8.58295 21.8316 5.41709 21.8317 3.46447 19.879L3.12133 19.5359C1.16871 17.5833 1.1687 14.4175 3.12133 12.4648L6.46447 9.12169Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4644 5.12169C15.417 3.16907 18.5829 3.16907 20.5355 5.12169L20.8786 5.46484C22.8313 7.41746 22.8313 10.5833 20.8786 12.5359L17.5355 15.8791C15.5829 17.8317 12.417 17.8317 10.4644 15.879L10.1213 15.5359C9.30498 14.7196 8.82902 13.6887 8.69573 12.6247C8.62708 12.0767 9.01568 11.5768 9.56368 11.5081C10.1117 11.4395 10.6116 11.8281 10.6802 12.3761C10.7602 13.0146 11.0445 13.6307 11.5355 14.1217L11.8786 14.4648C13.0502 15.6364 14.9497 15.6364 16.1213 14.4648L19.4644 11.1217C20.636 9.95012 20.636 8.05062 19.4644 6.87905L19.1213 6.53591C17.9497 5.36436 16.0503 5.36433 14.8787 6.53581C14.8788 6.53578 14.8787 6.53584 14.8787 6.53581L14.7072 6.70738C14.3167 7.09796 13.6836 7.09804 13.293 6.70757C12.9024 6.31709 12.9023 5.68393 13.2928 5.29335L13.4644 5.12169Z" fill="currentColor"></path></svg>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let isBrandTheme;
    let aboutOpen = false;
    let importOpen = false;
    let frameRef = null;
    let toast = null;
    let toastMessage = "";
    let toastType = "info";
    let showToast = false;
    function handleToast(detail) {
      toast = detail;
    }
    const isDarkMode = {
      subscribe: (cb) => {
        return selectedThemeId.subscribe((id) => cb(id.endsWith("-dark")));
      },
      update: (fn) => {
        const current = get$2(selectedThemeId);
        const nextDark = fn(current.endsWith("-dark"));
        const base = current.split("-")[0];
        selectedThemeId.set(`${base}-${nextDark ? "dark" : "light"}`);
      },
      set: (value) => {
        const current = get$2(selectedThemeId);
        const base = current.split("-")[0];
        selectedThemeId.set(`${base}-${value ? "dark" : "light"}`);
      }
    };
    if (toast) {
      toastMessage = toast.message;
      toastType = toast.type ?? "info";
      showToast = true;
    } else {
      showToast = false;
    }
    isBrandTheme = Boolean(store_get($$store_subs ??= {}, "$selectedTheme", selectedTheme)?.brand);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("1uha8ag", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>Quotee — Create quotes that hit.</title>`);
        });
        $$renderer4.push(`<meta name="description" content="Create beautiful, shareable images of your favorite quotes. Choose from elegant themes."/>`);
      });
      $$renderer3.push(`<div class="grid w-full min-h-screen grid-rows-[auto_1fr_auto]"><header class="bg-parchment-50/10 border-b border-b-white/10 backdrop-filter backdrop-blur-sm shadow-sm h-[50px] px-4 py-2 z-20 w-full sticky top-0"><div class="mx-auto flex items-center justify-between"><div class="flex flex-row gap-3 items-center"><h1 class="sr-only">Quotee</h1> <div class="inline-flex shrink-0 items-center justify-center whitespace-nowrap h-[30px] gap-2 px-3 pl-1 pr-2 py-1">`);
      Quotee_logo_mark($$renderer3, { class: "h-6 w-6" });
      $$renderer3.push(`<!----> <span class="font-instrument-serif text-2xl leading-none -translate-y-[1px]">Quotee</span></div> <div class="-ml-2 flex items-center relative z-10 gap-[4px]"><span class="text-sm opacity-50">by</span> <a href="https://www.aashuu.tech/" class="inline-flex shrink-0 items-center justify-center whitespace-nowrap overflow-hidden h-[30px] gap-1.5 no-underline text-inherit px-3 pl-[8px]" aria-label="aashuu" target="_blank" rel="noopener noreferrer">`);
      Aashuu_logo_mark($$renderer3, { class: "w-6 h-6" });
      $$renderer3.push(`<!----> <span class="hidden sm:block font-instrument-serif text-2xl leading-none">aashuu</span></a></div></div> <div class="flex items-center"><button class="group flex items-center gap-1.5 text-sm font-medium transition-all duration-150 ease-out cursor-pointer px-2 sm:px-3 h-[30px] rounded-lg hover:bg-parchment-200 hover:shadow-custom">`);
      Info($$renderer3, {
        class: "text-ink-400 group-hover:text-ink-500 size-5 transition-colors duration-150 ease-out"
      });
      $$renderer3.push(`<!----> <span class="hidden sm:inline text-ink-600 group-hover:text-ink-700 transition-colors duration-150 ease-out">About</span></button> <button class="group flex items-center gap-1.5 text-sm font-medium transition-all duration-150 ease-out cursor-pointer px-2 sm:px-3 h-[30px] rounded-lg hover:bg-parchment-200 hover:shadow-custom">`);
      Social_link($$renderer3, {
        class: "text-ink-400 group-hover:text-ink-500 size-5 transition-colors duration-150 ease-out"
      });
      $$renderer3.push(`<!----> <span class="hidden sm:inline text-ink-600 group-hover:text-ink-700 transition-colors duration-150 ease-out">Import From Social</span></button> `);
      Export_button($$renderer3, { frameRef, variant: "navbar", onToast: handleToast });
      $$renderer3.push(`<!----></div></div></header> <main class="flex items-center justify-center p-4 pt-8 pb-30"><div class="flex flex-col items-center w-full">`);
      {
        let children = function($$renderer4) {
          $$renderer4.push(`<div class="overflow-hidden bg-black/20">`);
          Quote_frame($$renderer4, {
            editable: true,
            get frameRef() {
              return frameRef;
            },
            set frameRef($$value) {
              frameRef = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----></div>`);
        };
        Resizable_frame($$renderer3, { children });
      }
      $$renderer3.push(`<!----></div></main> <div class="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-2 pb-2 sm:px-4 sm:pb-4 pointer-events-none"><div class="flex items-center gap-2 sm:gap-4 md:gap-6 py-3 md:py-4 px-3 sm:px-4 md:px-6 bg-white rounded-2xl border-shadow hover:border-shadow-hover transition-shadow duration-150 pointer-events-auto overflow-x-auto md:overflow-visible scrollbar-none max-w-full">`);
      Theme_selector($$renderer3);
      $$renderer3.push(`<!----> `);
      Font_selector($$renderer3);
      $$renderer3.push(`<!----> `);
      Alignment_control($$renderer3);
      $$renderer3.push(`<!----> `);
      Padding_control($$renderer3);
      $$renderer3.push(`<!----> `);
      Toggle_control($$renderer3, { store: showQuoteMarks, label: "Quotes" });
      $$renderer3.push(`<!----> `);
      if (isBrandTheme) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="flex items-center gap-2 sm:gap-4 md:gap-6"><div class="w-px h-12 bg-black/10 rounded-full shrink-0"></div> `);
        Toggle_control($$renderer3, { store: showBrandLogo, label: "Logo" });
        $$renderer3.push(`<!----> `);
        if (store_get($$store_subs ??= {}, "$selectedThemeId", selectedThemeId).includes("x")) {
          $$renderer3.push("<!--[0-->");
          Toggle_control($$renderer3, { store: showXVerifiedBadge, label: "Verified" });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        Toggle_control($$renderer3, { store: isDarkMode, label: "Dark Mode" });
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div></div></div> `);
      if (showToast) {
        $$renderer3.push("<!--[0-->");
        Toast($$renderer3, { message: toastMessage, type: toastType });
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      About_modal($$renderer3, {
        get open() {
          return aboutOpen;
        },
        set open($$value) {
          aboutOpen = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Import_modal($$renderer3, {
        get open() {
          return importOpen;
        },
        set open($$value) {
          importOpen = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
