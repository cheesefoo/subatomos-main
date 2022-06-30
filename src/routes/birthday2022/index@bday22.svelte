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
	import metaimg from '/static/assets/images/subaru_birthday_thumbnail.png';
	import metatwi from '/static/assets/images/subaru_birthday_thumbnail.jpg';

	import piano from '/static/assets/images/instruments/piano.webp';
	import accordion from '/static/assets/images/instruments/accordion.webp';
	import flute from '/static/assets/images/instruments/flute.webp';
	import drums from '/static/assets/images/instruments/drums.webp';
	import guitar from '/static/assets/images/instruments/guitar.webp';
	import saxophone from '/static/assets/images/instruments/saxophone.webp';
	import showMapIcon from '/static/assets/images/subatomos_around_world.png';
	import loading from '/static/assets/images/instruments/loading-suba-music.gif';
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
			document.getElementById('loading').style.transition = 'opacity 0.5s linear 0s';
			document.getElementById('loading').style.opacity = 0;
			setTimeout(() =>
					document.getElementById('loading').style.display = 'none'
				, (500));
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
		}, (500));
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
<div id='loading'>
	<img src={loading} />
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
<!--				<img style='visibility:hidden' src={metaimg} height={vidHeight} width={vidWidth} />-->
<!--				height={vidHeight}-->
<!--				width={vidWidth}-->
				<iframe
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
					frameborder='0'

					src='https://www.youtube.com/embed/AwLO-pisoVA'
					title='YouTube video player'
				/>
			</div>
			<div class='show-map'>
				{#if $media.small}
					<div class='instruments instruments-2 '>
						<img src={flute} alt='flute'>
						<img src={piano} alt='piano'>
						<img src={accordion} alt='accordion' style='visibility:hidden'>


					</div>
				{/if}
				<p>Tap to see messages from Subatomos!<br>タップするとスバ友からのメッセージが表示されます!</p>
				<input type='image' src={showMapIcon} class:show-map-button={!eye} on:click={showMap} alt='show map' />

			</div>
		</div>
		{#if !$media.small}
			<div class='instruments instruments-2 '>
				<img src={flute} alt='flute'>
				<img src={piano} alt='piano'>
				<img src={accordion} alt='accordion'></div>
		{/if}
	</div>
	{#if browser }
		<div class='credits-btn'>
			<Modal styleWindow={{width:'auto',backgroundColor: '#f1bd65'}}
						 }>
				<Birthday2022CreditsButton />
			</Modal>
		</div>
	{/if}
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
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
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
    0%, 100%, 12% {
      -webkit-transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform: translateX(0%);
      transform-origin: 50% 50%;
    }
  }

  @keyframes wobble-hor-bottom {
    0%, 100% {
      -webkit-transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform: translateX(0%);
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
    10%, 12% {
      -webkit-transform: translateX(-6px) rotate(-1.2deg);
      transform: translateX(-6px) rotate(-1.2deg);
    }
  }

  @-webkit-keyframes pulsate-fwd {
    50% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    0%, 100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes pulsate-fwd {
    50% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    0%, 100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  .back-btn {
    font-size: 3em;
    left: 3vw;
    position: absolute;
    top: 0;
    width: 1em;

    a {
      color: #000;
    }
  }

  main {
    background: url(/static/assets/images/bgseamless.webp) no-repeat center center fixed;
    background-size: cover;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-items: center;
    overflow: hidden;
    width: 100vw;
  }

  .arrow {
    animation: bounce 2s infinite;
    bottom: 0;
    position: absolute;

    img {
      width: 90%;
    }
  }

  .credits-btn {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 5vw;
  }

  .hamburger {
    position: absolute;
    right: 0;
  }

  .hbd-text {
    -webkit-text-stroke: 1px #fff;
    color: #D7B377;
    font: bolder 2em keifont, sans-serif;
    position: absolute;
    text-align: center;
    top: -3vh;
    z-index: 1;
  }

  .instruments {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 1 1 10%;
    height: 100%;
    padding: 10vh 0;
    width: 200px;

    img {
      box-sizing: border-box;
      height: 20vh;
      object-fit: contain;
      padding: 0;
      position: relative;
      transition: padding .2s;
      width: 50%;

      &:hover {
        padding: 10px;
      }
    }
  }

  .instruments-1 {
    animation: bounce 5s 0s infinite;
    top: 35%;

    img {
      &:nth-child(1) {
        -webkit-animation: wobble-hor-bottom 5s 1s infinite both;
        animation: wobble-hor-bottom 5s 1s infinite both;
        left: 120px;
        top: -30px;
      }

      &:nth-child(3) {
        -webkit-animation: wobble-hor-bottom 5s 2s infinite both;
        animation: wobble-hor-bottom 5s 2s infinite both;
        bottom: -30px;
        left: 120px;
      }

      &:nth-child(2) {
        -webkit-animation: wobble-hor-bottom 5s 1.5s infinite both;
        animation: wobble-hor-bottom 5s 1.5s infinite both;
      }
    }
  }

  .instruments-2 {
    animation: bounce 5s .5s infinite;
    bottom: 15%;

    img {
      &:nth-child(1) {
        -webkit-animation: wobble-hor-bottom 5s 1s infinite both;
        animation: wobble-hor-bottom 5s 1s infinite both;
        right: 120px;
        top: -30px;
      }

      &:nth-child(3) {
        -webkit-animation: wobble-hor-bottom 5s 2s infinite both;
        animation: wobble-hor-bottom 5s 2s infinite both;
        bottom: -30px;
        right: 120px;
      }

      &:nth-child(2) {
        -webkit-animation: wobble-hor-bottom 5s 1.5s infinite both;
        animation: wobble-hor-bottom 5s 1.5s infinite both;
      }
    }
  }

  #loading {
    background-color: #2B4162;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: absolute;
    width: 100vw;
    z-index: 9999;
  }

  .msg-map {
    position: absolute;
  }

  .show-map {
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-image: url(/static/assets/images/instruments/stand_pole.png);
    background-size: 100% auto;
    flex: 1 1 20%;
    flex-wrap: wrap;
    justify-content: flex-end;
    position: relative;
    width: 100%;

    p {
      -webkit-animation: pulsate-fwd 5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite both;
      -webkit-text-stroke: 1px #fff;
      animation: pulsate-fwd 5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite both;
      color: #D7B377;
      font: 700 2rem keifont, sans-serif;
      pointer-events: none;
      position: absolute;
      z-index: 1;
      top: 1em;
    }

    input {
      flex: 1 1 30%;
      object-fit: contain;
      object-position: bottom;
      width: 60%;
    }
  }

  .show-map-button {
    display: none;
  }

  .top {
    align-items: flex-start;
    background: #c7c2b6 url(/static/assets/images/instruments/music_sheet_bg.png) no-repeat 0 20vh;
    background-size: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
    padding-top: 0;

    * {
      box-sizing: border-box;
    }
  }

  .top-color-picker {
    background-size: cover, contain;
    background: #2B4162 url(/static/assets/images/instruments/music_sheet_bg_border.webp) no-repeat 0 20vh;
    background-size: contain;
  }

  .middle {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1 1 60%;
    height: 100vh;
  }

  body {
    max-width: 100%;
    overflow-x: hidden;
  }

  .video-container {
    align-content: center;
    align-items: center;
    background-image: url(/static/assets/images/instruments/stand.webp) !important;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 70vh;
    justify-content: flex-end;
    position: relative;
    top: 3px;
    padding:14vw 13vw 0;

    > * {
      text-align: center !important;
    }

    iframe {
      bottom: 35%;
      left: 0;
      -o-object-fit: contain;
      -o-object-position: bottom center;
      height: 100%;
      margin: auto;
      object-fit: contain;
      object-position: bottom center;
      position: initial;
      text-align: center;
      width: 40vw;
      height:calc(40vw / 1.7)!important;
    }
  }

  @media screen and (max-width: 849px) {
    .credits-btn {
      bottom: 23vh;
      left:initial;
      right:5%;
      position: absolute;
      width: 25vw;
    }
    .hbd-text {

      -webkit-text-stroke: 1px #fff;
      background-color: #2b4162;
      color: #d7b377;
      font: bolder 1.5em keifont, sans-serif;
      margin: 0;
      padding-top: .5em;
      position: initial;
      text-align: center;
      top: -3vh;
      z-index: 1 !important;
    }
    .instruments-1 {
      top: 10%;
    }
    .instruments-2 {
      bottom: 0;
    }
    .show-map {
      p {
        font-size: 1em;
        bottom: 10vh;
        top: initial;
      }

      input {
        bottom: 0;
        width: 100%;
        -o-object-fit: contain;
        -o-object-position: bottom;
        flex: 1 1 50%;
        object-fit: contain;
        object-position: bottom;
      }

      align-items: center;
      background-image: url(/static/assets/images/instruments/stand_pole_mobile.png);
      background-repeat: no-repeat;
      background-size: 100% auto;
      bottom: 0;
      display: flex;
      flex: 1 1 20%;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-end;
      padding-top: 0;
      position: relative;
      text-align: center;
      width: 100%;
    }
    .video-container {
      align-content: center;
      align-items: center;
      background-image: url(/static/assets/images/instruments/stand_mobile.png) !important;
      background-position: bottom center;
      background-repeat: no-repeat;
      background-size: contain;
      display: block;
      flex-direction: column;
      flex-wrap: wrap;
      height: 30vh;
      justify-content: flex-end;
      margin: auto;
      padding-top: 80px;
      position: relative;
      text-align: center;
      top: 3px;
      width: 100%;
      margin-top: 5vh;

      iframe {
        bottom: 35%;
        left: 0;
        -o-object-fit: contain;
        -o-object-position: bottom center;
        height: 100%;
        margin: auto;
        object-fit: contain;
        object-position: bottom center;
        position: initial;
        text-align: center;
        width: 75% !important;
      }

      img {
        bottom: 35%;
        left: 0;
        -o-object-fit: contain;
        -o-object-position: bottom center;
        height: 100%;
        margin: auto;
        object-fit: contain;
        object-position: bottom center;
        position: initial;
        text-align: center;
        width: 75% !important;
      }

      > * {
        display: block;
        height: auto;
        text-align: center;
        width: 64%;
      }
    }
    main {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      justify-items: center;
      min-height: 100vh;
      overflow: hidden;
    }
    .instruments {
      .instruments-2 {
        margin-top: 0;
        position: relative;
        top: -5vh;
      }

      align-items: center !important;
      display: flex !important;
      flex: 0 1 10vh !important;
      flex-direction: row !important;
      flex-wrap: wrap !important;
      height: 10px !important;
      justify-content: space-between !important;
      margin-bottom: -5vh !important;
      margin-top: 5vh !important;
      padding: 0 10px !important;
      width: 100% !important;

      img,div {
        display: block;
        height: 100%;
        position: initial;
        width: 30%;
      }
      div{
        width:25%;

      }

      .instruments-1 {
        z-index: 1;
      }
    }
    .top.top-color-picker {
      align-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex:1 1 20%;
    }
    .middle {
      align-content: space-around;
      align-items: flex-start;
      flex: 1 1 60%;
      flex-direction: column;
      height: auto;
      justify-content: space-between;
    }
    #loading {
      img {
        height: 100vw;
        object-fit: contain;
        object-position: center;
        width: 100vw;
      }
    }
    .top {
      height: initial;
    }
  }

</style>