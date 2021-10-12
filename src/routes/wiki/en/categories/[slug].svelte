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
			const posts = await api.posts.browse({ limit: 10, filter: `tag:-hash-ja+tag:${slug}` });

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
	<title>{tag.name} - Categories - Oozora Subaru Fan Wiki</title>

</svelte:head>

<h2><a href="..">←</a></h2>
<h1>{tag.name}</h1>

{#each posts as post}
	<li><a href="/wiki/en/posts/{post.slug}">{post.title}</a></li>
{/each}

<style lang="scss">
	:global(h2) {
		font-family: keifont, sans-serif;
		font-size: 2em;
		font-weight: bolder;
	}
	:global(p),
	:global(a),
	:global(li),
	:global(ul) {
		font-family: keifont, sans-serif;
		font-weight: 100;
	}

	:global(h3) {
		font-family: keifont, sans-serif;
		font-size: 1.5em;
	}
</style>
