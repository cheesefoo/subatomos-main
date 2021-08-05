<script context='module' lang='ts'>
	import Header from '$lib/components/Header.svelte';
	import Panel from '$lib/components/Panel.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.scss';
	import { initI18n } from '../i18n/i18n-svelte';

	export async function load({ page, fetch, session, context })
	{
		// detect locale of user (see https://github.com/ivanhofer/typesafe-i18n#locale-detection)
		const locale = 'en';
		await initI18n(locale);

		return {};
	}
</script>
<main>
	<Header />
	<Panel>
		<slot>
		</slot>
	</Panel>
	<Footer/>
</main>
