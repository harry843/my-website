import { graphql } from '$houdini'
import { error } from '@sveltejs/kit'

export const _houdini_load = graphql(`
    query GetLatestPost {
        allPost (limit : 1) {
            title
        feature
        _createdAt
        _updatedAt
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
            }
        }
    }
    
`)

/**
 * @param { import('./$houdini').OnErrorEvent }
 */
export function _houdini_onError({ error }) {
    throw this.redirect(307, '/')
}

/** @type {import('./$types').EntryGenerator} */ export function entries() {
	return [{ slug: 'i-built-a-website' }];
}
export const prerender = true;