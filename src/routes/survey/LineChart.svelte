<script>
	import { Grid, Chart, Svg, SvgLine, Box } from '$lib/components/Pancake';

	const points = [
		{ x: '13-17', y: 61 },
		{ x: '18-24', y: 193 },
		{ x: '25-34', y: 115 },
		{ x: '35-44', y: 14 },
		{ x: '45-54', y: 1 }
	];
</script>

<div class="chart">
	<Chart x1={0} x2={10} y1={0} y2={100}>
		<Box x2={10} y2={100}>
			<div class="axes" />
		</Box>

		<Grid vertical count={5} let:value>
			<span class="x label">{value}</span>
		</Grid>

		<Grid horizontal count={3} let:value let:first>
			<span class="y label">{value}</span>
		</Grid>


	</Chart>
</div>

<style>
	.chart {
		height: 100%;
		padding: 3em 2em 2em 3em;
		box-sizing: border-box;
	}

	.axes {
		width: 100%;
		height: 100%;
		border-left: 1px solid black;
		border-bottom: 1px solid black;
	}

	.y.label {
		position: absolute;
		left: -2.5em;
		width: 2em;
		text-align: right;
		bottom: -0.5em;
	}

	.x.label {
		position: absolute;
		width: 4em;
		left: -2em;
		bottom: -22px;
		font-family: sans-serif;
		text-align: center;
	}

	path.data {
		stroke: red;
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 2px;
		fill: none;
	}
</style>
