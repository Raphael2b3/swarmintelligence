export type NavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	label?: string;
};

export type SidebarNavItem = NavItem & {
	items: SidebarNavItem[];
};

export type NavItemWithChildren = NavItem & {
	items: NavItemWithChildren[];
};
type DocsConfig = {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
};
/*
<a href="/login">Login</a>
<a href="/register">Register</a>
<a href="/logout">Logout</a>
<a href="/settings">Settings</a>
<a href="/about">About</a> */
export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'Settings',
			href: '/settings'
		},
		{
			title: 'About',
			href: '/about'
		},
		{
			title: 'GitHub',
			href: 'https://github.com/raphael2b3/swarmintelligence',
			external: true
		}
	],
	sidebarNav: [
		{
			title: 'Getting Started',
			items: [
				{
					title: 'Introduction',
					href: '/docs',
					items: []
				}
			]
		},
		{
			title: 'Stuff',
			items: [
				{
					title: 'A1',
					href: '/docs/A1',
					items: []
				}
			]
		}
	]
};
