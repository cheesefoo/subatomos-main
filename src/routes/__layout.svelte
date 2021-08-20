<script context="module" lang="ts">
	import { initI18n, locale, setLocale } from '$lib/i18n/i18n-svelte';
	import { detectLocale, localStorageDetector } from 'typesafe-i18n/detectors';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Panel from '$lib/components/Panel.svelte';
	import '../app.scss';
	import type { Locales } from '$lib/i18n/i18n-types';
	import { onMount } from 'svelte';

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
