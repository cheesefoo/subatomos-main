<script lang="ts" context="module">
	import GhostContentAPI, { Tag, Tags } from '@tryghost/content-api';

	import { ghostAPI, ghostURL } from '$lib/variables';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const api = new GhostContentAPI({
			url: `${ghostURL}`,
			key: `${ghostAPI}`,
			version: 'v3'
		});
		try {
			let slug = page.params.slug;

			const tag: Tag = await api.tags.read({ slug }, { formats: ['html'] });
			const posts = await api.posts.browse({ limit: 10, filter: `tag:${slug}` });

			return { props: { posts: posts, tag: tag } };
		} catch (err) {
			console.log(err);
		}
	}
</script>

<script lang="ts">
	import { Tag } from '@tryghost/content-api';

	export let posts;
	export let tag: Tag;
</script>

<h1>{tag.name}</h1>

{#each posts as post}
	<li><a href="/wiki/en/posts/{post.slug}">{post.title}</a></li>
{/each}
