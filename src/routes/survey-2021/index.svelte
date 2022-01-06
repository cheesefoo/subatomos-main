<script lang="ts" context="module">
	import { sheetsAPI } from '$lib/variables';
	let spreadsheet_id = '1nC5NU5JTO6nHEJDK-inUgL46aXEXUGJiKiVfEcmBALI';
	// let spreadsheet_id = '1NMn_qg1nO9h9gVLGULcXGXHhngmhGOICIOtS47j4h5E';
	let tab_name = 'stats';
	let url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheet_id}/values/${tab_name}?alt=json&key=${sheetsAPI}`;

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		try {
			let res = await fetch(url);
			let json = await res.json();
			// let json = await res.text();
			let values = json.values;
			let [q, data] = reformatData(values);

			return { props: { allData: data, questions: q } };
		} catch (err) {
			console.error(err);
		}
	}

	function reformatData(values: Array<any>) {
		let questions = [];
		let data = [];
		// console.log(values);
		let res = [];

		for (let i = 0; i < values.length; i + 2) {
			// let q = values.shift();
			// questions = [...questions,q]
			// data = [...data, ...values]

			let x = values.shift();
			let y = values.shift();
			res.push(
				x.map((a, b) => {
					return { group: a, value: +y[b] };
				})
			);
		}
		// console.log(questions);
		// console.log(data);
		// console.log(res)

		res.forEach((a) => {
			let [q, ...rest] = a;
			questions.push(q.group);
			a.shift();
		});
		// console.log(questions)
		// console.log([questions, ...res])
		return [questions, [...res]];
	}
</script>

<script lang="ts">
	import { media } from '$lib/stores/stores';
	import { Lightbox } from 'svelte-lightbox';
	import { BarChartSimple, DonutChart, TreemapChart } from '@carbon/charts-svelte';
	import '@carbon/charts/styles.min.css';
	import WordCloud from './WordCloud.svelte';
	import w from './wordcloud.png';
	import Lazy from 'svelte-lazy';
	export let allData;
	export let questions;
	let c = allData[2].map((x) => {
		return { name: x.group, value: x.value };
	});
	let c1 = allData[23].map((x) => {
		return { group: x.group, count: +x.value };
	});
	let r = () => {
		let g1 = allData[7].map((x) => {
			return { group: '#1 Favorite', key: x.group, value: +x.value };
		});
		let g2 = allData[8].map((x) => {
			return { group: '#2 Favorite', key: x.group, value: +x.value };
		});
		let g3 = allData[9].map((x) => {
			return { group: '#3 Favorite', key: x.group, value: +x.value };
		});
		let rank = [...g1, ...g2, ...g3];
		// console.log(rank);
		return rank;
	};
	let ranked = r();
	let countries = [{ name: 'Country', children: c }];
	let barWidth = $media.small ? 12 : 24;
	let graphHeight = $media.small ? '600px' : '400px';
	let costumeByAge = [{"group":"Original", "name":"13-17", "value":22},
		{"group":"Original", "name":"18-24", "value":41},
		{"group":"Original", "name":"25-34", "value":22},
		{"group":"Original", "name":"35-44", "value":4},
		{"group":"Sailor", "name":"13-17", "value":18},
		{"group":"Sailor", "name":"18-24", "value":62},
		{"group":"Sailor", "name":"25-34", "value":42},
		{"group":"Sailor", "name":"35-44", "value":8},
		{"group":"Girly", "name":"13-17", "value":12},
		{"group":"Girly", "name":"18-24", "value":53},
		{"group":"Girly", "name":"25-34", "value":32},
		{"group":"Girly", "name":"35-44", "value":2},
		{"group":"Kimono", "name":"13-17", "value":5},
		{"group":"Kimono", "name":"18-24", "value":29},
		{"group":"Kimono", "name":"25-34", "value":15},
		{"group":"Kimono", "name":"35-44", "value":2},
		{"group":"Kimono", "name":"45-54", "value":1},
		{"group":"Swimsuit", "name":"13-17", "value":2},
		{"group":"Swimsuit", "name":"18-24", "value":11},
		{"group":"Swimsuit", "name":"25-34", "value":3},
		{"group":"Idol", "name":"13-17", "value":5},
		{"group":"Idol", "name":"18-24", "value":8},
		{"group":"Idol", "name":"25-34", "value":5}]
	let hairByAge=[{"group":"Short", "name":"13-17", "value":25},
		{"group":"Short", "name":"18-24", "value":88},
		{"group":"Short", "name":"25-34", "value":63},
		{"group":"Short", "name":"35-44", "value":8},
		{"group":"Long", "name":"13-17", "value":8},
		{"group":"Long", "name":"18-24", "value":41},
		{"group":"Long", "name":"25-34", "value":19},
		{"group":"Long", "name":"35-44", "value":2},
		{"group":"Long", "name":"45-54", "value":1},
		{"group":"Twintail", "name":"13-17", "value":1},
		{"group":"Twintail", "name":"18-24", "value":6},
		{"group":"Twintail", "name":"25-34", "value":4},
		{"group":"Can't Decide", "name":"13-17", "value":30},
		{"group":"Can't Decide", "name":"18-24", "value":69},
		{"group":"Can't Decide", "name":"25-34", "value":33},
		{"group":"Can't Decide", "name":"35-44", "value":6}];
	let voteByAge = [
		{ group: 'Girl', name: '13-17', value: 37 },
		{ group: 'Girl', name: '18-24', value: 102 },
		{ group: 'Girl', name: '25-34', value: 60 },
		{ group: 'Girl', name: '35-44', value: 7 },
		{ group: 'Girl', name: '45-54', value: 1 },
		{ group: 'Duck', name: '13-17', value: 17 },
		{ group: 'Duck', name: '18-24', value: 59 },
		{ group: 'Duck', name: '25-34', value: 38 },
		{ group: 'Duck', name: '35-44', value: 5 },
		{ group: 'Abstain', name: '13-17', value: 10 },
		{ group: 'Abstain', name: '18-24', value: 43 },
		{ group: 'Abstain', name: '25-34', value: 21 },
		{ group: 'Abstain', name: '35-44', value: 4 }
	];
	let ahijoByAge=[{"group":"Ahijo", "name":"13-17", "value":18},
		{"group":"Ahijo", "name":"18-24", "value":70},
		{"group":"Ahijo", "name":"25-34", "value":35},
		{"group":"Ahijo", "name":"35-44", "value":3}]
</script>

<!--<svelte:head>-->
<!--	<link rel="stylesheet" href="https://unpkg.com/@carbon/charts/styles.css" />-->
<!--</svelte:head>-->

<div>
	<h1>Subatomo EN Fan Server End of 2021 Survey</h1>
	<div class="sbs">
		<DonutChart
			data={allData[0].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[0],
				height: graphHeight,
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: {
					center: {},
					alignment: 'center'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[1].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[1],
				height: graphHeight,
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: {
					center: {},
					alignment: 'center'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
	</div>

	<hr />
	<div class="sbs">
		<Lazy height={graphHeight} placeholder="loading...">
			<DonutChart
				data={allData[3].map((x) => {
					return { group: x.group, value: +x.value };
				})}
				options={{
					title: questions[3],
					height: graphHeight,
					resizable: true,
					pie: {
						valueMapsTo: 'value'
					},
					donut: {
						center: {},
						alignment: 'center'
					},
					legend: { alignment: 'center', truncation: { type: 'none' } }
				}}
			/>
		</Lazy>

		<Lazy height={graphHeight} placeholder="loading...">
			<DonutChart
				data={allData[4].map((x) => {
					return { group: x.group, value: +x.value };
				})}
				options={{
					title: questions[4],
					height: graphHeight,
					resizable: true,
					pie: {
						valueMapsTo: 'value'
					},
					donut: {
						center: {},
						alignment: 'center'
					},
					legend: { alignment: 'center', truncation: { type: 'none' } }
				}}
			/>
		</Lazy>
	</div>
	<hr />

	<Lazy height={400}>
		<TreemapChart
			data={countries}
			options={{
				title: questions[2],
				height: '400px'
			}}
		/>
	</Lazy>
	<hr />

	<Lazy height={graphHeight} placeholder="loading..."
		><BarChartSimple
			data={allData[5]}
			options={{
				title: questions[5],
				height: graphHeight,
				legend: { truncation: { type: 'none' } },
				bars: { width: barWidth, maxWidth: barWidth },

				axes: {
					left: { mapsTo: 'value', domain: [0, 120] },
					bottom: {
						mapsTo: 'group',
						ticks: {
							rotation: 'none'
						},
						truncation: { type: 'middle' },
						scaleType: 'labels'
					}
				}
			}}
		/>
	</Lazy>
	<hr />
	<!--{#if media.small}-->
	<!--	<Lazy height={graphHeight} placeholder='loading...'><BarChartSimple-->
	<!--		data={allData[6]}-->
	<!--		options={{-->
	<!--			title: questions[6],-->
	<!--			height: '900px',			bars: { width: barWidth, maxWidth: barWidth },-->

	<!--			legend: { enabled: false },-->
	<!--			axes: {-->
	<!--				left: { mapsTo: 'group', scaleType: 'labels' },-->
	<!--				bottom: { mapsTo: 'value', domain: [0, 75] }-->
	<!--			}-->
	<!--		}}-->
	<!--	/>-->
	<!--{:else}-->
	<Lazy height={900} placeholder="loading..."
		><BarChartSimple
			data={allData[6]}
			options={{
				title: questions[6],
				height: '900px',
				bars: { width: barWidth, maxWidth: barWidth },

				legend: { enabled: false },
				axes: {
					left: { mapsTo: 'value', domain: [0, 75] },
					bottom: { mapsTo: 'group', scaleType: 'labels' }
				}
			}}
		/>
		<!--{/if}-->
		<!--grid: { x: { alignWithAxisTicks: true }, y: { alignWithAxisTicks: true } },-->
	</Lazy>
	<hr />
	<!--Rank 3?-->
	<Lazy height={2000} placeholder="loading..."
		><BarChartSimple
			data={ranked}
			options={{
				title: 'Rank your top 3 (Legend is clickable)',
				height: '2000px',

				bars: { width: barWidth, maxWidth: barWidth },

				axes: {
					left: {
						mapsTo: 'key',
						scaleType: 'labels',
						truncation: {
							threshold: 8,
							numCharacter: 10
						}
					},
					bottom: { mapsTo: 'value', stacked: true }
				}
			}}
		/>
	</Lazy>
	<hr />
	<!--	Merch?-->
	<Lazy height={graphHeight} placeholder="loading...">
		<DonutChart
			data={allData[10].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[10],
				height: graphHeight,
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: {
					center: {},
					alignment: 'center'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
	</Lazy>
	<hr />
	<!--	Started to watch?-->
	<Lazy height={graphHeight} placeholder="loading..."
		><BarChartSimple
			data={allData[11]}
			options={{
				title: questions[11],
				height: graphHeight,
				legend: { truncation: { type: 'none' } },
				bars: { width: barWidth, maxWidth: barWidth },

				axes: {
					left: { mapsTo: 'group', scaleType: 'labels' },
					bottom: { mapsTo: 'value', domain: [0, 350] }
				}
			}}
		/>
	</Lazy>
	<hr />
	<div class="sbs">
		<!--	Best Hairstyle?-->

		<Lazy height={graphHeight} placeholder="loading...">
			<DonutChart
				data={allData[14].map((x) => {
					return { group: x.group, value: +x.value };
				})}
				options={{
					title: questions[14],
					height: graphHeight,
					resizable: true,
					pie: {
						valueMapsTo: 'value'
					},
					donut: {
						center: {},
						alignment: 'center'
					},
					legend: { alignment: 'center', truncation: { type: 'none' } }
				}}
			/>
		</Lazy>
		<Lazy height={graphHeight} placeholder="loading...">
			<BarChartSimple
				data={hairByAge}
				options={{
					title: 'Best Hairstyle? Breakdown by Age',
					height: graphHeight,

					legend: { truncation: { type: 'none' } },
					bars: { width: barWidth, maxWidth: barWidth },

					axes: {
						left: { mapsTo: 'name', scaleType: 'labels' },
						bottom: { mapsTo: 'value', domain: [0, 250] }
					}
				}}
			/>
		</Lazy>
	</div>
	<hr />
	<div class='sbs'>
		<!--	Girl or Duck?-->
		<Lazy height={graphHeight} placeholder="loading...">
			<DonutChart
				data={allData[15].map((x) => {
					return { group: x.group, value: +x.value };
				})}
				options={{
					title: questions[15],
					height: graphHeight,
					resizable: true,
					pie: {
						valueMapsTo: 'value'
					},
					donut: {
						center: {},
						alignment: 'center'
					},
					legend: { alignment: 'center', truncation: { type: 'none' } }
				}}
			/>
		</Lazy>
		<!--	Girl or Duck Age breakdown -->
		<Lazy height={graphHeight} placeholder="loading...">
			<BarChartSimple
				data={voteByAge}
				options={{
					title: 'Girl or Duck? Breakdown by Age',
					height: graphHeight,

					legend: { truncation: { type: 'none' } },
					bars: { width: barWidth, maxWidth: barWidth },

					axes: {
						left: { mapsTo: 'name', scaleType: 'labels' },
						bottom: { mapsTo: 'value', domain: [0, 250] }
					}
				}}
			/>
		</Lazy>
	</div>
	<hr/>
	<div class="sbs">
		<!--	Favorite Costume?-->
		<Lazy height={graphHeight} placeholder="loading...">
			<DonutChart
				data={allData[13].map((x) => {
					return { group: x.group, value: +x.value };
				})}
				options={{
					title: questions[13],
					height: graphHeight,
					resizable: true,
					pie: {
						valueMapsTo: 'value'
					},
					donut: {
						center: {},
						alignment: 'center'
					},
					legend: { alignment: 'center', truncation: { type: 'none' } }
				}}
			/>
		</Lazy>
		<!--	Costume Age breakdown -->
		<Lazy height={graphHeight} placeholder="loading...">
			<BarChartSimple
				data={costumeByAge}
				options={{
					title: 'Favorite Outfit Breakdown by Age',
					height: graphHeight,

					legend: { truncation: { type: 'none' } },
					bars: { width: barWidth, maxWidth: barWidth },

					axes: {
						left: { mapsTo: 'name', scaleType: 'labels' },
						bottom: { mapsTo: 'value', domain: [0, 100] }
					}
				}}
			/>
		</Lazy>
	</div>
	<hr />
	<!--	Ahijo?-->
	<div class="sbs">

<!--Ahijo-->
		<Lazy height={graphHeight} placeholder="loading...">
			<DonutChart
				data={allData[16].map((x) => {
					return { group: x.group, value: +x.value };
				})}
				options={{
					title: questions[16],
					height: graphHeight,
					resizable: true,
					pie: {
						valueMapsTo: 'value'
					},
					donut: {
						center: {},
						alignment: 'center'
					},
					legend: { alignment: 'center', truncation: { type: 'none' } }
				}}
			/>
		</Lazy>
		<!--	Is Subaru Favorite?-->
		<Lazy height={graphHeight} placeholder="loading...">
			<DonutChart
				data={allData[12].map((x) => {
					return { group: x.group, value: +x.value };
				})}
				options={{
					title: questions[12],
					height: graphHeight,
					resizable: true,
					pie: {
						valueMapsTo: 'value'
					},
					donut: {
						center: {},
						alignment: 'center'
					},
					legend: { alignment: 'center', truncation: { type: 'none' } }
				}}
			/>
		</Lazy>
<!--		Ahijo by age-->
		<Lazy height={graphHeight} placeholder="loading...">
			<BarChartSimple
				data={ahijoByAge}
				options={{
					title: 'Ahijo Breakdown by Age',
					height: graphHeight,

					legend: { truncation: { type: 'none' } },
					bars: { width: barWidth, maxWidth: barWidth },

					axes: {
						left: { mapsTo: 'name', scaleType: 'labels' },
						bottom: { mapsTo: 'value', domain: [0, 100] }
					}
				}}
			/>
		</Lazy>
		<div style="display:flex;flex-direction: column;text-align: center">
			<h3>People who said "No" to "Is Subaru Your Favorite?" and "Yes" to "Are you Ahijo?"</h3>
			<strong style="font-size:10em">5</strong>
		</div>
	</div>

	<hr />

	<Lazy height={graphHeight} placeholder="loading...">
		<BarChartSimple
			data={allData[17]}
			options={{
				title: questions[17],
				height: graphHeight,

				legend: { truncation: { type: 'none' } },
				bars: { width: barWidth, maxWidth: barWidth },

				axes: {
					left: { mapsTo: 'group', scaleType: 'labels' },
					bottom: { mapsTo: 'value', domain: [0, 250] }
				}
			}}
		/>
	</Lazy>
	<hr />
	<Lazy height={graphHeight} placeholder="loading..."
		><BarChartSimple
			data={allData[18]}
			options={{
				title: questions[18],
				height: graphHeight,

				legend: { truncation: { type: 'none' } },
				bars: { width: barWidth, maxWidth: barWidth },

				axes: {
					left: { mapsTo: 'group', scaleType: 'labels' },
					bottom: { mapsTo: 'value', domain: [0, 225] }
				}
			}}
		/>
	</Lazy>
	<hr />
	<Lazy height={graphHeight} placeholder="loading..."
		><BarChartSimple
			data={allData[19]}
			options={{
				title: questions[19],
				height: graphHeight,

				legend: { truncation: { type: 'none' } },
				bars: { width: barWidth, maxWidth: barWidth },

				axes: {
					left: { mapsTo: 'group', scaleType: 'labels' },
					bottom: { mapsTo: 'value', domain: [0, 130] }
				}
			}}
		/>
	</Lazy>
	<hr />
	<Lazy height={graphHeight} placeholder="loading..."
		><BarChartSimple
			data={allData[20]}
			options={{
				title: questions[20],
				height: graphHeight,

				legend: { truncation: { type: 'none' } },
				bars: { width: barWidth, maxWidth: barWidth },

				axes: {
					left: { mapsTo: 'group', scaleType: 'labels' },
					bottom: { mapsTo: 'value', domain: [0, 150] }
				}
			}}
		/>
	</Lazy>
	<hr />
	<Lazy height={graphHeight} placeholder="loading..."
		><BarChartSimple
			data={allData[21]}
			options={{
				title: questions[21],
				height: graphHeight,

				legend: { truncation: { type: 'none' } },
				bars: { width: barWidth, maxWidth: barWidth },

				axes: {
					left: { mapsTo: 'group', scaleType: 'labels' },
					bottom: { mapsTo: 'value', domain: [0, 150] }
				}
			}}
		/>
	</Lazy>
	<hr />
	<Lazy height={1200} placeholder="loading..."
		><BarChartSimple
			data={allData[22]}
			options={{
				title: questions[22],
				height: '1200px',

				legend: { truncation: { type: 'none' } },

				resizable: true,
				bars: { width: barWidth, maxWidth: barWidth },

				axes: {
					left: { mapsTo: 'group', scaleType: 'labels' },
					bottom: { mapsTo: 'value', domain: [0, 100] }
				}
			}}
		/>
	</Lazy>
	<hr />
	<div class="cloud">
		<h3>What would you like Subaru to play in the future? (optional)</h3>
		{#if $media.small}
			<Lightbox clickToClose imagePreset="fullscreen">
				<img width="600" alt="wordcloud" src={w} />
			</Lightbox>
		{:else}
			<WordCloud />
		{/if}
	</div>
	<div class="server">
		<DonutChart
			data={c1}
			options={{
				title: questions[23],
				height: graphHeight,
				resizable: true,
				pie: {
					valueMapsTo: 'count'
				},
				donut: { alignment: 'center' },
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[24].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[24],
				height: graphHeight,

				donut: { alignment: 'center' },
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[25].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[25],
				height: graphHeight,

				donut: { alignment: 'center' },
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[26].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[26],
				height: graphHeight,
				donut: { alignment: 'center' },
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[27].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[27],
				height: graphHeight,

				donut: { alignment: 'center' },
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>

		<DonutChart
			data={allData[28].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[28],
				height: graphHeight,
				donut: { alignment: 'center' },
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[29].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[29],
				height: graphHeight,

				donut: { alignment: 'center' },
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
	</div>
	<hr />
	<div class="mods">
		<DonutChart
			data={allData[30].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[30],
				height: graphHeight,
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: {
					center: {
						label: 'Ato'
					},
					alignment: 'center'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[31].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[31],
				height: graphHeight,
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: {
					center: {
						label: 'Ato🤔'
					},
					alignment: 'center'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[32].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[32],
				height: graphHeight,
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: {
					center: {
						label: 'Ato'
					},
					alignment: 'center'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[33].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[33],
				height: graphHeight,
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: {
					center: {
						label: 'Allu🤔'
					},
					alignment: 'center'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[34].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[34],
				height: graphHeight,
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: {
					center: {
						label: 'Allu'
					},
					alignment: 'center'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[35].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[35],
				height: graphHeight,
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: {
					center: {
						label: 'Ato'
					},
					alignment: 'center'
				},
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
	</div>
</div>

<style lang="scss">
	.cloud {
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;

		margin: 0 1em 0 1em;
	}
	hr {
		margin: 4em 0;
	}
	.server,
	.sbs,
	.mods {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 4em;
	}
	.sbs-3 {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 4em;
	}
	//:global(.server > div){
	// margin:4em;
	//}
	:global(.bx--cc--title p.title),
	:global(p),
	:global(text),
	:global(.bx--cc--axes g.axis g.tick text) {
		font-family: klee, serif;
	}

	@media screen and (max-width: 849px) {
		div {
			display: flex;
			flex-direction: column;
			align-content: center;
			justify-content: center;
			margin: 0;
		}
		.server,
		.mods {
			display: grid;
			grid-template-columns: repeat(1, minmax(0, 1fr));
			gap: 1em;
		}
		:global(.bx--cc--title p.title),
		:global(p),
		:global(.bx--cc--axes g.axis g.tick text) {
			font-family: klee, serif;
		}
	}
</style>
