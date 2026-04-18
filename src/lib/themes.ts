export type QuoteStyle = 'brutalist' | 'startup' | 'chirp' | 'editorial' | 'breeze' | 'aura' | 'paper' | 'noir' | 'glass' | 'claude-code';
export type Alignment = 'left' | 'center' | 'right';
export type FontFamily =
  | 'playfair'
  | 'old-standard'
  | 'geist'
  | 'inter'
  | 'mono'
  | 'instrument-serif'
  | 'ubuntu'
  | 'bricolage';
export type Brand =
  | 'vercel'
  | 'peerlist'
  | 'x'
  | 'linkedin'
  | 'threads'
  | 'pinterest'
  | 'snapchat'
  | 'whatsapp'
  | 'discord'
  | 'sharechat'
  | 'substack'
  | 'telegram'
  | 'tiktok'
  | 'instagram'
  | 'facebook';

export interface Theme {
  id: string;
  name: string;
  quoteStyle: QuoteStyle;
  background: string;
  cardBackground?: string;
  text: string;
  accent: string;
  quoteMark: string;
  border?: string;
  shadow?: boolean;
  font: FontFamily;
  authorFont?: FontFamily;
  brand?: Brand;
  defaultAlignment?: Alignment;
  // Background image support
  backgroundImage?: string;
  backgroundSize?: string;
}

export interface ThemeQuote {
  text: string;
  author: string;
}

export const FONTS: Record<FontFamily, { name: string; css: string }> = {
  'geist': {
    name: 'Geist',
    css: '"Geist", sans-serif',
  },
  'inter': {
    name: 'Inter',
    css: '"Inter", sans-serif',
  },
  'ubuntu': {
    name: 'Ubuntu',
    css: '"Ubuntu", sans-serif',
  },
  'bricolage': {
    name: 'Bricolage Grotesque',
    css: '"Bricolage Grotesque", sans-serif',
  },
   'playfair': {
    name: 'Playfair Display',
    css: '"Playfair Display", serif',
  },
  'old-standard': {
    name: 'Old Standard TT',
    css: '"Old Standard TT", serif',
  },
  'mono': {
    name: 'JetBrains Mono',
    css: '"JetBrains Mono", monospace',
  },
  'instrument-serif': {
    name: 'Instrument Serif',
    css: '"Instrument Serif", serif',
  }
};

