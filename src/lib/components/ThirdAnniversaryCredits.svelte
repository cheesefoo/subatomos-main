<script>

	import Credit from '$lib/components/Credit.svelte';
	// import credits from './_credits_3rdanni';
	import { media } from '$lib/stores/stores';
	import Footer from '$lib/components/Footer.svelte';

	const dir = '/assets/images/credits';
	const credits = {
		eleos: {
			name: 'Eleos',
			url: 'https://twitter.com/3L30S',
			sns2: 'yt',
			url2: 'https://www.youtube.com/c/D0Nimations',
			avatar: 'eleos.webp'
		},
		ani: { name: 'Ani.Minhtion', url: 'https://twitter.com/Keru_nk', avatar: 'ani.webp' },
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
		wei: {
			name: 'Wei Lee',
			url: 'https://twitter.com/SakuraBot30001',
			avatar: 'weilee.webp',
			url2: 'https://www.youtube.com/channel/UCAg1YEexI2i9kTCCRR1X3zA',
			sns2: 'yt'
		},
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
	export let creditsList = credits;
</script>

<div class="credits">
	<h3>Credits</h3>
	<div class="credits-grid">
		<div class="credits-section">
			<h4>Animation</h4>
			<Credit desc="OG Outfit" {...creditsList.eleos} />
			<Credit desc="School Uniform Style Idol" {...creditsList.ani} />
			<Credit desc="Swimsuit" {...creditsList.ray} />
			<Credit desc="New Year's Kimono" {...creditsList.cryo} />
			<Credit desc="3D LIVE Idol" {...creditsList.alled} />
			<Credit desc="Girly Outfit" {...creditsList.simon} />
		</div>
		<div class="credits-section">
			<h4>Music</h4>
			<Credit desc="Daily Diary" {...creditsList.wei} />
			<Credit
				desc="Natsu Aji!!, Oozora Kensetsu Theme, Taiyou Shoujo"
				{...creditsList.jeremy}
			/>
			<Credit desc="Taiyou Shoujo" {...creditsList.vintage} />
			<Credit
				desc="Dreaming Days, Koi no Mahou, Kirameki Rider"
				{...creditsList.hko}
			/>
			<Credit desc="Do my Best!" {...creditsList.light} />
		</div>
		<div class="credits-section">
			<h4>Editing</h4>
			<Credit {...creditsList.cynic} />
			<Credit {...creditsList.furo} />
			<h4>Translation</h4>
			<Credit {...creditsList.neil} />
			<Credit {...creditsList.gundam} />
			<Credit {...creditsList.vee} />
		</div>
		<div class="credits-section">
			<h4>Direction</h4>
			<Credit desc="Storyboard" {...creditsList.rinne} />
			<Credit {...creditsList.venn} />
			<Credit {...creditsList.fran} />
			<Credit {...creditsList.udarash} />
		</div>
		{#if $media.mobile || $media.tablet}
			<div class="credits-section">
				<h4>Special Thanks</h4>
				<div class="thanks">
					<Credit {...creditsList.ato} />
					<Credit desc="Subatomo Logo" {...creditsList.ano} />
					<Credit desc="Project Logo" {...creditsList.ebi} />
					<Credit {...creditsList.ryu} />
					<Credit {...creditsList.sakino} />
				</div>
			</div>
		{:else}
			<div class="credits-section">
				<h4>Special Thanks</h4>
				<Credit {...creditsList.ato} />
				<Credit desc="Subatomo Logo" {...creditsList.ano} />
				<Credit desc="Project Logo" {...creditsList.ebi} />
				<Credit {...creditsList.ryu} />
				<Credit {...creditsList.sakino} />
			</div>
		{/if}
	</div>
	<Footer />
</div>

<style lang="scss">
	@font-face {
		// This is parsed as a normal function call that takes a quoted string.
		src: url('/assets/851Gkktt_005.woff2') format('woff2');
		font-family: '851Gkktt_005';
		font-weight: normal bold;
	}

	h3,
	h4 {
		font-family: '851Gkktt_005', sans-serif;
		text-align: center;
	}

	.credits {
		background-color: #f1bd65;
		width: 100%;
	}

	.credits-grid {
		display: grid;
		padding: 0 5% 0 5%;
		grid-template-columns: repeat(5, 1fr);
		column-gap: 1em;
		row-gap: 1em;
	}

	@media screen and (max-width: 849px) {
		.credits-grid {
			padding: 0 0 0 5%;
			grid-template-columns: 1fr 1fr;
			column-gap: 1em;
		}

		.thanks {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}

	@media screen and (min-width: 850px) and (max-width: 1024px) {
		h3,
		h4 {
			font-size: 1.4em;
		}
		.credits-grid {
			display: grid;
			padding: 0 5% 0 5%;
			grid-template-columns: repeat(3, 1fr);
			column-gap: 1em;
			row-gap: 1em;
		}

		.thanks {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
