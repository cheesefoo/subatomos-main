<!--
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
		map.setView(initialView, 5);
	}

</script>

&lt;!&ndash;<svelte:window on:resize={resizeMap} />&ndash;&gt;
<div class='top'>
	 insert youtube video here
</div>
<div class='msg-map'>
{#if browser}
	<svelte:component this={LeafletContainer} bind:map view={initialView} zoom={4} height='65vh'>
		<svelte:component this={ControlContainer} position='topright'>
			<MapToolbar bind:eye bind:lines={showLines} on:click-reset={resetMapView} />
			&lt;!&ndash;			<svelte:component this={MapToolbarContainer} bind:eye bind:lines={showLines} on:click-reset={resetMapView} />&ndash;&gt;
		</svelte:component>

		{#if eye}
			{#each markerLocations as latLng}

				<svelte:component this={MarkerContainer} {latLng} width={30} height={30}>
					<svg style='width:30px;height:30px' fill='none' stroke-linecap='round' stroke-linejoin='round'
							 stroke-width='2' viewBox='0 0 24 24' stroke='currentColor'>
						<path d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'></path>
					</svg>

					&lt;!&ndash;									<Popup>A popup!</Popup>&ndash;&gt;
					&lt;!&ndash;					<Pane></Pane>&ndash;&gt;
				</svelte:component>
			{/each}
		{/if}

		&lt;!&ndash;{#if showLines}
			{#each lines as {latLngs, color}}
				<Polyline {latLngs} {color} opacity={0.5} />
			{/each}
		{/if}&ndash;&gt;
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
</style>-->

<script>
	import 'maplibre-gl/dist/maplibre-gl.css';
	import MapLibre from '$lib/components/MapLibre.svelte';
	/*	onMount(() => {
			setRTLTextPlugin('https://cdn.maptiler.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js');
			var map = new Map({
				container: 'map', // container id
				style: 'https://api.maptiler.com/maps/88a6d569-375b-4462-9822-28efe9b4d495/style.json?key=ckEbtTT6c4cfnEt7nJl6',
				center: [-107.72301, 27.66863],
				zoom: 2.97
	/!*			style: 'https://api.maptiler.com/maps/88a6d569-375b-4462-9822-28efe9b4d495/style.json?key=ckEbtTT6c4cfnEt7nJl6', // style URL
				// style: 'https://demotiles.maplibre.org/style.json', // style URL
				center: [0, 0], // starting position [lng, lat]
				zoom: 1 // starting zoom*!/
			});
		});*/
</script>
<div class='top'>
	<h3>hbd subaru</h3>
	<div>&lt;insert video here&gt;</div>
</div>
<!--<div id='map'></div>-->
<MapLibre />
<style lang='scss'>
  .top {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  #map {
    position: absolute;
    margin: 5% 5%;
    width: 90%;
    height: 80%;
  }

</style>