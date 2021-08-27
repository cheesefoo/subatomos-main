<script context="module" lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import Lazy from 'svelte-lazy';
	import { fly } from 'svelte/transition';
	import Credit from '$lib/components/Credit.svelte';
	import CongratsMessageBox from '$lib/components/CongratsMessageBox.svelte';

	export async function load({ fetch }) {
		const res = await fetch('/congrats-messages');
		const texts = await res.json();
		if (res.ok) return { props: { texts: texts } };
		return {
			status: res.status,
			error: new Error()
		};
	}

	// let innerHeight;
	// let y;
	// let showBackToTop = false;
	// $: showBackToTop = y > innerHeight + 60;
</script>

<script>
	export let texts;
</script>

<!--<svelte:window bind:innerHeight bind:scrollY={y} />-->
<!--{@debug innerHeight}-->
<!--{@debug y}-->
<svelte:head>
	<title>{$LL.THIRD.TITLE()}</title>
</svelte:head>

<main>
	<div>
		<h3>{$LL.THIRD.CONGRATS()}</h3>
		<div class="video-container">
			<iframe
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				frameborder="0"
				height="720"
				src="https://www.youtube.com/embed/pyH6z4zxWa8"
				title="YouTube video player"
				width="1280"
			/>
		</div>
	</div>
	<div class="credits">
		<h3>Credits</h3>
		<h4>Animation</h4>
		<div>
			<span>Original outfit: </span>
			<Credit name="subatomos" url="https://twitter.com/subatomos" />
		</div>
	</div>
	<div class="messages-container">
		{#each texts as { avatar, lastName, lorem }}
			<div class="message-box">
				<Lazy height={'20vh'}>
					<CongratsMessageBox name={lastName} message={lorem} />
				</Lazy>
			</div>
		{/each}
	</div>

	<!--{#if showBackToTop}-->
	<!--	<a-->
	<!--		transition:fly={{ y: 200, duration: 2000 }}-->
	<!--		href={'#'}-->
	<!--		class="back-to-top-btn"-->
	<!--		on:click={(y = 0)}>Back to top</a-->
	<!--	>-->
	<!--{/if}-->
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
	}

	h3 {
		text-align: center;
	}

	.video-container {
		width: auto;
		max-width: 100%;
		margin: auto;
		text-align: center;

		iframe {
			width: 100%;
			max-width: 100%;
			margin: auto;
		}
	}

	//.messages-container {
	//  display: flex;
	//  flex-wrap: wrap;
	//  overflow: hidden;
	//  max-width: 100%;
	//  height: auto;
	//}
	.messages-container {
		display: grid;
		padding-top: 5vh;
		min-width: 480px;
		width: 100%;
		overflow: visible;

		//justify-content: center;
		grid-template-columns: repeat(3, 1fr);

		column-gap: 1em;
		row-gap: 1em;
	}

	.back-to-top-btn {
		position: sticky;
		bottom: 1vh;
		left: 1vw;
	}
</style>
