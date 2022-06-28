<script>
	import LL from '/src/i18n/i18n-svelte';
	import Credit from '$lib/components/Credit.svelte';
	import credits from './_credits_bday22';

	export let creditsList = credits;
	let descSameLine = true;
</script>

<div class='credits'>
	<h3>{$LL.BDAY22.CREDITS()}</h3>
	<div class='credits-grid'>
		<div class='credits-section'>
			<h4>{$LL.BDAY22.PERFORMERS()}</h4>
			<div class='performers'>
				<span>Historian<small>Accordion</small></span>
				<Credit {...creditsList.kfc} {descSameLine}><small>Euphonium</small></Credit>
				<Credit {...creditsList.trauco} {descSameLine}><small>Cello</small></Credit>
				<span>PL1337<small>Horn</small></span>
				<br />
				<span>三山#5426<small>Flute</small></span>
				<br />
				<span>AnotherJay#9961<small>Flute</small></span>
				<br />
				<span>皐月イヴ#6508<small>Trumpet</small></span>
				<Credit {...creditsList.jahn} {descSameLine}><small>Guitar</small></Credit>
				<span>smoile<small>Guitar</small></span>
				<Credit {...creditsList.spekular} {descSameLine}><small>Guitar</small></Credit>
				<span>Tiggy<small>Guitar</small></span>

				<Credit {...creditsList.ragin} {descSameLine}><small>Piano</small></Credit>
				<span>BigThiccVic<small>Piano</small></span>
				<Credit {...creditsList.light} {descSameLine}><small>Piano</small></Credit>
				<Credit {...creditsList.pong} {descSameLine}><small>Piano</small></Credit>
				<span>shrimp<small>Clarinet, Bass Clarinet, & Tenor Saxophone</small></span>
				<br />
				<span>Axyz<small>Alto Saxophone</small></span>
				<br />
				<span>BrianD<small>Alto Saxophone</small></span>
				<br />
				<span>tacoastline<small>Alto & Soprano Saxophone</small></span>
				<br />
				<span>✰caac✰#4606<small>Alto, Tenor & Baritone Saxophone</small></span>

				<Credit {...creditsList.logus} {descSameLine}><small>Violin</small></Credit>
				<span>ひゃーひゃーいわんわ<small>Western Percussion</small></span>
				<Credit {...creditsList.ukyo} {descSameLine}><small>Drums</small></Credit>

			</div>
		</div>

		<div class='credits-section'>
			<h4>{$LL.BDAY22.COMPOSITION()}</h4>
			<div class='composition'>
				<Credit desc={$LL.BDAY22.MEDLEY()} {...creditsList.jeremy} />
				<br />
				<Credit desc={$LL.BDAY22.SCORE()} {...creditsList.spaghetti } />
				<br />

				<Credit desc={$LL.BDAY22.SCORE()} name='✰caac✰#4606' />
				<Credit desc={$LL.BDAY22.SCORE()} name='shrimp' />
				<br />

				<Credit desc={$LL.BDAY22.MIXING()} {...creditsList.hiki } />
				<br />

				<Credit desc='Guitar Tabs' {...creditsList.jahn}></Credit>
			</div>

		</div>
		<div class='credits-section'>

						<h4>etc.</h4>

			<Credit desc='Direction & Website' {descSameLine} {...creditsList.venn} />
			<Credit desc='Video Editing' {descSameLine} {...creditsList.gundam} />
			<Credit desc='Translation' {descSameLine} {...creditsList.udarash} />
			<Credit desc='Website Design' {descSameLine} name="ぴんころ#0031" />
			<Credit desc='Art - Video, Website, & SNS' {descSameLine} {...creditsList.hakimen} />


		</div>
		<!--		{#if $media.mobile || $media.tablet}
					<div class="credits-section">
						<h4>{$LL.BDAY22.THANKS()}</h4>
						<div class="thanks">
						</div>
					</div>
				{:else}
					<div class="credits-section">
						<h4>{$LL.BDAY22.THANKS()}</h4>
						<Credit {...creditsList.ato} />
						<Credit desc={$LL.BDAY22.LOGO_SUBA()} {...creditsList.ano} />
						<Credit desc={$LL.BDAY22.LOGO_PROJ()} {...creditsList.ebi} />
						<Credit {...creditsList.ryu} />
						<Credit {...creditsList.sakino} />
					</div>
				{/if}-->
	</div>
</div>

<style lang='scss'>
  @font-face {
    // This is parsed as a normal function call that takes a quoted string.
    src: url('/static/851Gkktt_005.woff2') format('woff2');
    font-family: '851Gkktt_005';
    font-weight: normal bold;
  }

  h3,
  h4 {
    font-family: '851Gkktt_005', sans-serif;
    text-align: center;
  }

  span {
    color: $chromeblue;

  }

  small {
    font-size: 0.7rem;
    color: grey;
  }

  small::before {
    content: "...";
    color: grey;
    font-size: 0.9rem;

  }

  .credits {
    background-color: #f1bd65;
    width: 100%;
  }

  .credits-grid {
    display: grid;
    padding: 0 5% 0 5%;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1em;
    row-gap: 1em;
  }

  .performers, .composition {
    column-count: 2;
  }

  @media screen and (max-width: 849px) {
    .credits-grid {
      padding: 0 0 0 5%;
      grid-template-columns: 1fr 1fr;
      column-gap: 1em;
    }

    .thanks {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 850px) and (max-width: 1024px) {
    h3,
    h4 {
      font-size: 1.4em;
    }
    .credits-grid {
      display: grid;
      padding: 0 5% 0 5%;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1em;
      row-gap: 1em;
    }

    .thanks {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

</style>
