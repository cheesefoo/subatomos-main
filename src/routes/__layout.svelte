<script context="module">
	import { initI18n } from '/src/i18n/i18n-svelte';
	import '/src/app.scss';
	import { detectLocale } from '/src/i18n/i18n-util';
	import { navigatorDetector } from 'typesafe-i18n/detectors';

	export async function load() {
		// detect locale of user (see https://github.com/ivanhofer/typesafe-i18n#locale-detection)

		// const detectedLocale = detectLocale(navigatorDetector);
		await initI18n('en');

		return {};
	}
</script>

<slot />
