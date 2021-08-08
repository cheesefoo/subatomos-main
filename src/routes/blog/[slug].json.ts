import posts from './_posts';

const lookup = new Map();
posts.forEach((post) => {
	lookup.set(post.slug, post);
});

export async function get({ params }) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = params;

	return {
		body: lookup.get(slug)
	};
}
