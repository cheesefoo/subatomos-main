<script lang='ts'>
	import Slider from './Slider.svelte';
	import { fade } from 'svelte/transition';
	import { Howl } from 'howler';

	let muted = false;
	let paused = true;
	let volume = 0.5;
	export let name;
	export let description;
	export let category;
	export let source;
	export let file;
	const howl = new Howl({
		src: [file]
	});
	export let duration = howl.duration();

	export let isPlaying = false;

	howl.on('play', () =>
	{
		requestAnimationFrame(step);
		isPlaying = true;
	});
	howl.on('end', () => (isPlaying = false));

	let currentTime;

	function step()
	{
		currentTime = howl.seek() || 0;


		// If the sound is still playing, continue stepping.
		if (howl.playing())
		{
			requestAnimationFrame(step);
		}
	}
</script>

<div class='sound-button-container'>
	<div class='sound-button' title={name} on:click={() => howl.play()}>
		{#if currentTime>0}
		{/if}

			<div in:fade out:fade>
				<Slider max={duration} min={0} step={duration / 200} current={currentTime} />
			</div>


		<span class='name'>{name}</span>
	</div>
</div>

<style lang='scss'>
  .sound-button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .sound-button {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    min-width: 0;
    width: 50%;
    height: 100%;
    background-color: $ivory;

    margin: 0 0 0 8px;
    vertical-align: middle;
    justify-items: center;
    text-align: center;
    border: 2px solid $chromeblue;
    border-radius: 5px;
    @include boxshadow($chromeblue);
  }

  .name {
    flex: 1;
    padding: 8px;
  }
	.placeholder{
		display:block;
		height:8px;
	}
</style>
