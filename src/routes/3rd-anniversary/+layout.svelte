<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';

	import { onMount } from 'svelte';
	import '/src/app.scss';
	import { browser } from '$app/environment';


	import type { Locales } from '$i18n/i18n-types';

	/*	onMount(async () => {
			console.log($locale);
			if ($locale === undefined || $locale === '') {
				setLocale(detectLocale('en', ['en', 'ja'], localStorageDetector));
				await initI18n($locale);
				console.log($locale);
			}
			// localeToSelect = $locale
		});*/






</script>

<main>
	<!--	<div class='content'>-->
	<slot />
	<!--	</div>-->
</main>

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
		//padding-bottom: 1rem;
	}

	//.content {
	//	min-width: max(90vw, 500px);
	//	max-width: 90%;
	//}
</style>
