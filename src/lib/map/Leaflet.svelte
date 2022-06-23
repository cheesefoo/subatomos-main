<script>
	//from https://imfeld.dev/writing/svelte_domless_components
	import { createEventDispatcher, onMount, setContext } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import 'leaflet.markercluster/dist/MarkerCluster.css';
	import { browser } from '$app/env';
	import 'leaflet.markercluster/dist/leaflet.markercluster-src.js';

	onMount(async () => {
		if (browser) {
			var markers = L.markerClusterGroup({
				iconCreateFunction: function(cluster) {
					return L.divIcon({ html: '<b>' + cluster.getChildCount() + '</b>' });
				}
			});
		}
	});

	export let height = '80vh';
	export let width = '100%';
	// Must set either bounds, or view and zoom.
	const corner1 = L.latLng(-66, -180);
	const corner2 = L.latLng(79, 180);
	export let bounds = L.latLngBounds(corner1, corner2);
	export let view = undefined;
	export let zoom = undefined;
	let mapProp = undefined;
	export { mapProp as map };

	export const invalidateSize = () => map?.invalidateSize();

	const dispatch = createEventDispatcher();

	// export let bounds = L.latLngBounds(corner1, corner2);
	let map;
	$: mapProp = map;

	export const getMap = () => map;
	setContext('layerGroup', getMap);
	setContext('layer', getMap);
	setContext('map', getMap);

	function createLeaflet(node) {
		map = L.map(node, {
			center: [40, 70],
			zoomDelta: 1,
			// zoomSnap:2,
			// worldCopyJump:true,
			scrollWheelZoom: true
		}).on('zoom', (e) => dispatch('zoom', e));
		// .setMaxBounds(map.getBounds());


		L.tileLayer(
			'assets/images/GSatellite/{z}/{x}/{y}.jpg',
			{
				attribution: '© Google,INEGI',
				minZoom: 3,
				maxZoom: 4,
				noWrap: true,
				bounds,
				maxBoundsViscosity: 1.0
			}
		).addTo(map);
		if (bounds) {
			map.fitBounds(bounds);
			map.setMaxBounds(bounds);
			map.on('drag', function() {
				map.panInsideBounds(bounds, { animate: false });
			});
		} else {
			map.setView(view, zoom);
		}

		return {
			destroy() {
				map.remove();
				map = undefined;
			}
		};
	}

	$: if (map) {
		if (bounds) {
			map.fitBounds(bounds);
			map.setMaxBounds(bounds);
		} else {
			map.setView(view, zoom);
		}
	}
</script>

<div style='height:{height};width:{width}' use:createLeaflet>
	{#if map}
		<slot {map} />
	{/if}
</div>
<style>
    :global(.leaflet-control-container) {
        position: static;
    }
</style>
