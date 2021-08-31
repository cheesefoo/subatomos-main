<script>
	import LL from '$lib/../i18n/i18n-svelte';
	import Credit from '$lib/components/Credit.svelte';
	import credits from './_credits';

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
		<div>
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
		<div>
			<h4>{$LL.THIRD.EDITING()}</h4>
			<Credit {...creditsList.cynic} />
			<Credit {...creditsList.furo} />
			<h4>{$LL.THIRD.TRANSLATION()}</h4>
			<Credit {...creditsList.neil} />
			<Credit {...creditsList.gundam} />
			<Credit {...creditsList.vee} />
		</div>
		<div>
			<h4>{$LL.THIRD.DIRECTION()}</h4>
			<Credit desc={$LL.THIRD.STORYBOARD()} {...creditsList.rinne} />
			<Credit {...creditsList.venn} />
			<Credit {...creditsList.fran} />
			<Credit {...creditsList.udarash} />
		</div>
		<div>
			<h4>{$LL.THIRD.THANKS()}</h4>
			<Credit {...creditsList.ato} />
			<Credit desc={$LL.THIRD.LOGO_SUBA()} {...creditsList.ano} />
			<Credit desc={$LL.THIRD.LOGO_PROJ()} {...creditsList.ebi} />
		</div>
	</div>
</div>

<style lang="scss">
	h3,
	h4 {
		text-align: center;
	}
	.credits {
		background-color: $ivory;
		width: 100%;
	}

	.credits-grid {
		display: grid;
		padding: 0 5% 0 5%;
		grid-template-columns: 20% 20% 20% 20% 20%;
		column-gap: 1em;
		row-gap: 1em;
	}
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		.credits-grid {
			padding: 0;
			grid-template-columns: 50% 50%;
			column-gap: 1.15em;
		}
	}
</style>
