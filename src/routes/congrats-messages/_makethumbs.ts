const imageThumbnail = require('image-thumbnail');

try {
	const thumbnail = await imageThumbnail('resources/images/dog.jpg');
	console.log(thumbnail);
} catch (err) {
	console.error(err);
}
