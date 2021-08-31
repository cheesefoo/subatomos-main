import { dev } from '$app/env';

// const dir = dev ? '/static/assets/images/credits' : '/assets/images/credits';
const dir = '/assets/images/credits';
const credits = {
	eleos: {
		name: 'Eleos',
		url: 'https://twitter.com/3L30S',
		sns2: 'yt',
		url2: 'https://www.youtube.com/c/D0Nimations/featured',
		avatar: 'eleos.jpg'
	},
	ani: { name: 'Ani.Minhton', url: 'https://twitter.com/Keru_nk', avatar: 'ani.jpg' },
	ray: {
		name: '深鰭レイ🦈',
		url: 'https://twitter.com/mini_sting_ray',
		sns2: 'yt',
		url2: 'https://www.youtube.com/channel/UCos-gKprgYG0gxFrdkJaFKw',
		name2: 'Ray Yuri Animation',
		avatar: 'ray.jpg'
	},
	cryo: { name: 'Cryovol', url: 'https://twitter.com/cryovol', avatar: 'cryo.jpg' },
	alled: {
		name: 'Alled Thundes',
		url: 'https://twitter.com/AlledThundes',
		avatar: 'alled.jpg',
		url2: 'https://www.instagram.com/alled.thundes/',
		sns2: 'ig'
	},
	simon: {
		name: 'Simon Beed',
		url: 'https://twitter.com/simonbeed',
		sns2: 'yt',
		url2: 'https://www.youtube.com/channel/UCPl0vmZTxA6d1AkZifhELIw',
		avatar: 'simon.jpg'
	},
	light: { name: 'LightMask', url: 'https://twitter.com/' },
	jeremy: { name: 'Jeremy Robson', url: 'https://twitter.com/' },
	hko: { name: 'HKO', url: 'https://twitter.com/' },
	vintage: {
		name: 'Vintagestep',
		url: 'https://twitter.com/vintagestep',
		avatar: 'vintagestep.jpg'
	},
	wei: { name: 'Wei Lee', url: 'https://twitter.com/SakuraBot30001', avatar: 'weilee.jpg' },
	cynic: {
		name: 'TheCynicClinic',
		url: 'https://twitter.com/cynicclinic_yt',
		sns2: 'yt',
		url2: 'https://www.youtube.com/channel/UCYgLAxhkJdLPjtU9WVAMdrA',
		avatar: 'cynic.jpg'
	},
	furo: { name: 'ふろ', url: 'https://twitter.com/Furochang', avatar: 'furo.jpg' },
	neil: {
		name: 'torisubs',
		url: 'https://www.youtube.com/channel/UCDilG0sTEpT5iphCs6OzO7A',
		sns: 'yt',
		avatar: 'torisubs.jpg'
	},
	gundam: {
		name: 'GundamFinal',
		url: 'https://www.youtube.com/user/Gundamfinal',
		sns: 'yt',
		avatar: 'gundam.jpg'
	},
	vee: { name: 'Vee', url: 'https://twitter.com/DoctorEevee', avatar: 'vee.jpg' },
	rinne: { name: 'Rinne', url: 'https://twitter.com/RinnemiNoMore', avatar: 'rinne.jpg' },
	venn: { name: 'cheesefoo', url: 'https://twitter.com/cheesefoo2', avatar: 'cheesefoo.jpg' },
	fran: { name: 'Eruben', url: 'https://twitter.com/eruben_thillior', avatar: 'eruben.jpg' },
	udarash: { name: '00：獣医の卵', url: 'https://twitter.com/subatomona00', avatar: '00.jpg' },
	ato: { name: 'AtofreakingB', url: 'https://twitter.com/AtofreakingB', avatar: 'ato.jpg' },
	ano: { name: 'anodesign', url: 'https://twitter.com/anodesign', avatar: 'anodesign.jpg' },
	ebi: { name: 'Ebiebibeam', url: 'https://twitter.com/ebiebibeam', avatar: 'ebiebibeam.jpg' },
	ryu: { name: 'ryuryuryu²', url: 'https://twitter.com/subaru_is_cute', avatar: 'ryu.jpg' }
};
for (const [key, value] of Object.entries(credits)) {
	if (value.avatar) {
		value.avatar = `${dir}/${value.avatar}`;
	}
}
export default credits;
