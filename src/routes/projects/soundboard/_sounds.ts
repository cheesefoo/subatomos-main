import type { SubaSound } from '$lib/SubaSound';
//directory with sounds
import { dev } from '$app/env';

const dir = dev ? '../static/assets/sound' : '/assets/sound';
const sounds: Array<SubaSound> = [
	{ name: 'ack ack ack', file: 'Ack_Ack_Ack.mp3' },

	{ name: 'ahem', category: 'ahem', file: 'Ahem.mp3' },
	{ name: 'ahem 2', category: 'ahem', file: 'Ahem_2.mp3' },
	{ name: 'ahem 3', category: 'ahem', file: 'Ahem_3.mp3' },
	{ name: 'are you asleep?', category: 'english', file: 'are_you_asleep.mp3' },

	{ name: 'ajimaru kazoo', file: 'ajimaru_kazoo.mp3' },
	{ name: '(ASMR)Ahhhh', file: 'ASMR_Ahhhh.mp3' },
	{ name: '(ASMR)yabai crowing', file: 'ASMR_yabai_crow_sound.mp3' },
	{ name: '(ASMR)yabai dying ', file: 'ASMR_yabai_dying_sounds.mp3' },
	{ name: 'assemble', category: 'english', file: 'assemble.mp3' },
	{ name: 'baka baka baka', file: 'bakabakabaka.mp3' },
	{ name: 'battle cry', category: '???', file: 'battle_cry.mp3' },
	{ name: 'war cry', category: '???', file: 'warcry.mp3' },
	{ name: '???', category: '???', file: 'Duck_huh.mp3' },
	{ name: 's̷̨̛̎̎h̵͙̞̋u̶̧͐͋̕ḃ̵̙̺̳̎͂͂̑ą̷̄͆͋̏s̶̛͓̉̇͌h̴̤̽̽͛͝ų̶̰̙̼́͗̓͊͝b̵̧̛̘̫̏̅̇̂́â̴̢̛̰̩̘̝͈͗̄̒͆s̶̜̃h̷͖͔̩̦̭̱͘u̵͎̼̖̔̓͂͘b̴͓͚̬̅̏̚ǎ̶̙͂́̅́', category: '???', file: 'parseltongue.mp3' },
	{ name: '?̶̢̣͙̲̫͎́́͊?̶̨̳͉̪͔͍͆̈́̀̾?̸̧͎̯͉̪̰̌̔̊͂̂͑ ft. Mio', category: '???', file: 'parseltongue_p1mio_crying.mp3' },

	{ name: 'RIP pikmin', category: 'screams', file: 'ScreamPikmin.mp3' },
	{ name: 'BBQ', category: 'english', file: 'BBQ.mp3' },

	{ name: 'bebek', file: 'bebek.mp3' },
	{ name: 'begging', file: 'begging.mp3' },
	{ name: 'birdtalk ft. Kiara', file: 'Birdtalk.mp3' },
	{ name: 'cat sounds', file: 'cat_sounds.mp3' },
	{ name: 'Choco intro', category: 'english', file: 'Choco.mp3' },

	{ name: 'chubax3', file: 'chubax3.mp3' },

	{ name: 'Christopher Davis!', category: 'english', file: 'Chistopher_Davis.mp3' },
	{ name: 'come on Epona!', category: 'english', file: 'COME_ON_EPONA.mp3' },

	{ name: 'cough_1', file: 'cough_1.mp3' },
	{ name: 'engine sound', file: 'engine_sound.mp3' },
	{ name: '(evil) shuba', file: 'evil_shuba.mp3' },
	{ name: 'gara gara gara ft. Mio', file: 'garagaragaramio_chuckle.mp3' },
	{ name: 'haaa...', file: 'Haaaaaa.mp3' },

	{ name: 'hazukashii', file: 'hazukashii.mp3' },
	{ name: 'here we go', category: 'english', file: 'here_we_go.mp3' },
	{ name: 'hi honey', category: 'english', file: 'hi_honey.mp3' },
	{ name: 'hiyaaa', file: 'hiyaaa.mp3' },
	{ name: 'humming bgm', file: 'humming_bgm.mp3' },
	{ name: 'uwaa', category: 'screams', file: 'uwaa.mp3' },

	{ name: 'I love cabbage x3', file: 'i_love_cabbage_x3.mp3' },
	{ name: 'I want to nap', category: 'english', file: 'i_want_to_nap.mp3' },
	{ name: 'INNNN', category: 'inn', file: 'INNNN.mp3' },
	{ name: 'itai itee itai', file: 'itai_itee_itai.mp3' },
	{ name: 'jakajakajanjan', file: 'jakajakajanjan.mp3' },
	{ name: 'Japanglish', category: 'english', file: 'japanglish.mp3' },
	{ name: 'just do it!', category: 'english', file: 'JUST_DO_IT_COME_ON.mp3' },

	{ name: 'kaio-ken', file: 'kaioken.mp3' },
	{ name: 'tickling Choco', file: 'tickles_Choco.mp3' },
	{ name: 'KITAAAA', file: 'KITAAAA.mp3' },
	{ name: 'koi', file: 'koi.mp3' },
	{ name: 'kon x4', file: 'kon_x4.mp3' },
	{ name: 'konpeko', file: 'Konpeko.mp3' },
	{ name: 'ku nyan', file: 'Ku_nyan.mp3' },
	{ name: 'lets party', file: 'lets_party.mp3' },
	{ name: 'low energy shuba', category: 'shuba', file: 'low_energy_shuba.mp3' },
	{ name: 'mama', file: 'mama.mp3' },
	{ name: 'mesu shuba', category: 'shuba', file: 'mesu_shuba.mp3' },
	{ name: 'morning shuba', category: 'shuba', file: 'morning_shuba.mp3' },
	{ name: 'nnnaaaa na na', file: 'nnnaaaa_na_na.mp3' },
	{ name: 'NNNNNNAAAAA', file: 'Suba_NAAAAA.mp3' },
	{ name: 'no lettuce', category: 'english', file: 'No_Lettuce.mp3' },
	{ name: 'oi', file: 'oi.mp3' },
	{ name: 'OMAE!!!', file: 'Omae.mp3' },
	{ name: 'okay (distant)', category: 'english', file: 'okay_distant.mp3' },
	{ name: 'oppe sugoi', file: 'oppe_sugoi.mp3' },
	{ name: 'ora x3', file: 'ora_x3.mp3' },
	{ name: 'ora x3 shuba x3', file: 'ora_x3_shuba_x3.mp3' },
	{ name: 'oshiri puri puri', file: 'oshiri_puri_puri.mp3' },
	{ name: 'oyasumi asmr', file: 'oyasumi_asmr.mp3' },
	{ name: 'prr', file: 'prr.mp3' },
	{ name: 'quackquack', file: 'quackquack.mp3' },
	{ name: 'satifaction', category: 'english', file: 'satifaction.mp3' },
	{ name: 'scream baka', file: 'scream_baka.mp3' },
	{ name: 'secret', category: 'english', file: 'secret.mp3' },
	{ name: 'shuba', category: 'shuba', file: 'shuba.mp3' },
	{ name: 'shuba neck snap', category: 'shuba', file: 'shuba_neck_snap.mp3' },
	{ name: 'shubaba yawn', category: 'shuba', file: 'shubaba_yawn.mp3' },
	{ name: 'shubax4', category: 'shuba', file: 'shubax4.mp3' },
	{ name: 'shubax7', category: 'shuba', file: 'SUBASUBASUBASUBASUBASUBA.mp3' },
	{ name: 'shushushu x3', file: 'shushushu_x3.mp3' },
	{ name: 'shushushushu', file: 'shushushushu.mp3' },
	{ name: 'spaciba', file: 'spaciba.mp3' },
	{ name: 'subaru is #1', category: 'english', file: 'subaru_is_number_1.mp3' },
	{ name: 'UN', file: 'UN.mp3' },
	{ name: 'yabai distant', file: 'yabai_distant.mp3' },
	{ name: 'yada', file: 'yada.mp3' },
	{ name: 'yawn', file: 'yawn.mp3' },
	{ name: 'i wake up & you wake up', category: 'english', file: 'You_Wake_up.mp3' },
	{ name: '(distant)yoisho', file: 'yoisho_distant.mp3' },
	{ name: 'YUMMY', category: 'english', file: 'YUMMY.mp3' }
];
sounds.forEach((sound) => {
	sound.file = `${dir}/${sound.file}`;
});
export default sounds;
