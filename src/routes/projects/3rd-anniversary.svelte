<script context="module">
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
			<div class="box">
				<p>{lorem}</p>
				<hr />
				<h2>{lastName}</h2>
				<div class="avatar">
					<a href="https://twitter.com/subatomos">
						<img src={avatar} alt={lastName} />
					</a>
				</div>
			</div>
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
		padding: 0.25rem;
		margin: 1.5rem;
		max-width: 20%;
		color: $salmon;
		@include boxshadow($chromeblue);

		&:hover {
			@include boxshadow($salmon);
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
