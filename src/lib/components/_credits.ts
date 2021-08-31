import { dev } from '$app/env';

const dir = dev ? '/static/assets/images/credits' : '/assets/images/credits';
const credits = {
	eleos: { name: 'Eleos', url: 'https://twitter.com/3L30S', avatar: 'eleos.jpg' },
	ani: { name: 'Ani.Minhton', url: 'https://twitter.com/Keru_nk', avatar: 'ani.jpg' },
	ray: { name: 'Ray Yuri', url: 'https://twitter.com/mini_sting_ray', avatar: 'ray.jpg' },
	cryo: { name: 'Cryovol', url: 'https://twitter.com/cryovol', avatar: 'cryo.jpg' },
	alled: {
		name: 'Alled Thundes',
		url: 'https://twitter.com/AlledThundes',
		avatar: 'alled.jpg',
		url2: 'https://www.instagram.com/alled.thundes/',
		sns2: 'ig'
	},
	simon: { name: 'Simon Beed', url: 'https://twitter.com/simonbeed', avatar: 'simon.jpg' },
	light: { name: 'LightMask', url: 'https://twitter.com/simonbeed' },
	jeremy: { name: 'Jeremy Robson', url: 'https://twitter.com/simonbeed' },
	hko: { name: 'HKO', url: 'https://twitter.com/simonbeed' },
	vintage: { name: 'Vintagestep', url: 'https://twitter.com/simonbeed' },
	wei: { name: 'Wei Lee', url: 'https://twitter.com/SakuraBot30001' },
	cynic: {
		name: 'TheCynicClinic',
		url: 'https://twitter.com/cynicclinic_yt'
	},
	furo: { name: 'ふろ', url: 'https://twitter.com/Furochang', avatar: 'furo.jpg' },
	neil: {
		name: 'torisubs',
		url: 'https://www.youtube.com/channel/UCDilG0sTEpT5iphCs6OzO7A',
		sns: 'yt'
	},
	gundam: {
		name: 'GundamFinal',
		url: 'https://www.youtube.com/user/Gundamfinal',
		sns: 'yt'
	},
	vee: { name: 'Vee', url: 'https://twitter.com/DoctorEevee' },
	rinne: { name: 'Rinne', url: 'https://twitter.com/RinnemiNoMore' },
	venn: { name: 'cheesefoo', url: 'https://twitter.com/cheesefoo2' },
	fran: { name: 'Eruben', url: 'https://twitter.com/eruben_thillior' },
	udarash: { name: '00：獣医の卵', url: 'https://twitter.com/subatomona00' },
	ato: { name: 'AtofreakingB', url: 'https://twitter.com/AtofreakingB' },
	ano: { name: 'anodesign', url: 'https://twitter.com/anodesign' },
	ebi: { name: 'Ebiebibeam', url: 'https://twitter.com/ebiebibeam' }
};
for (const [key, value] of Object.entries(credits)) {
	if (value.avatar) {
		value.avatar = `${dir}/${value.avatar}`;
	}
}
export default credits;
