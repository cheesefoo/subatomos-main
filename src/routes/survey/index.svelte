<script lang="ts" context="module">
	let api_key = 'AIzaSyDeaPqQGbRx835yfl-H7PeK3mgHEoy-_2U';
	// let spreadsheet_id='1nC5NU5JTO6nHEJDK-inUgL46aXEXUGJiKiVfEcmBALI'
	let spreadsheet_id = '1NMn_qg1nO9h9gVLGULcXGXHhngmhGOICIOtS47j4h5E';
	let tab_name = 'stats';
	var url =
		'https://sheets.googleapis.com/v4/spreadsheets/' +
		spreadsheet_id +
		'/values/' +
		tab_name +
		'?alt=json&key=' +
		api_key;
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		try {
			let res = await fetch(url);
			let json = await res.json();
			// let json = await res.text();
			let values = json.values;
			let p = zipsomshit(values);
			return { props: { j: p } };
		} catch (err) {
			console.log(err);
		}
	}
	function zipsomshit(values: Array<any>) {
		let res = [];
		for (let i = 0; i < values.length; i + 2) {
			let x = values.shift();
			let y = values.shift();
			res.push(x.map((a, b) => [a, y[b]]));
			// console.log(res)
		}
		console.log(res);
		return res;
	}
</script>

<script>
	import { Grid, Chart, Columns, Svg, SvgLine, Box } from '$lib/components/Pancake';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';

	let ages = [
		{ x: '13-17', y: 61 },
		{ x: '18-24', y: 193 },
		{ x: '25-34', y: 115 },
		{ x: '35-44', y: 14 },
		{ x: '45-54', y: 1 }
	];

	</script>
