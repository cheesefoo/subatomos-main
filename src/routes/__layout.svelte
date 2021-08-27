<script context="module" lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Panel from '$lib/components/Panel.svelte';
	import '../app.scss';
	import { initI18n } from '$lib/../i18n/i18n-svelte';

	export async function load({ page, fetch, session, context }) {
		// detect locale of user (see https://github.com/ivanhofer/typesafe-i18n#locale-detection)

		// const detectedLocale = detectLocale('en', ['en', 'ja'], navigatorDetector);
		await initI18n('en');

		return {};
	}

	// onMount(async () => {
	// 	const detectedLocale = detectLocale('en', ['en', 'ja'], localStorageDetector);
	// 	await initI18n(detectedLocale);
	// 	// localeToSelect = $locale
	// });
</script>

<main>
	<Header />
	<Panel>
		<slot />
	</Panel>
	<Footer />
</main>

<style lang="scss">
	main {
		min-height: 100vh;
		margin: 0;
		background: url(/static/assets/images/Sky.png) no-repeat center center fixed;
		background-size: cover;
	}
</style>
