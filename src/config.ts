import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Xeonzilla's Note",
	subtitle: "Yuri is life.",
	lang: "zh_CN",
	themeColor: {
		hue: 176,
		fixed: false,
	},
	banner: {
		enable: true,
		src: "assets/img/banner.avif",
		position: "center",
		credit: {
			enable: true,
			text: "焦茶 / ǝɯ uo ǝʞɐ⊥",
			url: "https://www.pixiv.net/artworks/72038523",
		},
	},
	toc: {
		enable: true,
		depth: 3,
	},
	favicon: [
		{
			src: "/favicon/favicon-32.png",
			sizes: "32x32",
		},
		{
			src: "/favicon/favicon-128.png",
			sizes: "128x128",
		},
		{
			src: "/favicon/favicon-180.png",
			sizes: "180x180",
		},
		{
			src: "/favicon/favicon-192.png",
			sizes: "192x192",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Friends,
		{
			name: "开往",
			url: "https://www.travellings.cn/go.html",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/img/avatar.avif",
	name: "Xeonzilla",
	bio: "Yuri is life.",
	links: [
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:admin@xeonzilla.top",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/Xeonzilla",
		},
		{
			name: "Telegram",
			icon: "fa6-brands:telegram",
			url: "https://t.me/xeonzilla_bot",
		},
		{
			name: "Bangumi",
			icon: "fa6-brands:bilibili",
			url: "https://bgm.tv/user/xeonzilla",
		},
		{
			name: "RSS",
			icon: "fa6-solid:rss",
			url: "https://xeonzilla.top/rss.xml",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
