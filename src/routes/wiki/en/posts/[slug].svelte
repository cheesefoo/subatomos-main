<script lang="ts" context="module">
	import GhostContentAPI from '@tryghost/content-api';

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
			const post = await api.posts.read({ slug }, { formats: ['html'], include: 'tags' });

			let tags = post.tags;

			return { props: { post: post, tags: tags } };
		} catch (err) {
			console.log(err);
		}
	}
</script>

<script>
	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';

	export let post;
	export let tags;
</script>

<Breadcrumb noTrailingSlash skeleton count={3} />
<h1>{post.title}</h1>
{@html post.html}

<a href="/wiki/en/categories/">Categories</a> :
{#each tags as tag}
	<a href="/wiki/en/categories/{tag.slug}">{tag.name}</a>
{/each}
