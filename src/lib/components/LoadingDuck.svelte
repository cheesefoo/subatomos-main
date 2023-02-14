<script>
	const carouselPhotos = [
		'/assets/images/loadingduck/Timeline_1_0000.png',
		'/assets/images/loadingduck/Timeline_1_0001.png',
		'/assets/images/loadingduck/Timeline_1_0002.png',
		'/assets/images/loadingduck/Timeline_1_0003.png',
		'/assets/images/loadingduck/Timeline_1_0004.png',
		'/assets/images/loadingduck/Timeline_1_0005.png',
		'/assets/images/loadingduck/Timeline_1_0006.png',
		'/assets/images/loadingduck/Timeline_1_0007.png'
	];

	let index = 0;

	const next = () => {
		index = (index + 1) % carouselPhotos.length;
	};
</script>

<div class="content">
	<div class="duck" />
	<!--	<Hoverable let:hovering={hover}>
		{#each [carouselPhotos[index]] as src (index)}
			<img on:hover={next} {src} alt='' />
		{/each}
		</Hoverable>-->
	<slot />
</div>

<style lang="scss">
	.content {
		animation-play-state: paused;
	}

	.content:hover > .duck {
		animation: sprite 0.8s steps(8) infinite;
	}

	/*transform: translate(-50%, -50%) scale(0.25);*/
	.duck {
		//position:absolute;
		width: 50px;
		height: 50px;
		background: url('/assets/images/loadingduck/duck-sm.png');
	}

	/*img {*/
	/*    !*position: absolute;*!*/
	/*    display:block;*/

	/*}*/
	@keyframes sprite {
		to {
			background-position: -400px;
		}
	}
</style>
