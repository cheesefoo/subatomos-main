<script lang='ts' context='module'>


	export async function load({ fetch })
	{
		const res = await fetch('/birthday2022-messages');
		const texts = await res.json();
		if (res.ok)
		{
			return { props: { msgs: texts } };
		}
		return {
			status: res.status,
			error: new Error()
		};
	}


</script>
<script>
	import { getContext, onMount } from 'svelte';
	import { browser } from '$app/env';

	import { baseURL } from '$lib/variables.ts';
	import MapToolbar from '$lib/map/MapToolbar.svelte';
	import MapOverlayContainer from '$lib/components/MapOverlayContainer.svelte';

	import { media } from '$lib/stores/stores';
	import metaimg from '/static/assets/images/3rdanniversarylogo.jpg';
	import metatwi from '/static/assets/images/meta3rd.jpg';

	import piano from '/static/assets/images/instruments/piano.png';
	import accordion from '/static/assets/images/instruments/accordion.png';
	import flute from '/static/assets/images/instruments/flute.png';
	import drums from '/static/assets/images/instruments/drums.png';
	import guitar from '/static/assets/images/instruments/guitar.png';
	import saxophone from '/static/assets/images/instruments/saxophone.png';

	import showMapIcon from '/static/assets/images/subatomos_around_world.png';

	import 'leaflet/dist/leaflet.css';
	import { Modal } from 'svelte-simple-modal';

	import Birthday2022CreditsButton from '$lib/components/Birthday2022CreditsButton.svelte';

	import { MetaTags } from 'svelte-meta-tags';

	//required for importing modules that need clientside for sveltekit
	let LeafletContainer;
	let ControlContainer;
	let MarkerContainer;
	let PopupContainer;
	let CarouselContainer;
	onMount(async () => {
		if (browser) {
			LeafletContainer = (await import('$lib/map/Leaflet.svelte')).default;
			ControlContainer = (await import('$lib/map/Control.svelte')).default;
			MarkerContainer = (await import('$lib/map/Marker.svelte')).default;
			PopupContainer = (await import('$lib/map/Popup.svelte')).default;
			CarouselContainer = (await import('svelte-carousel')).default;
			hideMap();
		}
	});
	export let msgs;

	let bothIcon, artIcon, picIcon, noneIcon;
	noneIcon = 'assets/images/subaru_waypoint_blue.png';
	picIcon = bothIcon = artIcon = 'assets/images/subaru_waypoint_red.png';

	let initialView;
	initialView = $media.small ? [40, -70] : [0, 0];
	let map;
	let eye = true;
	let showLines = false;
	let hamburgerOpen = false;
	let carousel;

	let vidWidth, vidHeight;
	if (!$media.small) {
		vidWidth = '852';
		vidHeight = '480';
	} else {

	}

	let mapElem;

	function showMap() {
		const elems = document.querySelectorAll('main > *');

		for (let i = 0; i < elems.length; i++) {
			elems[i].style.transition = 'opacity 0.5s linear 0s';
			elems[i].style.opacity = 0;
		}

		if (mapElem === undefined) mapElem = document.querySelector('.msg-map');
		mapElem.style.zIndex = '2';
		mapElem.style.opacity = '1';
	}

	function hideMap() {
		const elems = document.querySelectorAll('main > *');


		for (let i = 0; i < elems.length; i++) {
			elems[i].style.transition = 'opacity 0.5s linear 0s';
			elems[i].style.opacity = 1;
		}

		if (mapElem === undefined) mapElem = document.querySelector('.msg-map');

		mapElem.style.opacity = '0';
		setTimeout(function() {
			mapElem.style.zIndex = '-1';
		}, (1000));
	}

	function resizeMap() {
		if (map) {
			map.invalidateSize();
		}
	}

	function resetMapView() {
		map.setView(initialView, 3);
	}

</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Happy 17.4th birthday Subaru!</title>
	<meta name='title' content='Happy 17.4th birthday Subaru!' />
	<meta
		name='description'
		content='Celebration site with a video concert & messages from Subatomos!
