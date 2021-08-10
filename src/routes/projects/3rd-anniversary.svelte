<script context="module">
	import CongratsMessageBox from '$lib/components/CongratsMessageBox.svelte';
	export async function load({ fetch }) {
		const res = await fetch('../congrats-messages');
		const texts = await res.json();
		if (res.ok) return { props: { texts: texts } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	export let texts;
</script>

<main>
	<div>
		<h3>Congratulations on your third anniversary, Subaru!</h3>
		<h4>Embed video here when it's done</h4>
	</div>
	<div class="messages-container">
		{#each texts as { avatar, lastName, lorem }}
			<CongratsMessageBox name={lastName} message={lorem} />
		{/each}
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
	}

	hr {
		border-top: 1px solid $chromeblue;
	}

	.messages-container {
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		max-width: 100%;
		height: auto;
	}

	.box {
		@include responsive-bg-image(2, 1);
		background-image: url('$images/subamodal-min.png');
	}

	.box-inner {
		display: block;
		margin: {
			left: auto;
			right: auto;
		}
		h2,
		p {
			margin: 50px;
		}
	}

	.avatar {
		height: 50%;
		width: 100%;

		img {
			max-width: 100%;
			height: auto;
		}
	}
</style>
