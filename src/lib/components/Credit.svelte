<script>
	export let name = undefined;
	export let avatar = `https://avatars.dicebear.com/api/human/${name}.svg`;
	export let sns = undefined;
	export let url = undefined;
	export let desc = '';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="credit">
	<img class="avatar" src={avatar} alt="avatar" />
	<div>
		<span>{desc}</span>
		<br />
		<span class="sns">
			{#if sns == undefined}
				<Fa icon={faTwitter} />
			{:else if sns == 'yt'}
				<Fa icon={faYoutube} />
			{/if}
		</span>
		<a href={url}> {name}</a>
	</div>
</div>

<style lang="scss">
	a,
	p {
		color: $pink;
	}

	.sns {
		color: #2d6dce;
	}

	.credit {
		display: grid;
		grid-template-columns: 50px 1fr;
		border-bottom: solid black 0.1rem;
	}

	img {
		height: 50px;
		width: 50px;
		clip-path: circle(50% at 50% 50%);
	}
</style>
