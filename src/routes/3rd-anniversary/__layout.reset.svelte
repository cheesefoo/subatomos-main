<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { initI18n, locale, setLocale } from '/src/i18n/i18n-svelte';
	import { onMount } from 'svelte';

	import { detectLocale, localStorageDetector, navigatorDetector } from 'typesafe-i18n/detectors';

	onMount(async () => {
		console.log($locale);
		if ($locale === undefined || $locale === '') {
			setLocale(detectLocale('en', ['en', 'ja'], localStorageDetector));
			await initI18n($locale);
			console.log($locale);
		}
		// localeToSelect = $locale
	});

	// export async function load({ page, fetch, session, context }) {
	// 	// detect locale of user (see https://github.com/ivanhofer/typesafe-i18n#locale-detection)
	//
	// 		await initI18n('en');
	//
	// 	return {};
	// }
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
