<script context='module' lang='ts'>
	import LL from '$lib/../i18n/i18n-svelte';
	import { crossfade } from 'svelte/transition';
	import CongratsMessageBox from '$lib/components/CongratsMessageBox.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import { quintOut } from 'svelte/easing';
	import Saos from 'saos';

	export async function load({ fetch })
	{
		const res = await fetch('/congrats-messages');
		const texts = await res.json();
		if (res.ok) return { props: { texts: texts } };
		return {
			status: res.status,
			error: new Error()
		};
	}

	// let innerHeight;
	// let y;
	// let showBackToTop = false;
	// $: showBackToTop = y > innerHeight + 60;
	const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params)
		{
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

</script>

<script>
	import LanguageSelect from '$lib/components/LanguageSelect.svelte';
	import ThirdAnniversaryCredits from '$lib/components/ThirdAnniversaryCredits.svelte';

	export let texts;

	let hideMessages = false;

	function filterFanarts() {
		hideMessages = !hideMessages;
	}
</script>

<!--<svelte:window bind:innerHeight bind:scrollY={y} />-->
<!--{@debug innerHeight}-->
<!--{@debug y}-->
<svelte:head>
	<title>{$LL.THIRD.TITLE()}</title>
</svelte:head>
<div class='back-btn'>
	<a sveltekit:prefetch href='/'>
		<Fa icon={faArrowLeft} />
	</a>
</div>
<div class='language-select'>
	<LanguageSelect />
</div>
<main>
	<div class='content'>
		<h3>{$LL.THIRD.CONGRATS()}</h3>
			<div class='video-container'>
				<iframe
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
					frameborder='0'
					height='720'
					src='https://www.youtube.com/embed/pyH6z4zxWa8'
					title='YouTube video player'
					width='1280'
				/>
		</div>
		<div class='msg-banner'>
			<h1>{$LL.THIRD.MESSAGES()}</h1>
			<div class='fanart-filter'>
				<input type='checkbox' bind:checked={hideMessages}>
				Show/hide non-fanart
			</div>
		</div>
		<div class='messages-container'>
			{#each texts as { avatar, lastName, lorem, art, url }}
				{#if (hideMessages && art != undefined) || !hideMessages}
					<Saos animation={"fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}>


						<div class='message-box'>
							<!--				<div transition:fade={{duration:1000}} class='message-box'>-->
							{#if art != undefined}
								<CongratsMessageBox name={lastName} message={lorem} art={art} url={url} />

							{:else}
								<CongratsMessageBox name={lastName} message={lorem} art={art} url={url} />

							{/if}
						</div>
					</Saos>
				{/if}
			{/each}

		</div>
		<!--{#if showBackToTop}-->
		<!--	<a-->
		<!--		transition:fly={{ y: 200, duration: 2000 }}-->
		<!--		href={'#'}-->
		<!--		class="back-to-top-btn"-->
		<!--		on:click={(y = 0)}>Back to top</a-->
		<!--	>-->
		<!--{/if}-->
	</div>
</main>
<ThirdAnniversaryCredits />

<style lang='scss'>


  main {

    background: url(/static/assets/images/Sky.png) no-repeat center center fixed;
    background-size: cover;
    width: 100vw;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-items: center;
    display: flex;
  }

  .content {
    min-width: max(90vw, 500px);
    max-width: 90%;
		padding-top: 5em;
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

  .language-select {
    color: black;
    position: absolute;
    right: 3vw;
    top: 3vh;
    border: black solid;
    border-width: 2px 2px 2px 2px;
  }

  .video-container {
    width: auto;
    max-width: 100%;
    margin: auto;
    text-align: center;
		padding-bottom: 5em;

    iframe {
      width: 100%;
      max-width: 100%;
      margin: auto;
    }
  }

  .fanart-filter {
    align-self: end;
    text-align: end;
  }

  .msg-banner {
    padding-top: 2em;
    background-color: $lace;
  }

  .message-box {
    width: 100%;
    display: inline-block;
  }

  .messages-container {
    display: block;
    column-count: 3;
    padding: 1em 0 1em 0;
    min-width: 480px;
    width: 100%;
    overflow: visible;
    box-sizing: border-box;

  }

  .back-to-top-btn {
    position: sticky;
    bottom: 1vh;
    left: 1vw;
  }

  @keyframes -global-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>
