<script>
	import { onMount, onDestroy } from 'svelte'
	import { Map, NavigationControl, Marker } from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { maptileAPI,maptileStyle } from '$lib/variables';

	let map;
	let mapContainer;
	const apiKey = maptileAPI


	onMount(() => {

		const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 };

		map = new Map({
			container: mapContainer,
			style: maptileStyle,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});
		map.addControl(new NavigationControl(), 'top-right');
	});

/*	onDestroy(() => {
		map.remove();
	});*/
</script>

<div class="map-wrap">
	<a href="https://www.maptiler.com" class="watermark"><img
		src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo"/></a>
	<div class="map" id="map" bind:this={mapContainer}></div>
</div>

<style>

    .map-wrap {
        position: relative;
        width: 100%;
        height: calc(100vh - 77px); /* calculate height of the screen minus the heading */
    }

    .map {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .watermark {
        position: absolute;
        left: 10px;
        bottom: 10px;
        z-index: 999;
    }
</style>