<script>

	import Hoverable from '$lib/components/Hoverable.svelte';

	const carouselPhotos = [
		'/static/assets/images/loadingduck/Timeline_1_0000.png',
		'/static/assets/images/loadingduck/Timeline_1_0001.png',
		'/static/assets/images/loadingduck/Timeline_1_0002.png',
		'/static/assets/images/loadingduck/Timeline_1_0003.png',
		'/static/assets/images/loadingduck/Timeline_1_0004.png',
		'/static/assets/images/loadingduck/Timeline_1_0005.png',
		'/static/assets/images/loadingduck/Timeline_1_0006.png',
		'/static/assets/images/loadingduck/Timeline_1_0007.png'
	];

	let index = 0;

	const next = () => {
		index = (index + 1) % carouselPhotos.length;
	};
</script>
<div>
	<Hoverable let:hovering={hover}>
	{#each [carouselPhotos[index]] as src (index)}
		<img on:hover={next} {src} alt='' />
	{/each}
	</Hoverable>
</div>

<style>
    div {
				display:block;
        background-color: black;
    }

    img {
        /*position: absolute;*/
        display:block;

    }
</style>
