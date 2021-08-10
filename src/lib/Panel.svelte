<script lang="ts">
</script>

<div>
	<div>
		<slot />
	</div>
</div>

<style lang="scss">
	div {
		display: flex;
		overflow: hidden;
		align-content: center;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 100%;
		min-height: calc(100vh - 80px);
		padding-top: 5vh;
		padding-bottom: 5vh;
		justify-items: center;
		div {
			background-color: $ivory;
			display: block;
			max-width: 50%;
			margin: 0 0 0 8px;
			vertical-align: middle;
			border: 2px solid $lightblue;
			border-radius: 5px;
			box-shadow: $lightblue 1px 1px 0, $lightblue 2px 2px 0, $lightblue 3px 3px 0,
				$lightblue 4px 4px 0, $lightblue 5px 5px 0, $lightblue 6px 6px 0, $lightblue 7px 7px 0,
				$lightblue 8px 8px 0;
		}
	}
</style>
