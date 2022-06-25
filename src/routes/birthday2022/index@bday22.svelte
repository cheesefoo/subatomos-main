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
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { baseURL } from '$lib/variables.ts';
	// import Control from '$lib/map/Control.svelte';
	import MapToolbar from '$lib/map/MapToolbar.svelte';
	import MapOverlayContainer from '$lib/components/MapOverlayContainer.svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import { media } from '$lib/stores/stores';
	import metaimg from '/static/assets/images/3rdanniversarylogo.jpg';
	import metatwi from '/static/assets/images/meta3rd.jpg';
	import arrow from '/static/assets/images/scrolldown.png';
	import LL from '../../i18n/i18n-svelte.js';
	import 'leaflet/dist/leaflet.css';

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
	let open = false;
	let Carousel;
	let carousel;

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
<main>
	{#if $media.small}
		<div class='hamburger'>
			<Hamburger
				--layer-width='30px'
				bind:open />
		</div>
		{#if open}
			<div class='burger-menu'>
				{#each ['link 1', 'link 2', 'link 3'] as link, i}
					<p transition:fly={{ y: -15, delay: 50 * i }}>
						{link}
					</p>
				{/each}
			</div>

			<div class='bar' transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
		{/if}
		<div class='arrow'>
			<img src={arrow} alt='scroll down' />
		</div>
	{/if}
	<!--<svelte:window on:resize={resizeMap} />-->
	<div class='top'>
		<div class='background'>
			<div class='instruments-1'>
				<svelte:component
					this={CarouselContainer}
					bind:this={carousel}
				>
					<div>1</div>
					<div>2</div>
					<div>3</div>
				</svelte:component>
			</div>
			<div class='instruments-2'></div>
			<div class='video-container'>
				<iframe
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
					frameborder='0'
					height='480'
					src='https://www.youtube.com/embed/AwLO-pisoVA'
					title='YouTube video player'
					width='852'
				/>
			</div>
		</div>

	</div>
	<div class='msg-map'>
		{#if browser}
			<svelte:component this={LeafletContainer} bind:map view={initialView} zoom={2} width='100vw' height='100vh'>
				<!--			<svelte:component this={ControlContainer} position='topright'>
								<MapToolbar bind:eye bind:lines={showLines} on:click-reset={resetMapView} />
								&lt;!&ndash;			<svelte:component this={MapToolbarContainer} bind:eye bind:lines={showLines} on:click-reset={resetMapView} />&ndash;&gt;
							</svelte:component>-->


				{#each msgs as { name, twitter, message, pic, art, latlng }}
					<!--{@debug lat, lng}-->
					<svelte:component this={MarkerContainer} {latlng} width={30} height={30}>
						{#if (pic !== '' && art !== '')}
							<img src={bothIcon} width='30' height='30' />
						{:else if pic }
							<img src={picIcon} width='30' height='30' />
						{:else if art }
							<img src={artIcon} width='30' height='30' />
						{:else}
							<img src={noneIcon} width='30' height='30' />
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
</main>
<style lang='scss'>
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
    //position: relative;

    //text-align: center;
    //flex: 1 1 100%;
    //flex: 1 1 20%;
    animation: bounce 2s infinite;
    margin-top: 10vh;

    img {
      width: 100%;
    }
  }


  .hamburger {
    position: absolute;

    right: 0px;
  }

  .top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    background: #c7c2b6 url(/static/assets/images/instruments/music_sheet_bg.png) no-repeat;
    background-size: 100%;
    width: 100vw;
    height: 80vh;
    padding-top: 50vh;
    //padding-right: 50vw;
    * {
      box-sizing: border-box;
    }
  }

  .msg-map {
    //margin: 0 5% 5% 5%;
  }

  @media screen and (max-width: 849px) {

    .video-container {
      //position: absolute;
      //bottom: 12%;
      //left: 12%;
      width: 65vw;
      height: 40vw;
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