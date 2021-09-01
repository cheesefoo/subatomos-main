<script context="module" lang="ts">
	import { dev } from '$app/env';
	import video from '/static/assets/Suba_Logo_60fps.webm';
	import { fade } from 'svelte/transition';

	export async function load({ fetch }) {
		const res = await fetch('/logo');
		let data = await res.json();

		if (res.ok) {
			return { props: { anim: dev ? data.json : data.k } };
		}
		return {
			status: res.status,
			error: new Error()
		};
	}

	//
	// onMount(async () => {
	// 	bodymovin.loadAnimation({
	// 		container: document.getElementById('bm'),
	// 		renderer: 'svg',
	// 		loop: true,
	// 		autoplay: true,
	// 		path: 'data2.json'
	// 	});
	// });
</script>

<script>
	export let anim;
	let finished = false;

	function finish() {
		finished = true;
	}
</script>

{#if !finished}
	<div class="logo-container" out:fade={{ delay: 0, duration: 1000 }}>
		<video src={video} autoplay playbackRate={2} on:ended={finish} />
	</div>
{/if}
<!--<LottiePlayer-->
<!--	src={anim}-->
<!--	autoplay={true}-->
<!--	loop={true}-->
<!--	controls={true}-->
<!--	renderer='canvas'-->
<!--	background='transparent'-->
<!--	height={900}-->
<!--	width={1200}-->

<!--/>-->
<style>
	.logo-container {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
</style>
