<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons';

	export let icon;
	export let url;
</script>

<span
	><a href={url} target="_blank">
		{#if icon === undefined || icon === 'twitter'}
			<Fa icon={faTwitter} fw color="#1DA1F2" />
		{:else if icon === 'yt'}
			<Fa icon={faYoutube} fw color="red" />
		{:else if icon === 'ig'}
			<Fa icon={faInstagram} fw color="purple" />
		{:else if icon === 'www'}
			<Fa icon={faGlobe} fw />
		{/if}
	</a>
</span>

<style>
	.sns {
		color: #2d6dce;
	}
</style>
