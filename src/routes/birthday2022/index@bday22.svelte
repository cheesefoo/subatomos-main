<script context='module'>
	export async function load({ fetch }) {
		const res = await fetch('/birthday2022-messages');
		const texts = await res.json();
		if (res.ok) return { props: { texts: texts } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>
<script lang='ts'>

	import Feature from 'ol/src/Feature';
	import Map from 'ol/src/Map';
	import Point from 'ol/src/geom/Point';
	import View from 'ol/src/View';
	import Overlay from 'ol/src/Overlay';

	import { Icon, Style } from 'ol/src/style';
	import { OSM, Vector as VectorSource } from 'ol/src/source';
	import { Tile, Vector as VectorLayer } from 'ol/src/layer';
	import { fromLonLat } from 'ol/src/proj';
	import { onMount } from 'svelte';
	import MapOverlayContainer from '../../lib/components/MapOverlayContainer.svelte';


	import 'ol/src/css';
	import { Birthday22Msg } from '../../lib/Birthday22Msg';

	let pictureIcon = 'static/assets/images/holos/oozora_subaru_thumb.png';
	let msgOnlyIcon = 'static/assets/images/holos/yuzuki_choco_thumb.png';
	let fanartIcon = 'static/assets/images/holos/shishiro_botan_thumb.png';
	let bothIcon = 'static/assets/images/holos/himemori_luna_thumb.png';

	export let texts;


	onMount(() =>
		{
			const map = new Map({
				target: 'map',
				layers: [
					new Tile({
						source: new OSM(),
						visible: true,
						title: 'AllMessages'
					})
				],
				view: new View({
					center: fromLonLat([2.2945, 48.8584]),
					zoom: 0,
					maxZoom: 18
				})
			});

			let iconFeatures = [];
			for (let i = 0; i < texts.length; i++)
			{
				let message :Birthday22Msg = texts[i];
				let name = message.name;
				let msg = message.text;
				let art = message.fanart;
				let pic = message.picture;

				//Set the map icon
				let iconType = msgOnlyIcon;
				if (art !== undefined && pic !== undefined)
				{
					iconType = bothIcon;
				} else
				{
					if (art !== undefined)
					{
						iconType = fanartIcon;
					}
					if (pic !== undefined)
					{
						iconType = pictureIcon;
					}
				}
				let loc = new Point(fromLonLat([message.long, message.lat]));
				///

				const iconFeature = new Feature({
					// geometry: new Point(fromLonLat([2.2945, 48.8584])),
					geometry: loc,
					name: name,
					message: msg,
					fanart: art,
					picture: pic
					// picture: 'static/assets/images/subarudoducks/4GZ8rqN.jpeg'
				});
				console.log(iconFeature);

				const iconStyle = new Style({
					image: new Icon({
						anchor: [0.5, 0.5],
						anchorXUnits: 'fraction',
						anchorYUnits: 'fraction',
						src: iconType,
						size: [340, 340]
					})
				});
				iconFeature.setStyle(function(feature: Feature, resolution: number)
				{
					iconStyle.getImage().setScale(1 / Math.pow(resolution, 1 / 6));
					return iconStyle;
				});
				iconFeatures.push(iconFeature);
			}

			let pictureLayer = new VectorLayer({
				source: new VectorSource({ features: iconFeatures })
			});
			map.addLayer(pictureLayer);

			//Popup

			const overlayLayer = new Overlay({
				element: overlayContainerElement
			});
			map.addOverlay(overlayLayer);



			map.on('click', function(e)
			{
				//un-set the overlay for when clicking outside features
				overlayLayer.setPosition(undefined);
				map.forEachFeatureAtPixel(e.pixel, function(feature, layer)
					{
						let coordinate = e.coordinate;
						let name = feature.get('name');
						let msg = feature.get('message');
						overlayLayer.setPosition(coordinate);
						overlayName.innerHTML = name;
						overlayMsg.innerHTML = msg;
						let pic = feature.get('picture');
						if (pic !== undefined)
						{
							overlayPic.style.display = 'block';
							overlayPic.src = pic;
						} else
						{
							overlayPic.style.display = 'hidden';
							overlayPic.src = pic;
						}
						let art = feature.get('fanart');
						if (art !== undefined)
						{
							overlayFanart.style.display = 'block';
							overlayFanart.src = art;

						} else
						{
							overlayFanart.style.display = 'hidden';
							overlayFanart.src = art;
						}
					},
					{
						// layerFilter: function(layerCandidate)
						// {
						// 	return layerCandidate.get('title') === 'AllMessages';
						// }
					});
			});
		}
	)
	;


</script>
<svelte:head>
	<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.12.0/css/css'
				type='text/css'>
</svelte:head>

<div class='grid-container'>
	<div class='grid-1'>
		<div class='sidebar'>
			<h2>All Messages</h2>
			<input type='radio' name='all-messages-radio' value='AllMessages' checked>All Messages
		</div>
	</div>
	<div class='grid-2'>
		<div id='map' style='height: 90vh;width: 100%;'></div>

	</div>
</div>

<style lang='scss'>
  .grid-container {
    display: grid;
    grid-template-columns: 10vw 90vw;
    grid-template-rows: 100vh;
  }


</style>