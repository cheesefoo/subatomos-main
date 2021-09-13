// const dir = dev ? '/static/assets/images/credits' : '/assets/images/credits';
const dir = '/assets/images/credits';
const credits = {
	eleos: {
		name: 'Eleos',
		url: 'https://twitter.com/3L30S',
		sns2: 'yt',
		url2: 'https://www.youtube.com/c/D0Nimations/featured',
		avatar: 'eleos.webp'
	},
	ani: { name: 'Ani.Minhton', url: 'https://twitter.com/Keru_nk', avatar: 'ani.webp' },
	ray: {
		name: 'Ray Yuri',
		url: 'https://twitter.com/mini_sting_ray',
		sns2: 'yt',
		url2: 'https://www.youtube.com/channel/UCos-gKprgYG0gxFrdkJaFKw',
		name2: 'Ray Yuri Animation',
		avatar: 'ray.webp'
	},
	cryo: { name: 'Cryovol', url: 'https://twitter.com/cryovol', avatar: 'cryo.webp' },
	alled: {
		name: 'Alled Thundes',
		url: 'https://twitter.com/AlledThundes',
		avatar: 'alled.webp',
		url2: 'https://www.instagram.com/alled.thundes/',
		sns2: 'ig'
	},
	simon: {
		name: 'Simon Beed',
		url: 'https://twitter.com/simonbeed',
		sns2: 'yt',
		url2: 'https://www.youtube.com/channel/UCPl0vmZTxA6d1AkZifhELIw',
		avatar: 'simon.webp'
	},
	light: {
		name: 'LightMask',
		url: 'https://twitter.com/Light_Mask_1905',
		avatar: 'lightmask.webp'
	},
	jeremy: {
		name: 'Jeremy Robson',
		sns: 'yt',
		url: 'https://www.youtube.com/c/JeremyRobson',
		avatar: 'jeremy.webp'
	},
	hko: {
		name: 'HKO',
		url: 'https://youtube.com/channel/UCoUxJSKgXSYFPrxUCuYdHQw',
		sns: 'yt',
		avatar: 'hko.webp'
	},
	vintage: {
		name: 'Vintagestep',
		url: 'https://twitter.com/vintagestep',
		avatar: 'vintagestep.webp'
	},
	wei: { name: 'Wei Lee', url: 'https://twitter.com/SakuraBot30001', avatar: 'weilee.webp',url2:'https://www.youtube.com/channel/UCAg1YEexI2i9kTCCRR1X3zA', sns2:'yt' },
	cynic: {
		name: 'TheCynicClinic',
		url: 'https://twitter.com/cynicclinic_yt',
		sns2: 'yt',
		url2: 'https://www.youtube.com/channel/UCYgLAxhkJdLPjtU9WVAMdrA',
		avatar: 'cynic.webp'
	},
	furo: { name: 'ふろ', url: 'https://twitter.com/Furochang', avatar: 'furo.webp' },
	neil: {
		name: 'torisubs',
		url: 'https://www.youtube.com/channel/UCDilG0sTEpT5iphCs6OzO7A',
		sns: 'yt',
		avatar: 'torisubs.webp'
	},
	gundam: {
		name: 'GundamFinal',
		url: 'https://www.youtube.com/user/Gundamfinal',
		sns: 'yt',
		avatar: 'gundam.webp'
	},
	vee: { name: 'Vee', url: 'https://twitter.com/DoctorEevee', avatar: 'vee.webp' },
	rinne: { name: 'Rinne', url: 'https://twitter.com/RinnemiNoMore', avatar: 'rinne.webp' },
	venn: { name: 'cheesefoo', url: 'https://twitter.com/cheesefoo2', avatar: 'cheesefoo.webp' },
	fran: { name: 'Eruben', url: 'https://twitter.com/eruben_thillior', avatar: 'eruben.webp' },
	udarash: { name: '00：獣医の卵', url: 'https://twitter.com/subatomona00', avatar: '00.webp' },
	ato: { name: 'AtofreakingB', url: 'https://twitter.com/AtofreakingB', avatar: 'ato.webp' },
	ano: { name: 'anodesign', url: 'https://twitter.com/anodesign', avatar: 'anodesign.webp' },
	ebi: { name: 'Ebiebibeam', url: 'https://twitter.com/ebiebibeam', avatar: 'ebiebibeam.webp' },
	ryu: { name: 'ryuryuryu²', url: 'https://twitter.com/subaru_is_cute', avatar: 'ryu.webp' },
	sakino: { name: 'さきの新月', url: 'https://twitter.com/sakino_shingetu', avatar: 'sakino.webp' }
};
for (const [key, value] of Object.entries(credits)) {
	if (value.avatar) {
		value.avatar = `${dir}/${value.avatar}`;
	}
}
export default credits;
