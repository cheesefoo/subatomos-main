<script context='module' lang='ts'>
	import LL from '$lib/../i18n/i18n-svelte';

	import Lazy from 'svelte-lazy';
	import Credit from '$lib/components/Credit.svelte';
	import CongratsMessageBox from '$lib/components/CongratsMessageBox.svelte';
	import credits from './_credits';

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
</script>

<script>
	export let texts;
</script>

<!--<svelte:window bind:innerHeight bind:scrollY={y} />-->
<!--{@debug innerHeight}-->
<!--{@debug y}-->
<svelte:head>
	<title>{$LL.THIRD.TITLE()}</title>
</svelte:head>

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
				<Credit desc="{$LL.THIRD.M.NA()}, {$LL.THIRD.M.KENSETSU()}, {$LL.THIRD.M.TS()}" {...creditsList.jeremy} />
				<Credit desc={$LL.THIRD.M.TS()} {...creditsList.vintage} />
				<Credit desc="{$LL.THIRD.M.DrD()}, {$LL.THIRD.M.KNM()}, {$LL.THIRD.M.KR()}" {...creditsList.hko} />
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
	<div class='messages-container'>
		{#each texts as { avatar, lastName, lorem }}
			<div class='message-box'>
				<Lazy height={'20vh'}>
					<CongratsMessageBox name={lastName} message={lorem} />
				</Lazy>
			</div>
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

  .credits {
    background-color: $ivory;
  }

  .credits-grid {
    display: grid;
    grid-template-columns: 25% 25% 25%;
    column-gap: 1em;
    row-gap: 1em;
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
