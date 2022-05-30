import faker from 'faker';
import { Birthday22Msg } from '$lib/Birthday22Msg';




const generateLorem = () =>
	[...Array(50)].map(() => {
		const lorem = faker.lorem.paragraph();
		const name = faker.name.lastName();
		let art =
			faker.datatype.number(10) > 1
				? undefined
				: `https://avatars.dicebear.com/api/human/${name}.svg`;
		let pic =
			faker.datatype.number(10) > 1
				? undefined
				: `https://avatars.dicebear.com/api/human/${name}.svg`;
		let lat = faker.datatype.number(100);
		let long = faker.datatype.number(100);

		return new Birthday22Msg(name, lorem, pic, art, lat, long);
	});

export async function get() {
	return {
		body: generateLorem()
	};
}