export const THEMES: Record<string, Theme> = {
  "vercel-dark": {
    id: 'vercel-dark',
    name: 'Vercel Dark',
    quoteStyle: 'brutalist',
    background: '#000000',
    backgroundImage: 'url(/vercel-dark-bg.jpg)',
    backgroundSize: 'cover',
    cardBackground: '#000000',
    text: '#ffffff',
    accent: '#A0A0A0',
    quoteMark: '#0070F3',
    border: '#FFFFFF20',
    font: 'geist',
    authorFont: "geist",
    brand: 'vercel',
    defaultAlignment: 'left',
  },
  "vercel-light": {
    id: 'vercel-light',
    name: 'Vercel Light',
    quoteStyle: 'brutalist',
    background: '#ffffff',
    backgroundImage: 'url(/vercel-light-bg.jpg)',
    backgroundSize: 'cover',
    cardBackground: '#ffffff',
    text: '#111827',
    accent: '#666666',
    quoteMark: '#0070F3',
    border: '#0000001A',
    font: 'geist',
    authorFont: "geist",
    brand: 'vercel',
    defaultAlignment: 'left',
  },
  "peerlist-dark": {
    id: 'peerlist-dark',
    name: 'Peerlist Dark',
    quoteStyle: 'startup',
    background: "#171717",
    text: "#fafafa",
    accent: "#A0A0A0",
    quoteMark: "#00AA45",
    border: "#FFFFFF20",
    font: "instrument-serif",
    authorFont: "geist",
    brand: 'peerlist',
    defaultAlignment: 'left',
  },
  "peerlist-light": {
    id: 'peerlist-light',
    name: 'Peerlist Light',
    quoteStyle: 'startup',
    background: "#FFFFFF",
    text: "#0d0d0d",
    accent: "#666666",
    quoteMark: "#00AA45",
    border: "#0000001A",
    font: "instrument-serif",
    authorFont: "geist",
    brand: 'peerlist',
    defaultAlignment: 'left',
  },
  "x-dark": {
    id: 'x-dark',
    name: 'X Dark',
    quoteStyle: 'chirp',
    background: "#000000",
    text: "#ffffff",
    accent: "#71767b",
    quoteMark: "#1D9BF0",
    border: "#2f3336",
    font: "inter",
    authorFont: "inter",
    brand: 'x',
    defaultAlignment: 'left',
  },
  "x-light": {
    id: 'x-light',
    name: 'X Light',
    quoteStyle: 'chirp',
    background: "#ffffff",
    text: "#000000",
    accent: "#71767b",
    quoteMark: "#1D9BF0",
    border: "#EFF3F4",
    font: "inter",
    authorFont: "inter",
    brand: 'x',
    defaultAlignment: 'left',
  },
  "linkedin-dark": {
    id: 'linkedin-dark',
    name: 'LinkedIn Dark',
    quoteStyle: 'chirp',
    background: '#052333',
    text: '#EAF3FB',
    accent: '#95ABC0',
    quoteMark: '#70B5F9',
    border: '#2A3A52',
    font: 'inter',
    authorFont: 'inter',
    brand: 'linkedin',
    defaultAlignment: 'left',
  },
  "linkedin-light": {
    id: 'linkedin-light',
    name: 'LinkedIn Light',
    quoteStyle: 'chirp',
    background: '#FFFFFF',
    text: '#1F2328',
    accent: '#5E6A75',
    quoteMark: '#0A66C2',
    border: '#DDE7F1',
    font: 'inter',
    authorFont: 'inter',
    brand: 'linkedin',
    defaultAlignment: 'left',
  },
  "threads-dark": {
    id: 'threads-dark',
    name: 'Threads Dark',
    quoteStyle: 'chirp',
    background: '#101010',
    text: '#F5F5F5',
    accent: '#A0A0A0',
    quoteMark: '#FFFFFF',
    border: '#2B2B2B',
    font: 'inter',
    authorFont: 'inter',
    brand: 'threads',
    defaultAlignment: 'left',
  },
  "threads-light": {
    id: 'threads-light',
    name: 'Threads Light',
    quoteStyle: 'chirp',
    background: '#FFFFFF',
    text: '#111111',
    accent: '#6B6B6B',
    quoteMark: '#111111',
    border: '#E5E7EB',
    font: 'inter',
    authorFont: 'inter',
    brand: 'threads',
    defaultAlignment: 'left',
  },
  "pinterest-dark": {
    id: 'pinterest-dark',
    name: 'Pinterest Dark',
    quoteStyle: 'chirp',
    background: '#1A0F12',
    text: '#FFF2F5',
    accent: '#D9A8B3',
    quoteMark: '#E60023',
    border: '#432028',
    font: 'inter',
    authorFont: 'inter',
    brand: 'pinterest',
    defaultAlignment: 'left',
  },
  "pinterest-light": {
    id: 'pinterest-light',
    name: 'Pinterest Light',
    quoteStyle: 'chirp',
    background: '#FFF7F8',
    text: '#2B0E14',
    accent: '#9A6A75',
    quoteMark: '#E60023',
    border: '#F2D5DC',
    font: 'inter',
    authorFont: 'inter',
    brand: 'pinterest',
    defaultAlignment: 'left',
  },
  "snapchat-dark": {
    id: 'snapchat-dark',
    name: 'Snapchat Dark',
    quoteStyle: 'chirp',
    background: '#121212',
    text: '#FFFDE6',
    accent: '#B8B37A',
    quoteMark: '#FFFC00',
    border: '#3A3A1A',
    font: 'inter',
    authorFont: 'inter',
    brand: 'snapchat',
    defaultAlignment: 'left',
  },
  "snapchat-light": {
    id: 'snapchat-light',
    name: 'Snapchat Light',
    quoteStyle: 'chirp',
    background: '#FFFEEA',
    text: '#1A1A1A',
    accent: '#6E6E3A',
    quoteMark: '#FFFC00',
    border: '#EEE7A8',
    font: 'inter',
    authorFont: 'inter',
    brand: 'snapchat',
    defaultAlignment: 'left',
  },
  "whatsapp-dark": {
    id: 'whatsapp-dark',
    name: 'WhatsApp Dark',
    quoteStyle: 'chirp',
    background: '#0B1F16',
    text: '#EAFBF2',
    accent: '#8ECBA8',
    quoteMark: '#25D366',
    border: '#274A3A',
    font: 'inter',
    authorFont: 'inter',
    brand: 'whatsapp',
    defaultAlignment: 'left',
  },
  "whatsapp-light": {
    id: 'whatsapp-light',
    name: 'WhatsApp Light',
    quoteStyle: 'chirp',
    background: '#F4FFF8',
    text: '#102117',
    accent: '#4E7A62',
    quoteMark: '#25D366',
    border: '#CBEFD9',
    font: 'inter',
    authorFont: 'inter',
    brand: 'whatsapp',
    defaultAlignment: 'left',
  },
  "discord-dark": {
    id: 'discord-dark',
    name: 'Discord Dark',
    quoteStyle: 'chirp',
    background: '#1E1F2A',
    text: '#F3F5FF',
    accent: '#A8AFE9',
    quoteMark: '#5865F2',
    border: '#3A3F7A',
    font: 'inter',
    authorFont: 'inter',
    brand: 'discord',
    defaultAlignment: 'left',
  },
  "discord-light": {
    id: 'discord-light',
    name: 'Discord Light',
    quoteStyle: 'chirp',
    background: '#F6F7FF',
    text: '#1E2340',
    accent: '#6971B5',
    quoteMark: '#5865F2',
    border: '#D9DCF7',
    font: 'inter',
    authorFont: 'inter',
    brand: 'discord',
    defaultAlignment: 'left',
  },
  "sharechat-dark": {
    id: 'sharechat-dark',
    name: 'ShareChat Dark',
    quoteStyle: 'chirp',
    background: '#22170F',
    text: '#FFF3EA',
    accent: '#CFA38C',
    quoteMark: '#FF6D3A',
    border: '#4A2C1E',
    font: 'inter',
    authorFont: 'inter',
    brand: 'sharechat',
    defaultAlignment: 'left',
  },
  "sharechat-light": {
    id: 'sharechat-light',
    name: 'ShareChat Light',
    quoteStyle: 'chirp',
    background: '#FFF6F0',
    text: '#2B1A13',
    accent: '#9E6A58',
    quoteMark: '#FF6D3A',
    border: '#F2D9CC',
    font: 'inter',
    authorFont: 'inter',
    brand: 'sharechat',
    defaultAlignment: 'left',
  },
  "substack-dark": {
    id: 'substack-dark',
    name: 'Substack Dark',
    quoteStyle: 'chirp',
    background: '#22160F',
    text: '#FFF4EC',
    accent: '#D9A788',
    quoteMark: '#FF6719',
    border: '#4A2C1E',
    font: 'inter',
    authorFont: 'inter',
    brand: 'substack',
    defaultAlignment: 'left',
  },
  "substack-light": {
    id: 'substack-light',
    name: 'Substack Light',
    quoteStyle: 'chirp',
    background: '#FFF8F3',
    text: '#2A1A12',
    accent: '#9C6D55',
    quoteMark: '#FF6719',
    border: '#F3DED1',
    font: 'inter',
    authorFont: 'inter',
    brand: 'substack',
    defaultAlignment: 'left',
  },
  "telegram-dark": {
    id: 'telegram-dark',
    name: 'Telegram Dark',
    quoteStyle: 'chirp',
    background: '#0C1E2A',
    text: '#EAF7FF',
    accent: '#8EBBD3',
    quoteMark: '#24A1DE',
    border: '#274255',
    font: 'inter',
    authorFont: 'inter',
    brand: 'telegram',
    defaultAlignment: 'left',
  },
  "telegram-light": {
    id: 'telegram-light',
    name: 'Telegram Light',
    quoteStyle: 'chirp',
    background: '#F2FAFF',
    text: '#0E2431',
    accent: '#5E8AA3',
    quoteMark: '#24A1DE',
    border: '#CFE7F5',
    font: 'inter',
    authorFont: 'inter',
    brand: 'telegram',
    defaultAlignment: 'left',
  },
  "tiktok-dark": {
    id: 'tiktok-dark',
    name: 'TikTok Dark',
    quoteStyle: 'chirp',
    background: '#121212',
    text: '#F8F8F8',
    accent: '#A6A6A6',
    quoteMark: '#25F4EE',
    border: '#3A3A3A',
    font: 'inter',
    authorFont: 'inter',
    brand: 'tiktok',
    defaultAlignment: 'left',
  },
  "tiktok-light": {
    id: 'tiktok-light',
    name: 'TikTok Light',
    quoteStyle: 'chirp',
    background: '#FFFFFF',
    text: '#111111',
    accent: '#6A6A6A',
    quoteMark: '#FE2C55',
    border: '#EBEBEB',
    font: 'inter',
    authorFont: 'inter',
    brand: 'tiktok',
    defaultAlignment: 'left',
  },
  "instagram-dark": {
    id: 'instagram-dark',
    name: 'Instagram Dark',
    quoteStyle: 'brutalist',
    background: '#000000',
    backgroundImage: 'url(/vercel-dark-bg.jpg)',
    backgroundSize: 'cover',
    cardBackground: '#000000',
    text: '#ffffff',
    accent: '#A0A0A0',
    quoteMark: '#0070F3',
    border: '#FFFFFF20',
    font: 'geist',
    authorFont: 'geist',
    brand: 'instagram',
    defaultAlignment: 'left',
  },
  "instagram-light": {
    id: 'instagram-light',
    name: 'Instagram Light',
    quoteStyle: 'brutalist',
    background: '#ffffff',
    backgroundImage: 'url(/vercel-light-bg.jpg)',
    backgroundSize: 'cover',
    cardBackground: '#ffffff',
    text: '#111827',
    accent: '#666666',
    quoteMark: '#0070F3',
    border: '#0000001A',
    font: 'geist',
    authorFont: 'geist',
    brand: 'instagram',
    defaultAlignment: 'left',
  },
  "facebook-dark": {
    id: 'facebook-dark',
    name: 'Facebook Dark',
    quoteStyle: 'chirp',
    background: '#0D1C2E',
    text: '#EAF2FF',
    accent: '#8AAED8',
    quoteMark: '#1877F2',
    border: '#284567',
    font: 'inter',
    authorFont: 'inter',
    brand: 'facebook',
    defaultAlignment: 'left',
  },
  "facebook-light": {
    id: 'facebook-light',
    name: 'Facebook Light',
    quoteStyle: 'chirp',
    background: '#F4F8FF',
    text: '#10203A',
    accent: '#5F7DA6',
    quoteMark: '#1877F2',
    border: '#D6E3FA',
    font: 'inter',
    authorFont: 'inter',
    brand: 'facebook',
    defaultAlignment: 'left',
  },
  "editorial": {
    id: 'editorial',
    name: 'Editorial',
    quoteStyle: 'editorial',
    background: '#FFFFF0',
    text: '#000000',
    accent: '#666666',
    quoteMark: '#000000',
    border: '#E5E7EB',
    font: 'playfair',
    authorFont: 'inter',
  },
  "breeze": {
    id: 'breeze',
    name: 'Breeze',
    quoteStyle: 'breeze',
    backgroundImage:'linear-gradient(180deg, rgb(196, 213, 255), rgb(255, 255, 255))',
    background: '#AEC6FF',
    cardBackground: '#FFFFFFF2',
    text: '#374151',
    accent: '#666666',
    quoteMark: '#AEC6FF',
    border: '#AEC6FF',
    font: 'old-standard',
    authorFont: 'inter',
    defaultAlignment: 'left',
  },
  "aura": {
    id: 'aura',
    name: 'Aura',
    quoteStyle: 'aura',
    backgroundImage:'linear-gradient(0deg, rgba(162, 89, 255, 0.5), rgb(255, 135, 38))',
    background: '#FFFFFF',
    cardBackground: '#FFFFFF80',
    text: '#514437',
    accent: '#666666',
    quoteMark: '#FF943E99',
    border: '#FF943E99',
    font: 'inter',
    authorFont: 'inter',
  },
  "paper": {
    id: 'paper',
    name: 'Paper',
    quoteStyle: 'paper',
    background: '#FFFFFF',
    backgroundImage: 'url(/paper-texture-bg.jpg)',
    backgroundSize: 'cover',
    text: '#3F3F46',
    accent: '#666666',
    quoteMark: '#A1A1A1',
    border: '#A1A1A1',
    font: 'inter',
    authorFont: "inter",
    defaultAlignment: 'left',
  },
   "noir": {
    id: 'noir',
    name: 'Noir',
    quoteStyle: 'noir',
    background: '#000000',
    text: '#FFFFFF',
    accent: '#A0A0A0',
    quoteMark: '#FFCC00',
    border: '#FFCC00',
    font: 'playfair',
    authorFont: 'inter',
  },
  "glass": {
    id: 'glass',
    name: 'Glass',
    quoteStyle: 'glass',
    backgroundImage:'linear-gradient(140deg, rgb(177, 177, 177), rgb(24, 24, 24))',
    background: '#000000',
    text: '#FFFFFF',
    accent: '#EDEDED',
    quoteMark: '#FFFFFF',
    border: '#EAEAEA',
    font: 'old-standard',
    authorFont: 'inter',
  },
  "claude-code": {
    id: 'claude-code',
    name: 'Claude code',
    quoteStyle: 'claude-code',
    background: '#DE7356',
    cardBackground: '#1a1815',
    text: '#737568',
    accent: '#DE7356',
    quoteMark: '#DE7356',
    border: '#3d3d3d',
    font: 'mono',
    defaultAlignment: 'left',
  }
};

