<script lang="ts">
	import { Howl } from 'howler';
	import { dev } from '$app/environment';
	import { onMount } from 'svelte';


	export let audio = '/assets/sound/oozora_kensetsu_by_jeremy_robson.mp3';
	const howl = new Howl({
		src: audio,
		loop: true,
		html5: true
	});

	let vol = dev
		? 'background-image: url(/src/assets/images/volume.png)'
		: 'background-image: url(/assets/images/volume.png)';
	let mut = dev
		? 'background-image: url(/src/assets/images/volume_mute.png)'
		: 'background-image: url(/assets/images/volume_mute.png)';

	export let paused = true;
	$: img = paused ? mut : vol;

	$: {
		paused ? howl.pause() : howl.play();
	}
	function togglePause() {
		paused = !paused;
	}

	onMount(() => {
		howl.load();
	});
</script>

<div class="volume" style={img} on:click={togglePause} />

<style>
	.volume {
		width: 5vw;
		height: 5vh;
		background-repeat: no-repeat;
		background-size: contain;
		cursor: pointer;
	}

	@media screen and (max-width: 849px) {
		.volume {
			width: 30vw;
			height: 10vh;
			background-repeat: no-repeat;
			background-size: contain;
			cursor: pointer;
			background-position: left bottom;
			float: right;
		}
	}
</style>
