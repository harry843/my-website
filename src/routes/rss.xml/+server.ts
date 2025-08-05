import { env } from '$env/dynamic/private';
import generateRSS from '../../component/Sanity/utils/generateRSS';

const SANITY_PROJECT_ID = env.SANITY_PROJECT_ID;
const SANITY_API_VERSION = env.SANITY_API_VERSION;

export const GET = async ({ url }) => {
	const isLocalOrStaging =
		url.href.includes('localhost') || url.href.includes('staging.harrykelleher.com');

	const dataset = env.NODE_ENV === 'development' || isLocalOrStaging ? 'development' : 'production';

	const query = encodeURIComponent(`
    *[_type == 'post']
	  | order(_createdAt desc) {
		  title, "slug":slug.current, "publishedAt": _updatedAt, "imageUrl":mainImage.image.asset._ref, "imageCaption":mainImage.caption, "imageAlt":mainImage.alt, feature, tags
	  }
  `);

	const sanityUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${dataset}?query=${query}`;
	const res = await fetch(sanityUrl);
	const json = await res.json();

	console.log('[RSS] Sanity raw response:', JSON.stringify(json, null, 2));

	if (!res.ok || !json.result) {
		console.error('[RSS] Invalid Sanity response:', json);
		throw new Error(`Sanity API error: ${res.status}`);
	}

	const posts = json.result;

	const xml = generateRSS(posts, dataset);

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/rss+xml'
		}
	});
};
