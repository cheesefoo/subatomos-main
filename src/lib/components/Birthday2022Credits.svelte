<script>
	import LL from '/src/i18n/i18n-svelte';
	import Credit from '$lib/components/Credit.svelte';
	import credits from './_credits_bday22';
	import { media } from '$lib/stores/stores';
	import Footer from '$lib/components/Footer.svelte';

	export let creditsList = credits;
</script>

<div class="credits">
	<h3>{$LL.BDAY22.CREDITS()}</h3>
	<div class="credits-grid">
		<div class="credits-section">
			<h4>{$LL.BDAY22.PERFORMERS()}</h4>
		</div>
		
		<div class="credits-section">
			<h4>{$LL.BDAY22.EDITING()}</h4>
			<Credit {...creditsList.gundam} />
			<h4>{$LL.BDAY22.TRANSLATION()}</h4>
			<Credit {...creditsList.gundam} />
		</div>
		<div class="credits-section">
			<h4>{$LL.BDAY22.DIRECTION()}</h4>

			<Credit desc={$LL.BDAY22.WEBSITE()} {...creditsList.venn} />
			<Credit {...creditsList.udarash} />
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

<style lang="scss">
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

	.credits {
		background-color: #f1bd65;
		width: 100%;
	}

	.credits-grid {
		display: grid;
		padding: 0 5% 0 5%;
		grid-template-columns: repeat(5, 1fr);
		column-gap: 1em;
		row-gap: 1em;
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
