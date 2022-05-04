<script lang='ts'>
	import Slider from './Slider.svelte';
	import sounds from './_sounds';
	import categories from './_categories';
	import SoundButton from './SoundButton.svelte';

	import Lazy from 'svelte-lazy';
	import LL from '/src/i18n/i18n-svelte';
	import SNSLink from '$lib/components/SNSLink.svelte';
	import { baseURL } from '$lib/variables.ts';
	import metatwi from '/static/assets/images/soundboardthumb.jpg';
	import LanguageSelect from '$lib/components/LanguageSelect.svelte';

	let duration;
	let muted = false;
	let currentTime = 0;
	let paused = true;
	let volume = 0.5;

	export let soundList = sounds;
	export let categoryList = categories;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Oozora Subaru Soundboard - 大空スバル サウンドボード</title>
	<meta
		name='title'
		content='Oozora Subaru Soundboard -
	大空スバル ボタン'
	/>
	<meta
		name='description'
		content='duck noises on demand
	アヒルの鳴き声オンデマンド'
	/>

	<!-- Open Graph / Facebook -->
	<meta property='og:type' content='website' />
	<meta property='og:url' content='https://subatomos.com/soundboard/' />
	<meta
		property='og:title'
		content='Oozora Subaru Soundboard -
	大空スバル ボタン'
	/>
	<meta
		property='og:description'
		content='duck noises on demand
	アヒルの鳴き声オンデマンド'
	/>
	<meta property='og:image' content={metatwi} />

	<!-- Twitter -->
	<meta property='twitter:card' content='summary_large_image' />
	<meta property='twitter:url' content='https://subatomos.com/soundboard/' />
	<meta
		property='twitter:title'
		content='Oozora Subaru Soundboard -
	大空スバル ボタン'
	/>
	<meta
		property='twitter:description'
		content='duck noises on demand
	アヒルの鳴き声オンデマンド'
	/>
	<meta property='twitter:image' content={`${baseURL}${metatwi}`} />
</svelte:head>


<div class='soundboard-container'>
	<div>
	<h4>
		{$LL.SOUNDBOARD.SUGGEST()}
		<SNSLink icon='github' url='https://github.com/cheesefoo/subatomos-main' />
		<SNSLink icon='discord' url='https://discord.gg/subatomos' />
		<SNSLink icon='twitter' url='https://twitter.com/subatomos' />
	</h4>

	</div>
	{#each categoryList as category}
		<h3 style='text-transform: capitalize'>{category}</h3>
		<div class='soundboard'>
			{#each soundList as sound}
				{#if sound.category == category}
					<Lazy height={46}>
						<div class='sound-button'>
							<SoundButton {...sound} />
						</div>
					</Lazy>
				{/if}
			{/each}
		</div>
	{/each}
	<h3>Uncategorized</h3>
	<div class='soundboard'>
		{#each soundList as sound}
			{#if sound.category == undefined}
				<Lazy height={46}>
					<div class='sound-button'>
						<SoundButton {...sound} />
					</div>
				</Lazy>
			{/if}
		{/each}
	</div>
</div>
<div class='volume'>
	<Slider
		max={1}
		min={0}
		step={0.01}
		current={volume}
		on:change={(e) => (volume = e.detail.value)}
	/>
</div>

<style lang='scss'>
  .soundboard {
    display: grid;
    min-width: 480px;
    width: 100%;
    overflow: visible;

    //justify-content: center;
    grid-template-columns: repeat(3, 1fr);

    column-gap: 1em;
    row-gap: 1em;
  }

  .volume {
    position: absolute;
    right: 0;
  }

  @media screen and (max-width: 849px) {
    .soundboard {
      min-width: 100%;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1em;
    }
  }
</style>
