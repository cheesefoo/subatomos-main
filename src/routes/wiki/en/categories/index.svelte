<script lang="ts" context="module">
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
				props: {
					tags: tags
				}
			};
		} catch (err) {
			console.log(err);

			return {
				status: 503,
				error: new Error(`Coldbooting`)
			};
		}
	}
</script>

<script>
	export let tags;
	let promise = Promise.resolve([]);
</script>

<svelte:head>
	<link rel="alternate" href="https://subatomos.com/wiki/en/categories" hreflang="en" />
	<title>Categories - Oozora Subaru Fan Wiki</title>
</svelte:head>
<h1>Categories</h1>
{#each tags as tag}
	<li><a href="/wiki/en/categories/{tag.slug}">{tag.name}</a></li>
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
