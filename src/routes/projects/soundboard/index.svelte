<script lang="ts">
	import Slider from './Slider.svelte';
	import sounds from './_sounds';
	import SoundButton from './SoundButton.svelte';

	import Lazy from 'svelte-lazy';

	const onload = (node) => {
		console.log('on load');
	};
	let duration;
	let muted = false;
	let currentTime = 0;
	let paused = true;
	let volume = 0.5;

	export let soundList = sounds;
</script>

<!--<audio-->

<!--	bind:duration={duration}-->
<!--	bind:currentTime={currentTime}-->
<!--	bind:muted={muted}-->
<!--	bind:paused={paused}-->
<!--	bind:volume={volume}></audio>-->

<div class="soundboard-container">
	<h3>Ahem</h3>
	<div class="soundboard">
		{#each soundList as sound}
			{#if sound.category == 'ahem'}
				<div class="sound-button">
					<SoundButton {...sound} />
				</div>
			{/if}
		{/each}
	</div>

	<h3>English</h3>
	<div class="soundboard">
		{#each soundList as sound}
			{#if sound.category == 'english'}
				<div class="sound-button">
					<SoundButton {...sound} />
				</div>
			{/if}
		{/each}
	</div>

	<h3>Shuba</h3>
	<div class="soundboard">
		{#each soundList as sound}
			{#if sound.category == 'shuba'}
				<div class="sound-button">
					<SoundButton {...sound} />
				</div>
			{/if}
		{/each}
	</div>
	<h3>Screams</h3>
	<div class="soundboard">
		{#each soundList as sound}
			{#if sound.category == 'screams'}
				<div class="sound-button">
					<SoundButton {...sound} />
				</div>
			{/if}
		{/each}
	</div>
	<h3>???</h3>
	<div class="soundboard">
		{#each soundList as sound}
			{#if sound.category == '???'}
				<div class="sound-button">
					<SoundButton {...sound} />
				</div>
			{/if}
		{/each}
	</div>
	<h3>Uncategorized</h3>
	<div class="soundboard">
		{#each soundList as sound}
			{#if sound.category == undefined}
				<Lazy height={300}>
					<div class="sound-button">
						<SoundButton {...sound} />
					</div>
				</Lazy>
			{/if}
		{/each}
	</div>
</div>
<div class="volume">
	<Slider
		max={1}
		min={0}
		step={0.01}
		current={volume}
		on:change={(e) => (volume = e.detail.value)}
	/>
</div>

<style lang="scss">
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
</style>
