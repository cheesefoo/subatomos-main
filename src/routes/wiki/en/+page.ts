import { error } from '@sveltejs/kit';

import GhostContentAPI from '@tryghost/content-api';

import { ghostAPI, ghostURL } from '$lib/variables';

let promise = Promise.resolve([]);

export async function load( )
{
	const api = new GhostContentAPI({
		url: `${ghostURL}`,
		key: `${ghostAPI}`,
		version: 'v3.0'
	});

	try
	{
		const page = api.pages.read({ slug: 'oozora-subaru' }, { formats: ['html'] });
		const posts = api.posts.browse({
			limit: 10,
			include: 'tags',
			filter: 'tag:-hash-ja+tag:-hash-it'
		});
		const tags = api.tags.browse({ limit: 10, filter: 'visibility:public' });

		promise = Promise.all([page, posts, tags]);

		return {
			page: await page,
			posts: await posts,
			tags: await tags
		};
	} catch (err)
	{
		console.log(err);

		throw error(503, `Coldbooting`);
	}
}
