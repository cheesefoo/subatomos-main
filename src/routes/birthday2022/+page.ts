import { error } from '@sveltejs/kit';




export async function load({ fetch })
{
	const res = await fetch('/birthday2022-messages');
	const texts = await res.json();
	if (res.ok)
	{
		return { msgs: texts };
	}
	throw error(500);
}


