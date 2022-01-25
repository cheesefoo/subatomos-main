<script lang='ts'>
	import { dev } from '$app/env';

	export let en: string;
	export let jp: string;
	export let href: string = '';

	const dir = dev ? '/static/assets/images/holos/' : '/assets/images/holos/';
	export let image: string = dir + en.toLowerCase().replace(' ', '_') + '_thumb.png';
	export let grayscale: boolean = href == '';
	export let width: number = 24;
	export let text: string = 'sm';
	let w = `w-${width}`;
	let txt = `text-${text}`;

	import '/src/tw.scss';
</script>
<td class='border-b border-slate-100  text-slate-500'>
	<!--<td class='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>-->
	<!--<td class='flex flex-col content-center'>-->
	<div class='flex flex-col items-center'>
		{#if href}
			<a sveltekit:prefetch class={`${w} block`} href={href}>
				<img class={w} class:grayscale src={image} alt={en} />
			</a>
		{:else }
			<img class={w} class:grayscale src={image} alt={en} />

		{/if}
		<div class='flex-none overflow-auto break-all pt-2'>
			<p class={`${txt} text-left lg:text-center text-444444 font-light lg:align-middle whitespace-normal lg:whitespace-nowrap`}>{en}</p>
			<p class={`${txt} text-left lg:text-center text-444444 font-light lg:align-middle pt-1 whitespace-normal break-all lg:whitespace-nowrap`}>{jp}</p>
		</div>
	</div>
</td>
