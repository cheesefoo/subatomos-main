<script context='module' lang='ts'>
	import LL from '/src/i18n/i18n-svelte';
	import CongratsMessageBox from '$lib/components/CongratsMessageBox.svelte';
	import Fa from 'svelte-fa';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import Saos from 'saos';
	import { fly } from 'svelte/transition';

	import logoStatic from '/static/assets/images/logo.webp';
	import separator from '/static/assets/images/separator.webp';
	import bottomseparator from '/static/assets/images/bottom_credits.webp';

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
</script>

<script>
	import LanguageSelect from '$lib/components/LanguageSelect3rdAnniversary.svelte';
	import ThirdAnniversaryCredits from '$lib/components/ThirdAnniversaryCredits.svelte';
	import Logo from '$lib/components/Logo.svelte';

	export let texts;

	let hideMessages = false;

	function filterFanarts() {
		hideMessages = !hideMessages;
	}

	let innerHeight;
	let y;
	let showBackToTop = false;
	$: showBackToTop = y > innerHeight + 60;
</script>

<svelte:head>
	<title>{$LL.THIRD.TITLE()}</title>
	<meta name='description' content={$LL.THIRD.META_DESC()} />
</svelte:head>

<svelte:window bind:innerHeight bind:scrollY={y} />

<Logo />
<div class='back-btn'>
	<a sveltekit:prefetch href='/'>
		<Fa icon={faArrowLeft} />
	</a>
</div>
<div class='language-select'>
	<LanguageSelect />
</div>


<main>
	<div class='top'>
		<div class='logo-container-static'>
			<img src={logoStatic} alt='Subatomos 3rd Anniversary Project'>
		</div>
		<div class='video-container'>
			<iframe
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
				frameborder='0'
				height='480'
				src='https://www.youtube.com/embed/pyH6z4zxWa8'
				title='YouTube video player'
				width='852'
			/>
		</div>

	</div>
	<div class='separator'>
		<img src={separator} alt='separator'>
	</div>
	<div class='msg-banner'>
		<h1>{$LL.THIRD.MESSAGES()}</h1>
		<div class='fanart-filter'>
			<label
			><input type='checkbox' bind:checked={hideMessages} /> {$LL.THIRD.FANART_ONLY()}</label
			>
		</div>
	</div>
	<div class='content'>
		<!--		<h3>{$LL.THIRD.CONGRATS()}</h3>-->


		<div class='messages-container'>
			{#each texts as { name, url, message, src }, i}
				{#if (hideMessages && src !== undefined) || !hideMessages}
					<Saos
						once={true}
						bottom={160}
						animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
					>
						<div class='message-box'>
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
<!--	<div class='back-to-top-btn'>
	<a
		transition:fly={{ y: 200, duration: 2000 }}
		href={'#'}
		class='back-to-top-btn'
		on:click={(y = 0)}>Back to top</a
	>
</div>-->
	<a class='back-to-top-btn'
		 href={'#'}
		 on:click={(y = 0)}>Back to top</a
	>
	<div class='bottomseparator'>
		<img src={bottomseparator} alt='bottomseparator'>
	</div>
	<ThirdAnniversaryCredits />
</main>

<style lang='scss'>
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

  .top {
    display: block;

    background: #373c62 url(/static/assets/images/top_bg.webp) no-repeat;
    background-size: 100%;
    width: 100vw;
    height: 100vh;


  }

  .separator {
    position: relative;
    bottom: 0;
    width: 100%;

    img {
      object-fit: cover;
    }
  }

  .logo-container-static {
    position: absolute;
    left: 1%;
    top: 10%;

    img {
      width: 70%
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

  .language-select {
    color: black;
    position: absolute;
    right: 3vw;
    top: 3vh;
    border: black solid;
    border-width: 2px 2px 2px 2px;
  }

  .video-container {
    position: absolute;
    border: solid white 4px;
    right: 5%;
    top: 25%;
    //position: relative;
    //padding-bottom: 56.25%;
    //padding-top: 30px;
    //height: 0;
    //overflow: hidden;
    //
    //iframe,
    //object,
    //embed {
    //  position: absolute;
    //  top: 0;
    //  left: 0;
    //  width: 100%;
    //  height: 100%;
    //}
  }


  .msg-banner {
    background: #373c62 url(/static/assets/images/border_messages.webp) no-repeat;
    background-size: cover;
    width: 100vw;
    height: 20vh;

    h1 {
      padding-top: 1em;
      margin-bottom: 0;
      color: white;

    }
  }

  .fanart-filter {
    align-self: end;
    text-align: end;

    padding: 0 10ch 10ch 0;

    label {
      color: white;
    }
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
    //position: sticky;
    //bottom: 1%;
    //left: 1%;
    text-align: center;
    position: relative;
		bottom:50%;
  }

  @keyframes -global-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 849px) {
    .messages-container {
      column-count: 1;
    }

    .video-container {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .msg-banner {
      margin-top: 20%;
    }
  }

  @media screen and (min-width: 850px) and (max-width: 1024px) {
    .messages-container {
      column-count: 2;
    }
  }
</style>
