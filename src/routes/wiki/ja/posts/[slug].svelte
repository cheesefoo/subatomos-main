<script lang="ts" context="module">
	import GhostContentAPI from '@tryghost/content-api';

	import { ghostAPI, ghostURL } from '$lib/variables';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params, fetch, session, context }) {
		const api = new GhostContentAPI({
			url: `${ghostURL}`,
			key: `${ghostAPI}`,
			version: 'v3'
		});
		try {
			let slug = params.slug;
			const post = await api.posts.read(
				{ slug },
				{ formats: ['html'], include: 'tags', visibility: 'public' }
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

	export let post;
	export let slug;
	export let tags;

	function localizedTag(tag) {
		if (tag.description == null) {
			return tag.name;
		}
		let langs = tag.description.split(':');
		if (langs[0] === 'ja') {
			return langs[1];
		}
	}

	import { goto } from '$app/navigation';
	function routeToPage(route, replaceState) {
		goto(`/${route}`, { replaceState });
	}
	function goBack(defaultRoute = '/wiki/ja/') {
		const ref = document.referrer;
		goto(ref.length > 0 ? ref : defaultRoute);
	}
</script>

<svelte:head>
	<link rel="alternate" href="https://subatomos.com/wiki/ja/{slug}" hreflang="ja" />
</svelte:head>

<h2><a href="..">←</a></h2>
<!--<Breadcrumb noTrailingSlash skeleton count={3} />-->

<h1>{post.title}</h1>
{@html post.html}

<a href="/wiki/ja/categories/">カテゴリー</a> :
{#each tags as tag}
	{#if tag.visibility === 'public'}
		<a href="/wiki/ja/categories/{tag.slug}">{localizedTag(tag)}</a>
	{/if}
{/each}

<style>
	h2 {
		font-size: 2em;
	}
</style>
