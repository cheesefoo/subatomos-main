import messages from './_messages';


function getMessages()
{
	for (let i = 0; i < messages.length; i++)
	{
		let x = messages[i];
		let ll = typeof x.latlng === 'string' ? x.latlng.split(',') : x.latlng;
		let latlng = ll.map(s => parseFloat(s));
		x.latlng = latlng;
		messages[i] = x;
	}


	return messages;
}

export async function get()
{
	return {
		body: getMessages()
	};
}

/*
import faker from 'faker';

const generateLorem = () =>
	[...Array(50)].map(() =>
	{
		faker.setLocale('en_US')
		const msg = faker.lorem.paragraph();
		const name = faker.name.lastName();
		const art =
			faker.datatype.number(10) > 5
				? undefined
				: `https://avatars.dicebear.com/api/human/${name}.svg`;
		const pic =
			faker.datatype.number(10) > 5
				? undefined
				: `https://avatars.dicebear.com/api/bottts/${name}.svg`;
		let lat: Number = Number(faker.address.latitude());
		let lng: Number = Number(faker.address.longitude());

		// let lat = faker.datatype.number(100);
		// let long = faker.datatype.number(100);

		return { name, msg, pic, art, lat, lng };
	});

export async function get()
{
	return {
		body: generateLorem()
	};
}
*/