export const PADDING_PRESETS = [32, 64, 96, 128];

export const DEFAULT_QUOTE = "Writing doesn't just communicate ideas; it generates them. If you're bad at writing and don't like to do it, you'll miss out on most of the ideas writing would have generated.";
export const DEFAULT_AUTHOR = "aashuu";

export const THEME_QUOTES: Record<string, ThemeQuote> = {
  default: {
    text: DEFAULT_QUOTE,
    author: DEFAULT_AUTHOR,
  },
  vercel: {
    text: "Learn to ship. Shipping is a skill distinct from coding. Shipping is designing, coding, QAing, story-telling, teaching, marketing, selling, pivoting, iterating…",
    author: "Guillermo Rauch",
  },
  peerlist: {
    text: "Good projects start with a domain. Not because the domain itself matters that much, but because buying it means you're starting. You're committing.",
    author: "Akash Bhadange",
  },
  x: {
    text:"You guys are the magicians of the 21st century. Don't let anything hold you back. Imagination is the limit. Go out there and create some magic.",
    author: "Elon Musk",
  },
  linkedin: {
    text: "No matter how brilliant your mind or strategy, if you're playing a solo game, you'll always lose out to a team.",
    author: "Reid Hoffman",
  },
  threads: {
    text: "Post to connect, reply to understand, and build where conversations continue.",
    author: "Mark Zuckerberg",
  },
  pinterest: {
    text: "Collect ideas with intent, then turn inspiration into action.",
    author: "Ben Silbermann",
  },
  snapchat: {
    text: "Great stories feel effortless because every second is intentional.",
    author: "Evan Spiegel",
  },
  whatsapp: {
    text: "The most powerful messages are clear, personal, and sent at the right moment.",
    author: "Jan Koum",
  },
  discord: {
    text: "Communities thrive when people feel heard, not just present.",
    author: "Jason Citron",
  },
  sharechat: {
    text: "When people speak in their own language, ideas travel farther.",
    author: "Ankush Sachdeva",
  },
  substack: {
    text: "Write what you believe, publish consistently, and let trust compound.",
    author: "Chris Best",
  },
  telegram: {
    text: "Speed matters, but privacy and reliability build lasting trust.",
    author: "Pavel Durov",
  },
  tiktok: {
    text: "Capture attention fast, then earn it with something worth remembering.",
    author: "Zhang Yiming",
  },
  instagram: {
    text: "A strong visual stops the scroll; a strong story keeps the follow.",
    author: "Kevin Systrom",
  },
  facebook: {
    text: "Meaningful connections come from conversation, not just reach.",
    author: "Mark Zuckerberg",
  },
  "editorial": {
    text: "Life is a battlefield. You can't find peace without battle, because the path to peace is the last door to war. So be a warrior and win your battle...",
    author: "aashuu",
  },
  "breeze": {
    text: "Good design is as little as possible. Less, but better, because it concentrates on the essential aspects, and the products are not burdened with non-essentials. Back to purity, back to simplicity.",
    author: "Dieter Rams",
  },
  "aura": {
    text:"We shouldn't be afraid to fail- if we are not failing we are not pushing. 80% of the stuff in the studio is not going to work. If something is not good enough, stop doing it.",
    author: "Sir Jony Ive",
  },
  "paper": {
    text: "I was not born with a whole lot of natural talent... but I work hard and I never give up.",
    author: "Rock Lee",
  },
  "noir": {
    text: "Technology is not only the thing that moves the human race forward, but its the only thing that ever has. Without technology, we're just monkeys playing in the dirt.",
    author: "Naval Ravikant",
  },
  "glass": {
    text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
    author: "Steve Jobs",
  },
  "claude-code": {
    text: "The hottest new programming language is English. We're moving toward a world where you describe what you want, and the computer figures out how to do it.",
    author: "Andrej Karpathy",
  },
};

export function getThemeQuote(themeId: string): ThemeQuote {
  const theme = THEMES[themeId];
  return (
    THEME_QUOTES[themeId] ??
    (theme?.brand ? THEME_QUOTES[theme.brand] : undefined) ??
    THEME_QUOTES.default
  );
}
