<script context='module'>
	export let name;
	export let message;
	export let picture = undefined;
	export let fanart = undefined;
</script>
<div class='overlay-container'>
	<span class='overlay-text' id='name'>{name}</span>
	<br>
	<div class='overlay-text' id='message'>{message}</div>
	<br>

	{#if picture}<img class='overlay-image' id='picture' src={picture} alt='duck' />{/if}
	{#if fanart}<img class='overlay-image' id='fanart' src={fanart} alt='fanart' />{/if}
</div>

<style lang='scss'>
  .overlay-container {
    border: red;
    max-width: 36em;
  }

  .overlay-image {
    min-width: 30%;
    height: auto;
  }
</style>