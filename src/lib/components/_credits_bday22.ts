// const dir = dev ? '/static/assets/images/credits' : '/assets/images/credits';


const dir = '/assets/images/credits';
const credits  = {
	jeremy: {
		name: 'Jeremy Robson',
		url: 'https://twitter.com/composerdev',
		sns2:'yt',
		url2: 'https://www.youtube.com/c/JeremyRobson',
	},
	light: {
		name: 'LightMask',
		url: 'https://twitter.com/Light_Mask_1905',
	},

	gundam: {
		name: 'GundamFinal',
		url: 'https://www.youtube.com/user/Gundamfinal',
		sns: 'yt',
	},
	venn: { name: 'cheesefoo', url: 'https://twitter.com/cheesefoo2'  },
	fran: { name: 'Eruben', url: 'https://twitter.com/eruben_thillior'  },
	udarash: { name: '00：獣医の卵', url: 'https://twitter.com/subatomona00' },

};
for (const [key, value] of Object.entries(credits)) {
	if (value.avatar) {
		value.avatar = `${dir}/${value.avatar}`;
	}
}
export default credits;
