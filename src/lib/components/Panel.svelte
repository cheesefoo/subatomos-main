<main>
	<div class="inner-panel">
		<div class="panel-content">
			<slot />
		</div>
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		overflow: hidden;
		align-content: center;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 100%;
		padding-top: 5vh;
		padding-bottom: 5vh;
		justify-items: center;
	}

	.inner-panel {
		min-height: calc(50vh - 80px);
		min-width: max(80vw, 500px);
		background-color: $ivory;
		display: block;
		max-width: 50%;
		margin: 0 0 0 8px;
		vertical-align: middle;
		border: 2px solid $chromeblue;
		border-radius: 5px;
		@include boxshadow($chromeblue);
	}

	.panel-content {
		padding: 8px;
		margin: 8px;
	}

	@media screen and (max-width: 849px) {
		main {
			padding: 1em 0;
		}
		.inner-panel {
			min-width: max(92%, 350px);
			max-width: 0;
		}
	}
</style>
