<script lang="ts">

	import { afterUpdate, onMount } from 'svelte';
	import TooltipLoader from '$lib/components/TooltipLoader.svelte';

	export let html = undefined;
	let slug = html.replace(/<a href="\.\/(.+?)">.+?<\/a>/g, '<Tooltip/>');
	export async function load({ page, fetch, session, context }) {
		{
			console.log(html);
			slug = html.replace(/(<a href="\.\/)(.+?)(">.+?<\/a>)/g, `<Tooltip/>`);
		}
	}
	let slugs = html.matchAll(/<a href="\.\/.+?">.+?<\/a>/g);
	for (const slug of slugs) {
		// ReplaceLink(slug)
	}

	/*	afterUpdate(() => {

		let localLinks = document.querySelectorAll('[href^="."]');
		for(const link of localLinks){

			let slug = link.innerHTML.substring(2);
			ReplaceLink(link,slug);
			console.log("FUG")
		}

	});*/
	onMount(() => {
		let localLinks = document.querySelectorAll('[href^="."]');

		for (const link of localLinks) {
			let slug = link.getAttribute('href');
			if(slug.length ===2)
			{
				continue;
			}
			slug = slug.substring(2);
			ReplaceLink(link, slug, link.innerHTML);
			console.log(slug);

		}
	});
	function ReplaceLink(target, slug, text) {
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
