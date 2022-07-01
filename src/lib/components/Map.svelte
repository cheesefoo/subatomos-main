<!--
<script>
	import { onDestroy, setContext } from 'svelte';
	import { key, mapbox } from './mapbox.js';

	setContext(key, {
		getMap: () => map
	});

	export let lat;
	export let lon;
	export let zoom;

	let container;
	let map;

	function load() {
		console.log('sdafikjasdf');
		map = new mapbox.Map({
			container,
			// style: 'mapbox://styles/mapbox/streets-v11',
			center: [lon, lat],
			zoomDelta:3,
			zoomSnap:6,
			scrollWheelZoom:false,
			zoom
		});
	}

	onDestroy(() => {
		console.log('dsetsetryo');
		if (map) {
			map.remove();
		}
	});
</script>

&lt;!&ndash; this special element will be explained in a later section &ndash;&gt;
<svelte:head>
	<link
		rel='stylesheet'
		href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css'
		on:load={load}
	/>
</svelte:head>

<div bind:this={container}>
	{#if map}
		<slot />
	{/if}
</div>

<style>
    div {
        width: 100%;
        height: 100vh;
    }
</style>
-->
