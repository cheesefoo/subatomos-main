<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Panel from '$lib/components/Panel.svelte';
	// import '/src/app.scss';
	import { browser } from '$app/environment';

	import { onMount } from 'svelte';
	import { Breadcrumb, BreadcrumbItem } from '$lib/components/Breadcrumb';




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
  .content {
    padding: 2em 10% 0 4em;
  }

  h1, h3 {
    color: darksalmon;
    padding: 1em 0;
  }

  a {
    color: $accent-color
  }

  h1 {
    font-family: keifont, sans-serif;
    font-size: 2em;
    font-weight: bolder;
  }

  p,
  a,
  li,
  ul {
    font-family: keifont, sans-serif;
    font-weight: 100;
  }

  h3 {
    font-family: keifont, sans-serif;
    font-size: 1.5em;
  }

  @media screen and (min-width: 849px) and (max-width: 1024px) {
    .content {
      padding: 0 1em 0 1em;
    }

  }
</style>
