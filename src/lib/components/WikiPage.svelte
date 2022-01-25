<script lang='ts'>
	import { onMount } from 'svelte';
	import TooltipLoader from '$lib/components/TooltipLoader.svelte';
	// import '/src/tw.scss';

	export let html = undefined;
	// let slug = html.replace(/<a href="\.\/(.+?)">.+?<\/a>/g, '<Tooltip/>');
	// let yt = html.replace(/<YOUTUBE=(.*)>/g, '<Tooltip/>');
	// export async function load() {
	// 	{
	// 		console.log(html);
	// 		slug = html.replace(/(<a href="\.\/)(.+?)(">.+?<\/a>)/g, `<Tooltip/>`);
	// 	}
	// }
	// let slugs = html.matchAll(/<a href="\.\/.+?">.+?<\/a>/g);
	// for (const slug of slugs) {
	// 	// ReplaceLink(slug)
	// }

	/*	afterUpdate(() => {

		let localLinks = document.querySelectorAll('[href^="."]');
		for(const link of localLinks){

			let slug = link.innerHTML.substring(2);
			ReplaceLink(link,slug);
			console.log("FUG")
		}

	});*/
	onMount(() =>
	{
		let localLinks = document.querySelectorAll('[href^="."]');

		for (const link of localLinks)
		{
			let slug = link.getAttribute('href');
			if (slug.length === 2)
			{
				continue;
			}
			slug = slug.substring(2);
			ReplaceLink(link, slug, link.innerHTML);
			console.log(slug);
		}
		ReplaceYoutubes();
	});

	function ReplaceYoutubes()
	{
		[...document.querySelectorAll('p')]      // get all the divs in an array
			.filter(p => p.innerHTML.includes('YOUTUBE=')) // keep only those containing the query
			.forEach(p =>
			{
				let url = p.innerHTML.substring(12, 23);
				console.log(url);
				let yt = `<div class='video-container'>
				<iframe src='https://www.youtube.com/embed/${url}'  allowfullscreen></iframe>
			</div>`;
				p.innerHTML = yt;
			});       // output the entire contents of those
	}

	function ReplaceLink(target, slug, text)
	{
		var component = new TooltipLoader({
			target: target.parentElement,
			anchor: target,
			// hydrate: true,
			props: { slug: slug, text: text }
		});
		target.remove();
	}
</script>

<!--aaaaa<a href="./mama" class="excerpt s-kNIkJTWxH42b" aria-expanded="false">a playful role-play</a>aaaaa-->

<div>
	{@html html}
</div>

<style lang='scss'>
  :global(.video-container) {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
		:global(iframe){

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
		}
  }
</style>