お祝いサイトではビデオコンサートやスバ友たちからのメッセージをご紹介しています！！！'
	/>

	<!-- Open Graph / Facebook -->
	<meta property='og:type' content='website' />
	<meta property='og:url' content='https://subatomos.com/birthday2022' />
	<meta property='og:title' content='Happy 17.4th birthday Subaru!' />
	<meta
		property='og:description'
		content='Celebration site with a video concert & messages from Subatomos!
お祝いサイトではビデオコンサートやスバ友たちからのメッセージをご紹介しています！！！'
	/>
	<meta property='og:image' content={metaimg} />

	<meta property='twitter:card' content='summary_large_image' />
	<meta property='twitter:url' content='https://subatomos.com/birthday2022' />
	<meta
		property='twitter:title'
		content='Happy 17.4th birthday Subaru!'
	/>
	<meta
		property='twitter:description'
		content='Celebration site with a video concert & messages from Subatomos!
お祝いサイトではビデオコンサートやスバ友たちからのメッセージをご紹介しています！！！'
	/>
	<meta property='twitter:image' content={`${baseURL}${metatwi}`} />
</svelte:head>

<div class='back-btn'>
	<a sveltekit:prefetch href='/'>
		<span><svg class='w-6 h-6' data-darkreader-inline-stroke='' fill='none' stroke='currentColor'
							 style='--darkreader-inline-stroke:currentColor;' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
			<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10 19l-7-7m0 0l7-7m-7 7h18'></path>
		</svg></span>
	</a>
