<script>
	import L from 'leaflet';
	import { getContext, setContext } from 'svelte';


/*	onMount(async () => {
		if (browser) {
			var markers = L.markerClusterGroup({
				iconCreateFunction: function(cluster) {
					return L.divIcon({ html: '<b>' + cluster.getChildCount() + '</b>' });
				}
			});
		}
	});*/


	let classNames = undefined;
	export { classNames as class };

	export let marker = undefined;

	export let width = 30;
	export let height = 30;
	export let latlng;
	export let lat = 0;
	export let lng = 0;

	if(latlng){
		lat = latlng[0]
		lng = latlng[1]
	}

	const layerGroup = getContext('layerGroup')();
	const markers = getContext('markers')();
	setContext('layer', () => marker);

	console.log(markers);

	function createMarker(markerElement) {
		let icon = L.divIcon({
			html: markerElement,
			className: 'map-marker',
			iconSize: L.point(width, height)
		});
		// marker = L.marker([lat,lng], { icon }).addTo(layerGroup);
		marker = L.marker([lat,lng], { icon })//.addTo(markers);
		markers.addLayer(marker);
		// markers.refreshClusters();
		return {
			destroy() {
				if (marker) {
					marker.remove();
					marker = undefined;
				}
			},
		};
	}
</script>

<div class="hidden">
	<div use:createMarker class={classNames}>
		{#if marker}
			<slot />
		{/if}
	</div>
</div>