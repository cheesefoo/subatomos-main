import messages from './_messages';
import fanart from './_fanart';

function getMessages(): Array<object> {
	let numOfMsgs = messages.length + fanart.length;
	let artInterval = Math.ceil(numOfMsgs/fanart.length );

	let copy = [].concat(messages);
	let index = 0;
	fanart.forEach((x) => {
		copy.splice(index, 0, x);
		index += artInterval;
	});

	return copy;
}

export async function get() {
	return {
		body: getMessages()
	};
}
