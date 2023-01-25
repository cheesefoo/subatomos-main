import faker from 'faker';


const generateLorem = () =>
	[...Array(50)].map(() => {
		const msg = faker.lorem.paragraph();
		const name = faker.name.lastName();
		let art =
			faker.datatype.number(10) > 1
				? undefined
				: `https://avatars.dicebear.com/api/human/${name}.svg`;
		let pic =
			faker.datatype.number(10) > 1
				? undefined
				: `https://avatars.dicebear.com/api/human/${name}.svg`;
		let lat = faker.address.latitude();
		let lng = faker.address.longitude();

		// let lat = faker.datatype.number(100);
		// let long = faker.datatype.number(100);

		return { name, msg, pic, art, lat, lng };
	});


export function GET() {

	return new Response(JSON.stringify(generateLorem()), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
}

