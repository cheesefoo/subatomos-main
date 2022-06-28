<script lang='ts'>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faGithub,faTwitter,faInstagram,faYoutube,faDiscord } from '@fortawesome/free-brands-svg-icons/index.es';


	import { faGlobe } from '@fortawesome/free-solid-svg-icons/index.es';

	export let icon;
	export let url;
	if (icon === undefined && url !== undefined)
	{
		icon = 'twitter';
	}
	export let size = '';
</script>

<span>
	<a href={url} target='_blank' rel='noopener'>
		{#if icon === 'twitter'}
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
