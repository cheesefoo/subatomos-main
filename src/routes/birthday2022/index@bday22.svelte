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

	const bothIcon = 'assets/images/holos/yuzuki_choco_thumb.png';
	const artIcon = 'assets/images/holos/himemori_luna_thumb.png';
	const picIcon = 'assets/images/holos/shishiro_botan_thumb.png';
	const noneIcon = 'assets/images/holos/oozora_subaru_thumb.png';

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

<!--<svelte:window on:resize={resizeMap} />-->
<div class='top'>
	insert youtube video here
</div>
<div class='msg-map'>
	{#if browser}
		<svelte:component this={LeafletContainer} bind:map view={initialView} zoom={2} height='65vh'>
			<svelte:component this={ControlContainer} position='topright'>
				<MapToolbar bind:eye bind:lines={showLines} on:click-reset={resetMapView} />
				<!--			<svelte:component this={MapToolbarContainer} bind:eye bind:lines={showLines} on:click-reset={resetMapView} />-->
			</svelte:component>

			{#if eye}

				{#each msgs as { name, msg, pic, art, lat, lng }}
					<!--{@debug lat, lng}-->
					<svelte:component this={MarkerContainer} {lat} {lng} width={30} height={30}>
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


							<MapOverlayContainer name={name} message={msg} picture={pic} fanart={art} />
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
  .top {

    text-align: center;
    padding: 5%;

  }

  .msg-map {
    margin: 0 5% 5% 5%;
  }
</style>