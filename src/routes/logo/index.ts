import json from './data.json';
export async function get({ query, locals }) {
	return {
		body: {
			json
		}
	};
}
