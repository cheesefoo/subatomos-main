import faker from 'faker';

const generateLorem = () =>
	[...Array(50)].map(() => {
		const lorem = faker.lorem.paragraph();
		const lastName = faker.name.lastName();

		return {
			avatar: `https://avatars.dicebear.com/api/human/${lastName}.svg`,
			lastName,
			lorem
		};
	});

export async function get() {
	return {
		body: generateLorem()
	};
}
