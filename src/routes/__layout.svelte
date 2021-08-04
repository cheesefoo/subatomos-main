<script context="module" lang="ts">
	import Header from '$lib/header/Header.svelte';
	import {base} from '$app/paths'
	import "../app.scss";
	import LL, { initI18n, setLocale } from '../i18n/i18n-svelte';

	export async function load({ page, fetch, session, context }) {
		// detect locale of user (see https://github.com/ivanhofer/typesafe-i18n#locale-detection)
		const locale = 'en'
		await initI18n(locale)

		return {}
	}
</script>

<Header>

<main>
	<slot>
</slot></main>

<footer>
	<p>:^)</p>
</footer>

<style lang="scss">


  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }
</style>
</Header>
<slot></slot>
