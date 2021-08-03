<script context='module'>
	import { variables } from '$lib/variables';

	export async function load({ page, fetch, session, context }) {
		const res = await fetch(`${variables.apiURL}/wp/v2/posts?slug=${page.params.slug}`);
		const data = await res.json();
		let article = data[0];


		return { props: { post: data[0] } };
	}
</script>

<script>
	export let post;
	console.log(post);
</script>

<h1>{post.title.rendered}</h1>

<div class='content'>
	{@html post.content.rendered}
</div>
