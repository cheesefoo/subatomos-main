<script>
	import { Lightbox } from 'svelte-lightbox';
	import StarsSVG from '$lib/components/StarsSVG.svelte';
	import SNSLink from '$lib/components/SNSLink.svelte';
	import { media } from '$lib/stores/stores.ts';

	export let name;
	export let twitter = undefined;
	export let message;
	export let pic = undefined;
	export let art = undefined;
	if (twitter !== '') {
		twitter = 'https://twitter.com/' + twitter.replace('@', '');
	}
	let yellow = true;

	let size = '0.9x';
	if ($media.small) {
		size = '0.9x';
	}
</script>


<div class='box-border'>
	<div class='box' class:yellow>
		<div class='stars'>
			<StarsSVG width={200} height={111} />
		</div>

		<div class='box-inner-border' class:yellow>
			<div class='box-inner'>
				<span class:yellow>
				{#if twitter !== ''}
					<SNSLink url={twitter} {size} />
				{/if}
					{name}
				</span>
				<br>
				<p class='overlay-text'>{message}</p>
				<br>
				{#if pic || art}
					<hr className='art-divider' />
					<span id='tap-to-enlarge'>Tap to enlarge タップで拡大</span>
					<div class='pics-art-section'>
						{#if pic}
							<div class='fanart'>
								<Lightbox clickToClose={true} thumbnail imagePreset={'fullscreen'} protect={true}>
									<img slot='thumbnail' class='overlay-image' src={pic} alt='duck' />
									<img slot='image' class='overlay-image' src={pic} alt='duck' />
								</Lightbox>
							</div>
						{/if}
						{#if art}
							<div class='fanart'>

								<Lightbox clickToClose={true} thumbnail imagePreset={'fullscreen'} protect={true}>
									<img slot='image' class='overlay-image' src={art} alt='fanart' />
									<img slot='thumbnail' class='overlay-image' src={art} alt='fanart' />
								</Lightbox>
							</div>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang='scss'>
  @font-face {
    // This is parsed as a normal function call that takes a quoted string.
    src: url('/static/Corporate-Logo-Bold-ver2.woff2') format('woff2');
    font-family: 'Corporate-Logo-Bold-ver2';
    font-weight: normal bold;
  }

  :global(.leaflet-container a.leaflet-popup-close-button) {

  }

  :global(.leaflet-popup-close-button) {
    font-size: 2.5em !important;
    margin: 0.15em 0.25em 0 0;
    z-index: 99999;
  }

  :global(.leaflet-popup-content) {
    margin: 0;
  }

  .box-border { //,:global(.leaflet-popup-content-wrapper) {
    border: white solid 0.5em;
    border-radius: 1em;
    box-shadow: 5px 5px 5px rgb(0 0 0 / 0.4);
  }

  .box {
    position: relative;
    min-height: 20%;
    max-height: 80%;
  }

  .box-inner-border {
    border-style: solid;
    border-image-slice: 96 96 96 96;
    border-image-width: 20px 20px 20px 20px;
    border-image-outset: 0 0 0 0;
    border-image-repeat: stretch stretch;
    border-image-source: url('/static/assets/images/Cross.png');
    background-size: contain;
    background-clip: border-box;
    background-origin: border-box;

    &.yellow {
      background: #fff9e9 url('/static/assets/images/Star_bg_yellow.png') no-repeat right top;
      background-image: url('/static/assets/images/namebanner.webp'), url(/static/assets/images/Star_bg_yellow.png);
      background-position: 0 20px, right top;
      background-size: 100% 2.5em, 40% auto;
    }

    &.pink {
      background: #fdebe7 url('/static/assets/images/Star_bg_pink.png') no-repeat right top;
      background-image: url('/static/assets/images/namebanner.webp'), url(/static/assets/images/Star_bg_pink.png);
      background-position: 0 20px, right top;
      background-size: 100% 2.5em, 40% auto;
    }
  }

  $hrmargin: 4ch;
  .box-inner {
    margin: 2.5ch $hrmargin 0 $hrmargin;
    max-width: 80ch;
    position: relative;
    z-index: 1;
    overflow-wrap: break-word;
    overflow: hidden;
    background-size: 100%;

    &.yellow {
      background: #fff9e9;
    }

    &.pink {
      background: #fdebe7;
    }

    span {
      font-size: 1.5rem;
      font-family: 'Corporate-Logo-Bold-ver2', sans-serif;
      font-weight: normal;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

      &.yellow {
        color: #e07f79;
      }

      &.pink {
        color: #ffd4a0;
      }
    }

    p {
      font-family: setofont, sans-serif;
      font-size: 1em;
      padding: 1.5em 0;
      color: #51b1c4;
    }
  }

  .art-divider {
    width: 100%;
    margin: 0 $hrmargin;
    max-width: 40ch;
  }

  .fanart {
    padding-bottom: 2em;
  }

  .overlay-image {
    width: 100%;
    max-height: 60%;
  }

  .pics-art-section {
    display: flex;
  }

  .stars {
    position: absolute;
    z-index: 9999;
    right: -3.5ch;
    top: -4ch;
    zoom: 0.5;
  }

  #tap-to-enlarge {
    font-size: 0.9em;
  }


  @media screen and (max-width: 849px) {
  }

  /*
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
	 */

</style>