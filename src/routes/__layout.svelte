<script context="module" lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Panel from '$lib/components/Panel.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.scss';
</script>

<main>
	<Header />
	<Panel>
		<slot />
	</Panel>
	<Footer />
</main>
