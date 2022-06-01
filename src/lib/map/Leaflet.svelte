<script>
	//from https://imfeld.dev/writing/svelte_domless_components
	import { createEventDispatcher, setContext } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	export let height = '80vh';
	export let width = '100%';

	// Must set either bounds, or view and zoom.
	export let bounds = undefined;
	export let view = undefined;
	export let zoom = undefined;
	let mapProp = undefined;
	export { mapProp as map };

	export const invalidateSize = () => map?.invalidateSize();

	const dispatch = createEventDispatcher();

	let map;
	$: mapProp = map;

	export const getMap = () => map;
	setContext('layerGroup', getMap);
	setContext('layer', getMap);
	setContext('map', getMap);

	function createLeaflet(node) {
		map = L.map(node,{
			center: [40, 70],
			zoomDelta:1,
			// zoomSnap:2,
			scrollWheelZoom:true,
		}).on('zoom', (e) => dispatch('zoom', e));
		if(bounds) {
			map.fitBounds(bounds)
		} else {
			map.setView(view, zoom);
		}


		L.tileLayer(
			'assets/images/GSatellite/{z}/{x}/{y}.jpg',
			{
				attribution: '© Google,INEGI',
				minZoom:2,
				maxZoom: 5,
			}
		).addTo(map);

		return {
			destroy() {
				map.remove();
				map = undefined;
			},
		};
	}

	$: if(map) {
		if(bounds) {
			map.fitBounds(bounds)
		} else {
			map.setView(view, zoom);
		}
	}
</script>

<div style="height:{height};width:{width}" use:createLeaflet>
	{#if map}
		<slot {map} />
	{/if}
</div>
<style>
    :global(.leaflet-control-container) {
        position: static;
    }
</style>
