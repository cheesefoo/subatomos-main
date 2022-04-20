<script lang='ts'>
	import Fa from 'svelte-fa/src/fa.svelte';
	import pkg from '@fortawesome/free-brands-svg-icons';

	const {
		faDiscord,
		faGithub,
		faInstagram,
		faTwitter,
		faYoutube
	} = pkg;
	import pkg2 from '@fortawesome/free-solid-svg-icons';

	const { faGlobe } = pkg2;

	export let icon = 'twitter';
	export let url = '#';
	export let size = '';
</script>

<span
><a href={url} target='_blank' rel='noopener'>
		{#if icon === undefined || icon === 'twitter'}
			<Fa icon={faTwitter} fw color='#1DA1F2' {size} />
		{:else if icon === 'yt'}
			<Fa icon={faYoutube} fw color='red' {size} />
		{:else if icon === 'ig'}
			<Fa icon={faInstagram} fw color='purple' {size} />
		{:else if icon === 'github'}
			<Fa icon={faGithub} fw color='#171515' {size} />
		{:else if icon === 'discord'}
			<Fa icon={faDiscord} {size} color='#5865F2' />
		{:else if icon === 'www'}
			<Fa icon={faGlobe} fw {size} />
		{/if}
	</a>
</span>

<style>
    .sns {
        color: #2d6dce;
    }
</style>
