<script lang="ts" context="module">
	import GhostContentAPI from '@tryghost/content-api';

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
			const post = await api.posts.read(
				{ slug },
				{ formats: ['html'], include: 'tags', filter: `tag:-hash-ja+tag:-hash-it` }
			);

			let tags = post.tags;
			return { props: { post: post, slug: slug, tags: tags } };
		} catch (err) {
			console.log(err);
		}
	}
</script>

<script>
	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import { onMount } from 'svelte';

	export let slug;

	export let post;
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
	<link rel="alternate" href="https://subatomos.com/wiki/en/{slug}" hreflang="en" />
	<title>{post.title} - Oozora Subaru Fan Wiki</title>
</svelte:head>

<h2><a href="..">←</a></h2>
<h1>{post.title}</h1>
<div class="content">
	{@html post.html}
</div>
<a href="/wiki/en/categories/">Categories</a> :
{#each tags as tag}
	<a href="/wiki/en/categories/{tag.slug}">{tag.name}</a>
{/each}

<style lang="scss">
	.content {
		padding: 0 10% 0 4em;
	}

	:global(strong) {
		font-weight: bolder;
		color: $salmon;
	}

	:global(h1),
	:global(h2),
	:global(h3) {
		font-family: keifont, sans-serif;
		font-size: 2em;
		color: $salmon;
	}

	:global(h1) {
		font-size: 2.5em;
	}

	:global(p),
	:global(a),
	:global(li),
	:global(ul) {
		font-family: keifont, sans-serif;
		font-weight: normal;
		// padding: 0.5em 0;
	}
	:global(ul) {
		// padding: 0.5em 0;
		li {
			padding: 0.5em;
			ul {
				padding-inline-start: 3em;
				li {
				}
			}
		}
	}

	:global(h3) {
		font-size: 1.5em;
		color: $salmon;
	}

	:global(figcaption) {
		font-size: 0.75em;

		:global(a) {
		}
	}
</style>
