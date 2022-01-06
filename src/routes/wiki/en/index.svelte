<script lang="ts" context="module">
	import GhostContentAPI, { GhostAPI } from '@tryghost/content-api';

	import { ghostAPI, ghostURL } from '$lib/variables';

	let promise = Promise.resolve([]);

	export async function load({ fetch, session, context }) {
		const api: GhostAPI = new GhostContentAPI({
			url: `${ghostURL}`,
			key: `${ghostAPI}`,
			version: 'v3'
		});

		try {
			const page = api.pages.read({ slug: 'oozora-subaru' }, { formats: ['html'] });
			const posts = api.posts.browse({
				limit: 10,
				include: 'tags',
				filter: 'tag:-hash-ja+tag:-hash-it'
			});
			const tags = api.tags.browse({ limit: 10, filter: 'visibility:public' });

			promise = Promise.all([page, posts, tags]);

			return {
				props: {
					page: await page,
					posts: await posts,
					tags: await tags
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
	import { onMount } from 'svelte';

	export let page;
	export let posts;
	export let tags;
	onMount(async () => {
		document.querySelectorAll('.content p a').forEach((a) => {
			if (!a.getAttribute('href').startsWith('./')) {
				a.setAttribute('target', '_blank');
			}
		});
	});
</script>

<svelte:head>
	<link rel="alternate" href="https://subatomos.com/wiki/ja/" hreflang="ja" />
	<link rel="alternate" href="https://subatomos.com/wiki/en/" hreflang="en" />
	<title>Oozora Subaru Fan Wiki</title>
</svelte:head>

<div class="content">
	<!--	{#await promise}
			<h1>Loading...</h1>
		{:then promises}
			{@html page.html}
		{:catch err}
			<h1>Error :(</h1>
		{/await}-->
	{@html page.html}
</div>

<h3>Categories</h3>
{#each tags as tag}
	<li><a href="/wiki/en/categories/{tag.slug}">{tag.name}</a></li>
{/each}
<h3>recent updates</h3>
{#each posts as post}
	<li><a href="/wiki/en/posts/{post.slug}">{post.title}</a></li>
{/each}

<style lang="scss">
	.content {
		padding: 0 10% 0 4em;
	}

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
