<script>
	import { page } from '$app/stores';
</script>

<slot>
	<footer>
		<p>
			This website and its contents have no affiliation with COVER co. nor its associated
			organizations nor associated individuals.
		</p>
	</footer>
</slot>

<style lang="scss">
	footer {
		position: relative;
		bottom: 0px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		a {
			font-weight: bold;
		}
	}
	p {
		font-size: 0.7em;
	}
	@media (min-width: 480px) {
		footer {
		}
	}
</style>
