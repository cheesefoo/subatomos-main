<script lang="ts" context="module">
	import GhostContentAPI, { GhostAPI } from '@tryghost/content-api';

	import { ghostAPI, ghostURL } from '$lib/variables';

	export async function load({ fetch, session, context }) {
		const api: GhostAPI = new GhostContentAPI({
			url: `${ghostURL}`,
			key: `${ghostAPI}`,
			version: 'v3'
		});

		try {
			const tags = await api.tags.browse({ limit: 10, filter: 'visibility:public' });

			return {
				props: {
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

	function localizedTag(tag) {
		if (tag.description == null) {
			return tag.name;
		}
		let langs = tag.description.split(':');
		if (langs[0] === 'ja') {
			return langs[1];
		}
	}
</script>

<h1>カテゴリー</h1>
{#each tags as tag}
	<li><a href="/wiki/ja/categories/{tag.slug}">{localizedTag(tag)}</a></li>
{/each}
