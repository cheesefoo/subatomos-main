<script lang='ts'>

	import GhostContentAPI, { GhostAPI } from '@tryghost/content-api';
	import { baseURL, ghostAPI, ghostURL } from '$lib/variables';
	import Typeahead from 'svelte-typeahead';
	import { goto } from '$app/navigation';
	import { dev } from '$app/env';

	let url = (dev ? 'http://localhost:3000' : baseURL) + '/wiki/en/posts';


	async function load()
	{
		const api: GhostAPI = new GhostContentAPI({
			url: `${ghostURL}`,
			key: `${ghostAPI}`,
			version: 'v3'
		});

		try
		{
			const posts = await api.posts.browse({ limit: 'all', filter: 'visibility:public' });
			// let fuseData = new Fuse(posts, fuseOptions);
			let data = posts.map(post =>
			{
				return {
					title: post.title, excerpt: post.excerpt, slug: post.slug
				};
			});

			// console.log(data);
			return data;
		} catch (err)
		{
			console.error(err);
			return err;
		}
	}

	function extract(post)
	{
		return post.title;
	}

	async function onSelect(event)
	{
		console.log(event);
		let searchResult = event.detail.original;
		let slug = searchResult.slug;

		await goto(`${url}/${slug}`);
	}
</script>
{#await load()}
{:then data}
	<!--{JSON.stringify(res.props.data)}-->
	<!--{JSON.stringify(res)}-->
	<Typeahead label='' placeholder='Search...' limit={8} {data} {extract} on:select={onSelect} let:result let:index let:value>
		<svelte:fragment slot='no-results'>
			No results found for <mark>{value}</mark>
		</svelte:fragment>
		<div style='color: cadetblue; font-weight: bold;'>
			{@html result.string}
		</div>
	</Typeahead>
{:catch err}
	oops the search is broken lol
	{err}
{/await}


<style>
    :global([role="listbox"]) {
        margin: 0;
    }

    :global(mark) {
        color: darksalmon;
        background-color: unset;
    }
</style>
