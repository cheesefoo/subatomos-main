<script lang="ts" context="module">
	import GhostContentAPI, { Tag, Tags } from '@tryghost/content-api';

	import { ghostAPI, ghostURL } from '$lib/variables';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({params, fetch, session, context }) {
		const api = new GhostContentAPI({
			url: `${ghostURL}`,
			key: `${ghostAPI}`,
			version: 'v3'
		});
		try {
			let slug = params.slug;

			const tag: Tag = await api.tags.read({ slug }, { formats: ['html'] });
			const posts = await api.posts.browse({ limit: 10, filter: `tag:hash-it` });

			return { props: { posts: posts, slug: slug, tag: tag } };
		} catch (err) {
			console.log(err);
		}
	}
</script>

<script lang="ts">
	import { Tag } from '@tryghost/content-api';

	export let posts;
	export let slug;
	export let tag: Tag;
</script>

<svelte:head>
	<link rel="alternate" href="https://subatomos.com/wiki/en/categories/{slug}" hreflang="en" />
	<link rel="alternate" href="https://subatomos.com/wiki/ja/categories/{slug}" hreflang="ja" />
	<link rel="alternate" href="https://subatomos.com/wiki/it/categories/{slug}" hreflang="it" />
</svelte:head>
<h1>{tag.name}</h1>

{#each posts as post}
	<li><a href="/wiki/it/posts/{post.slug}">{post.title}</a></li>
{/each}
