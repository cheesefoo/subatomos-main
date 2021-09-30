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
			const post = await api.posts.read({ slug }, { formats: ['html'] });

			return { props: { post: post } };
		} catch (err) {
			console.log(err);
		}
	}
</script>

<script>
	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';

	export let post;
</script>

<Breadcrumb noTrailingSlash skeleton count={3} />
<h1>{post.title}</h1>
{@html post.html}
