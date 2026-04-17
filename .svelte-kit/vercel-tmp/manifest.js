export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","DevDisplay.png","Discord.png","Facebook.png","Instagram.png","LinkedinLogoMark.png","LinkedinWordMark.png","Pinterest.png","Quotee.png","ShareChat.png","Snapchat.png","Substack.png","Telegram.png","Threads.png","TikTok.png","WhatsApp.png","aashuu.png","apple-touch-icon.png","favicon-96x96.png","favicon.ico","fonts/.DS_Store","fonts/instrument-serif/InstrumentSerif-Italic.woff2","fonts/instrument-serif/InstrumentSerif-Regular.woff2","fonts/open-runde/OpenRunde-Bold.woff","fonts/open-runde/OpenRunde-Bold.woff2","fonts/open-runde/OpenRunde-Medium.woff","fonts/open-runde/OpenRunde-Medium.woff2","fonts/open-runde/OpenRunde-Regular.woff","fonts/open-runde/OpenRunde-Regular.woff2","fonts/open-runde/OpenRunde-Semibold.woff","fonts/open-runde/OpenRunde-Semibold.woff2","og-image.jpg","paper-texture-bg.jpg","site.webmanifest","vercel-dark-bg.jpg","vercel-light-bg.jpg","web-app-manifest-192x192.png","web-app-manifest-512x512.png"]),
	mimeTypes: {".png":"image/png",".woff2":"font/woff2",".woff":"font/woff",".jpg":"image/jpeg",".webmanifest":"application/manifest+json"},
	_: {
		client: {start:"_app/immutable/entry/start.TcwBrrvv.js",app:"_app/immutable/entry/app.CEEXt5AH.js",imports:["_app/immutable/entry/start.TcwBrrvv.js","_app/immutable/chunks/BedJfjPz.js","_app/immutable/chunks/B421Dg50.js","_app/immutable/entry/app.CEEXt5AH.js","_app/immutable/chunks/B421Dg50.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DuKrIh9g.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/parse-quote",
				pattern: /^\/api\/parse-quote\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/parse-quote/_server.ts.js'))
			},
			{
				id: "/api/track",
				pattern: /^\/api\/track\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/track/_server.ts.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
