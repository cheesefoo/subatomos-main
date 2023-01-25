<script lang="ts">



	export let data;
	let {slug, posts, tag} = data;
</script>

<svelte:head>
	<link rel="alternate" href="https://subatomos.com/wiki/en/categories/{slug}" hreflang="en" />
	<title>{tag.name} - Categories - Oozora Subaru Fan Wiki</title>
</svelte:head>

<h2><a href="..">←</a></h2>
<h1>{tag.name}</h1>

{#each posts as post}
	<li><a href="/wiki/en/posts/{post.slug}">{post.title}</a></li>
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
