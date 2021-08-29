<script context="module" lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { initI18n } from '$lib/../i18n/i18n-svelte';

	export async function load({ page, fetch, session, context }) {
		// detect locale of user (see https://github.com/ivanhofer/typesafe-i18n#locale-detection)

		await initI18n('en');

		return {};
	}
</script>

<main>
	<!--	<div class='content'>-->
	<slot />
	<!--	</div>-->
</main>
<Footer />

<style lang="scss">
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		justify-items: center;
		min-height: 100vh;
		margin: 0;

		overflow: hidden;
		align-content: center;
		align-items: center;
		width: 100%;
		padding-top: 0;
		padding-bottom: 1rem;
	}

	//.content {
	//	min-width: max(90vw, 500px);
	//	max-width: 90%;
	//}
</style>
