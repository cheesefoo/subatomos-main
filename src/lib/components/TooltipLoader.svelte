<script lang='ts'>
	import GhostContentAPI from '@tryghost/content-api';
	import { baseURL, ghostAPI, ghostURL } from '$lib/variables';
	import { onMount } from 'svelte';
	// import { tooltip } from '$lib/components/tt.js'
	import { tooltip } from '$lib/components/Tooltip';
	// import { tooltip, popover } from 'svelte-ktippy'
	import WikiTooltip from '$lib/components/WikiTooltip.svelte';
	import { dev } from '$app/env';

	export let slug;
	export let text;
	let excerpt;
	export let url = (dev ? 'http://localhost:3000' : baseURL) + '/wiki/en/posts';

	// onMount(getExcerpt);
	async function getExcerpt()
	{
		const api = new GhostContentAPI({
			url: `${ghostURL}`,
			key: `${ghostAPI}`,
			version: 'v3.0'
		});
		try
		{
			const post = await api.posts.read({ slug }, { formats: ['html'], include: 'tags' });
			let txt = `${post.title}: ${post.excerpt}`;
			// console.log(excerpt)

			return { props: { excerpt: txt } };
		} catch (err)
		{
			if (dev)
			{
				console.log(err);
			}
		}
	}

	// export let slug, excerpt, text = undefined;
</script>

{#await getExcerpt()}
	<a href='{url}/{slug}'>{text}</a>
{:then res}
	<!--{@debug res}-->
	{#if res.props.excerpt.length < 480}
		<a
			href='{url}/{slug}'
			class='excerpt'
			use:tooltip={{ component: WikiTooltip, props: { hoverText: res.props.excerpt } }}
		>
			{text}
		</a>
		<!--		<WikiTooltip slug={slug} text={text} hoverText={res.props.excerpt}/>-->
	{/if}
{:catch err}
	<a href='{url}/{slug}'>{text}</a>
{/await}

<style lang='scss'>
  a {

    @apply font-extrabold;
    font-family: keifont, sans-serif;
  }

  .excerpt {
    color: $sky;

  }
</style>
