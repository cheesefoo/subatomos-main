<script lang="ts">
	import SNSLink from '$lib/components/SNSLink.svelte';
	import { media } from '$lib/stores/stores.ts';

	export let name = undefined;

	export let avatar = `https://avatars.dicebear.com/api/human/${name}.svg`;
	export let sns = undefined;
	export let sns2 = undefined;
	export let url = undefined;
	export let url2 = undefined;
	export let desc = '';
	let size = '';
	if ($media.small) {
		size = '2x';
	}
	if ($media.tablet) {
		size = '2x';
	}
</script>

<div class="credit">
	{#if avatar != undefined}
		<img class="avatar" src={avatar} alt="avatar" />
	{/if}
	<div>
		<SNSLink icon={sns} {url} {size} />
		{#if url2 != undefined}
			<SNSLink icon={sns2} url={url2} {size} />
		{/if}
		{#if $media.small || $media.tablet}
			<br />
			<a href={url}>{name}</a>
		{:else}
			{name}
		{/if}

		<br />
		<span>{desc}</span>
	</div>
</div>

<style lang="scss">
	$creditheight: 40px;
	div {
		color: $chromeblue;
	}

	span {
		font-weight: 400;
		font-size: 1em;
		color: #902b29;
	}

	.credit {
		display: grid;
		width: 80%;
		grid-template-columns: $creditheight 1fr;
		//border-bottom: solid black 0.1rem;
		padding-bottom: 1rem;
	}

	img {
		height: $creditheight;
		width: $creditheight;
		clip-path: circle(50% at 50% 50%);
	}

	@media screen and (max-width: 849px) {
		a {
			color: $chromeblue;
			font-size: 0.9em;
		}
	}

	@media screen and (min-width: 850px) and (max-width: 1024px) {
		a {
			font-size: 1.4rem;
		}
	}
</style>
