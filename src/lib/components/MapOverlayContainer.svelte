<script>
	import { Lightbox } from 'svelte-lightbox';

	export let name;
	export let message;
	export let pic = undefined;
	export let art = undefined;
</script>

<div class='overlay-container'>

	<span class='overlay-text'>{name}</span>
	<br>
	<p class='overlay-text'>{message}</p>
	<br>
	{#if pic || art}
	<span>Tap to enlarge タップで拡大</span>
		{/if}
	<div class='overlay-images'>
		{#if pic}
			<Lightbox clickToClose={true} thumbnail imagePreset={'fullscreen'} protect={true}>
				<img slot="thumbnail" class='overlay-image' src={pic} alt='duck' />
				<img slot="image" class='overlay-image' src={pic} alt='duck' />
			</Lightbox>
		{/if}
		{#if art}
			<Lightbox clickToClose={true} thumbnail  imagePreset={'fullscreen'} protect={true}>
				<img slot="image" class='overlay-image' src={art} alt='fanart' />
				<img slot="thumbnail" class='overlay-image' src={art} alt='fanart' />
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
span{
	text-align: center;
}
  .overlay-image {

    width:100%;
  }

  .overlay-images {
    display: flex;

  }
</style>