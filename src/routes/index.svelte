<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import CategoryList from '$lib/components/CategoryList.svelte';

	import cbimage from '$images/cbimage.png';
</script>

<svelte:head>
	<title>Subatomos - Oozora Subaru Fansite</title>
</svelte:head>

<div class="content">
	<h1>coming s👀n!</h1>
	<div class="img-container">
		<img src={cbimage} alt="Oozora Subaru" />
	</div>
	<div class="cats-posts">
		<CategoryList />
		<div class="posts">
			<PostsList />
		</div>
	</div>
</div>

<style lang="scss">
	.content {
		display: flex;
		margin: 8px;
		padding: 1.15rem;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}

	.img-container {
		height: 50%;
		width: 100%;

		img {
			max-width: 100%;
			height: auto;
		}
	}

	.cats-posts {
		display: flex;
		margin: 8px;
		padding: 1.15rem;
	}
</style>
