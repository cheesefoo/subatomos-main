<script  >
	import Plyr from 'plyr';
	import plyr from 'plyr/src/sass/plyr.scss'
	import { onMount } from 'svelte';
	// Change "{}" to your options:
	// https://github.com/sampotts/plyr/#options
	export let id;
	export let src;
	export let options = {};
	export let type = "audio/mp3";
	onMount(_=> {
		new Plyr('#player', options);
	});

	// Expose player so it can be used from the console
	// window.player = player;

</script>
<audio id="player" controls>
	<source {src} {type} />
</audio>
