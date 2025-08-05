import { SANITY_PROJECT_ID, SANITY_API_VERSION } from '$env/static/private';
import { env } from '$env/dynamic/private';
import generateRSS from '../../component/Sanity/utils/generateRSS';

export const GET = async ({ url }) => {
  const isLocalOrStaging =
    url.href.includes('localhost') || url.href.includes('staging.harrykelleher.com');

  const dataset =
    env.NODE_ENV === 'development' || isLocalOrStaging
      ? 'development'
      : 'production';

  const query = encodeURIComponent(`
    *[_type == 'post']
	  | order(_createdAt desc) {
		  title, "slug":slug.current, "publishedAt": _updatedAt, "imageUrl":mainImage.image.asset._ref, "imageCaption":mainImage.caption, "imageAlt":mainImage.alt, feature, tags
	  }
  `);

  const sanityUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${dataset}?query=${query}`;
  const res = await fetch(sanityUrl);
  const { result: posts } = await res.json();

  const xml = generateRSS(posts, dataset);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml'
    }
  });
};