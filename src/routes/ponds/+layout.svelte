<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Panel from '$lib/components/Panel.svelte';
	import '/src/app.scss';
	import { initI18n, locale, setLocale } from '/src/i18n/i18n-svelte';
	import type { Locales } from '$i18n/i18n-types';

	import { browser } from '$app/environment';
	import { detectLocale, localStorageDetector } from 'typesafe-i18n/detectors';
	import { onMount } from 'svelte';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
/*	export async function load({ fetch, context }) {
		// detect locale of user (see https://github.com/ivanhofer/typesafe-i18n#locale-detection)
		let locale: Locales = 'en';
		if (browser) {
			setLocale(detectLocale('en', ['en', 'ja'], localStorageDetector));
			console.log('browser');
		}
		await initI18n(locale);

		return {};
	}*/

	onMount(async () => {
		const detectedLocale = detectLocale('en', ['en', 'ja'], localStorageDetector);
		await initI18n(detectedLocale);
		setLocale($locale);
	});
	if (browser) {
		$: $locale && localStorage.setItem('lang', $locale);
	}
</script>

<main>
	<Header lang={true} />
	<Panel>
		<slot />
	</Panel>
	<Footer />
</main>

<style lang="scss">
	main {
		min-height: 100vh;
		margin: 0;
		overflow: hidden;

		background: url(/assets/images/sky.webp) no-repeat center center fixed;
		background-size: cover;
	}
</style>
