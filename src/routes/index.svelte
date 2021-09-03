<script>
	import { faDiscord, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
	import official from '/static/assets/images/subaru-logo-official.png';
	import third from '/static/assets/images/3rdanniversarylogo-transparent-sm.png';
	import second from '/static/assets/images/second-sm.png';
	import subatomo from '/static/assets/images/subatomo-wh.png';
	import subaru from '/static/assets/images/cbimage.png';
	import megaphone from '/static/assets/images/megaphone_resized.svg';
	import Fa from 'svelte-fa';
	import Sakura from '$lib/components/sakura/sakura.js';
	import { onMount } from 'svelte';
	import LL from '/src/i18n/i18n-svelte';
	import Hoverable from '$lib/components/Hoverable.svelte';
	import { media } from '$lib/stores/stores.ts';

	let twitterblue = '#1DA1F2';
	let youtubered = '#FF0000';
	let discordpurple = '#7289d9';
	let discordblurple = '#5865F2';

	onMount(async () => {
		// console.log($locale);
		// if ($locale === undefined || $locale === '') {
		// 	setLocale(detectLocale('en', ['en', 'ja'], localStorageDetector));
		// 	await initI18n($locale);
		// 	console.log($locale);
		// }
		var sakura = new Sakura('.subaru', {
			colors: [
				{
					gradientColorStart: 'rgba(255, 183, 197, 0.9)',
					gradientColorEnd: 'rgba(255, 197, 208, 0.9)',
					gradientColorDegree: 120
				},
				{
					gradientColorStart: 'rgba(255,189,189)',
					gradientColorEnd: 'rgba(227,170,181)',
					gradientColorDegree: 120
				},
				{
					gradientColorStart: 'rgba(212,152,163)',
					gradientColorEnd: 'rgba(242,185,196)',
					gradientColorDegree: 120
				}
			]
		});
	});
</script>

<svelte:head>
	<title>{$LL.TITLE()}</title>
</svelte:head>

<main id="main">
	<div class="subaru-logo-group">
		<div class="subaru-logo">
			<img src={official} alt="oozora subaru" />
		</div>
		<div class="subaru-socials">
			<a href="https://www.youtube.com/channel/UCvzGlP9oQwU--Y0r9id_jnA" target="_blank">
				<Hoverable let:hovering={active}>
					{#if $media.small}
						<Fa icon={faYoutube} size="4x" color={youtubered} fw pulse:{active} />
					{:else}
						<Fa icon={faYoutube} size="6x" color={youtubered} fw pulse:{active} />
					{/if}
				</Hoverable>
			</a>
			<a href="https://twitter.com/oozorasubaru" target="_blank">
				{#if $media.small}
					<Fa icon={faTwitter} size="4x" color={twitterblue} fw />
				{:else}
					<Fa icon={faTwitter} size="6x" color={twitterblue} fw />
				{/if}
			</a>
		</div>
	</div>
	<div class="nav">
		<div class="third">
			<img src={third} alt="3rd anniversary" />

			<a sveltekit:prefetch href="/3rd-anniversary"><h4>{$LL.HOME.THIRD_ANNIVERSARY()}</h4> </a>
		</div>
		<div class="ponds">
			<div class="loading-duck" />
			<a sveltekit:prefetch href="/projects/ponds">
				{#if $media.small}
					<h4>{$LL.HOME.BIRTHDAY_SM()}</h4>
				{:else}
					<h4>{$LL.HOME.BIRTHDAY()}</h4>
				{/if}
			</a>
			<!--			<a sveltekit:prefetch href='/projects/ponds'>-->

			<!--				<h4>1 Million Subscribers & Birthday</h4></a>-->
		</div>
		<div class="second">
			<img src={second} alt="2nd anniversary" />

			<a href="https://twitter.com/SubatomoFan/status/1306244299995017217" target="_blank">
				<h4>{$LL.HOME.SECOND_ANNIVERSARY()}</h4>
			</a>
		</div>
		<div class="soundboard">
			<img src={megaphone} alt="soundboard" />

			<a sveltekit:prefetch href="/soundboard"><h4>{$LL.HOME.SOUNDBOARD()}</h4></a>
		</div>
	</div>
	<div class="subatomo-logo-group">
		<div class="subatomo-logo">
			<img src={subatomo} alt="oozora subaru" />
		</div>
		<div class="subatomo-socials">
			<a href="https://discord.gg/subatomos" target="_blank">
				<Fa icon={faDiscord} size="2x" color={discordblurple} />
			</a>
			<a href="https://www.youtube.com/channel/UCHs7wgimVZHIp5sfNUkQTHA" target="_blank">
				<Fa icon={faYoutube} size="2x" color={youtubered} />
			</a>
			<a href="https://twitter.com/subatomos" target="_blank">
				<Fa icon={faTwitter} size="2x" color={twitterblue} />
			</a>
		</div>
	</div>
	<div class="subaru">
		<img src={subaru} alt="oozora subaru" />
	</div>
</main>

<!--<LanguageSelect/>-->
<style lang="scss">
	@import '$lib/components/sakura/sakura.min.css';

	html,
	body,
	main {
		overflow: hidden;
		max-width: 100vw;
		max-height: 100vh;
	}

	.subaru-logo-group {
		display: flex;
		position: absolute;
		top: 5%;
		left: 10%;
	}

	.subaru-logo {
		object-fit: cover;

		img {
			height: 30vh;
		}
	}

	.subaru-socials {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h4 {
		font-weight: 900;
		font-size: 24px;
	}

	.nav {
		position: absolute;
		left: 15%;
		top: 40%;
	}

	.third,
	.ponds,
	.second,
	.soundboard {
		//display: block;
		//position: relative;

		img {
			position: absolute;
		}

		a {
			position: relative;
			top: 1em;
			left: 4em;
		}
	}

	.ponds {
		animation-play-state: paused;

		div {
			position: absolute;
		}
	}

	.soundboard img,
	.second img {
		width: 50px;
		height: 50px;
	}

	.ponds:hover > .loading-duck {
		animation: sprite 0.8s steps(8) infinite;
	}

	/*transform: translate(-50%, -50%) scale(0.25);*/
	.loading-duck {
		//position:absolute;
		width: 50px;
		height: 50px;
		background: url('/static/assets/images/loadingduck/duck-sm.png');
		//transform: translate(0, 35%);
	}

	.subatomo-logo-group {
		position: absolute;
		bottom: 5%;
		left: 5%;
		//overflow:hidden;
	}

	.subatomo-logo {
		object-fit: cover;

		img {
			width: 20vw;
		}
	}

	.subaru {
		position: absolute;
		right: 5%;
		bottom: 5%;
		object-fit: cover;
		overflow: hidden;

		img {
			width: 40vw;
			height: 100vh;
		}
	}

	//a {
	//  &.grow {
	//    transition: all .2s ease-in-out;
	//
	//    &:hover {
	//      transform: scale(1.5);
	//    }
	//  }
	//}
	@keyframes sprite {
		to {
			background-position: -400px;
		}
	}

	@media screen and (min-width: 320px) {
		.subaru-logo-group {
			top: 5%;
			left: 5%;
			flex-direction: column;
		}
		.subaru-logo {
			object-fit: cover;

			img {
				//height: 10vh;
				width: 90vw;
			}
		}

		.subaru-socials {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
		}
		.subaru {
			max-height: 60%;
			z-index: -1;
		}
		.nav {
			left: 5%;
			top: 45%;
		}
		h4 {
			font-size: 1.3em;
			//max-width:20ch;
			word-break: keep-all;
		}

		.subatomo-logo {
			object-fit: cover;

			img {
				width: 50vw;
			}
		}
		.subatomo-socials {
			display: flex;
			justify-content: flex-start;
			flex-basis: fit-content;

			a {
				flex-grow: 2;
			}
		}
	}
</style>
