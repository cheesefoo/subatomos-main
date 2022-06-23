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
	import 'leaflet/dist/leaflet.css';
	// import Control from '$lib/map/Control.svelte';
	import MapToolbar from '$lib/map/MapToolbar.svelte';
	import MapOverlayContainer from '$lib/components/MapOverlayContainer.svelte';
	import { baseURL } from '$lib/variables.ts';

	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { Hamburger } from 'svelte-hamburgers';
	import { media } from '$lib/stores/stores';
	import metaimg from '/static/assets/images/3rdanniversarylogo.jpg';
	import metatwi from '/static/assets/images/meta3rd.jpg';
	import arrow from '/static/assets/images/scrolldown.png';
	import LL from '../../i18n/i18n-svelte.js';
	import Youtube from '$lib/components/YouTube.svelte';


	let open = false;

	export let msgs;

	let map;

	let LeafletContainer;
	let ControlContainer;
	let MarkerContainer;
	let PopupContainer;

	onMount(async () => {
		if (browser) {
			LeafletContainer = (await import('$lib/map/Leaflet.svelte')).default;
			ControlContainer = (await import('$lib/map/Control.svelte')).default;
			MarkerContainer = (await import('$lib/map/Marker.svelte')).default;
			PopupContainer = (await import('$lib/map/Popup.svelte')).default;
		}
	});
	const initialView = [0,0];

/*
	const bothIcon = 'assets/images/holos/yuzuki_choco_thumb.png';
	const artIcon = 'assets/images/holos/himemori_luna_thumb.png';
	const picIcon = 'assets/images/holos/shishiro_botan_thumb.png';
	const noneIcon = 'assets/images/holos/oozora_subaru_thumb.png';
*/
	let bothIcon, artIcon, picIcon,noneIcon;
	// picIcon=noneIcon	= 'assets/images/subaru_waypoint_gr.png';
	picIcon=noneIcon	= 'assets/images/subaru_waypoint_duck_alt_2_scale10.png';
	 bothIcon= artIcon=     'assets/images/subaru_waypoint_duck_alt_2_scale20.png';

	let eye = true;
	let showLines = false;

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
	<meta name="title" content="Oozora Subaru, congratulations on your 3rd anniversary!" />
	<meta
		name="description"
		content="スバル3周年おめでとう！！！
We made a video for you to celebrate!!!"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://subatomos.com/3rd-anniversary" />
	<meta property="og:title" content="Happy 17.4th birthday Subaru!" />
	<meta
		property="og:description"
		content="スバルちゃん、17.4歳のお誕生日おめでとうございます！！！"
	/>
	<meta property="og:image" content={metaimg} />

	<meta property="twitter:card" content="summary_large_image" />
	<!--//TODO: meta tags-->
	<meta property="twitter:url" content="https://subatomos.com/birthday17-4" />
	<meta
		property="twitter:title"
		content="Oozora Subaru, congratulations on your 3rd anniversary!"
	/>
	<meta
		property="twitter:description"
		content="スバルちゃん、17.4歳のお誕生日おめでとうございます！！！"
	/>
	<meta property="twitter:image" content={`${baseURL}${metatwi}`} />
</svelte:head>

{#if $media.small}
	<div class='hamburger'>
	<Hamburger
		--layer-width='30px'
						 bind:open />
	</div>
	{#if open}
		<div class="burger-menu">
			{#each ['link 1', 'link 2', 'link 3'] as link, i}
				<p transition:fly={{ y: -15, delay: 50 * i }}>
					{link}
				</p>
			{/each}
		</div>

		<div class="bar" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
	{/if}
	<div class="arrow">
	<img src={arrow} alt="scroll down" />
</div>
{/if}
<!--<svelte:window on:resize={resizeMap} />-->
<div class='top'>
	<div class='video-container'>

			<iframe
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				frameborder="0"
				src="https://www.youtube.com/embed/AwLO-pisoVA"
				title="YouTube video player"
			/>
	</div>
</div>
<div class='msg-map'>
	{#if browser}
		<svelte:component this={LeafletContainer} bind:map view={initialView} zoom={2} height='65vh'>
			<svelte:component this={ControlContainer} position='topright'>
				<MapToolbar bind:eye bind:lines={showLines} on:click-reset={resetMapView} />
				<!--			<svelte:component this={MapToolbarContainer} bind:eye bind:lines={showLines} on:click-reset={resetMapView} />-->
			</svelte:component>

			{#if eye}

				{#each msgs as { name, message, pic, art, latlng }}
					<!--{@debug lat, lng}-->
					<svelte:component this={MarkerContainer} {latlng} width={30} height={30}>
						{#if (pic !== undefined && art !== undefined)}
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


							<MapOverlayContainer {name} {message} {pic} {art} />
						</svelte:component>
						<!--					<Pane></Pane>-->
					</svelte:component>
				{/each}
			{/if}

			<!--{#if showLines}
				{#each lines as {latLngs, color}}
					<Polyline {latLngs} {color} opacity={0.5} />
				{/each}
			{/if}-->
		</svelte:component>
	{/if}
</div>
<style lang='scss'>

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

	.hamburger{
		position:absolute;

		right:0px;
	}

  .top {

    text-align: center;
    padding: 5%;

  }

  .msg-map {
    margin: 0 5% 5% 5%;
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