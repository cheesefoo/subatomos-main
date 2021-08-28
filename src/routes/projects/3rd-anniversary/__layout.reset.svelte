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
	<slot />
</main>
<Footer />

<style lang="scss">
	main {
		min-height: 100vh;
		margin: 0;
		background: url(/static/assets/images/Sky.png) no-repeat center center fixed;
		background-size: cover;
		display: flex;
		overflow: hidden;
		align-content: center;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 100%;
		padding-top: 0;
		padding-bottom: 1rem;
		justify-items: center;
	}

	//.content {
	//	min-width: max(50vw, 500px);
	//	max-width: 90%;
	//}
</style>
