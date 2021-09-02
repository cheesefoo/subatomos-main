<script>
	import Chart from 'chart.js/auto/auto.js';
	import { onMount } from 'svelte';

	const labelsHairstyle = ['Short', 'Long', 'Twintails', "Can't decide"];
	const hairData = [1114, 483, 241, 49];
	const labelsSubmissions = ['Fanart', 'Default Duck', 'Editor-made Duck', 'Uploaded Duck'];
	const submissionData = [46, 250, 1680, 109];
	const labelCountry = [
		'USA',
		'Indonesia',
		'Philippines',
		'Malaysia',
		'Japan',
		'Canada',
		'Mexico',
		'Brazil'
	];
	const countryData = [296, 195, 151, 103, 87, 76, 50, 33];
	const labelReferer = [
		'Subatomo Discord',
		'Sushi (YT)',
		'Twitter',
		'Fan discord',
		'Reddit',
		'Gundamfinal (YT)',
		'Word of mouth',
		'Facebook'
	];
	// const labelReferer = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	// const refererData = [626, 309, 258, 244, 238, 214, 131, 45];
	const refererData = [626, 309, 244, 238, 214, 131, 24, 21];

	const dataHairstyle = {
		labels: labelsHairstyle,
		datasets: [
			{
				label: 'Best Hairstyle?',
				borderColor: 'rgb(255,255,255)',
				data: hairData,
				backgroundColor: ['#FD7062', '#03A4DB', '#FCD73F', '#E8F082'],
				hoverOffset: 4
			}
		]
	};
	const configHairstyle = {
		type: 'pie',
		data: dataHairstyle,
		options: {
			responsive: true,
			plugins: {
				legend: {
					position: 'top'
				},
				title: {
					display: true,
					text: 'Best Hairstyle?'
				}
			}
		}
	};

	const dataSubmissions = {
		labels: labelsSubmissions,
		datasets: [
			{
				label: 'Submissions',
				borderColor: 'rgb(255,255,255)',
				data: submissionData,
				backgroundColor: ['#FD7062', '#03A4DB', '#FCD73F', '#E8F082'],
				hoverOffset: 4
			}
		]
	};
	const configSubmissions = {
		type: 'pie',
		data: dataSubmissions,
		options: {
			responsive: true,
			plugins: {
				legend: {
					position: 'top'
				},
				title: {
					display: true,
					text: 'Submission Type (Total: 2085)'
				}
			}
		}
	};

	const dataReferer = {
		labels: labelReferer,
		datasets: [
			{
				label: 'Referer',
				borderColor: 'rgb(255,255,255)',
				data: refererData,
				backgroundColor: [
					'#5865F2',
					'#56d926',
					'#FCD73F',
					'#0b76b8',
					'#5865F2',
					'#FD7062',
					'#fd4500',
					'#4267B2'
				],
				hoverOffset: 4
			}
		]
	};
	const configReferer = {
		type: 'bar',
		data: dataReferer,
		options: {
			responsive: true,
			plugins: {
				legend: {
					position: 'top'
				},
				title: {
					display: true,
					text: 'How did you find out about the project? (Top 8, undisclosed excluded)'
				}
			}
		}
	};

	const dataCountry = {
		labels: labelCountry,
		datasets: [
			{
				label: 'Country',
				borderColor: 'rgb(255,255,255)',
				data: countryData,
				backgroundColor: [
					'#07A41B',
					'#FD7062',
					'#03A4DB',
					'#FCD73F',
					'#E8F082',
					'#56d926',
					'#bc002d',
					'#FD7062'
				],
				hoverOffset: 4
			}
		]
	};
	const configCountry = {
		type: 'bar',
		data: dataCountry,
		options: {
			responsive: true,
			plugins: {
				legend: {
					position: 'top'
				},
				title: {
					display: true,
					text: 'Where are you from? (Top 8, undisclosed excluded)'
				}
			}
		}
	};

	onMount(() => {
		const hairstyle = new Chart(document.getElementById('hairstyle'), configHairstyle);
		const submissions = new Chart(document.getElementById('submissions'), configSubmissions);
		const loc = new Chart(document.getElementById('loc'), configCountry);
		const referer = new Chart(document.getElementById('referer'), configReferer);
	});
</script>

<main>
	<h1>Subatomo Ponds</h1>
	<h3>Birthday & 1 Million Subscriber Celebration Project</h3>
	<a href="https://ponds.subatomos.com">Visit the site here!</a>
	<div class="video-container">
		<iframe
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			frameborder="0"
			height="720"
			src="https://www.youtube.com/embed/YqRGwmk4fmw"
			title="YouTube video player"
			width="1280"
		/>
	</div>
	<p>We surveyed users during their submissions. These are the results:</p>
	<div class="charts">
		<canvas id="hairstyle" />
		<canvas id="submissions" />
	</div>
	<div class="charts-bar">
		<canvas id="loc" />
	</div>
	<div class="charts-referer">
		<canvas id="referer" />
	</div>
</main>

<style lang="scss">
	main {
		display: flex;

		flex-direction: column;
		justify-content: center;
	}

	h1,
	h3,
	a {
		text-align: center;
	}

	a {
		font-size: x-large;
		padding: 1em;
	}

	.charts {
		position: relative;
		display: flex;
		justify-content: flex-start;

		height: 40%;
		width: 50%;
		//overflow:hidden;
	}

	.charts-bar,
	.charts-referer {
		height: 40%;
	}

	canvas {
		border: 0.15em solid $chromeblue;
		padding: 1em;
	}

	.video-container {
		align-self: center;
	}
	//.video-container {
	//
	//  position: relative;
	//  padding-bottom: 56.25%;
	//  padding-top: 30px;
	//	max-width:80%;
	//  height: 0;
	//  overflow: hidden;
	//
	//  iframe,
	//  object,
	//  embed {
	//    position: absolute;
	//    top: 0;
	//    left: 0;
	//    width: 100%;
	//    height: 100%;
	//  }
	//}
</style>
