<script>

	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import { onMount } from 'svelte';
	import WikiPage from '$lib/components/WikiPage.svelte';
	import BackButton from '$lib/components/BackButton.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import WikiSearch from '$lib/components/WikiSearch.svelte';

	export let data;
	let {slug, post, tags} = data;
	onMount(async () => {
		document.querySelectorAll('.content p a').forEach((a) => {
			if (!a.getAttribute('href').startsWith('./')) {
				a.setAttribute('target', '_blank');
			}
		});
	});
</script>
<MetaTags
	title={`${post.title} - Oozora Subaru Fan Wiki`}
	description={post.excerpt}
	canonical={`https://subatomos.com/wiki/en/posts/${slug}`}
	openGraph={{
		images:[{
			url:post.feature_image
		}]
	}}
	twitter={{
    handle: '@subatomos',
    cardType: 'summary'
  }} />
<div class='wiki-top'>
	<div class='back-btn'>
		<BackButton />
	</div>
	<div class='search'>
		<WikiSearch />
	</div>
</div>

<h1>{post.title}</h1>
<div class='content'>
	<WikiPage html={post.html} />
</div>
<a href='/wiki/en/categories/'>Categories</a> :
{#each tags as tag}
	<a href='/wiki/en/categories/{tag.slug}'>{tag.name}</a>
{/each}

<style lang='scss'>
	.wiki-top
  {
		display:flex;
		justify-content: space-between;
		padding-right:10%;
	}
  .search {
    width: 30%;
  }
	.content {
		padding: 0 20% 0 20%;
	}

	:global(a){
    color: #ff3e00;
    text-decoration: none;
	}

  :global(.content) sc {
    padding: 0 10% 0 4em;
  }

  :global(strong) {
    font-weight: bolder;
    color: $salmon;
  }

  :global(h1),
  :global(h2),
  :global(h3) {
    font-family: keifont, sans-serif;
    font-size: 2em;
    color: $salmon;
  }

  :global(h1) {
    font-size: 2.5em;
  }

  :global(p),
  :global(a),
  :global(li),
  :global(ul) {
    font-family: keifont, sans-serif;
    font-weight: normal;
    // padding: 0.5em 0;
  }

  :global(ul) {
    // padding: 0.5em 0;
    li {
      padding: 0.5em;

      ul {
        padding-inline-start: 3em;

        li {
        }
      }
    }
  }

  :global(h3) {
    font-size: 1.5em;
    color: $salmon;
  }

  :global(figcaption) {
    font-size: 0.75em;

    :global(a) {
    }
  }

  @media screen and (min-width: 849px) and (max-width: 1024px) {
    :global(.content) {
      padding: 0 1em 0 1em;
    }
  }
</style>
