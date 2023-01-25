import json from './data.json';
import k from './datap.json';
import { dev } from '$app/environment';

const res = dev ? { body: { json } } : { body: { k } };

export async function GET({ query, locals }) {
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
	return res;
}
