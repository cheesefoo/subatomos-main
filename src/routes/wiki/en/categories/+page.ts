import { error } from '@sveltejs/kit';

import GhostContentAPI from '@tryghost/content-api';

import { ghostAPI, ghostURL } from '$lib/variables';

export async function load({ fetch, context }) {
	const api = new GhostContentAPI({
		url: `${ghostURL}`,
		key: `${ghostAPI}`,
		version: 'v3.0'
	});

	try {
		const tags = await api.tags.browse({ limit: 10, filter: 'visibility:public' });

		return {
			tags: tags
		};
	} catch (err) {
		console.log(err);

		throw error(503, `Coldbooting`);
	}
}
