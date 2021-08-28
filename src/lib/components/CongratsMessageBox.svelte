<script>
	import bigstar from '$images/Star_bg_reszied.png';
	import stars from '$images/AboutSubaruWindowmobile.png';
	import megaphone from '$images/megaphone_resized.png';
	import Fa from 'svelte-fa';
	import { faTwitter } from '@fortawesome/free-brands-svg-icons';

	export let name;
	export let message;
	export let art = undefined;
	export let url = undefined;
</script>

<div class='box'>
	<div class='box-inner'>
		<span>{#if url != undefined}
			<Fa icon={faTwitter} />		{/if}
			<h2>{name}</h2></span>
		<hr />
		<p>{message}</p>
	</div>
	{#if art != undefined}
		<hr />

		<div class='fanart'>
			<img src={art} />
		</div>
		<hr />

	{/if}
	<div class='bigstar'>
		<img src={bigstar} alt='Subaru Message Star' />
	</div>
	<div class='stars'>
		<img src={stars} alt='Subaru Message Star' />
	</div>
	<div class='megaphone'>
		<img src={megaphone} alt='Subaru Message Star' />
	</div>
</div>

<style lang='scss'>
  .box {
    border-image-slice: 10 10 10 10;
    border-image-width: 20px 20px 20px 20px;
    border-image-outset: 0px 0px 0px 0px;
    border-image-repeat: stretch stretch;
    border-style: solid;
    border-image-source: url('$images/Window_resized.png');
    background-color: $ivory;

    position: relative;
    min-height: 20vh;
		max-height:80%;
  }

  .box-inner {
    margin: 40px;
    max-width: 40ch;
    position: relative;
    z-index: 1;
    //overflow-wrap: break-word;
  }

  .fanart {
    width: 100%;
    height: auto;
  }

  .megaphone {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .stars {
    position: absolute;
    bottom: 0;
    right: 0;

    img {
      width: 10rem;
    }
  }

  .bigstar {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
