<script>
	export let name = undefined;
	export let avatar = `https://avatars.dicebear.com/api/human/${name}.svg`;
	export let sns = undefined;
	export let sns2 = undefined;
	export let url = undefined;
	export let url2 = undefined;
	export let desc = '';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="credit">
	{#if avatar != undefined}
		<img class="avatar" src={avatar} alt="avatar" />
	{/if}
	<div>
		<span class="sns">
			{#if sns == undefined || sns == 'twitter'}
				<Fa icon={faTwitter} color="#1DA1F2" />
			{:else if sns == 'yt'}
				<Fa icon={faYoutube} color="red" />
			{:else if sns == 'ig'}
				<Fa icon={faInstagram} />
			{/if}
		</span>
		<a href={url} target="_blank"> {name}</a> <br />
		{#if url2 != undefined}
			<span class="sns">
				{#if sns2 == undefined || sns2 == 'twitter'}
					<Fa icon={faTwitter} color="#1DA1F2" />
				{:else if sns2 == 'yt'}
					<Fa icon={faYoutube} color="red" />
				{:else if sns2 == 'ig'}
					<Fa icon={faInstagram} />
				{/if}
			</span>
			<a href={url2} target="_blank"> {name}</a> <br />
		{/if}
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
		width: 80%;
		grid-template-columns: 50px 1fr;
		border-bottom: solid black 0.1rem;
	}

	img {
		height: 50px;
		width: 50px;
		clip-path: circle(50% at 50% 50%);
	}

	.fa.fa-instagram {
		color: transparent;
		background: radial-gradient(
			circle at 30% 107%,
			#fdf497 0%,
			#fdf497 5%,
			#fd5949 45%,
			#d6249f 60%,
			#285aeb 90%
		);
		background: -webkit-radial-gradient(
			circle at 30% 107%,
			#fdf497 0%,
			#fdf497 5%,
			#fd5949 45%,
			#d6249f 60%,
			#285aeb 90%
		);
		background-clip: text;
		-webkit-background-clip: text;
	}
</style>
