<script>
	import { fade } from 'svelte/transition';
	let vid= '/assets/video/Suba_Logo_60fps.webm';

	let logoFinished = false;

	function finish() {
		logoFinished = true;
	}
</script>

{#if !logoFinished}
	<div class="logo-container" out:fade={{ delay: 0, duration: 1000 }}>
		<video src={vid} autoplay muted playsinline on:ended={finish} />
	</div>
{/if}

<style lang="scss">
	.logo-container {
		width: 100%;
		height: 100%;
		background-color: white;
		z-index: 9999;
		top: 0;
		left: 0;
		position: fixed;

		video {
			/* override other styles to make responsive */
			width: 100% !important;
			height: 100% !important;
		}
	}

	@media screen and (min-width: 320px) {
		.logo-container {
		}
	}
</style>
