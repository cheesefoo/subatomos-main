import messages from './_messages';
import fanart from './_fanart';

function getMessages(): Array<object>
{
	const numOfMsgs = messages.length + fanart.length;
	const artInterval = Math.ceil(numOfMsgs / fanart.length);

	const copy = [].concat(messages);
	let index = 0;
	fanart.forEach((x) =>
	{
		copy.splice(index, 0, x);
		index += artInterval;
	});

	return copy;
}


export function GET()
{

	return new Response(JSON.stringify(getMessages()), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
}

