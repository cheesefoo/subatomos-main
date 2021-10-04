<script lang="ts" context="module">
	import GhostContentAPI, { GhostAPI } from '@tryghost/content-api';

	import { ghostAPI, ghostURL } from '$lib/variables';

	export async function load({ page, fetch, session, context }) {
		const api: GhostAPI = new GhostContentAPI({
			url: `${ghostURL}`,
			key: `${ghostAPI}`,
			version: 'v3'
		});

		try {
			const posts = await api.posts.browse({ limit: 10, include: 'tags', filter: 'tag:-hash-ja' });
			const tags = await api.tags.browse({ limit: 10, filter: 'visibility:public' });

			return {
				props: {
					posts: posts,
					tags: tags
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
	export let posts;
	export let tags;
	let promise = Promise.resolve([]);
</script>

<h3>Categories</h3>
{#each tags as tag}
	<li><a href="/wiki/en/categories/{tag.slug}">{tag.name}</a></li>
{/each}
<h3>recent updates</h3>
{#each posts as post}
	<li><a href="/wiki/en/posts/{post.slug}">{post.title}</a></li>
{/each}
