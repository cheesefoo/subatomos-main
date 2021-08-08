import posts from './_posts';
import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

const contents = JSON.stringify(
	posts.map((post) => {
		return {
			title: post.title,
			slug: post.slug
		};
	})
);

export const get: RequestHandler<Locals> = async () => ({
	body: contents
});
