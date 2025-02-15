interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'jensonreggentin.org', // Write here your website url
	author: 'Jenson Johnathon Reggentin', // Site author
	title: 'Jenson Reggentin', // Site title.
	description: 'I write about whatever comes to mind', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
