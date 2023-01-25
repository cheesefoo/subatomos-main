
import GhostContentAPI from '@tryghost/content-api';

import { ghostAPI, ghostURL } from '$lib/variables';

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ params, fetch,  context })
{
	const api = new GhostContentAPI({
		url: `${ghostURL}`,
		key: `${ghostAPI}`,
		version: 'v3.0'
	});
	try
	{
		let slug = params.slug;
		const post = await api.posts.read(
			{ slug },
			{ formats: ['html'], include: 'tags', filter: `tag:-hash-ja+tag:-hash-it` }
		);

		let tags = post.tags;
		return { post: post, slug: slug, tags: tags };
	} catch (err)
	{
		console.log(err);
	}
}
