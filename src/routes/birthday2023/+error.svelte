<script context='module'>


</script>

<script>
	import { dev } from '$app/environment';
	import { page } from '$app/stores';

	const offline = typeof navigator !== 'undefined' && navigator.onLine === false;
	const title = offline ? 'Offline' : $page.status;
	const message = offline ? 'Find the internet and try again' : $page.error.message;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<pre>{message}</pre>

{#if dev && $page.error.stack}
	<pre>{$page.error.stack}</pre>
{/if}

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
