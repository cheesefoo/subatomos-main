<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	import { dev } from '$app/env';

	export let status;
	export let error;
	const offline = typeof navigator !== 'undefined' && navigator.onLine === false;
	let title;
	let message;
	if (offline) {
		title = 'Offline';
		message = 'Find the internet and try again';
	} else {
		if (status == 503) {
			title = 'Database is loading, please refresh the page.';
			message = '';
		} else {
			title = status;
			message = error.message;
		}
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<pre>{message}</pre>

<!--{#if error.frame}-->
<pre>{error}</pre>
	<pre>{error.frame}</pre>
<!--{/if}-->
<!--{#if  error.stack}-->
	<pre>{error.stack}</pre>
<!--{/if}-->

<style>
	h1,
	p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
