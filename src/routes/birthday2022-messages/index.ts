/*
import messages from './_messages';
import fanart from './_fanart';

function getMessages(): Array<object> {
	const numOfMsgs = messages.length + fanart.length;
	const artInterval = Math.ceil(numOfMsgs / fanart.length);

	const copy = [].concat(messages);
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
*/
import faker from 'faker';

const generateLorem = () =>
	[...Array(50)].map(() => {
		const lorem = faker.lorem.paragraph();
		const name = faker.name.lastName();
		const art =
			faker.datatype.number(10) > 1
				? undefined
				: `https://avatars.dicebear.com/api/human/${name}.svg`;
		const pic =
			faker.datatype.number(10) > 1
				? undefined
				: `https://avatars.dicebear.com/api/human/${name}.svg`;
		const lat = faker.address.latitude();
		const long = faker.address.longitude();

		return {
			name: name,
			message:lorem,
			picture: pic,
			fanart: art,
			lat: lat,
			long: long
		};
	});

export async function get() {
	return {
		body: generateLorem()
	};
}
