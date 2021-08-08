<script lang="ts">
	import { onMount } from 'svelte';
	import { variables } from '$lib/variables';

	let categories = [];
	const apiUrl = variables.apiURL;

	onMount(async () => {
		const res = await fetch(`${apiUrl}/wp/v2/categories?per_page=100`);
		categories = await res.json();
	});
</script>

<ul class="cats post-list">
	{#each categories as category}
		<li><a href="categories/{category.slug}">{category.name}</a></li>
	{/each}
</ul>

<style lang="scss">
	.cats {
		margin-top: 0;
		margin-right: 20px;
		padding: 20px;
		background-color: $chromeblue;
		list-style: none;
	}
</style>
