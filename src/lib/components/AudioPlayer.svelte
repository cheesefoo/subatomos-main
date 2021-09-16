<script lang="ts">
	import { Howl } from 'howler';
	import oozoraken from '/static/assets/sound/oozora_kensetsu_by_jeremy_robson.mp3';
	import { dev } from '$app/env';
	import { onMount } from 'svelte';

	const howl = new Howl({
		src: oozoraken,
		loop: true,
		html5: true
	});

	let vol = dev
		? 'background-image: url(/static/assets/images/volume.png)'
		: 'background-image: url(/assets/images/volume.png)';
	let mut = dev
		? 'background-image: url(/static/assets/images/volume_mute.png)'
		: 'background-image: url(/assets/images/volume_mute.png)';

	export let paused: boolean;
	$: img = paused ? mut : vol;
	$: if (paused) {
		howl.mute(true);
	}
	$: if (!paused) {
		howl.mute(false);
	}

	function togglePause() {
		paused = !paused;
	}
	onMount(async()=>{
			howl.play();

		}
	)
</script>

<div style={img} on:click={togglePause} />

<style>
	div {
		width: 5vw;
		height: 5vh;
		background-repeat: no-repeat;
		background-size: contain;
		cursor: pointer;
	}
</style>
