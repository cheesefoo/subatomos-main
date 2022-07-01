import './style.css';
import {Map, View} from 'ol/src';
import TileLayer from 'ol/src/layer/Tile';
import OSM from 'ol/src/source/OSM';

const map = new Map({
	target: 'map',
	layers: [
		new TileLayer({
			source: new OSM()
		})
	],
	view: new View({
		center: [0, 0],
		zoom: 2
	})
});
const key = Symbol();

export { Map, key };
