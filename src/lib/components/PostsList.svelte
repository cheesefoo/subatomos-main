<script lang="ts">
	import { variables } from '$lib/variables';
	import { onMount } from 'svelte';

	let posts = [];
	let totalPages = null;
	let currentPage = 1;
	let pages = [];

	const apiUrl = variables.apiURL;

	function createPagesArray(total) {
		let arr = [];

		for (let i = 1; i <= total; i++) {
			arr.push(i);
		}

		return arr;
	}

	function changePage(page) {
		fetch(`${apiUrl}/wp/v2/posts?per_page=5&page=${page}`)
			.then((res) => {
				return res.json();
			})
			.then((result) => {
				posts = result;
				currentPage = page;
			});
	}

	onMount(async () => {
		const res = await fetch(`${apiUrl}/wp/v2/posts?per_page=5`);
		posts = await res.json();

		totalPages = res.headers.get('X-WP-TotalPages');

		pages = createPagesArray(totalPages);

		console.log(pages);
	});
</script>

<ul class="post-list">
	{#each posts as post}
		<li>
			<a rel="prefetch" href="articles/{post.slug}">
				{post.title.rendered}
			</a>
		</li>
	{/each}
</ul>
<ul class="pagination">
	{#each pages as page}
		<li>
			<button class={page === currentPage ? 'active' : ''} on:click={() => changePage(page)}>
				{page}
			</button>
		</li>
	{/each}
</ul>

<style lang="scss">
	.pagination,
	.post-list {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.pagination {
		font-family: keifont;
		display: flex;
		margin-top: 40px;

		li {
			margin-right: 10px;

			&:last-of-type {
				margin-right: 0;
			}
		}

		button {
			padding: 10px 15px;
			border: 1px solid $chromeblue;
			background: $lightblue;
			cursor: pointer;

			&.active {
				cursor: default;
				background: $salmon;
				color: $ivory;
			}
		}
	}
</style>
