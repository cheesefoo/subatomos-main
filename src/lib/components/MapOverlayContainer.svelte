<script>
	import { Lightbox } from 'svelte-lightbox';

	export let name;
	export let message;
	export let picture = undefined;
	export let fanart = undefined;
</script>

<div class='overlay-container'>

	<span class='overlay-text'>{name}</span>
	<br>
	<p class='overlay-text'>{message}</p>
	<br>
	<div class='overlay-images'>
		{#if picture}
			<Lightbox clickToClose={true} thumbnail imagePreset={'fullscreen'} protect={true}>
				<img slot="thumbnail" class='overlay-image' src={picture} alt='duck' />
				<img slot="image" class='overlay-image' src={picture} alt='duck' />
			</Lightbox>
		{/if}
		{#if fanart}
			<Lightbox clickToClose={true} thumbnail  imagePreset={'fullscreen'} protect={true}>
				<img slot="image" class='overlay-image' src={fanart} alt='fanart' />
				<img slot="thumbnail" class='overlay-image' src={fanart} alt='fanart' />
			</Lightbox>
		{/if}
	</div>
</div>

<style lang='scss'>
  .overlay-container {
    border: red;
    max-width: 36em;
    width: 100%;
  }

  .overlay-image {
    min-width: 30%;
    height: auto;
  }

/*  .overlay-images {
    display: flex;
  }*/
</style>