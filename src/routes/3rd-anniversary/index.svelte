<script context="module" lang="ts">
	import LL from '/src/i18n/i18n-svelte';
	import CongratsMessageBox from '$lib/components/CongratsMessageBox.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';

	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';


	import Saos from 'saos';

	import logoStatic from '/static/assets/images/logo.png';
	import separator from '/static/assets/images/separator.webp';
	import messagebanner from '/static/assets/images/border_messages.png';
	import messagebannermobile from '/static/assets/images/border_messages_mobile.png';
	import bottomseparator from '/static/assets/images/bottom_credits.webp';
	import videoframe from '/static/assets/images/videoframe.png';
	import metaimg from '/static/assets/images/3rdanniversarylogo.jpg';
	import metatwi from '/static/assets/images/meta3rd.jpg';

	import { baseURL } from '$lib/variables.ts';

	import arrow from '/static/assets/images/scrolldown.png';

	export async function load({ fetch }) {
		const res = await fetch('/congrats-messages');
		const texts = await res.json();
		if (res.ok) return { props: { texts: texts } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	import LanguageSelect from '$lib/components/LanguageSelect3rdAnniversary.svelte';
	import ThirdAnniversaryCredits from '$lib/components/ThirdAnniversaryCredits.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';
	import { onMount } from 'svelte';
	import { media } from '$lib/stores/stores';
	import TwitterSEO from '$lib/components/TwitterSEO.svelte';

	export let texts;

	let hideMessages = false;

	function filterFanarts() {
		hideMessages = !hideMessages;
	}

	let innerHeight = 0;
	let y = 0;
	let showBackToTop;
	$: showBackToTop = y > innerHeight + 60;

	function backToTop() {
		document.body.scrollIntoView();
	}
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{$LL.THIRD.TITLE()}</title>
	<meta name="title" content="Oozora Subaru, congratulations on your 3rd anniversary!" />
	<meta
		name="description"
		content="スバル3周年おめでとう！！！
We made a video for you to celebrate!!!"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://subatomos.com/3rd-anniversary" />
	<meta property="og:title" content="Oozora Subaru, congratulations on your 3rd anniversary!" />
	<meta
		property="og:description"
		content="スバル3周年おめでとう！！！
We made a video for you to celebrate!!!"
	/>
	<meta property="og:image" content={metaimg} />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://subatomos.com/3rd-anniversary" />
	<meta
		property="twitter:title"
		content="Oozora Subaru, congratulations on your 3rd anniversary!"
	/>
	<meta
		property="twitter:description"
		content="スバル3周年おめでとう！！！
We made a video for you to celebrate!!!"
	/>
	<meta property="twitter:image" content={`${baseURL}${metatwi}`} />
</svelte:head>
<!--<TwitterSEO />-->
<svelte:window bind:innerHeight bind:scrollY={y} />

<!--<Logo />-->
<div class="back-btn">
	<a sveltekit:prefetch href="/">
		<Fa icon={faArrowLeft} />
	</a>
</div>
<!--
<div class='language-select'>
	<LanguageSelect />
</div>
-->

<main>
	<div class="top">
		<div class="logo-container-static">
			<img src={logoStatic} alt="Subatomos 3rd Anniversary Project" />
			{#if !$media.small}
				<div class="arrow">
					<img src={arrow} alt="scroll down" />
				</div>
			{/if}
		</div>
		<div class="video-frame">
			<img src={videoframe} alt="video frame" style="opacity:0" />
			<div class="video-container">
				<iframe
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					frameborder="0"
					height="480"
					src="https://www.youtube.com/embed/AwLO-pisoVA"
					title="YouTube video player"
					width="852"
				/>
			</div>
		</div>
	</div>
	<div class="separator">
		<div class="msg-banner-container">
			<div class="fanart-filter-area" on:click={filterFanarts} />
			<!--<h1>{$LL.THIRD.MESSAGES()}</h1>
			<div class='fanart-filter' >
				<label><input type='checkbox' bind:checked={hideMessages} /> {$LL.THIRD.FANART_ONLY()}</label>
			</div>-->
		</div>
		<img src={separator} alt="separator" />
		{#if $media.small}
			<img src={messagebannermobile} alt="messages banner" class:filtered={hideMessages} />
		{:else}
			<img src={messagebanner} alt="messages banner" class:filtered={hideMessages} />
		{/if}
	</div>

	<!--	<div class='content-bg'>-->
	<div class="content">
		<!--		<h3>{$LL.THIRD.CONGRATS()}</h3>-->

		<div class="messages-container">
			{#each texts as { name, url, message, src }, i}
				{#if (hideMessages && src !== undefined) || !hideMessages}
					<Saos
						once={true}
						bottom={160}
						animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
					>
						<div class="message-box">
							{#if src === undefined}
								{#if (i + 1) % 2 === 0}
									<CongratsMessageBox {name} {message} yellow={true} />
								{:else}
									<CongratsMessageBox {name} {message} yellow={false} />
								{/if}
							{:else if (i + 1) % 2 === 0}
								<CongratsMessageBox {name} {message} {src} {url} yellow={true} />
							{:else}
								<CongratsMessageBox {name} {message} {src} {url} yellow={false} />
							{/if}
						</div>
					</Saos>
				{/if}
			{/each}
		</div>
		<!--{#if showBackToTop}-->

		<!--{/if}-->
	</div>
	<!--	</div>-->
	<!--	<div class='back-to-top-btn'>
		<a
			transition:fly={{ y: 200, duration: 2000 }}
			href={'#'}
			class='back-to-top-btn'
			on:click={(y = 0)}>Back to top</a
		>
	</div>-->
	{#if showBackToTop}
		<a class="back-to-top-btn" href={'#'} on:click={backToTop}>{$LL.THIRD.BACK_TO_TOP()}</a>
	{/if}

	<div class="music-btn">
		<AudioPlayer />
	</div>
	<div class="bottomseparator">
		<img src={bottomseparator} alt="bottomseparator" />
	</div>
	<ThirdAnniversaryCredits />
</main>

<style lang="scss">
	main {
		background: url(/static/assets/images/bgseamless.webp) no-repeat center center fixed;
		background-size: cover;
		width: 100vw;
		flex-wrap: wrap;
		justify-content: space-around;
		justify-items: center;
		display: flex;
		overflow: hidden;
	}

	.top * {
		box-sizing: border-box;
	}

	.top {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: flex-start;
		padding-top: 10vh;
		background: #373c62 url(/static/assets/images/top_bg.webp) no-repeat;
		background-size: 100%;
		width: 100vw;
		height: 100vh;

		padding: 3em;
	}

	.separator {
		position: relative;
		bottom: 0;
		//width: 100%;
		margin-top: -1em;

		img {
			object-fit: cover;
			width: 100%;
		}

		img:last-child {
			//object-fit: scale-down;

			margin-top: -2em;
			//box-shadow: 5px 5px 5px rgb(0 0 0 / 0.4);
		}
	}

	.logo-container-static {
		text-align: center;
		flex: 1 1 40%;

		img {
			width: 80%;
		}
	}

	h3 {
		text-align: center;
	}

	.back-btn {
		font-size: 3em;
		color: black;
		position: absolute;
		left: 3vw;
		top: 3vh;
	}

	/*  .language-select {
			color: black;
			position: absolute;
			right: 3vw;
			top: 3vh;
			border: black solid;
			border-width: 2px 2px 2px 2px;
		}*/

	.arrow {
		//position: relative;

		//text-align: center;
		//flex: 1 1 100%;
		//flex: 1 1 20%;
		animation: bounce 2s infinite;
		margin-top: 10vh;

		img {
			width: 100%;
		}
	}

	.video-frame {
		background: url(/static/assets/images/videoframe.webp) no-repeat;
		background-size: auto 95%;
		flex: 1 1 60%;
		position: relative;
		background-position: center;

		img {
			width: 100%;
		}
	}

	.video-container {
		position: absolute;
		bottom: 12%;
		left: 12%;
		width: 40vw;
		height: 24vw;

		iframe {
			width: 100%;
			height: 100%;
		}
	}

	.msg-banner-container {
		width: 100%;
		height: 20vh;
		position: absolute;
		bottom: 2em;

		h1 {
			padding-top: 2em;
			margin-bottom: -0.5em;
			color: white;
		}
	}

	.msg-banner {
		position: relative;
		top: 0;
		width: 100%;

		img {
			object-fit: contain;
		}
	}

	.fanart-filter-area {
		position: absolute;
		right: 5%;
		bottom: 5%;
		width: 10vw;
		height: 7vh;
		cursor: pointer;
		z-index: 9999;
	}

	.fanart-filter {
		align-self: end;
		text-align: end;

		padding: 0 8ch 0 0;

		label {
			color: white;
		}
	}

	.filtered {
		filter: invert(10%);
	}

	.content-bg {
		background: url(/static/assets/images/bgseamless.webp) no-repeat center center fixed;
		background-size: cover;
		width: 100%;
	}

	.content {
		min-width: 90vw;
		max-width: 90%;
		padding-top: 5em;
	}

	.message-box {
		width: 100%;
		display: inline-block;
		padding: 1em 0 1em 0;
	}

	.messages-container {
		display: block;
		column-count: 3;
		padding: 1em 0 1em 0;
		//min-width: 480px;
		width: 100%;
		overflow: visible;
		box-sizing: border-box;

		.message-box {
			padding-top: 2em;
			padding-bottom: 0.8em;
		}
	}

	.bottomseparator {
		//position: relative;
		//width:100%;

		img {
			//object-fit: contain;
			width: 100%;
			height: 100%;
		}
	}

	.back-to-top-btn {
		text-align: center;
		bottom: 50%;
		position: fixed;
		bottom: 4em;
		right: 1em;
		background: white;
		padding: 1em;
		border-radius: 1em;
	}

	.music-btn {
		text-align: center;
		bottom: 50%;
		position: fixed;
		bottom: 4em;
		left: 1em;
	}

	@keyframes -global-fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-30px);
		}
		60% {
			transform: translateY(-15px);
		}
	}

	@media screen and (max-width: 849px) {
		.fanart-filter-area {
			position: absolute;
			right: 5%;
			bottom: -10%;
			width: 15vw;
			height: 5vh;
			cursor: pointer;
			z-index: 9999;
		}

		.top {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			align-items: flex-start;
			background: #373c62 url(/static/assets/images/top_bg.webp) no-repeat;
			background-size: cover;
			width: 100vw;
			height: auto;
			//height: 80vh;
			padding: 1em;
			align-content: flex-start;
			padding-top: 6vh;
		}

		.logo-container-static {
			text-align: center;
			flex: 1 1 100%;
		}

		.video-frame {
			flex: 1 1 100%;
			margin-top: -10vh;
		}

		.video-container {
			position: absolute;
			bottom: 12%;
			left: 12%;
			width: 65vw;
			height: 40vw;
		}
		.messages-container {
			column-count: 1;
		}

		.content {
			padding-top: 0;
		}
		.music-btn {
			text-align: center;
			bottom: 50%;
			position: fixed;
			top: 1em;
			right: 1em !important;
			zoom: 0.5;
			height: 10vh;
			right: initial;
			text-align: right;
		}
	}

	@media screen and (min-width: 850px) and (max-width: 1024px) {
		.messages-container {
			column-count: 2;
		}
	}
</style>
