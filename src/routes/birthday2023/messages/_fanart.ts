import { dev } from '$app/environment';

const dir = dev ? '/assets/images/bday23' : '/assets/images/bday23';

interface SubaFanart
{
	name: string;
	url?: string | URL;
	message: string;
	src: string;
}

const fanart: Array<SubaFanart> = [
	{
		name: 'Sober Banana',
		message: 'Happy Birthday Subaru! Thank you for all of the entertainment over the years!  Here’s a pic of Subarudo Duck enjoying a drink in a pub from my holiday in Tokyo! Here’s to many more years of streaming, singing and laughing. (If your 115db voice doesn’t deafen me first!)  ',
		src:'SoberBanana.jpg'
	},

	{
		name: 'Pedro Lucas',
		message: 'Happy birthday, my very dear Subaru! It\'s a great blessing to be able to celebrate your birthday in one more year. I wish you nothing but complete happiness. You always cheer me up and give me strength to do my best. And whenever i\'m feeling a little down or doubtful, your smile never fails to restore my energy. You really are my Idol. Your pure, positive and energetic attitude always inspires me and makes me want to be more like you. If i had to call someone a hero, that person would be you. From the bottom of my heart, i love you, Subaru. And always keep being yourself. Don\'t let the world change you, you change the world.',
		src: 'PedroLucas.jpg'
	},
	{
		name: 'FallenTenshi!',
		message: 'Happy 5th anniversery Suba-san! Even after all these years, you\'re the one who has been inspiring me until this day. The day when I found your channel, I knew that you\'re someone that can bring joy and hapiness to everyone. Although you got into many troubles in your vtuber journey, yet you never give up and always shine through even the darkest sky you could imagine. You\'re always be the brightest star that shines on the blue sky, Oozora Subaru.   My advise as a subatomo is I hope you can keep your health at a good level. It\'s no good to push yourself too hard, okay! I also put you on my M4WD as my gift to you, also to remind me there\'s always a joy in my every moments  Shine bright -FallenTenshi!',
		src: 'FallenTenshi.jpg'
	},
	{ name: 'Kostiw', message: 'Happy Birthday! Wishing you luck in your future growth!', src: 'Kostiw.jpg'},
	{
		name: 'Kua',
		message: 'Happy Birthday to SubaSubaru! I hope you celebrate your birthday with a happy and cheerful smile!!, I also have my birthday on July 2nd 草; I wish you have a great day during your birthday and everyday!',
		src: 'Kua.jpg'
	},
	{
		name: 'Goon',
		message: 'Happy Birthday Subaru, I decided to send in my (at this point) most liked Tweet.  スバル、お誕生日おめでとう！僕の一番良い評価がある絵を選んだ。',
		src: 'Goon.jpg'
	},
	{ name: 'PerMaster', message: '誕生日おめでとうしゅばしゅばしゅばー！', src: 'PerMaster.jpeg' },
	{
		name: 'nddWAR',
		message: 'Happy birthday, Shuba! I\'ve been watching hololive for 3 years now, and I was there for your third 3D live, I can\'t believe it\'s now the 5th. We all adore you and your noisy personality, so stay healthy, we don\'t want to see you sad or sick! You are one of the reason why I fell and kept watching hololive, and it\'s been amazing ever since. We\'re looking forward to another year with you as your loyal viewers. Happy birthday! I\'m glad to be part of this community.',
		src: 'EnddouWAR.png'
	},
	{
		name: 'AtoFreakingB',
		message: 'Happy 17.5th birthday Subaru!! It\'s been a blast watching Subaru a lot and looking forward to tons of more stuff that Subaru and Hololive have planned for the furture!! ',
		src: 'AtoFreakingB.jpg'
	},
	{
		name: 'Knox',
		message: 'HAPPY BIRTHDAY SUBARU! In this special day i wish that all of your dreams will come true, that you can spend a lot time doing stuff you like and that you stay healthy and won\'t over work yourself. I hope that you will spend this day with your friends and family. Thank you for those 5 years full of fun and joy you given to us. ',
		src: 'Knox.jpg'
	},
	{ name: 'Kusa', message: 'Go little Shuba', src: 'Kusa.jpg' },
	{
		name: 'Maguro',
		message: 'HAPPYY BIRTHDAYYY SUBARUUU!!!  your good and high spirits makes my day better after work thank you wish you all the best and keep up the good work',
		src: 'ExplosiveTuna.jpg'
	},
	{
		name: 'Alkahf.Jr',
		message: 'Millions of wishes, hundreds of smiles, lots of love, and thousands of Ajimaru~ Wish you a very Happy Birthday Shuba!    THANK YOU for everything! Chuki~♡   ',
		src: 'Alkahf.jpg'
	},
	{
		name: 'Asriel',
		message: 'ちわっす! I hope you are having a wonderful day Subaru ! I can\'t believe that you are now 17.5 years old, time sure flies fast, I\'m very thankful for all the amazing streams and projects  you\'ve done, you never dissapoint and I\'m always going to love how positive and energetic you are, although from time to time, even though I know you\'ll keep doing your best all the time, try to rest ! I hope you enjoy this small photo that I took of one of our beaches here in Cádiz, I\'m sure you would love to sit back and relax drinking some melon soda here ! thank you for everything my favourite ducky may you keep being so bright and cheerful forever ! お誕生日、おめでとう！',
		src: 'Asriel.jpg'
	},
	{ name: 'Kodan', message: 'Happy birthday!! Hope you will get more achievements in future my duck oshi💙', src: 'Kodan.png'},
	{
		name: 'Zizaku',
		message: 'Happy Birthday Subaru! Hope you have a wonderful day! Going to need a second Shuba shelf soon, but I\'m excited for more merch!',
		src: 'Zizaku.jpg'
	},
	{ name: '鬼武羅', message: '「スターライト」 ', src: '鬼武羅.png' },
	{
		name: 'ascapade',
		message: 'Happy Birthday Subaru! I hope your day is filled with love and health! Excited for another year of Duck supremacy!',
		src: 'ascapade.png'
	},
	{ name: 'Sylstern', message: 'Happy Birthday Subaru!!! <3 / スバルお誕生日おめでとう！！！<3', src: 'Sylstern.png'},
	{ name: 'josh', message: ' Happy Birthday!! Congratulations on your 17.5th birthday. As the self-appointed sun of Hololive, a ball of energy. I wish that u stay healthy, energetic and strong. Take breaks when you need. Always to take care of yourself. Subaru is very cute', src: 'josh.jpg'},
	{ name: "Ragin' Canadian", message: '', src: 'ragin.png'},
	{ name: "Cipher", message: 'Happy Birthday Subaru! You\'ve really inspired me to work hard and continue drawing! You got me through hard times, and I wish you all the best and even more happiness to come!', src: 'cipher.png'},
	{ name: "Stealter", message:			'Happy Birthday and Buon Compleanno Subaru!! from Naples, Italy', src: 'stealter.jpg'}

];
// fanart.forEach((f) =>
// {
// 	f.src = `${dir}/${f.src}`;
// });
export default fanart;
