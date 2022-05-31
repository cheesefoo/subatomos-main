<script>
	// import 'leaflet/dist/leaflet.css';

	/*	import Control from '$lib/map/Control.svelte';
	import Marker from '$lib/map/Marker.svelte';
	import Popup from '$lib/map/Popup.svelte';
	import Polyline from '$lib/map/Polyline.svelte';
	import MapToolbar from '$lib/map/MapToolbar.svelte';*/
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import 'leaflet/dist/leaflet.css';
	// import Control from '$lib/map/Control.svelte';
	import MapToolbar from '$lib/map/MapToolbar.svelte';
	// import Marker from '$lib/map/Marker.svelte';
	// import Pane from '$lib/map/Pane.svelte';
	// import Popup from '$lib/map/Popup.svelte';

	let map;

	let LeafletContainer;
	let ControlContainer;
	let MarkerContainer;
	onMount(async () => {
		if (browser) {
			LeafletContainer = (await import('$lib/map/Leaflet.svelte')).default;
			ControlContainer = (await import('$lib/map/Control.svelte')).default;
			MarkerContainer = (await import('$lib/map/Marker.svelte')).default;
		}
	});
	const initialView = [39.8283, -98.5795];
	const markerLocations = [
		[29.8283, -96.5795],
		[37.8283, -90.5795],
		[43.8283, -102.5795],
		[48.40, -122.5795],
		[43.60, -79.5795],
		[36.8283, -100.5795],
		[38.40, -122.5795]
	];

	const lines = markerLocations.slice(1).map((latLng, i) => {
		let prev = markerLocations[i];
		return {
			latLngs: [prev, latLng]

		};
	});


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
	<svelte:component this={LeafletContainer} bind:map view={initialView} zoom={3} height='65vh'>
		<svelte:component this={ControlContainer} position='topright'>
			<MapToolbar bind:eye bind:lines={showLines} on:click-reset={resetMapView} />
			<!--			<svelte:component this={MapToolbarContainer} bind:eye bind:lines={showLines} on:click-reset={resetMapView} />-->
		</svelte:component>

		{#if eye}
			{#each markerLocations as latLng}

				<svelte:component this={MarkerContainer} {latLng} width={30} height={30}>
					<svg style='width:30px;height:30px' fill='none' stroke-linecap='round' stroke-linejoin='round'
							 stroke-width='2' viewBox='0 0 24 24' stroke='currentColor'>
						<path d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'></path>
					</svg>

					<!--									<Popup>A popup!</Popup>-->
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
		padding:5%;

  }
	.msg-map
  {
		margin: 0 5% 5% 5%;
	}
</style>