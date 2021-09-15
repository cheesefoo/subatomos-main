<script>
	import LL from '/src/i18n/i18n-svelte';
	import Credit from '$lib/components/Credit.svelte';
	import credits from './_credits';
	import { media } from '$lib/stores/stores';
	import Footer from '$lib/components/Footer.svelte';

	export let creditsList = credits;
</script>

<div class="credits">
	<h3>{$LL.THIRD.CREDITS()}</h3>
	<div class="credits-grid">
		<div class="credits-section">
			<h4>{$LL.THIRD.ANIMATION()}</h4>
			<Credit desc={$LL.THIRD.A.ONE()} {...creditsList.eleos} />
			<Credit desc={$LL.THIRD.A.TWO()} {...creditsList.ani} />
			<Credit desc={$LL.THIRD.A.THREE()} {...creditsList.ray} />
			<Credit desc={$LL.THIRD.A.FOUR()} {...creditsList.cryo} />
			<Credit desc={$LL.THIRD.A.FIVE()} {...creditsList.alled} />
			<Credit desc={$LL.THIRD.A.SIX()} {...creditsList.simon} />
		</div>
		<div class="credits-section">
			<h4>Music</h4>
			<Credit desc={$LL.THIRD.M.DD()} {...creditsList.wei} />
			<Credit
				desc="{$LL.THIRD.M.NA()}, {$LL.THIRD.M.KENSETSU()}, {$LL.THIRD.M.TS()}"
				{...creditsList.jeremy}
			/>
			<Credit desc={$LL.THIRD.M.TS()} {...creditsList.vintage} />
			<Credit
				desc="{$LL.THIRD.M.DrD()}, {$LL.THIRD.M.KNM()}, {$LL.THIRD.M.KR()}"
				{...creditsList.hko}
			/>
			<Credit desc={$LL.THIRD.M.DMB()} {...creditsList.light} />
		</div>
		<div class="credits-section">
			<h4>{$LL.THIRD.EDITING()}</h4>
			<Credit {...creditsList.cynic} />
			<Credit {...creditsList.furo} />
			<h4>{$LL.THIRD.TRANSLATION()}</h4>
			<Credit {...creditsList.neil} />
			<Credit {...creditsList.gundam} />
			<Credit {...creditsList.vee} />
		</div>
		<div class="credits-section">
			<h4>{$LL.THIRD.DIRECTION()}</h4>
			<Credit desc={$LL.THIRD.STORYBOARD()} {...creditsList.rinne} />
			<Credit {...creditsList.venn} />
			<Credit {...creditsList.fran} />
			<Credit {...creditsList.udarash} />
		</div>
		{#if $media.mobile || $media.tablet}
			<div class="credits-section">
				<h4>{$LL.THIRD.THANKS()}</h4>
				<div class="thanks">
					<Credit {...creditsList.ato} />
					<Credit desc={$LL.THIRD.LOGO_SUBA()} {...creditsList.ano} />
					<Credit desc={$LL.THIRD.LOGO_PROJ()} {...creditsList.ebi} />
					<Credit {...creditsList.ryu} />
					<Credit {...creditsList.sakino} />
				</div>
			</div>
		{:else}
			<div class="credits-section">
				<h4>{$LL.THIRD.THANKS()}</h4>
				<Credit {...creditsList.ato} />
				<Credit desc={$LL.THIRD.LOGO_SUBA()} {...creditsList.ano} />
				<Credit desc={$LL.THIRD.LOGO_PROJ()} {...creditsList.ebi} />
				<Credit {...creditsList.ryu} />
				<Credit {...creditsList.sakino} />
			</div>
		{/if}
	</div>
	<Footer />
</div>

<style lang="scss">
	h3,
	h4 {
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
