<script lang="ts" context="module">
	let api_key = 'AIzaSyDeaPqQGbRx835yfl-H7PeK3mgHEoy-_2U';
	let spreadsheet_id = '1nC5NU5JTO6nHEJDK-inUgL46aXEXUGJiKiVfEcmBALI';
	// let spreadsheet_id = '1NMn_qg1nO9h9gVLGULcXGXHhngmhGOICIOtS47j4h5E';
	let tab_name = 'stats';
	let url =
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

			let [q, data] = reformatData(values);
			// console.log(data[30]);

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

	import { BarChartSimple, DonutChart, TreemapChart } from '@carbon/charts-svelte';
	import '@carbon/charts/styles.min.css';


	// import 'carbon-components/css/carbon-components.min.css';

	import WordCloud from './WordCloud.svelte';

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
</script>

<!--<svelte:head>-->
<!--	<link rel="stylesheet" href="https://unpkg.com/@carbon/charts/styles.css" />-->
<!--</svelte:head>-->

<div>
	<h1>Subatomo EN Fan Server End of 2021 Survey</h1>
	<BarChartSimple
		data={allData[0]}
		options={{
			title: questions[0],
			height: '400px',
			axes: {
				left: { mapsTo: 'group', scaleType: 'labels' },
				bottom: { mapsTo: 'value', domain: [0, 200] }
			},
			legend: { enabled: false }
		}}
	/>
	<hr />

	<BarChartSimple
		data={allData[1]}
		options={{
			title: questions[1],
			height: '400px',
			axes: {
				left: { mapsTo: 'group', scaleType: 'labels' },
				bottom: { mapsTo: 'value', domain: [0, 400] }
			},
			legend: { enabled: false }
		}}
	/>
	<hr />

	<BarChartSimple
		data={allData[3]}
		options={{
			title: questions[3],
			height: '400px',
			legend: { truncation: { type: 'none' } },

			axes: {
				left: { mapsTo: 'value', domain: [0, 350] },
				bottom: {
					mapsTo: 'group',
					ticks: { rotation: 'none' },
					truncation: {
						type: 'mid_line',
						threshold: 8,
						numCharacter: 18
					},
					scaleType: 'labels'
				}
			}
		}}
	/>
	<hr />

	<BarChartSimple
		data={allData[4]}
		options={{
			title: questions[4],
			height: '400px',
			axes: {
				left: { mapsTo: 'value', domain: [0, 150] },
				bottom: {
					mapsTo: 'group',
					ticks: { rotation: 'none' },
					truncation: {
						type: 'start',
						threshold: 8,
						numCharacter: 18
					},
					scaleType: 'labels'
				}
			},
			legend: { truncation: { type: 'none' } }
		}}
	/>
	<hr />

	<TreemapChart
		data={countries}
		options={{
			title: questions[2],
			height: '400px'
		}}
	/>
	<hr />

	<BarChartSimple
		data={allData[5]}
		options={{
			title: questions[5],
			height: '400px',
			legend: { truncation: { type: 'none' } },
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
	<hr />
	{#if media.small}
		<BarChartSimple
			data={allData[6]}
			options={{
				title: questions[6],
				height: '900px',
				legend: { enabled: false },
				axes: {
					left: { mapsTo: 'group', scaleType: 'labels' },
					bottom: { mapsTo: 'value', domain: [0, 75] }
				}
			}}
		/>
	{:else}
		<BarChartSimple
			data={allData[6]}
			options={{
				title: questions[6],
				height: '900px',
				legend: { enabled: false },
				axes: {
					left: { mapsTo: 'value', domain: [0, 75] },
					bottom: { mapsTo: 'group', scaleType: 'labels' }
				}
			}}
		/>
	{/if}
	<!--grid: { x: { alignWithAxisTicks: true }, y: { alignWithAxisTicks: true } },-->
	<hr />

	<BarChartSimple
		data={ranked}
		options={{
			title: 'Rank your top 3 (Legend is clickable)',
			height: '2000px',

			bars: { width: 24, maxWidth: 24 },

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
	<hr />
	<BarChartSimple
		data={allData[10]}
		options={{
			title: questions[10],
			height: '400px',
			legend: { truncation: { type: 'none' } },
			bars: { width: 24, maxWidth: 24 },

			axes: {
				left: { mapsTo: 'group', scaleType: 'labels' },
				bottom: { mapsTo: 'value', domain: [0, 75] }
			}
		}}
	/>
	<hr />
	<!--	Merch?-->
	<BarChartSimple
		data={allData[11]}
		options={{
			title: questions[11],
			height: '400px',
			legend: { truncation: { type: 'none' } },
			bars: { width: 24, maxWidth: 24 },

			axes: {
				left: { mapsTo: 'group', scaleType: 'labels' },
				bottom: { mapsTo: 'value', domain: [0, 350] }
			}
		}}
	/>
	<hr />
	<!--	Started to watch?-->
	<BarChartSimple
		data={allData[12]}
		options={{
			title: questions[12],
			height: '400px',
			legend: { truncation: { type: 'none' } },
			bars: { width: 24, maxWidth: 24 },

			axes: {
				left: { mapsTo: 'group', scaleType: 'labels' },
				bottom: { mapsTo: 'value', domain: [0, 350] }
			}
		}}
	/>
	<hr />
	<BarChartSimple
		data={allData[13]}
		options={{
			title: questions[13],
			height: '400px',
			legend: { truncation: { type: 'none' } },
			bars: { width: 24, maxWidth: 24 },

			axes: {
				left: { mapsTo: 'group', scaleType: 'labels' },
				bottom: { mapsTo: 'value', domain: [0, 150] }
			}
		}}
	/>
	<hr />
	<BarChartSimple
		data={allData[14]}
		options={{
			title: questions[14],
			height: '400px',
			legend: { truncation: { type: 'none' } },
			bars: { width: 24, maxWidth: 24 },

			axes: {
				left: { mapsTo: 'group', scaleType: 'labels' },
				bottom: { mapsTo: 'value', domain: [0, 200] }
			}
		}}
	/>
	<hr />
	<BarChartSimple
		data={allData[15]}
		options={{
			title: questions[15],
			height: '400px',
			legend: { truncation: { type: 'none' } },
			bars: { width: 24, maxWidth: 24 },

			axes: {
				left: { mapsTo: 'group', scaleType: 'labels' },
				bottom: { mapsTo: 'value', domain: [0, 250] }
			}
		}}
	/>
	<hr />
	<BarChartSimple
		data={allData[16]}
		options={{
			title: questions[16],
			height: '400px',
			legend: { truncation: { type: 'none' } },
			bars: { width: 24, maxWidth: 24 },

			axes: {
				left: { mapsTo: 'group', scaleType: 'labels' },
				bottom: { mapsTo: 'value', domain: [0, 250] }
			}
		}}
	/>
	<hr />
	<BarChartSimple
		data={allData[17]}
		options={{
			title: questions[17],
			height: '400px',

			legend: { truncation: { type: 'none' } },
			bars: { width: 24, maxWidth: 24 },

			axes: {
				left: { mapsTo: 'group', scaleType: 'labels' },
				bottom: { mapsTo: 'value', domain: [0, 250] }
			}
		}}
	/>
	<hr />
	<BarChartSimple
		data={allData[18]}
		options={{
			title: questions[18],
			height: '400px',

			legend: { truncation: { type: 'none' } },
			bars: { width: 24, maxWidth: 24 },

			axes: {
				left: { mapsTo: 'group', scaleType: 'labels' },
				bottom: { mapsTo: 'value', domain: [0, 225] }
			}
		}}
	/>
	<hr />
	<BarChartSimple
		data={allData[19]}
		options={{
			title: questions[19],
			height: '400px',

			legend: { truncation: { type: 'none' } },
			bars: { width: 24, maxWidth: 24 },

			axes: {
				left: { mapsTo: 'group', scaleType: 'labels' },
				bottom: { mapsTo: 'value', domain: [0, 130] }
			}
		}}
	/>
	<hr />
	<BarChartSimple
		data={allData[20]}
		options={{
			title: questions[20],
			height: '400px',

			legend: { truncation: { type: 'none' } },
			bars: { width: 24, maxWidth: 24 },

			axes: {
				left: { mapsTo: 'group', scaleType: 'labels' },
				bottom: { mapsTo: 'value', domain: [0, 150] }
			}
		}}
	/>
	<hr />
	<BarChartSimple
		data={allData[21]}
		options={{
			title: questions[21],
			height: '400px',

			legend: { truncation: { type: 'none' } },
			bars: { width: 24, maxWidth: 24 },

			axes: {
				left: { mapsTo: 'group', scaleType: 'labels' },
				bottom: { mapsTo: 'value', domain: [0, 150] }
			}
		}}
	/>
	<hr />
	<BarChartSimple
		data={allData[22]}
		options={{
			title: questions[22],
			height: '400px',

			legend: { truncation: { type: 'none' } },

			resizable: true,
			bars: { width: 24, maxWidth: 24 },

			axes: {
				left: { mapsTo: 'value', domain: [0, 100] },
				bottom: { mapsTo: 'group', scaleType: 'labels' }
			}
		}}
	/>
	<hr />
	<div class='cloud'>
	<h3>What would you like Subaru to play in the future? (optional)</h3>
	<WordCloud />
	</div>
	<div class="server">
		<DonutChart
			data={c1}
			options={{
				title: questions[23],
				height: '400px',
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
				height: '400px',

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
				height: '400px',

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
				height: '400px',
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
				height: '400px',

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
				height: '400px',
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
				height: '400px',

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
				height: '400px',
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: { center: {
      label: "Ato"
    },alignment: 'center' },
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[31].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[31],
				height: '400px',
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: { center: {
      label: "Ato🤔"
    },alignment: 'center' },
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[32].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[32],
				height: '400px',
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: { center: {
      label: "Ato"
    },  alignment: 'center' },
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>	<DonutChart
			data={allData[33].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[33],
				height: '400px',
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: { center: {
      label: "Allu🤔"
    },  alignment: 'center' },
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[34].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[34],
				height: '400px',
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: {  center: {
      label: "Allu"
    }, alignment: 'center' },
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>
		<DonutChart
			data={allData[35].map((x) => {
				return { group: x.group, value: +x.value };
			})}
			options={{
				title: questions[35],
				height: '400px',
				resizable: true,
				pie: {
					valueMapsTo: 'value'
				},
				donut: {    center: {
      label: "Ato"
    }, alignment: 'center' },
				legend: { alignment: 'center', truncation: { type: 'none' } }
			}}
		/>


	</div>
</div>

<style lang="scss">
	div,.cloud {
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
	.mods {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 4em;
	}
	//:global(.server > div){
	// margin:4em;
	//}
	:global(.bx--cc--title p.title),
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

		:global(.bx--cc--title p.title),
		:global(.bx--cc--axes g.axis g.tick text) {
			font-family: klee, serif;
		}
	}
</style>
