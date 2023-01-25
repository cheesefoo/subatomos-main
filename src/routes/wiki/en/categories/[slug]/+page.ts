
import GhostContentAPI from '@tryghost/content-api';

import { ghostAPI, ghostURL } from '$lib/variables';

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ params, fetch,  context }) {
	const api = new GhostContentAPI({
		url: `${ghostURL}`,
		key: `${ghostAPI}`,
		version: 'v3.0'
	});
	try {
		let slug = params.slug;
		const tag = await api.tags.read({ slug }, { formats: ['html'] });
		const posts = await api.posts.browse({ limit: 10, filter: `tag:-hash-ja+tag:${slug}` });

		return { posts: posts, slug: slug, tag: tag };
	} catch (err) {
		console.log(err);
	}
}
