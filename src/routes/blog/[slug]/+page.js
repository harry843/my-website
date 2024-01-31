import { graphql } from '$houdini';
import { error } from '@sveltejs/kit';

export const _houdini_load = graphql(`
	query GetPostBySlug($slug: String!) {
		allPost(where: { slug: { current: { eq: $slug } } }) {
			_createdAt
			_updatedAt
			title
			feature
			slug {
				current
			}
			tags
			contentRaw
			mainImage {
				image {
					asset {
						url
					}
				}
				alt
				caption
			}
		}
	}
`);

/**
 * @param { import('./$houdini').OnErrorEvent }
 */
export function _houdini_onError({ error }) {
	throw this.redirect(307, '/blog/$slug');
}
