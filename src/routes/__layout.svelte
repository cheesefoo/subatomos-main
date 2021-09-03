<script context="module">
	import { initI18n } from '/src/i18n/i18n-svelte';
	import '/src/app.scss';

	export async function load({ page, fetch, session, context }) {
		// detect locale of user (see https://github.com/ivanhofer/typesafe-i18n#locale-detection)

		// const detectedLocale = detectLocale('en', ['en', 'ja'], navigatorDetector);
		await initI18n('en');

		return {};
	}
</script>
<slot></slot>
