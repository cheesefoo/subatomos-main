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
	{#if avatar != undefined}
		<img class="avatar" src={avatar} alt="avatar" />
	{/if}
	<div>
		<span class="sns">
			{#if sns == undefined}
				<Fa icon={faTwitter} color="#1DA1F2" />
			{:else if sns == 'yt'}
				<Fa icon={faYoutube} color="red" />
			{/if}
		</span>
		<a href={url} target="_blank"> {name}</a> <br />
		<span>{desc}</span>
	</div>
</div>

<style lang="scss">
	a,
	p {
		color: $pink;
	}

	span {
		font-weight: 400;
		font-size: small;
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
