<script lang='ts'>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
	import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
	import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
	import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
	import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';

	import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';

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
