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
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { baseURL } from '$lib/variables.ts';
	import MapToolbar from '$lib/map/MapToolbar.svelte';
	import MapOverlayContainer from '$lib/components/MapOverlayContainer.svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import LL from '../../i18n/i18n-svelte.js';
	import { media } from '$lib/stores/stores';
	import metaimg from '/static/assets/images/3rdanniversarylogo.jpg';
	import metatwi from '/static/assets/images/meta3rd.jpg';
	import arrow from '/static/assets/images/scrolldown.png';
	import piano from '/static/assets/images/instruments/piano.png';
	import accordion from '/static/assets/images/instruments/accordion.png';
	import flute from '/static/assets/images/instruments/flute.png';
	import drums from '/static/assets/images/instruments/drums.png';
	import guitar from '/static/assets/images/instruments/guitar.png';
	import saxophone from '/static/assets/images/instruments/saxophone.png';
	import glock from '/static/assets/images/instruments/glockenspiel.png';
	import showMapIcon from '/static/assets/images/subatomos_around_world.png';

	import 'leaflet/dist/leaflet.css';
	import { Modal } from 'svelte-simple-modal';
	import Birthday2022Credits from '$lib/components/Birthday2022Credits.svelte';
	import Birthday2022CreditsButton from '$lib/components/Birthday2022CreditsButton.svelte';
	import Fa from 'svelte-fa';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


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

	const initialView = [0, 0];
	let map;
	let eye = true;
	let showLines = false;
	let hamburgerOpen = false;
	let carousel;

	let vidWidth, vidHeight;
	if (!$media.small) {
		vidWidth = '852';
		vidHeight = '480';
	}else{

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
	<title>{$LL.THIRD.TITLE()}</title>
	<meta name='title' content='Oozora Subaru, congratulations on your 3rd anniversary!' />
	<meta
		name='description'
		content='スバル3周年おめでとう！！！
We made a video for you to celebrate!!!'
	/>

	<!-- Open Graph / Facebook -->
	<meta property='og:type' content='website' />
	<meta property='og:url' content='https://subatomos.com/3rd-anniversary' />
	<meta property='og:title' content='Happy 17.4th birthday Subaru!' />
	<meta
		property='og:description'
		content='スバルちゃん、17.4歳のお誕生日おめでとうございます！！！'
	/>
	<meta property='og:image' content={metaimg} />

	<meta property='twitter:card' content='summary_large_image' />
	<!--//TODO: meta tags-->
	<meta property='twitter:url' content='https://subatomos.com/birthday17-4' />
	<meta
		property='twitter:title'
		content='Oozora Subaru, congratulations on your 3rd anniversary!'
	/>
	<meta
		property='twitter:description'
		content='スバルちゃん、17.4歳のお誕生日おめでとうございます！！！'
	/>
	<meta property='twitter:image' content={`${baseURL}${metatwi}`} />
</svelte:head>
<!--<svelte:window bind:innerWidth={vidWidth} bind:innerHeight={vidHeight} />-->
<div class="back-btn">
	<a sveltekit:prefetch href="/">
		<Fa icon={faArrowLeft} />
	</a>
</div>
<main>
	{#if $media.small}
		<div class='hamburger'>
			<Hamburger
				--layer-width='30px'
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
		{/if}
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
	<div class='top'>
		<div class='instruments instruments-1'>
			<svelte:component
				this={CarouselContainer}
				bind:this={carousel}
				autoplay
				autoplayDuration={5000}
				dots={false}
				arrows={false}
				swiping={false}
			>
				<img src={piano} alt='piano' />
				<img src={accordion} alt='accordion' />
				<img src={flute} alt='flute' />
			</svelte:component>
		</div>

		<div class='middle'>
			<div class='video-container'>
				<iframe
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
					frameborder='0'
					height={vidHeight}
					width={vidWidth}
					src='https://www.youtube.com/embed/AwLO-pisoVA'
					title='YouTube video player'
				/>
			</div>
			<div class='show-map'>
				<p>Tap to see messages from Subatomos!<br>タップするとスバ友からのメッセージが表示されます!</p>
				<input type='image' src={showMapIcon} class:show-map-button={!eye} on:click={showMap} alt='show map' />

			</div>
		</div>
		<div class='instruments instruments-2'>
			<svelte:component
				this={CarouselContainer}
				autoplay
				autoplayDuration={6000}
				dots={false}
				arrows={false}
				swiping={false}
			>
				<img src={saxophone} alt='saxophone' />
				<img src={guitar} alt='guitar' />
				<img src={drums} alt='drums' />

			</svelte:component>

		</div>
		{#if browser && !$media.small}
			<div class='credits-btn'>
				<Modal styleWindow={{width:'auto'}}>
					<Birthday2022CreditsButton />
				</Modal>
			</div>
		{/if}
	</div>
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
    a{color: black;}
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
    right: 0;
    width: 25%;
  }

  .hamburger {
    position: absolute;
    right: 0px;
  }

  .hbd-text {
    position: absolute;
    text-align: center;
    font-family: klee, sans-serif;
    font-size: 2em;
    font-weight: bolder;
    color: salmon;
    text-shadow: 2px 2px black;
  }

  .instruments {
    display: block;
    position: relative;
    width: 15vw;
  }

  .instruments-1 {
    top: 35%;
    animation: bounce 5s infinite;
  }

  .instruments-2 {
    bottom: 15%;
    animation: bounce 6s infinite;
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
      font-family: klee, sans-serif;
      font-size: 2em;
      color: salmon;
      text-shadow: 2px 2px black;
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

    .hbd-text {
			top:5%;
      font-size: 1.5em;
    }

		.instruments-1{
			top:10%
		}
		.instruments-2{
			bottom:0%;
		}
    .show-map {
      p {
        font-size: 1em;
        bottom: 13vh;
      }

      input {
        width: 100%;
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

      iframe {
        position: absolute;
        bottom: 30%;
        left: 0%;
				width:100%;
				height:25%;
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
</style>