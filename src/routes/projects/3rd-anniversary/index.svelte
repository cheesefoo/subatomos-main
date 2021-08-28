<script context='module' lang='ts'>
	import LL from '$lib/../i18n/i18n-svelte';
	import { crossfade, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Lazy from 'svelte-lazy';
	import Credit from '$lib/components/Credit.svelte';
	import CongratsMessageBox from '$lib/components/CongratsMessageBox.svelte';
	import credits from './_credits';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import { quintOut } from 'svelte/easing';

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

	export let creditsList = credits;

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

	export let texts;

	let fanartOnly = false;

	function filterFanarts() {
		fanartOnly = !fanartOnly;
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
<LanguageSelect/></div>
<main>
	<div>
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
	</div>
	<div class='msg-banner'>
		<h1>{$LL.THIRD.MESSAGES()}</h1>
		<div class='fanart-filter'>
			<input type='checkbox' bind:checked={fanartOnly}>
			Show/hide non-fanart
		</div>
	</div>
	<div class='messages-container'>
		{#each texts as { avatar, lastName, lorem, art, url }}
			{#if (fanartOnly && art != undefined) || !fanartOnly}
				<div transition:fade={{duration:1000}} class='message-box'>
					{#if art != undefined}
					<Lazy height={'80%'} fadeOption={{ delay: 200, duration: 1000 }}>
						<CongratsMessageBox name={lastName} message={lorem} art={art} url={url} />
					</Lazy>
					{:else}
						<Lazy height={'20vh'} fadeOption={{ delay: 200, duration: 1000 }}>
							<CongratsMessageBox name={lastName} message={lorem} art={art} url={url} />
						</Lazy>
			{/if}
				</div>
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
</main>
<div class='credits'>
	<h3>{$LL.THIRD.CREDITS()}</h3>
	<div class='credits-grid'>
		<div class='credits-section'>
			<h4>{$LL.THIRD.ANIMATION()}</h4>
			<Credit desc={$LL.THIRD.A.ONE()} {...creditsList.eleos} />
			<Credit desc={$LL.THIRD.A.TWO()} {...creditsList.ani} />
			<Credit desc={$LL.THIRD.A.THREE()} {...creditsList.ray} />
			<Credit desc={$LL.THIRD.A.FOUR()} {...creditsList.cryo} />
			<Credit desc={$LL.THIRD.A.FIVE()} {...creditsList.alled} />
			<Credit desc={$LL.THIRD.A.SIX()} {...creditsList.simon} />
		</div>
		<div>
			<h4>Music</h4>
			<Credit desc={$LL.THIRD.M.DD()} {...creditsList.wei} />
			<Credit
				desc='{$LL.THIRD.M.NA()}, {$LL.THIRD.M.KENSETSU()}, {$LL.THIRD.M.TS()}'
				{...creditsList.jeremy}
			/>
			<Credit desc={$LL.THIRD.M.TS()} {...creditsList.vintage} />
			<Credit
				desc='{$LL.THIRD.M.DrD()}, {$LL.THIRD.M.KNM()}, {$LL.THIRD.M.KR()}'
				{...creditsList.hko}
			/>
			<Credit desc={$LL.THIRD.M.DMB()} {...creditsList.light} />
		</div>
		<div>
			<h4>{$LL.THIRD.EDITING()}</h4>
			<Credit {...creditsList.cynic} />
			<Credit {...creditsList.furo} />
			<h4>{$LL.THIRD.TRANSLATION()}</h4>
			<Credit {...creditsList.neil} />
			<Credit {...creditsList.gundam} />
			<Credit {...creditsList.vee} />
		</div>
	</div>
</div>

<style lang='scss'>
  main {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
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
	.language-select{
		color:black;
		position:absolute;
		right:3vw;
		top:3vh;
		border: black solid;
		border-width: 2px 2px 2px 2px;
	}

  .video-container {
    width: auto;
    max-width: 100%;
    margin: auto;
    text-align: center;

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

  .credits {
    background-color: $ivory;
    width: 100%;
  }

  .credits-grid {
    display: grid;
    grid-template-columns: 25% 25% 25%;
    column-gap: 1em;
    row-gap: 1em;
  }

  .msg-banner {
    background-color: $lace;
  }

  //.credits-section{
  //	display:grid;
  //  row-gap: 1em;
  //
  //}

  //.messages-container {
  //  display: flex;
  //  flex-wrap: wrap;
  //  overflow: hidden;
  //  max-width: 100%;
  //  height: auto;
  //}
  .messages-container {
    display: grid;
    padding-top: 5vh;
    min-width: 480px;
    width: 100%;
    overflow: visible;

    //justify-content: center;
    grid-template-columns: repeat(3, 1fr);

    column-gap: 1em;
    row-gap: 1em;
  }

  .back-to-top-btn {
    position: sticky;
    bottom: 1vh;
    left: 1vw;
  }
</style>
