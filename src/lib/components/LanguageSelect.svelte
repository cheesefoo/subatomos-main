<script>
	import { locale, setLocale } from '/src/i18n/i18n-svelte';
	import { browser } from '$app/environment';

	// onMount(async () => {
	// 	console.log($locale)
	// 	if ($locale === undefined || $locale === "") {
	// 		setLocale(detectLocale('en', ['en', 'ja'], navigatorDetector));
	// 		await initI18n($locale);
	// 	}
	// 	// localeToSelect = $locale
	// });
	if (browser) {
		$: $locale && localStorage.setItem('lang', $locale);
	}
</script>

<ul class="corner">
	<li>
		<span
			class="flag-icon"
			class:flag-icon-us={$locale === 'en'}
			class:flag-icon-jp={$locale === 'ja'}
			id="lang-flag"
		/>
		<span id="lang-header-text">{$locale === 'en' ? 'EN' : '日本語'}</span>

		<ul class="nav-dropdown">
			<li>
				<a class="dropdown-item selectLang" href="#" lang="EN" on:click={() => setLocale('en')}>
					<div class="flag-icon flag-icon-us" />
					EN</a
				>
			</li>
			<li>
				<a class="dropdown-item selectLang" href="#" lang="JA" on:click={() => setLocale('ja')}>
					<div class="flag-icon flag-icon-jp" />
					日本語</a
				>
			</li>
		</ul>
	</li>
</ul>

<style lang="scss">
	//@import url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css);
	@import url(/node_modules/flag-icons/css/flag-icons.min.css);

	.corner {
		position: relative;
		top: 16px;

		li {
			display: inline-block;
			vertical-align: middle;

			span:nth-child(1) {
				padding-left: 1em;
			}

			span:nth-child(2) {
				//padding-top: 25%;
				padding-right: 2em;
				font-weight: 700;
				color: $ivory;
			}
		}
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		//align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 10px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		bottom: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-bottom: var(--size) solid $chromeblue;
	}

	li:hover {
		ul {
			/* Display the dropdown on hover */
			left: 0; /* Bring back on-screen when needed */
			height: 8em;

			a {
				/* The persistent hover state does however create a global style for links even before they're hovered. Here we undo these effects. */
			}

			li a:hover {
				/* Here we define the most explicit hover states--what happens when you hover each individual link. */
				background: $lightblue;
			}
		}

		a {
			/* These create persistent hover states, meaning the top-most link stays 'hovered' even when your cursor has moved down the list. */
			background: darken($lightblue, 10%);
		}
	}

	span,
	a {
		color: black;
	}

	a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		font-weight: 700;

		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;

		&:hover {
			color: $chromeblue;
		}
	}

	.nav-dropdown {
		z-index: 999;
		background: rgba(
			255,
			255,
			255,
			0
		); /* But! Let's make the background fully transparent where we can, we don't actually want to see it if we can help it... */
		list-style: none;
		position: absolute;
		left: -9999px; /* Hide off-screen when not needed (this is more accessible than display:none;) */
		flex-direction: column;

		li {
			float: none;
		}

		a {
			white-space: nowrap; /* Stop text wrapping and creating multi-line dropdown items */
		}
	}

	@media screen and (max-width: 849px) {
		.corner {
			top: 1em;

			li {
				span:nth-child(1) {
					padding-left: 0;
				}
			}
		}
	}
</style>
