<script lang="ts">
	import GhostContentAPI from '@tryghost/content-api';
	import { ghostAPI, ghostURL } from '$lib/variables';
	import { onMount } from 'svelte';
	 // import { tooltip } from '$lib/components/tt.js'
	 import { tooltip } from '$lib/components/Tooltip'
	// import { tooltip, popover } from 'svelte-ktippy'
	import WikiTooltip from '$lib/components/WikiTooltip.svelte';

	export let slug;
	export let text;
	let excerpt;

	onMount(getExcerpt);
	async function getExcerpt(){
		const api = new GhostContentAPI({
			url: `${ghostURL}`,
			key: `${ghostAPI}`,
			version: 'v3'
		});
		try {
			const post = await api.posts.read({ slug }, { formats: ['html'], include: 'tags' });
			let txt = `${post.title}: ${post.excerpt}`;
			// console.log(excerpt)

			return { props: {  excerpt: txt  } };
		} catch (err) {
			console.log(err);
		}
	}

	// export let slug, excerpt, text = undefined;
</script>
{#await getExcerpt()}
	<a href="./{slug}">{text}</a>
	{:then res}
	<!--{@debug res}-->
	{#if res.props.excerpt.length < 480}
	<a
		href="./{slug}"
		class='excerpt'
		use:tooltip={{ component: WikiTooltip, props: { hoverText: res.props.excerpt } }}>
		{text}
	</a>
<!--		<WikiTooltip slug={slug} text={text} hoverText={res.props.excerpt}/>-->
		{/if}
	{:catch err}
	<a href="./{slug}">{text}</a>

{/await}
<style>
	.excerpt{
			color: #1da1f2;
	}
</style>
