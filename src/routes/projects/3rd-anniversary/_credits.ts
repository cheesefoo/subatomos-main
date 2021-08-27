import { dev } from '$app/env';

const dir = dev ? '../static/assets/images/credits' : '/assets/images/credits';
const credits = {
	eleos: { name: 'Eleos', url: 'https://twitter.com/3L30S', avatar: 'eleos.jpg' },
	ani: { name: 'Ani.Minhton', url: 'https://twitter.com/Keru_nk', avatar: 'ani.jpg' },
	ray: { name: 'Ray Yuri', url: 'https://twitter.com/mini_sting_ray', avatar: 'ray.jpg' },
	cryo: { name: 'Cryovol', url: 'https://twitter.com/cryovol', avatar: 'cryo.jpg' },
	alled: { name: 'Alled Thundes', url: 'https://twitter.com/AlledThundes', avatar: 'alled.jpg' },
	simon: { name: 'Simon Beed', url: 'https://twitter.com/simonbeed', avatar: 'simon.jpg' },
	light: { name: 'LightMask', url: 'https://twitter.com/simonbeed', avatar: 'avatar.png' },
	jeremy: { name: 'Jeremy Robson', url: 'https://twitter.com/simonbeed', avatar: 'avatar.png' },
	hko: { name: 'HKO', url: 'https://twitter.com/simonbeed', avatar: 'avatar.png' },
	vintage: { name: 'Vintagestep', url: 'https://twitter.com/simonbeed', avatar: 'avatar.png' },
	wei: { name: 'Wei Lee', url: 'https://twitter.com/SakuraBot30001', avatar: 'avatar.png' },
	cynic: {
		name: 'TheCynicClinic',
		url: 'https://twitter.com/cynicclinic_yt',
		avatar: 'avatar.png'
	},
	furo: { name: 'ふろ', url: 'https://twitter.com/Furochang', avatar: 'furo.jpg' },
	neil: {
		name: 'torisubs',
		url: 'https://www.youtube.com/channel/UCDilG0sTEpT5iphCs6OzO7A',
		sns: 'yt',
		avatar: 'avatar.png'
	},
	gundam: {
		name: 'GundamFinal',
		url: 'https://www.youtube.com/user/Gundamfinal',
		sns: 'yt',
		avatar: 'avatar.png'
	},
	vee: { name: 'Vee', url: 'https://twitter.com/DoctorEevee', avatar: 'avatar.png' }
};
for (const [key, value] of Object.entries(credits)) {
	value.avatar = `${dir}/${value.avatar}`;
}
export default credits;
