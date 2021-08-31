import json from './data.json';
import k from './datap.json';
import { dev } from '$app/env';

let res = dev ? { body: { json } } : { body: { k } };

export async function get({ query, locals }) {
	return res;
}
