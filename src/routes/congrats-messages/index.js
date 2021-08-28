import faker from 'faker';

const generateLorem = () =>
	[...Array(50)].map(() => {
		const lorem = faker.lorem.paragraph();
		const lastName = faker.name.lastName();
		let art = faker.datatype.number(10) > 1 ? undefined : `https://avatars.dicebear.com/api/human/${lastName}.svg`;
		let url = art != undefined ? `https://google.com` : undefined;

		return {
			lastName,
			lorem,
			url: url,
			art: art
		};
	});

export async function get() {
	return {
		body: generateLorem()
	};
}
