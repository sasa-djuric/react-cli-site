export interface Page {
	title: string;
	slug: string;
}

export interface Section {
	label: string;
	pages: Array<Page>;
}

export interface PageMeta {
	title: string;
	description: string;
}
