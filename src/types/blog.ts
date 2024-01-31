export interface BlogData {
		title: string;
		feature: string;
		_createdAt: string;
		_updatedAt: string;
		slug: { current: string };
		tags: string[];
		contentRaw: any;
		mainImage: {
			image: any;
			alt: string;
}
}