</div>
<main>
	{#if $media.small}
		<!--		<div class='hamburger'>
					<Hamburger
						&#45;&#45;layer-width='30px'
						bind:hamburgerOpen />
				</div>
				{#if hamburgerOpen}
					<div class='burger-menu'>
						{#each ['link 1', 'link 2', 'link 3'] as link, i}
							<p transition:fly={{ y: -15, delay: 50 * i }}>
								{link}
							</p>
						{/each}
					</div>

					<div class='bar' transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
				{/if}-->
	{:else}
		<!--<div class='arrow'>
			<img src={arrow} alt='scroll down' />
		</div>-->
	{/if}

	<!--<svelte:window on:resize={resizeMap} />-->
	<p class='hbd-text'>Happy 17.4th Birthday, Subaru!!!
		<br>
		スバルちゃん、17.4歳のお誕生日おめでとうございます！！！
	</p>
	<div class='top top-color-picker'>

		<div class='instruments instruments-1'>
			<img src={drums} alt='drums'>
			<img src={saxophone} alt='saxophone'
			>
			<img src={guitar}
					 alt='guitar'
			></div>


		<div class='middle'>
			<div class='video-container'>
				<img src='https://cdn.discordapp.com/attachments/984694080258842654/991692329964548126/subaru_birthday_thumbnail.png' height={vidHeight} width={vidWidth}/>
				<!--<iframe
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
					frameborder='0'
					height={vidHeight}
					width={vidWidth}
					src='https://www.youtube.com/embed/AwLO-pisoVA'
					title='YouTube video player'
				/>-->
			</div>
			<div class='show-map'>
				<p>Tap to see messages from Subatomos!<br>タップするとスバ友からのメッセージが表示されます!</p>
				<input type='image' src={showMapIcon} class:show-map-button={!eye} on:click={showMap} alt='show map' />

			</div>
		</div>
		<div class='instruments instruments-2 '><img src={flute}
																								 alt='flute'
		><img
			src={piano} alt='piano'
		> <img src={accordion}
					 alt='accordion'
		></div>

	</div>
	<!--{#if browser && !$media.small}-->
	<div class='credits-btn'>
		<Modal styleWindow={{width:'auto',backgroundColor: '#f1bd65'}}
					 }>
			<Birthday2022CreditsButton />
		</Modal>
	</div>
	<!--{/if}-->
	{#if browser}
		<div class='msg-map'>
			{#if browser}
				<svelte:component this={LeafletContainer} bind:map view={initialView} zoom={2} width='100vw' height='100vh'>
					<svelte:component this={ControlContainer} position='topright'>
						<!--								<MapToolbar bind:eye bind:lines={showLines} on:click-reset={resetMapView} />-->
						<MapToolbar bind:eye on:click-hide-map={hideMap} />
						<!--			<svelte:component this={MapToolbarContainer} bind:eye bind:lines={showLines} on:click-reset={resetMapView} />-->
					</svelte:component>


					{#each msgs as { name, twitter, message, pic, art, latlng }}
						<!--{@debug lat, lng}-->
						<svelte:component this={MarkerContainer} {latlng} width={30} height={30}>
							{#if (pic === '' && art === '')}
								<img src={noneIcon} width='30' height='30' alt='message for Subaru' />

							{:else}
								<img src={bothIcon} width='30' height='30' alt='picture for Subaru' />

							{/if}
							<!--						<svg style='width:30px;height:30px' fill='none' stroke-linecap='round' stroke-linejoin='round'
															 stroke-width='2' viewBox='0 0 24 24' stroke='currentColor'>
														<path d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'></path>
													</svg>-->

							<svelte:component this={PopupContainer}>


								<MapOverlayContainer {name} {twitter} {message} {pic} {art} />
							</svelte:component>
							<!--					<Pane></Pane>-->
						</svelte:component>
					{/each}

					<!--{#if showLines}
						{#each lines as {latLngs, color}}
							<Polyline {latLngs} {color} opacity={0.5} />
						{/each}
					{/if}-->
				</svelte:component>
			{/if}
		</div>
	{/if}
</main>

<style lang='scss'>
  .back-btn {
    font-size: 3em;
    position: absolute;
    left: 3vw;
    top: 0;
    width: 1em;

    a {
      color: black;
    }
  }

  main {
    background: url(/static/assets/images/bgseamless.webp) no-repeat center center fixed;
    background-size: cover;
    width: 100vw;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-items: center;
    display: flex;
    overflow: hidden;
  }

  .arrow {
    position: absolute;
    animation: bounce 2s infinite;
    bottom: 0;

    img {
      width: 90%;
    }
  }

  .credits-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 25%;
  }

  .hamburger {
    position: absolute;
    right: 0px;
  }

  .hbd-text {
    position: absolute;
    text-align: center;
    font-family: keifont, sans-serif;
    font-size: 2em;
    font-weight: bolder;

    color: #D7B377;
    -webkit-text-stroke: 1px white;
  }

  .instruments {
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20vw;

    img {
      position: relative;
      width: 100%;
      height: 20vh;
      object-fit: contain;
      box-sizing: border-box;
      transition: padding 0.2s;
      padding: 0;
			:hover{
        padding: 10px;

      }

    }
  }

  .instruments-1 {
    top: 35%;
    animation: bounce  5s 0s infinite;

    img:nth-child(1) {
      left: 120px;
      top: -30px;
      -webkit-animation: wobble-hor-bottom 5s 1s infinite both;
      animation: wobble-hor-bottom 5s 1s infinite both;
    }

    img:nth-child(2) {

      -webkit-animation: wobble-hor-bottom 5s 1.5s infinite both;
      animation: wobble-hor-bottom 5s 1.5s infinite both;
    }

    img:nth-child(3) {
      left: 120px;
      bottom: -30px;
      -webkit-animation: wobble-hor-bottom 5s 2s infinite both;
      animation: wobble-hor-bottom 5s 2s infinite both;
    }

  }

  .instruments-2 {
    bottom: 15%;
    animation: bounce 5s 0.5s  infinite;

    img:nth-child(1) {
      right: 120px;
      top: -30px;
      -webkit-animation: wobble-hor-bottom 5s 1s infinite both;
      animation: wobble-hor-bottom 5s 1s infinite both;
    }

    img:nth-child(2) {

      -webkit-animation: wobble-hor-bottom 5s 1.5s infinite both;
      animation: wobble-hor-bottom 5s 1.5s infinite both;
    }

    img:nth-child(3) {
      right: 120px;
      bottom: -30px;
      -webkit-animation: wobble-hor-bottom 5s 2s infinite both;
      animation: wobble-hor-bottom 5s 2s infinite both;
    }
  }


  .msg-map {
    position: absolute;
  }

  .show-map {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    bottom: 0;

    p {
      position: absolute;
      font-weight: bold;
      font-family: keifont, sans-serif;
      font-size: 2rem;
      color: #D7B377;
      -webkit-text-stroke: 1px white;
      pointer-events: none;
      top: -1em;
      z-index: 1;
      -webkit-animation: pulsate-fwd 5s cubic-bezier(0.215, 0.610, 0.355, 1.000) infinite both;
      animation: pulsate-fwd 5s cubic-bezier(0.215, 0.610, 0.355, 1.000) infinite both;
    }

    input {
      width: 30%;

    }
  }

  .show-map-button {
    display: none;
  }


  .top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    background: #c7c2b6 url(/static/assets/images/instruments/music_sheet_bg.png) no-repeat 0% 20vh;
    background-size: 100%;
    width: 100vw;
    height: 80vh;
    padding-top: 20vh;
    //padding-right: 50vw;
    * {
      box-sizing: border-box;
    }

  }

  .top-color-picker {
    background-color: #2B4162;
    background-image: url(/static/assets/images/instruments/music_sheet_bg_white.png);
    background-image: url(/static/assets/images/instruments/music_sheet_bg_border.png);
  }

  .middle {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /*  .video-container {
			position: relative;
			padding-bottom: 56.25%; !* 16:9 *!
			height: 0;


	iframe{

				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				 }
		}*/

  @media screen and (max-width: 849px) {

    .credits-btn {
      position: absolute;
      bottom: 20%;
      left: 0;
      width: 5%;
    }

    .hbd-text {
      top: 5%;
      font-size: 1.5em;
    }

    .instruments-1 {
      top: 10%
    }
    .instruments-2 {
      bottom: 0%;
    }
    .show-map {
      p {
        font-size: 1em;
        bottom: 13vh;
      }

      input {
        width: 100%;
        bottom: 0;
      }
    }
    //.top {
    //  background: #c7c2b6 url(/static/assets/images/instruments/music_sheet_bg.png) no-repeat 0 20vh;
    //}

    .video-container {
      //position: absolute;
      //bottom: 12%;
      //left: 12%;
      width: 65vw;
      height: 40vw;

      iframe,img {
        position: absolute;
        bottom: 35%;
        left: 0%;
        width: 100%;
        height: 25%;
      }
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  @-webkit-keyframes wobble-hor-bottom {
    0%,
    100% {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    2% {
      -webkit-transform: translateX(-30px) rotate(-6deg);
      transform: translateX(-30px) rotate(-6deg);
    }
    4% {
      -webkit-transform: translateX(15px) rotate(6deg);
      transform: translateX(15px) rotate(6deg);
    }
    6% {
      -webkit-transform: translateX(-15px) rotate(-3.6deg);
      transform: translateX(-15px) rotate(-3.6deg);
    }
    8% {
      -webkit-transform: translateX(9px) rotate(2.4deg);
      transform: translateX(9px) rotate(2.4deg);
    }
    10% {
      -webkit-transform: translateX(-6px) rotate(-1.2deg);
      transform: translateX(-6px) rotate(-1.2deg);
    }
    12% {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
  }

  @keyframes wobble-hor-bottom {
    0%,
    100% {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    2% {
      -webkit-transform: translateX(-30px) rotate(-6deg);
      transform: translateX(-30px) rotate(-6deg);
    }
    4% {
      -webkit-transform: translateX(15px) rotate(6deg);
      transform: translateX(15px) rotate(6deg);
    }
    6% {
      -webkit-transform: translateX(-15px) rotate(-3.6deg);
      transform: translateX(-15px) rotate(-3.6deg);
    }
    8% {
      -webkit-transform: translateX(9px) rotate(2.4deg);
      transform: translateX(9px) rotate(2.4deg);
    }
    10% {
      -webkit-transform: translateX(-6px) rotate(-1.2deg);
      transform: translateX(-6px) rotate(-1.2deg);
    }
    12% {
      -webkit-transform: translateX(-6px) rotate(-1.2deg);
      transform: translateX(-6px) rotate(-1.2deg);
    }
  }

  @-webkit-keyframes pulsate-fwd {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes pulsate-fwd {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
</style>