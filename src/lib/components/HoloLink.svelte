<script lang="ts">
	export let en:string;
	export let jp:string;
	export let href:string = '';
	export let image:string= "/static/assets/images/holos/"+en.toLowerCase().replace(' ','_')+'_thumb.png'
	export let grayscale:boolean = href=='';
	export let width:number = 24;
	export let text:string = 'sm'
	let w =  `w-${width}`
	let txt= `text-${text}`

	import '/src/tw.scss'
</script>
<td class='border-b border-slate-100  text-slate-500'>
<!--<td class='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>-->
<!--<td class='flex flex-col content-center'>-->
	<div class='flex   lg:flex-col lg:items-center'>
	{#if href}
		<a href={href}>
	<img class={w} class:grayscale src={image} alt={en}/>
		</a>
		{:else }
		<img class={w} class:grayscale src={image} alt={en}/>

	{/if}
		<div class='flex-none pt-6'>
	<p  class={`${txt}  text-left lg:text-center text-444444 font-light lg:align-middle whitespace-nowrap`}>{en}</p>
	<p  class={`${txt}  text-left lg:text-center text-444444 font-light lg:align-middle pt-2 whitespace-nowrap`}>{jp}</p>
		</div>
	</div>
</td>
