<script lang='ts'>
	import Slider from './Slider.svelte';
	import sounds from './_sounds';
	import categories from './_categories';
	import SoundButton from './SoundButton.svelte';

	import Lazy from 'svelte-lazy';
	import LL from '/src/i18n/i18n-svelte';

	let duration;
	let muted = false;
	let currentTime = 0;
	let paused = true;
	let volume = 0.5;

	export let soundList = sounds;
	export let categoryList = categories;
</script>

<svelte:head>
	<title>{$LL.HEADER.SOUNDBOARD()}</title>
</svelte:head>
<!--<audio-->

<!--	bind:duration={duration}-->
<!--	bind:currentTime={currentTime}-->
<!--	bind:muted={muted}-->
<!--	bind:paused={paused}-->
<!--	bind:volume={volume}></audio>-->

<div class='soundboard-container'>
	{#each categoryList as category}
		<h3 style='text-transform: capitalize'>{category}</h3>
		<div class='soundboard'>
			{#each soundList as sound}
				{#if sound.category == category}
					<Lazy height={46}>
						<div class='sound-button'>
							<SoundButton {...sound} />
						</div>
					</Lazy>
				{/if}
			{/each}
		</div>
	{/each}
	<h3>Uncategorized</h3>
	<div class='soundboard'>
		{#each soundList as sound}
			{#if sound.category == undefined}
				<Lazy height={46}>
					<div class='sound-button'>
						<SoundButton {...sound} />
					</div>
				</Lazy>
			{/if}
		{/each}
	</div>
</div>
<div class='volume'>
	<Slider
		max={1}
		min={0}
		step={0.01}
		current={volume}
		on:change={(e) => (volume = e.detail.value)}
	/>
</div>

<style lang='scss'>
  .soundboard {
    display: grid;
    min-width: 480px;
    width: 100%;
    overflow: visible;

    //justify-content: center;
    grid-template-columns: repeat(3, 1fr);

    column-gap: 1em;
    row-gap: 1em;
  }

  .volume {
    position: absolute;
    right: 0;
  }

  @media screen and (max-width: 849px) {
    .soundboard {
      min-width: 100%;
      grid-template-columns: repeat(2, 1fr);
      column-gap:1em;

    }
  }
</style>
