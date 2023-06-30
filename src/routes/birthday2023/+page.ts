import { error } from '@sveltejs/kit';
export const prerender = true
export async function load({ fetch }) {
	const res = await fetch('/birthday2023/messages');
	const texts = await res.json();
	if (res.ok) return { texts: texts };
	throw error(500);
}
