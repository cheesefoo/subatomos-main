<script context="module" lang="ts">
	import LottiePlayer from '$lib/components/lottieplayer/LottiePlayer.svelte';
	export async function load({ fetch }) {
		const res = await fetch('/logo');
		let data = await res.json();

		if (res.ok) return { props: { anim: data.json } };
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
</script>

<LottiePlayer
	src={anim}
	autoplay={true}
	loop={true}
	controls={true}
	renderer="canvas"
	background="transparent"
	height={900}
	width={1200}
/>

<style>
	html,
	body,
	main {
		background-color: #000;
		width: 100%;
		height: 100%;
		margin: 0;
		overflow: hidden;
	}

	#bm {
		width: 100%;
		height: 100%;
	}
</style>
