<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Panel from '$lib/components/Panel.svelte';
	import '/src/app.scss';

	import type { Locales } from '$i18n/i18n-types';
	import { browser } from '$app/environment';

	import { onMount } from 'svelte';


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
		overflow: hidden;

		background: url(/assets/images/sky.webp) no-repeat center center fixed;
		background-size: cover;
	}
</style>
