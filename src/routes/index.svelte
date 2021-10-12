<script>
	import { faDiscord, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
	import official from '/static/assets/images/subaru-logo-official.png';
	import third from '/static/assets/images/3rdanniversarylogo-transparent-sm.png';
	import second from '/static/assets/images/second-sm.png';
	import subatomo from '/static/assets/images/subatomo-wh.png';
	import subaru from '/static/assets/images/subaru3rd_outfit_long_full_1080.png';
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
		/*		window.$('.nav').on('click', function(target) {
			console.log(target);
			if (window.$(target.target).hasClass('nav')) {
				window.$('#main').toggleClass('active');
			}
		});*/

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

	let sizeSuba = '6x';
	let sizeSubatomo = '2x';
	if ($media.small) {
		sizeSuba = '4x';
		sizeSubatomo = '2x';
	}

	if ($media.tablet) {
		sizeSuba = '6x';
		sizeSubatomo = '4x';
	}
	let dropdownActive;

	function onHamburger() {
		dropdownActive = !dropdownActive;
	}

	/*
		onMount(async () => {
			/!*		jQuery('.nav').on('click', function(target) {
						if (document.querySelector(target.currentTarget).hasClass('nav')) {
							jQuery('.nav').toggleClass('active');
						}
					});*!/
	/!*		window.$('.nav').on('click', function(target) {
				console.log(target);
				if (window.$(target.target).hasClass('nav')) {
					window.$('.nav').toggleClass('active');
				}
			});*!/
		});*/
</script>

<svelte:head>
	<title>{$LL.TITLE()}</title>

	<meta name="description" content={$LL.HOME.META_DESC()} />
</svelte:head>

<main id="main" class:active={dropdownActive}>
	<div class="subaru-logo-group">
		<div class="subaru-logo">
			<img src={official} alt="oozora subaru" />
		</div>
		<div class="subaru-socials">
			<a href="https://www.youtube.com/channel/UCvzGlP9oQwU--Y0r9id_jnA" target="_blank">
				<Hoverable let:hovering={active}>
					<Fa icon={faYoutube} size={sizeSuba} color={youtubered} fw />
				</Hoverable>
			</a>
			<a href="https://twitter.com/oozorasubaru" target="_blank">
				<Fa icon={faTwitter} size={sizeSuba} color={twitterblue} fw />
			</a>
		</div>
	</div>
	<style>
		.subaru-logo {
			position: relative;
			transition: 0.5s;
		}

		#main.active .subaru-logo {
			opacity: 0;
			left: 100vw;
		}

		#main.active .nav {
			max-height: 100vh;
		}

		#main.active .subaru-logo-group {
			position: relative;
			opacity: 0;
			transition: 0.5s;
		}

		#main.active .subaru-logo-group {
			left: 100vw;
		}
	</style>
	<div class="nav" on:click={onHamburger}>
		<!--	<div class='nav' class:active={dropdownActive} on:click={onHamburger}>-->
		<div class="third">
			<img src={third} alt="3rd anniversary" />

			<a sveltekit:prefetch href="/3rd-anniversary"><h4>{$LL.HOME.THIRD_ANNIVERSARY()}</h4></a>
		</div>
		<div class="ponds">
			<div class="loading-duck" />
			<a sveltekit:prefetch href="/projects/ponds">
				{#if $media.small || $media.tablet}
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
				<Fa icon={faDiscord} size={sizeSubatomo} color={discordblurple} />
			</a>
			<a href="https://www.youtube.com/channel/UCHs7wgimVZHIp5sfNUkQTHA" target="_blank">
				<Fa icon={faYoutube} size={sizeSubatomo} color={youtubered} />
			</a>
			<a href="https://twitter.com/subatomos" target="_blank">
				<Fa icon={faTwitter} size={sizeSubatomo} color={twitterblue} />
			</a>
		</div>
	</div>
	<div class="subaru">
		<img src={subaru} alt="oozora subaru" style="opacity:0" />
	</div>
	<small>Main hub still in development</small>
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

	main {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		align-content: center;
		align-items: flex-start;
		justify-content: space-between;
		padding: 2em;
		box-sizing: border-box;
		min-height: 100vh;
	}

	.subaru-logo-group {
		display: flex;
		top: 5%;
		left: 10%;
	}

	.subaru-logo {
		object-fit: cover;

		img {
			height: 30vh;
			aspect-ratio: 845/386;
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
		bottom: 5%;
		left: 5%;
		//overflow:hidden;

		z-index: 10000;
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
		bottom: 0;
		object-fit: cover;
		overflow: hidden;
		background: url('/static/assets/images/subaru3rd_outfit_long_full_1080.png') no-repeat bottom
			center;
		background-size: contain;

		img {
			width: 40vw;
			height: 100vh;
		}
	}

	small {
		position: fixed;
		bottom: 0;
		left: 0;
		font-size: 2em;
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

	@media screen and (max-width: 849px) {
		small {
			top: 2em;
			font-size: 1.5em;
		}

		.subaru-logo-group {
			top: 1em;
			left: 1em;
			flex-direction: column;
			z-index: 203;
			bottom: 5%;
			left: 5%;
			z-index: 10000;
			margin-top: 2vh;
		}
		.subaru-logo {
			width: 100%;
			position: relative;
			transition: 0.5s;

			img {
				object-fit: contain;
				width: 100%;
				//aspect-ratio: 2.19;
				//aspect-ratio: 845/386;
			}
		}

		.subaru-socials {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			position: fixed;
			z-index: 210;
			left: 1em;
			zoom: 0.4;
			top: 1em;
			width: 50vw;
		}
		.subaru {
			max-height: 60%;
			z-index: -1;
			overflow-x: hidden;
			max-height: 100vh;
			height: 75vh;
			width: 100vw;
			z-index: 100;
			margin-top: 30vh;
			position: fixed;
			bottom: -5vh !important;
		}
		.nav {
			top: 0;
			left: 0;
			width: 100vw;
			box-sizing: border-box;
			background-color: #4c413d;
			overflow: hidden;
			max-height: 3em;
			transition: 0.5s;
			z-index: 200;
			position: fixed;
			height: auto;
		}
		.nav:before {
			content: '';
			display: block;
			height: 0.6em;
			border-top: 5px solid #e0dacd;
			border-bottom: 5px solid #e0dacd;
			width: 40px;
			margin-left: 80vw;
			margin-top: 1em;
		}

		.active {
			max-height: 100vh !important;
		}
		#main.active .subaru-logo {
			opacity: 0;
		}
		#main.active .nav {
			max-height: 100vh;
		}
		h4 {
			font-size: 1.3em;
			word-break: keep-all;
			color: #e0dacd;
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

	@media screen and (min-width: 850px) and (max-width: 1024px) {
		.subaru-logo-group {
			top: 1em;
			left: 1em;
			flex-direction: column;
		}
		.subaru-logo {
			width: 100%;

			img {
				object-fit: contain;
				width: 100%;
				//aspect-ratio: 2.19;
				//aspect-ratio: 845/386;
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
			font-weight: 900;
			font-size: 2.4em;
			word-break: keep-all;
			text-shadow: 1px 1px 1px yellow;
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
