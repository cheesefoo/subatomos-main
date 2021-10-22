<script lang='ts' context='module'>
	import GhostContentAPI, { GhostAPI } from '@tryghost/content-api';

	import { ghostAPI, ghostURL } from '$lib/variables';

	export async function load({ page, fetch, session, context })
	{
		const api: GhostAPI = new GhostContentAPI({
			url: `${ghostURL}`,
			key: `${ghostAPI}`,
			version: 'v3'
		});

		try
		{
			const page = await api.pages.read({ slug: 'oozora-subaru-it' }, { formats: ['html'] });
			const posts = await api.posts.browse({ limit: 10, include: 'tags', filter: 'tag:hash-it' });
			const tags = await api.tags.browse({ limit: 10, filter: 'visibility:public' });

			return {
				props: {
					page: page,
					posts: posts,
					tags: tags
				}
			};
		} catch (err)
		{
			console.log(err);

			return {
				status: 503,
				error: new Error(`Coldbooting`)
			};
		}
	}
</script>

<script>
	export let page;
	export let posts;
	export let tags;
	let promise = Promise.resolve([]);
</script>

<svelte:head>
	<link rel='alternate' href='https://subatomos.com/wiki/ja/' hrefLang='ja' />
	<link rel='alternate' href='https://subatomos.com/wiki/en/' hrefLang='en' />
	<link rel='alternate' href='https://subatomos.com/wiki/it/' hrefLang='it' />
	<title>Oozora Subaru Fan Wiki</title>
</svelte:head>

<div className='content'>
	{@html page.html}
</div>

<h3>Categorie</h3>
{#each tags as tag}
	<li><a href='/wiki/it/categories/{tag.slug}'>{tag.name}</a></li>
{/each}
<h3>Aggiornamenti Recenti</h3>
{#each posts as post}
	<li><a href='/wiki/it/posts/{post.slug}'>{post.title}</a></li>
{/each}

<style lang='scss'>
  .content {
    padding: 0 10% 0 4em;
  }

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
