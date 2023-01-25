

<script>
	// import { tags } from '@tryghost/helpers';

	  /** @type {import('./$types').PageData} */
		  export let data;
let {tags} = data;
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
