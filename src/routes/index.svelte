<svelte:head>
	<title>Subatomos - Oozora Subaru Fansite</title>
</svelte:head>

<script>
	import PostsList from '$lib/PostsList.svelte';
	import CategoryList from '$lib/CategoryList.svelte';
	import Panel from '$lib/Panel.svelte';
</script>

<Panel>
	<div class='cats-posts'>
		<CategoryList />
		<div class='posts'>
			<PostsList />

		</div>
	</div>
</Panel>

<style lang='scss'>

  .cats-posts {
    display: flex;
    margin: 8px;
    padding: 1.15rem;
  }
</style>
