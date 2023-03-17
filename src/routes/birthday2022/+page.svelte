
<script>
	import { getContext, onMount } from 'svelte';
	import { browser } from '$app/environment';

	import { baseURL } from '$lib/variables.ts';
	import MapToolbar from '$lib/map/MapToolbar.svelte';
	import MapOverlayContainer from '$lib/components/MapOverlayContainer.svelte';

	import { media } from '$lib/stores/stores';
	let metaimg = '/assets/images/subaru_birthday_thumbnail.png';
	let metatwi = '/assets/images/subaru_birthday_thumbnail.jpg';

	let piano = '/assets/images/instruments/piano.webp';
	let accordion = '/assets/images/instruments/accordion.webp';
	let flute = '/assets/images/instruments/flute.webp';
	let drums = '/assets/images/instruments/drums.webp';
	let guitar = '/assets/images/instruments/guitar.webp';
	let saxophone = '/assets/images/instruments/saxophone.webp';
	let showMapIcon = '/assets/images/subatomos_around_world.png';
	let loading = '/assets/images/instruments/loading-suba-music.gif';
	import 'leaflet/dist/leaflet.css';
	import { Modal } from 'svelte-simple-modal';

	import Birthday2022CreditsButton from '$lib/components/Birthday2022CreditsButton.svelte';

	import { MetaTags } from 'svelte-meta-tags';
	// import messages from '../birthday2022-messages/_messages.js';

	//required for importing modules that need clientside for sveltekit
	let LeafletContainer;
	let ControlContainer;
	let MarkerContainer;
	let PopupContainer;
	let CarouselContainer;
	onMount(async () => {
		if (browser) {
			LeafletContainer = (await import('$lib/map/Leaflet.svelte')).default;
			ControlContainer = (await import('$lib/map/Control.svelte')).default;
			MarkerContainer = (await import('$lib/map/Marker.svelte')).default;
			PopupContainer = (await import('$lib/map/Popup.svelte')).default;
			CarouselContainer = (await import('svelte-carousel')).default;
			hideMap();
			document.getElementById('loading').style.transition = 'opacity 0.5s linear 0s';
			document.getElementById('loading').style.opacity = 0;
			setTimeout(() =>
					document.getElementById('loading').style.display = 'none'
				, (500));
		}
	});




	function getMessages()
	{
		for (let i = 0; i < bdaymsgs.length; i++)
		{
			let x = bdaymsgs[i];
			let ll = typeof x.latlng === 'string' ? x.latlng.split(',') : x.latlng;
			let latlng = ll.map(s => parseFloat(s));
			x.latlng = latlng;
			bdaymsgs[i] = x;
		}


		return bdaymsgs;
	}
	let dir = '/assets/images/subarudoducks/';

	let bdaymsgs = [
		{name:"Huangas",twitter:"",message:"Hello Subaru, I heard it was your Birthday and I wish you a happy birthday, I love watching your videos as they give me a lot of joy. Thank you ",pic:"",art:"",latlng:"-25,133"},
		{name:"Orion",twitter:"",message:"Happy Birthday Subaru ! I've followed you since 2020 now, you're the one who made me discover Hololive and Vtubers ! œI hope you'll make a lot more of good memories and experience during this year with your friends ! œHappy Birthday ! ",pic:"",art:"",latlng:"48.85,2.35"},
		{name:"@r_kudrav",twitter:"@r_kudrav",message:"Happy Birthday to our beloved Tomboy Duck. May you always be enthusiastic to make time for us Subatomo and Ahijo. Keep it up Subaru.",pic:"",art:"",latlng:"-0.789,133.92"},
		{name:"タカカイ",twitter:"",message:"スバルちゃんお誕生日おめでとう！！！！œこれからも一緒に楽しい一年つくろœ大好き！！！",pic:"",art:"",latlng:"34.65,135.5"},
		{name:"@KumaStarlight",twitter:"@KumaStarlight",message:"Subaru Happy birthday!! Wish you good luck and stay healthy!! you are amazing!!!",pic:"",art:"",latlng:"0.89,113.46"},
		{name:"Rehan",twitter:"",message:"Happy birthday, Subaru!œMay all your wishes come true!œI can’t express how much you mean to me. You have done so much for me and I just want to say thank you, Subaru.œHave a wonderful year! Wishing you all the best!",pic:"",art:"",latlng:"4.93,117.59"},
		{name:"Alex",twitter:"",message:"Happy Birthday Suba! I hope your day is special and you feel like you are truly loved, because you definitely are! I've only known and watched you for a year, but within that year you've only been positive for me, and a deeply beloved section of my day to day.",pic:"",art:"",latlng:"35.75,-79"},
		{name:"Abhyudit M",twitter:"",message:"Subaru has never failed to put a smile on my faceœSubaru always has a nice charismatic energy which radiates and makes me feel calm and happy on stressful daysœSubaru also has pretty amazing dance moves and dancing talent which always blows us away and never fails to impress the audience œEven though I am not able to catch her streams live I will always continue to support Subaru however I canœAll the Best for your future endeavors,œWe Subatomos of the world will always love and appreciate you!!!",pic:"",art:"",latlng:"18.52,73.856"},
		{name:"Colby",twitter:"",message:"Happy birthday Subaru! Here's a picture of Shuba Duck on the Eerie Canal near a historic boat. I love your high positive tomboy energy that always makes me smile. I appreciate the effort you make for us overseas fans. Have a great birthday!",pic:"4GZ8rqN.jpeg",art:"",latlng:"40.71,-74"},
		{name:"Nari",twitter:"",message:"Happy Birthday Subaru, your streams always make me smile whenever I feel down, おたんじょびおめでとう！！！！",pic:"",art:"",latlng:"1.35,103.819"},
		{name:"@Erendon0",twitter:"@Erendon0",message:"Happy birthday Subaru! I started watching you in 2020. You and your streams have gotten me through many tough times. I have been learning Japanese for 2 years so I can watch your streams without subtitles. You always make us happy! Be safe Subaru and take as many days off as you can! Thank you Subaru! OOZORA SUBARU, OOOOTAAAAAAANNNJOOOOUBIIIIIIIIIIIII OOOOOOOOOOOOOOMMMMMMMMMEEEEEEEEEDEEEEEEEEEEEEEETOOOOOOOOOOOOOUUUUUU!!!!",pic:"",art:"",latlng:"61.21,-149.89"},
		{name:"Edward wantono ",twitter:"",message:"Subaru has helped me in many ways when I'm feeling sad or stressed. She always cheers me up! Her cheerful side and words has given me the motivation to study Japanese because I want to understand what she's saying. Since then my Japanese has improved a lot and I would like to go to Japan. Thank you Subaru ありがとう！元気だね。",pic:"",art:"",latlng:"-6.15,106.89"},
		{name:"Blaxe Frost",twitter:"",message:"Hello! I'm one of those fans that can't watch every stream so I just leave likes every time I see you're Live and just enjoy the clips. I Love how while being truthful to yourself and others, you also seem very interested and involved in everything you do. Your story is one of an aimless energy made into focused passion which is very inspiring for any aimless kind of person. I wish you a happy next year... maybe not happy but, let's say... prosperous and meaningful next year.",pic:"",art:"",latlng:"-33.58,-70.69"},
		{name:"UberHobber",twitter:"",message:"Happy Birthday Subaru! Your super powerful energy makes so many people around the world very happy, so I hope our messages can make you happy too! I don't understand Japanese very well, but I still enjoy watching your streams and listening to your music. I hope that your birthday is very fun!",pic:"High_Falls_Subarudo.jpg",art:"",latlng:"43.16,-77.61"},
		{name:"@ace_highwind",twitter:"@ace_highwind",message:"Hello Subaru.œFirst of all, HAPPY BIRTHDAY!!œHow are you feeling? Another year went by. œDo you think that you managed to grow up as a person or achieved something meaningful?œIt's great to look back and check what you have done the previous years and compare how much we have changed, the photo I added is a place that I have visited a lot and besides the castle that hasn't changed that much, the surroundings have changed a lot. If you want to check it, the place it's called: El parc de la Mar.",pic:"Subarudo_in_Majorca_edited2.jpg",art:"",latlng:"39.56,2.65"},
		{name:"@gegeji4",twitter:"@gegeji4",message:"Your streams and personality always make my day! I like how you are funny and it's very entertaining to watch you! I really loved your performance of Pleiades, the song and your dance is great! So Happy Birthday and I wish you further success for the future and beyond!",pic:"",art:"",latlng:"48.89,8.69"},
		{name:"Jimie Megane",twitter:"",message:"I started to know Subaru around one year ago, which was the ASMR clip. Her ASMR was really funny, and weirdly enough I'm into it LOL. And her 3rd anniversary performance just made me into full Ahijo. Really love her passion on learning English. Keep on shining Subaru-san, and never give up!",pic:"",art:"",latlng:"6.11,102.21"},
		{name:"@nezotempest",twitter:"@nezotempest",message:"Subaru I hope you have a wonderful and awesome birthday!!!! I've been following you since your debut stream and gosh you sure have changed a lot but I still love watching your streams!!! I hope for another wonderful year of subaru!!! Happy birthday my favorite duck!!!",pic:"",art:"",latlng:"37.2,-115.79"},
		{name:"@Kohiru_Aam",twitter:"@Kohiru_Aam",message:"Subaru! I've been watching you for about 2 years now. You always make my day better every time I tune in your stream or watch your clips. You give me motivation to continue doing my best even when I'm feeling down . Please continue to be the sun of Hololive for all of us! Your brightest smile is like our morning cup of coffee and I will continue to support you till the end of the road!œFrom your truly,œSubatomo.",pic:"",art:"",latlng:"5.3,103.11"},
		{name:"Armin",twitter:"",message:"Whether you read this or not, I'm quite happy that you are able to do what you do! I usually don't enjoy watching streams, but you are the exception. I enjoy watching you doing your best!œI wish you the best and happy birthday!œお誕生日おめでとう！",pic:"IMG_20220525_144608.jpg",art:"IMG_20220525_132257.jpg",latlng:"14.6,121.02"},
		{name:"Dennis Ast",twitter:"",message:"Hello I wanted to thank you for all the hard work and I am looking forward to see more of your amazing content in the future. You're the reason I started to learn japanese as my second non native language. (native: german; first non native: english)",pic:"",art:"",latlng:"48.21,9.02"},
		{name:"@Linajabba",twitter:"@Linajabba",message:"Hello Subaru, œI have watched you for over 1 and a half years now and I really respect your hard work and how you handle other people (you seem like a great friend and support to other Holomems) anyways I really like you and will keep supporting you. Greetings from Germany,œLinajabba",pic:"",art:"",latlng:"51.45,7.01"},
		{name:"@hanaz__kambing",twitter:"@hanaz__kambing",message:"  Shuba!! Subaru is cute!œBefore knowing Subaru, I've never know that Hololive- no, VTuber was a thing. I thought that there's just HoloMyth because I don't remember seeing such an interesting concept of streaming. But then I realized that VTuber are kinda my childhood 😅œBut anyway, Subaru is the one who made me more interested in Hololive. Subaru changed my life and I am glad that I discover her! Everytime I feel empty or lonely, I get me some Subaru 😌œSo, thank you Subaru!! Love ya!! 😊💖",pic:"",art:"",latlng:"3.07,101.51"},
		{name:"Exoduce",twitter:"@RP_Exoduce",message:"Happy Birthday Subaru-chan! Thank you for your hard work this year as well! Your streams always gives me the energy I need to go on both good and bad days! Your bright smile and sun-like energy goes beyond the virtual world to the real world! Have a wonderful year ahead and more hell streams to come! P.S. Always enjoy what you do and we will surely enjoy it too! ",pic:"",art:"",latlng:"12.87,121.77"},
		{name:"緋凪",twitter:"",message:"お誕生日おめでとう！œいつも面白い企画をありがとう！œ今年も最高の一年にしてくれええ！",pic:"",art:"",latlng:"35.67,139.65"},
		{name:"2 legends, 1 noob.",twitter:"",message:"お誕生日おめでとうございます、スバルさん!œ誕生日は楽しんでください!",pic:"",art:"",latlng:"1.35,103.67"},
		{name:"@Lucas_R_Liso",twitter:"@Lucas_R_Liso",message:"To Subaru:œI'm sure there are thousands of other messages, so I'll try to keep mine brief.œSimply put, I admire you. Your story, and your joy of life is inspiring. You inspire me to try and become the best version of myself I can possibly can.œThank you for being yourself, and happy birthday.",pic:"YGuYkRK.jpeg",art:"",latlng:"-38.41,-63.61"},
		{name:"@mikachu051",twitter:"@mikachu051",message:"Happy birthday!!! I wish you a wonderful birthday. Everyone in the UK is celebrating with you! Thank you for making me smile and laugh everyday!!!",pic:"Duck.png",art:"Subaru birthday.png",latlng:"52.61,0.88"},
		{name:"@MrJunior717",twitter:"@MrJunior717",message:"Dancing Shuba was my introduction into VTubers and hololive, now I take Shuba with me to remind me I can do anything I set my mind to! Keep it up!",pic:"0BEwHbv.jpeg",art:"",latlng:"51.22,4.40"},
		{name:"Christopher Choo",twitter:"",message:"Happy birthday! I'm always looking forward to your streams even though I can't watch them all and am grateful for any that I'm able to. Even watching just clips of your streams will make my day. Just like you have been learning and improving yourself on english, I'm also trying my best with japanese. We see your effort in everything you are doing! Please continue to do your best but don't overwork yourself.",pic:"SubarudoDuckVisitsUbisoftSingapore.jpg",art:"",latlng:"1.29,103.79"},
		{name:"Skirrtle",twitter:"",message:"Subaru chan, I want to wish you a happy birthday. I hope you're having a blast on your birthday and hope all of your wishes come true!! This is the 4th time we've celebrated your birthday together. I hope we can celebrate more birthdays together. Once again Happy Birthday Subaru chan or in Indonesia we usually say \"Selamat ulang tahun\", I love you!!!",pic:"20220528_104457.jpg",art:"",latlng:"-7.25,112.75"},
		{name:"Radheshyam",twitter:"@_U_dunno_ME",message:"🎂スバルちゃん🎂お誕生日おめでとう🎂🥳œMay all your dreams come true this year!🥰œThank you for your wonderful streams.♥️œWhenever I'm feeling down your streams 🚑ALWAYS cheer me up and makes me feel better. Sending virtual hugs 🤗œHave a nice day🌞 and take care of your healthœHappy Birthday Subaru Chan🥳 ",pic:"",art:"",latlng:"13.08,80.27"},
		{name:"Rarely",twitter:"",message:"Happy Birthday Subaru! I've been a fan for 2 years now. Your never-ending energy makes everything you do fun and always cheers me up! It's been fun watching you work hard and grow as an idol, a streamer, and a (very cute) duck! Keep being you, and have a great birthday!",pic:"20220530_231649.jpg",art:"",latlng:"1.29,103.77"},
		{name:"mo",twitter:"",message:"お誕生日おめでとう！！！笑顔をありがとう＜３",pic:"HqmwpKl.png",art:"",latlng:"-31.95,115.86"},
		{name:"@Goondius",twitter:"@Goondius",message:"I really adore Subaru, what started as just mild interest developed into something that brightens my every day. Even to the point that I picked up learning japanese and even started drawing. I really love our duck. She really is Hololive's sun but also our sun.　(bad self translation following) œ僕はスバルをすきだ。最初にスバルは少し面白いだでもいまは毎日は幸せだ。だから日本語を少し習ったと描画習った。僕たちのアヒルはめっちゃすき。スバルはホロライブの太陽だでもも僕たちの太陽だ。œ ",pic:"",art:"xCqhzgd.jpg",latlng:"51.16,10.45"},
		{name:"David Ting",twitter:"",message:"Hope you have a very happy shuba birthday from your Subafriends in Sydney, Australia",pic:"Subarado Duck at  Sydney Opera House 1.jpg",art:"Subarado Duck at Sydney Opera House 2.jpg",latlng:"-33.85,151.21"},
		{name:"スバルモ",twitter:"@subarumodayo",message:"タンジョウビオメデトウナンダヨ！コレカラモケンコウニハキヲツケテガンバルンダヨ！オウエンシテルンダヨ！",pic:"",art:"",latlng:"34.69,135.5"},
		{name:"@gurekoro",twitter:"@gurekoro",message:"今年も楽しい配信を毎日ありがとうっ！！頑張り屋さんなところは大好きだけども身体は大事に、そしてもっと笑ってて欲しい、幸せになってね！！œこれからもよろしくちゃん！",pic:"",art:"",latlng:"35,137"},
		{name:"DyerWolf",twitter:"",message:"Happy birthday Subaru!! I took you to Boston Public Garden, the home of many adorable ducks. This statue honors the famous American children's book \"Make Way for Ducklings\" which is set in the same garden.  They were also celebrating, what a fun surprise party! I hope this is the start of a wonderful year for Oozora Subaru and Subatomos worldwide!",pic:"20220531_093433.jpg",art:"",latlng:"42.35,-71.06"},
		{name:"Ragin' Canadian",twitter:"",message:"Happy birthday to the idol with a fantastic voice, great dancing, and a personality that shines like the sun. Happy birthday Subaru!!!",pic:"JN1rFlX.jpeg",art:"",latlng:"37.02,-76.34"},
		{name:"Barsett",twitter:"@Barsett1",message:"Happy Birthday Subaru! May it be a day filled with joy and laughter!",pic:"Subaru_Merch.jpg",art:"",latlng:"47.75,-122.16"},
		{name:"@SapphireLeo2",twitter:"@SapphireLeo2",message:"Hi Subaru! Thank you for being an inspiration. I always love your energy and you being hard working! It's amazing how you try new things as well. œYou improved speaking English a lot, so please be more confident about it!œI'm genuinely happy being one of your fans. Let's do our best continuing forward!!! ",pic:"ducc.jpg",art:"",latlng:"53.14,-8.24"},
		{name:"ふじ",twitter:"",message:"スバルちゃん誕生日おめでとう！！œスバルちゃんに出会って約10ヶ月！ほんとうに楽しくてあっという間でした！！œぷれあですで感動してメンバーに入り、3rdライブでさらにキレを増したダンスを見て、スバルちゃんの頑張りを感じ、僕も頑張ろうと思って最近は勉強を頑張れるようになりました！œ月並みですが、本当にあなたに出会えてよかった。œこれからもずっと応援してます！体調には気をつけて頑張ってください！！",pic:"FUZavklaMAAHJGB.jpg",art:"",latlng:"35.49,139.28"},
		{name:"@KineticPhylum",twitter:"@KineticPhylum",message:"Happy birthday Subaru-sama!œI support Icarus Jet Coaster!",pic:"20220531_162340_HDR.jpg",art:"20220531_155722.jpg",latlng:"49.28,-123.12"},
		{name:"あんとん",twitter:"@12_antooon",message:"誕生日おめでとうッス！œ新たな1年でさらにスバルちゃんが飛躍することを願ってるッス！",pic:"",art:"",latlng:"36.3,139.8"},
		{name:"Rybuca",twitter:"",message:"Thank you for bringing many smiles to people all over the world. I will always be cheering for Subaru.",pic:"TYE7m1w.jpg",art:"",latlng:"52.62,1.29"},
		{name:"Anna",twitter:"",message:"お誕生日おめでとうございます〜！œいつも楽しい配信をしてくれてありがとうございます！œスバルのおかげで、日本語能力試験の２級を無事に合格しました。œこれからもスバルの配信を見て日本語を勉強します♪œよろしくお願いします！",pic:"subaru make way for ducklings.png",art:"",latlng:"42.35,-72.06"},
		{name:"リムリン",twitter:"",message:"CHIWASSSU！！œいつも私たちを笑顔にしてくれてありがとう！スバルは私たちが落ち込んでいるときに励ましてくれます。スバルは私たちが寂しいときにそこに居てくれます。私たちの愛はスバルが思うより大きいものです！おつヴぁる！ありがとう。♡♡",pic:"Subarudonesia.png",art:"",latlng:"-7.25,111.75"},
		{name:"Raze レーズ",twitter:"",message:"Happy Birthday to you, Subaru! œIt's not a lot, but I want to express my gratitude to you with this short message. Thank you always for sharing your positive energy, streaming nearly everyday, and of course, your wonderful singing and dancing with us Subatomos. You really are like the sun that always brightens my days! œLove from Malaysia! Hope you have another wonderful year ahead of you!",pic:"My small collection of Subaru's merch.jpg",art:"",latlng:"5.3,102.11"},
		{name:"A251t_にゅーと",twitter:"",message:"時に険しく、時に辛さに襲われることもありましたが、いつもスバルさんに元気と気力をもらってきました。中々形には出来ないコトですが、せめてこのような形ででも、貰っていた元気や勇気を、感謝や祈りを込めて届いたら、と願います。œ誕生日おめでとうございます！これからも楽しく活動が続いてゆくことを、そしてスバルさんの幸せを願っています。",pic:"DSC_0242.jpg",art:"",latlng:"35.3,139.8"},
		{name:"Absolute Link",twitter:"",message:"Happy Birthday, Subaru!œI love the energy, enthusiasm, and hard work you bring to everything. Seeing you on stage is incredibly inspiring!œWishing you all the best!œ(For the photo, I took Subarudo Duck to watch Niagara Falls, which light up at night)",pic:"duck-nf-combined.jpg",art:"",latlng:"43.09,-79,09"},
		{name:"Isaac",twitter:"@Irsacfac",message:"Feliz cumpleaños Subaru, thats happy birthday in spanish. Hope you have had a wonderful day. I am not good with words, but I can say you put smiles in many of us and I hope we can return the favor. Thanks for all you does and I hope we can celebrate next year together too.",pic:"20220612_152711.jpg",art:"20220612_161403[1].jpg",latlng:"9.84,-83.9"},
		{name:"@AtofreakingB",twitter:"@AtofreakingB",message:"Happy Birthday Subaru!! It's been over 2 years now since I started watching your streams and it's been a blast watching you grow so much since then. œSubaru's charms and positive energy certainly never stops to amaze me.œI remember when Subaru mentioned that only 2% of fans were overseas and even called them Ninjas. That number has certainly increased by a lot now! Here's hoping to another amazing year with Subaru and Subatomos! ",pic:"v5yBJgX.jpeg",art:"",latlng:"1.35,103.81"},
		{name:"鬼武羅alzon",twitter:"@benson70031",message:"大好きなアイドルに捧げる、あなたは私たちの宝物。この大好きな気分が、あなたにも伝わりますように。この日、あなたは私たちの愛で幸せに祝うことができます。",pic:"",art:"5pnFMhV.png",latlng:"23.69,120.96"},
		{name:"スライムマン",twitter:"",message:"スバルちゃんお誕生日おめでとう！🎊🎉🥳œスバルちゃんがゲームを楽しくプレイする姿、嬉しそうに雑談する姿、アイドルとして輝いている姿、どれも見ていて本当に楽しくて元気を貰えてるよ！œおかげで明るい気持ちになれて毎日がすごく楽しく過ごせてます！œいつも本当にありがとうね！スバルちゃんは誇れる推しだよ！！œこれからもいっぱい楽しんで応援していくよー！",pic:"",art:"スバルちゃん誕生日.jpg",latlng:"34.68,135.8"},
		{name:"Yonsei",twitter:"",message:"Tanjoubi Omedetou Subaru!œHope you have a great birthday and thank you for all the hard work you have put into your streams and Hololive. You have made Hololive incredibly enjoyable for me as both the sun and tsukkomi. You take many bits in stride and work as an MC very well. Keep up the good work and please take breaks when necessary.œI took subarodu duck at the college I have recently graduated at!",pic:"gZHvweN.jpeg",art:"",latlng:"38.02,-78.47"},
		{name:"コア",twitter:"",message:"お誕生日おめでとう",pic:"36.jpg",art:"",latlng:"31.96,-99.9"},
		{name:"reece",twitter:"@reecevvv",message:"誕生日おめでとう🎉色々な意味でまた飛躍の一年になったけどまた新たな活躍を期待してる！これからも応援してる！",pic:"",art:"",latlng:"35.86,139.64"},
		{name:"戦龍",twitter:"",message:"スバルちゃんお誕生日おめでとう！いつも面白い配信ありがとう！スバルちゃんと一緒に泣いたり笑ったりマジで最高です！スバルちゃんに出会って本当に良かったと思っています、これからもずっと応援しますよ！",pic:"",art:"2022shuba birth.png",latlng:"25.03,121.56"},
		{name:"@keruvin_ka",twitter:"@keruvin_ka",message:"Hello Subaru! This is your Subatomo from Indonesia, ケルヴィンKA!œHappy Birthday to you Subaru! I wish you to be always healthy and happy, and lots of inspirations will come to our creative idol. I want you to know that I’m really grateful to be able to discover you and Hololive. You changed my life for the better and really help me survived during the hard times. I always appreciated all of your hard work trying to give your best in everything for us. I will always do my best to support you too!",pic:"SubaBirthday_Heine.png",art:"",latlng:"-6.81,110.79"},
		{name:"Cato",twitter:"",message:"Happy Birthday! Thank you for the many hours of entertainment!",pic:"shuba.jpg",art:"",latlng:"35,-97"},
		{name:"Citrous",twitter:"",message:"Happy BIRD-day Subaaaru! Love your energy, keep up the good work!",pic:"",art:"",latlng:"45.8,9.08"},
		{name:"ChrisPeko08",twitter:"",message:"Happy birthday Subaru, thank you for your great work and hard work every day, with love from all your fans",pic:"",art:"",latlng:"-31.95,115.86"},
		{name:"はやかわそうた",twitter:"",message:"スバルちゃん誕生日おめでとう！これからも太陽みたいに明るくて元気なスバルちゃんでいてね",pic:"FT5NysNagAEmZM0.jpg",art:"",latlng:"34.22,134.01"},
		{name:"@Kaiser_Milan",twitter:"@Kaiser_Milan",message:"Subaru-chan congrats!! Have a fun birthday!",pic:"",art:"",latlng:"45.46,9.19"},
		{name:"Gabriel",twitter:"",message:"Happy birthday Subaru. I hope that you keep up the incredible work with your streams and other content. By the way have you seen Moon Knight? I’ve heard its really good.",pic:"",art:"",latlng:"38.58,-121.49"},
		{name:"Dichu De Leon",twitter:"",message:"Happy birthday Subaru thank you for entertaining and bringing joy to the world.",pic:"",art:"",latlng:"37.33,-121.88"},
		{name:"Ryushindai",twitter:"",message:"Happy Birthday Subaru!!œThis year has been a rough one but thanks to your streams and energy I have enough will to keep going on!",pic:"",art:"",latlng:"-23.55,-46.63"},
		{name:"EliR",twitter:"",message:"You are great Subaru! thank you for being yourself, happy birthday!",pic:"",art:"",latlng:"-35.67,-72.54"},
		{name:"Aiken ",twitter:"",message:"Dear Subaru, I can't believe that a single duck could make millions of people happy and that I'm one of them. I truly thank you for your efforts and for not giving up. Keep on shining!",pic:"",art:"",latlng:"16.47,120.58"},
		{name:"Hisora",twitter:"",message:"どうもスバルちゃん、僕は韓国のスバルちゃんのファンです。2022年の誕生日おめでとう！！！僕がスバルちゃんの配信を始めてみた時からも1年が過ぎ、スバルちゃんのこともっと好きになりました！高校3年生なので、あまり配信見れないけどいつも応援してます。いつも楽しい配信してくれてありがとう！！！愛してます！！！",pic:"",art:"",latlng:"37.56,126.97"},
		{name:"@_loog_",twitter:"@_loog_",message:"Ajimaru!!!!! o((>ω< ))o, Happy birthday Subaru!! Thank you for all the laughs you have given me since I started watching your streams 3 years ago, I wish you all of the best, may you continue to be this bright and cheerful girl full of spirit delivering great content for many more years to come!!╰(￣ω￣ｏ)",pic:"",art:"",latlng:"-19.91,-43.93"},
		{name:"@sexykaigainiki",twitter:"@sexykaigainiki",message:"Happy birthday Subaru, thank you for all the hard work you do to keep all your fans from everywhere entertained and happy. Its been fun to have you with us and I'm glad you are a part of Hololive. I look forward to more fun times and happy memories :^)",pic:"",art:"",latlng:"34.05,-118.24"},
		{name:"@duckcrusader208",twitter:"@duckcrusader208",message:"Happy birthday Subaru!!!",pic:"DSC02829.jpg",art:"",latlng:"29.76,-95.36"},
		{name:"@kitaikanadesu",twitter:"@kitaikanadesu",message:"お誕生日おめでとう、スバルちゃん！œI hope this wonderful birthday of yours is filled with joy and happiness! May you always be blessed in health, talent, and everything on this wonderful day! A wonderful day also means wonderful wishes in your heart, so may this day brings you all that your heart desires! œHappy birthday, Oozora Subaru! 🦆🎉œ(with love from one of your 海外ニキ)",pic:"",art:"",latlng:"-1.23,116.85"},
		{name:"やなぎ",twitter:"",message:"あなたを見つけられて、その魅力に気づくことが出来て本当に良かった。いつも楽しい配信で元気をもらっています。ありがとう！",pic:"",art:"",latlng:"36.25,138.09"},
		{name:"@Banjo_su",twitter:"@Banjo_su",message:"スバルちゃん誕生日おめでとう！スバルちゃんとホロライブのお陰で色んな人との関わりが出来たよ！これからも元気で、スバルちゃんのやりたいタイミングで配信してね！自分も気のままに推すのでね",pic:"",art:"",latlng:"35.99,139.44"},
		{name:"@noot_ks",twitter:"@noot_ks",message:"HAPPY BIRTHDAY SUBARU THANK YOU FOR ALL THE MEMORIES AND ALWAYS MAKING US SMILE!! I HOPE YOU HAVE A GREAT BIRTHDAY AND GREAT MEMORIES TO COME! 🥳🌼",pic:"",art:"",latlng:"39.01,-98.48"},
		{name:"@Blazignite5",twitter:"@Blazignite5",message:"Happy Birthday Subaru! Watching you has always lifted me up whenever I'm down that day. Thank you for being there for the Subatomos. Also, remember to keep taking breaks whenever you need it. We can handle a couple of days without Shuba.",pic:"",art:"",latlng:"12.21,125.02"},
		{name:"Rex",twitter:"",message:"Happy birthday !!",pic:"20220606_132233.jpg",art:"",latlng:"3.14,101.69"},
		{name:"Thunderwing",twitter:"",message:"Happy Birthday Subaru! Another birthday, another season. Time really flies when having fun, in this case, watching you. May you keep on shining, Hololive's Sun!",pic:"",art:"",latlng:"46.86,-71.2"},
		{name:"テスト太郎",twitter:"",message:"君が進みたい道へ進んで行けるように陰ながら応援してます。あ、適度に休んでね(杞憂民",pic:"",art:"",latlng:"35.69,139.7"},
		{name:"James Jackson",twitter:"",message:"Happy birthday, Subaru-chan! Thank you for always doing your best and trying so hard to communicate with us kagai niki. Your English has improved so much!",pic:"",art:"",latlng:"34.09,-118.32"},
		{name:"Chris",twitter:"",message:"Merry Birthmas Subaru! I just wanted to let you know how much I appreciate you. You always brighten my day with your wonderful personality, your funny stories, and your adorable voice. Keep being the amazing person that you are.",pic:"",art:"",latlng:"39.55,-105.78"},
		{name:"@RossComputerGuy",twitter:"@RossComputerGuy",message:"Your content has been inspirational from a creative viewpoint. I love watching you ever since that baseball clip I randomly found on YouTube. You are one of the biggest reasons why I am learning Japanese. Even though I am using Duolingo, it is not the best but I am improving. Your one of my favorite content creators and I hope to see even more content from you in the future.",pic:"",art:"",latlng:"41.89,-87.66"},
		{name:"Grommitmug",twitter:"",message:"Hello Subaru-chan! Happy birthday! œYour streams are always very entertaining, they keep me company whenever I study. They make me feel a little less lonely. Seeing your spirited personality makes me wanna work harder too! I might miss your birthday stream live because I have a university entrance exam on that day, but I'll make sure to watch the archive! Anyway, happy birthday Subaru-chan! I wish you happiness and best of luck in life!",pic:"",art:"",latlng:"-6.2,106.84"},
		{name:"Kuma",twitter:"@Rafif48",message:"Happy Birthday SUBARU!!!! ",pic:"",art:"",latlng:"-1.18,116.83"},
		{name:"naori",twitter:"",message:"Happy Birthday Subaru! Hope you have a great day. Always take care and just be yourself! We subatomos are happy just you being yourself and happy on what you do. Also thank you for always making me smile whenever I watch your stream/clips. Again, happy birthday Subaru!!!",pic:"",art:"",latlng:"11.18,122.59"},
		{name:"Novus",twitter:"",message:"Happy Birthday Subaru chan!œEver since I discovered you while I was going around in hololive, I had fallen for you! I have always seen you as the little sister I never had. You are so bright, cheerful, motivating, and adorable. Take care, have fun and goodluck out there dear Subaru chan :)",pic:"",art:"",latlng:"14.59,120.98"},
		{name:"@ryutamasaki",twitter:"@ryutamasaki",message:"Happy birthday Subaru-chan! During the anime convention Dokomi in germany I carried Shuba Duck around to promote hololive JP and was happy to also meet other Subatomos! ",pic:"IMG_5444.jpg",art:"",latlng:"51.22,6.77"},
		{name:"Billy",twitter:"",message:"Happy Birthday Subaru! Your streams make me feel a lot better when I'm sad or lonely! I hope we get to keep having fun together this year too!",pic:"",art:"",latlng:"41.95, -70.66"},
		{name:"@MakkaUmemori",twitter:"@MakkaUmemori",message:"大空スバルちゃん!　お誕生日おめでっと! I'm so glad I feel into this rabbit hole to find an amazing idol like you!!! Your hardworking attitude always lifts me up and your songs are so cute! Here's to another great year with you and us Subatomos!!!",pic:"",art:"",latlng:"49.05,-122.30"},
		{name:"ITIK",twitter:"",message:"Selamat Hari Jadi to Subaru!!!œHappy birthday, eat well, sleep a lot and keep shining to brighten up people's lives with your smile!!!œLove how you fly in Alternative!!",pic:"",art:"",latlng:"4.53,114.72"},
		{name:"@ren_ydn810",twitter:"@ren_ydn810",message:"スバルちゃん誕生日おめでとう！œチャージ チャレンジ 全力アクセル 頑張るキミへ一番乗りのエールを贈るœそんなスバ友でありたい！これからも応援してます！",pic:"",art:"",latlng:"35.21,140.02"},
		{name:"にくだん",twitter:"@NikudanB",message:"17.4歳のお誕生日おめでとう！！！色んなとこでお祝いすると思うけどここでも盛大にお祝いするぜ！！！！",pic:"IMG_20220530_133308.jpg",art:"",latlng:"35.8,139.72"},
		{name:"J L",twitter:"",message:"お誕生日おめでとうございます！ Let's make more memories together!",pic:"",art:"",latlng:"14.81,121.31"},
		{name:"@WokeButLazy23",twitter:"@WokeButLazy23",message:"Hi Subaru, I love your content and my favorite work of yours is your Officer Subaru segments! I think your English skills are improving very nicely and I believe you brighten every collab you are apart of! I'm proud to have you as my oshi!",pic:"",art:"",latlng:"42.65,-73.75"},
		{name:"Andy",twitter:"",message:"Met Subaru one year ago, I really like your voice and cheerfulness! You always bring energy and vitality for the whole year. I'll never regret being one of the Subatomo!",pic:"",art:"",latlng:"3.06,101.61"},
		{name:"Suzaku",twitter:"",message:"Thank you for being in hololive.œThank you for streaming and making my day betterœThank you for always being bright and cheerful.œThank you for being our SunœThank you Subaru for being SubaruœHappy birthday!!",pic:"",art:"",latlng:"1.35,103.96"},
		{name:"Phoebe",twitter:"",message:"Happy birthday, Subaru! A cute, energetic, and wonderful idol who cares about all her fans. That's what Subaru means to me. I love your voice and cheerfulness, and hope you'll stay with us for a long time to come.",pic:"",art:"",latlng:"35.76,-78.60"},
		{name:"Sobatomo",twitter:"",message:"chiwa subaru, Time flies and I have been a subatomo for 1 year!! really appreciate the happiness you bring to me and I hope you are also having fun when streaming. Wish you the best on your future and I will keep rooting for you 🦆💖",pic:"",art:"",latlng:"2.97,101.79"},
		{name:"@itsyoboibrent",twitter:"@itsyoboibrent",message:"スバルちゃんお誕生日おめでとう！スバルの配信はめっちゃめっちゃ楽しかったよ！ありがとうよ！",pic:"",art:"",latlng:"2.08,103.36"},
		{name:"@vora902",twitter:"@vora903",message:"Happy Birthday Subaru. You have always been an amazing person who isn't afraid to show interest in and form connections with others. Your English has improved significantly and all of us are proud of your efforts to learn it. Keep being the wonderful joy upon our lives and here's to another year of Shuba.",pic:"Subarudo_duck_picture.jpg",art:"",latlng:"37.83,-84.27"},
		{name:"Jin",twitter:"",message:"Thank you for so much joy and appreciation for games and in life you have given me, I love your streams and they bring me so much joy to watch you live, or later through your stream uploads.",pic:"",art:"",latlng:"51.31,-0.55"},
		{name:"Kenney - ケニー",twitter:"",message:"Thank you Subaru for sharing your bright energy with us again this year. I wish you another year of health and happiness, and look forward to being in your care for another year. よろしくお願いします。",pic:"qdSO0s0.jpeg",art:"",latlng:"49.19,-122.84"},
		{name:"@f2ai2",twitter:"@f2ai2",message:"スバルちゃんの元気さは最高です！海外ニキからありがとうございます！",pic:"LdgnmQD.jpeg",art:"",latlng:"40.05,-74.4"},
		{name:"@Ti11192916",twitter:"@Ti11192916",message:"お誕生日おめでとう！日々をコツコツ頑張って積み重ねていき、大きく成し遂げ皆を喜ばせてくれるあなたが大好きです。",pic:"",art:"",latlng:"34.41,132.45"},
		{name:"KenTo",twitter:"",message:"スバルちゃん！！お誕生日おめでとう！！œ君に出会ってから２回目のお誕生日、この1年間本当に楽しい日々を貰っています。とても言葉だけじゃ感謝を伝えきれません。本当にありがとう！！ジョイポリスで直接お話出来たことは一生の宝物です！！また1年よろしくね！！œ最後に、スバルちゃんいい一年にしてくれよな！！ 大好きだ！！",pic:"",art:"",latlng:"32.72,129.89"},
		{name:"Logus325",twitter:"",message:"Miss Subaru, it has already been 2 years since I started watching your streams. You cheered me up in sad moments and keep me wanting to do my best. Thank you for being so bright. I'll keep supporting you all the time you stay with us and beyond.",pic:"Subaru_tribute2.jpg",art:"",latlng:"19.54,-96.91"},
		{name:"@KaeSSRB",twitter:"@KaeSSRB",message:"Happy Birthday Subaru-Chan! Thank you for all the laughter and comical moments! Your content always ends up brightening my day. I drew a picture of you at the Potato Chip Trail! ",pic:"",art:"J7HUe.png",latlng:"33,-116.97"},
		{name:"Knox",twitter:"",message:"Happy Birthday! I wish for you to always be a bright and sunny girl, that warmed the hearts of so many people. ",pic:"AnLBtW1.jpeg",art:"",latlng:"53.12,18"},
		{name:"Mikhil ",twitter:"",message:"お誕生日おめでとうございます。Wishing you good health and a very Happy Birthday Subaru! May your day be a great one and every year to come be even better than the last! Thank you for continuing to be a shinning light and source of joy in the world.  ",pic:"",art:"",latlng:"4.86,-58.93"},
		{name:"Jl Cogito",twitter:"",message:"I pray for our favorite MMA duck, Subaru, to have good health and more energy to face the future ahead. We look forward again for many happy memories with Subaru playing with both the Holomems and us fans. Thank you for your hard work. ",pic:"",art:"",latlng:"10.72,122.56"},
		{name:"ヤン Swee Chiang ",twitter:"",message:"Remember to rest well and not to overwork yourself Subaru-chan. Subatomos will always be here waiting for you. いつも応援してから、ゆっくりしてね。",pic:"",art:"",latlng:"2.4,103.01"},
		{name:"@Etto2054",twitter:"@Etto2054",message:"Happy birthday Subaru!! I just wanted to thank you for all you do to entertain us. I truly admire the way you keep being positive and how you reflect that in your streams and interacting with other holomembers. Also I want to thank to all the subatomos for making this a possibility to send a message. œHope you have a wonderful day, you deserve all good things and I really really really admire you.œGreetings from Argentina.",pic:"",art:"",latlng:"-38.41,-63.61"},
		{name:"ムネくん",twitter:"",message:"いつも元気もらってます",pic:"",art:"",latlng:"36.22,140.18"},
		{name:"@brontidepng",twitter:"@brontidepng",message:"Happy birthday, Subaru!! Another year, another birthday to celebrate! You deserve happiness and I hope you enjoy your special day!",pic:"VXiJ9et.jpeg",art:"V4ogPwM.png",latlng:"-37.81,144.94"},
		{name:"@Asriiiel",twitter:"@Asriiiel",message:"Thank you Subaru so much for always being so entertaining and nice to watch, whether a watchalong or game, I appreciate so much all the company over the last 4 years. It helped me go through tough times when COVID hit the world. Thank you my favourite duck of Hololive.",pic:"",art:"",latlng:"40.46,-3.74"},
		{name:"@confused_alif",twitter:"@confused_alif",message:"Ever since meeting Subaru and hololive in general, my college life has been a lot brighter and I don't feel as alone as I would be. Subaru truly is the sun of hololive!!",pic:"",art:"birthday doodle.png",latlng:"2.19,102.25"},
		{name:"@RoyTayWeiXuan",twitter:"@RoyTayWeiXuan",message:"I'm very glad you enjoy the Final Fantasy games so much and have fun playing them on stream! I don't know a lot of friends who enjoy FFVII and Crisis Core, so watching your FF streams made me happy since I love seeing other people enjoy the games I enjoy! I hope you get to stream FF10 in the future too, as well as the other FF games. Please continue streaming at your own pace and having fun while also taking good care of your health, and have a happy birthday Shuba! :D",pic:"",art:"",latlng:"1.35,103.82"},
		{name:"Placek#3208",twitter:"",message:"Happy Birthday Subaru! Thank you for being our sun for four years already! In this day I wish you that you can fulfill your dreams, that you can spend time on things you love and most importantly that you will stay healthy! Know that I and other Subatomos love your smile and how cheerful you are! Let's hope you can spend this day not only with us but also with your friends and family! Once more Happy Birthday Subaru-chan! (On the photo Subarudo with friends, I like collecting plushies!)",pic:"20220625_174425.jpg",art:"",latlng:"51.91,19.14"},
		{name:"김률현 Kim, Ryulhyeon",twitter:"@rimkyul",message:"Hello Subaru! I just want you to know that you bring so much happiness to so much people including me everyday with your hard work and simply being Subaru! You're forever special in our hearts and I personally will never forget you even though I have memory problems. Keep up the great work and know that we're always here for you and will support you until the end of time!! ",pic:"",art:"",latlng:"35.18,129.07"},
		{name:"@Ryu01661172",twitter:"@Ryu01661172",message:"Happy birthday to the best idol Subaru! You helped me in difficult moments of my life and always made me smile. Therefore, I decided that I would start a community in the Russian social network for the same fans as me. I try to convey to as many people as possible about how wonderful you are. Watching clips, tweets and streams with you, I rejoiced and cried with you, stay as cheerful as you are! I will continue to support you, know that in Russia they also love you very much! Sorryforbad english",pic:"Subaru.png",art:"",latlng:"61.77,34.36"},
		{name:"Clov",twitter:"",message:"Hi Subaru, hope you're having an awesome day! I've been enjoying your streams a lot regardless of not understanding much Japanese, but I'm learning the language so I slowly understand more and more each day. Keep doing an awesome job, your English is getting very good and I really appreciate your efforts to make us, overseas viewers, understand your content. お誕生日おめでとう！",pic:"duck_edited.jpg",art:"",latlng:"40.41,-3.7"},
		{name:"GurenSan",twitter:"",message:"Happy Birthday Subaru! I've been watching you for around 2 years now, and everyday you just keep making us happier and happier. I wish you the best and a lot of success from now on!",pic:"",art:"",latlng:"-14.23,-51.92"},
		{name:"まろやか男",twitter:"",message:"スバルちゃん誕生日おめでとう！œスバルちゃんのおかげでイラストを描くことにも出会えたし、毎日が充実してる！œこれからも頑張って！！！œ応援してる！！！",pic:"",art:"",latlng:"36.2,138.25"},
		{name:"LanAXdp",twitter:"",message:"Hello Subaru.  Greetings from the Dairyland of America!  I heard it was your birthday and just wanted to wish you a happy birthday.œœ Like a swan, I hope you continue to soar higher and higher in the coming year!",pic:"subaru_duck.jpg",art:"",latlng:"43.78,-88.78"},
		{name:"ひまわりさん",twitter:"",message:"スバルちゃんお誕生日おめでとう！🎉œ初めてスバルちゃんを見た日から今まで推し続けてきたけど本当に楽しい時間だった！œ何度も周りを笑顔にしてくれる元気さなどに救われてきたし本当に感謝してる！œこれからも全力で応援するぞー！💪",pic:"",art:"",latlng:"36.2,138.25"},
		{name:"@SirotumeHoloaka",twitter:"@SirotumeHoloaka",message:"貴女を知り、そして推し始めてからもうすぐ一年です。œ悲しいことがあっても配信で元気をたくさんもらっていますœ杞憂することがあるかもしれませんが、心から貴女の健康と楽しい配信を願っています。",pic:"",art:"FWJ7nChVEAAqGVo.jpg",latlng:"35.35,133.4"},
		{name:"Angel",twitter:"",message:"Happy birthday, Subaru! Although I can't understand anything you say because I don't speak Japanese, I watch translated clips and love your energetic attitude. The amount of times you have made me smile and laugh is countless and I wish you will live a life full of fun memories!",pic:"",art:"",latlng:"27.66,-81.51"},
		{name:"@jmaginarynumber",twitter:"@jmaginarynumber",message:"Happy birthday Subaru! Thank you for all your hard work and bringing all of us subatomos joy from your infectious laughs! We will continue to support you! Because of you, I have put the subarudo duck plush as well as a window sticker on my Subaru car :)",pic:"shuba_car_track.jpg",art:"",latlng:"43.65,-79.38"},
		{name:"@nitro_striker",twitter:"@nitro_striker",message:"Happy Birthday Subaru!",pic:"",art:"subaru room.png",latlng:"4.2,101.97"},
		{name:"シュー",twitter:"",message:"スバルちゃん、お誕生日おめでとう！！！！œ17.4歳のスバルちゃんを、今まで以上に推していくよ！スバルちゃんにとって素敵な1年になりますように！やりたいことたくさんあるだろうから、スバルちゃんのペースで、これからも一緒にたくさん楽しんでこーぜ！いつも本当にありがとう！大好きだー！！！！",pic:"IMG_4306.webp",art:"",latlng:"35.67,139.65"},
		{name:"@mottiiiiie",twitter:"",message:"お誕生日おめでとうございます🎉周りを明るく元気に引っ張っていく、笑わしてくれる活動をし続けてくれてありがとう。心身ともに健康に活動を続けられることを願っています。周りの人を大切に、これからも応援しています。",pic:"",art:"194-nocredit.png",latlng:"36.2,138.25"},
		{name:"WeiHsu許",twitter:"",message:"Subaru chan is adorable and hilarious! Appreciate all the awesome streams, live concerts and other idol things! Glad to be part of Subatomo! HBD!",pic:"IMG_2289.webp",art:"",latlng:"25.03,121.56"},
		{name:"オクトパスプライム",twitter:"",message:"スバルちゃんお誕生日おめでとう！またお誕生日を祝える事、とても嬉しく思いますわん！最高の一日になりますように願ってますわん！",pic:"",art:"DSC00596.jpg",latlng:"36.2,138.25"},
		{name:"オクラサエッティンガー",twitter:"",message:"スバルちゃん、18.4歳のお誕生日おめでとう！œ元気で素敵でとってもかわいいスバルちゃんがもっと輝けるように応援してます！",pic:"subaru-yokohama0001.jpg",art:"",latlng:"35.45,139.63"},
		{name:"@TMFoxz",twitter:"",message:"It's been a little bit over a year since I've found and watched Subaru and Hololive in general, and I am grateful for all the fun and laughter Subaru and the others have given me with their streams! Recently, I've been too busy to catch most of their streams but clips taken from the streams have kept me entertained. I hope to be able to support Subaru and Hololive again when I am able to! Happy Birthday Subaru!!!! PS. the Subarudo duck in the photo was wool felted by me!!",pic:"IMG_20220624_182827_338.jpg",art:"",latlng:"4.53,114.72"},
		{name:"@jahnathand",twitter:"",message:"Thank you for always bringing smiles and happiness to me whenever I can watch your streams and clips Subaru! I will always keep supporting you! I look forward to seeing more of you in the future! Happy birthday! たんじょうびおめでとう。",pic:"sKNR6V7.jpeg",art:"",latlng:"36.17,-115.13"},
		{name:"@knicholas_823",twitter:"",message:"Hello and Happy Birthday, Oozora-san!œThanks for everything you do, you brighten more peoples' days than you may think.œYou probably hear this all the time, but I'll say it anyway: You Are Awesome.œEnjoy your big day~♪",pic:"",art:"Subaru_IronShuba_lores.jpg",latlng:"39.9,-75.1"},
		{name:"00：獣医のたまご",twitter:"",message:"スバルちゃん17.4才の誕生日おめでとおおおおお！œ17.3才はたくさんライブイベントとかホロメンのライブのゲストに出演してて日々の努力が表に形として出る機会が多くて１スバ友兼アヒージョとしてもとても嬉しい一年でした。œ日々の努力でどんどん成長していくスバルちゃんの姿を見れて嬉しい！œ疲れた時にはちゃんと休んでくれてありがとう。œおかげで心安らかに毎日を過ごしてるよ～œ00：獣医のたまごより",pic:"IMG_0004.webp",art:"",latlng:"43.22,142.86"},
		{name:"@brightjade2142",twitter:"",message:"Hi Subaru!œœ Happy birthday!! I want to thank you for being so energetic and entertaining as well as being the tsukkomi to the other holomem's boke acts! Your streams and clips always bring a smile to my face and make my day better. I am trying to be more energetic in my day to day life and spreading joy to those around me too.œœ Once again, thank you for being a part of hololive and being apart of my life. I hope you, ahijos and other subatomos can continue to enjoy life and grow together!! ",pic:"AnLBtW1.jpeg",art:"lNdTAF5.jpeg",latlng:"1.35,103.82"},
		{name:"Stealter",twitter:"",message:"Happy Happy Birthday Subaru!!! Tanti Auguri and hopefully many more to come!œI had some of the best times in my life watching your streams in these pasts 2 and half years.œ\Thank you for all your hardwork and please take a break when you need one.œ Since I couldn't get the Subatomo plushie last year, I went with Psyduck (コダック) instead.œHere's a picture of some seaside in Naples, Italy where I run daily while listening to some of your songs to give energy and motivation.œAgain HAPPY BIRTHDAY SUBARU!!",pic:"1656257044798.jpg",art:"",latlng:"40.85,14.26"},
		{name:"Ciel Liv_",twitter:"@thanhcua04",message:"O-tanjoubi Omedetou Subaru-san! ! !œHope you have a great birthday!  œAs a Subatomo, I wish you all the best things in the world and a year ahead full of joy and bliss!œI will always support you  🚑 🚑 🚑 ",pic:"6681af711a5ed900804f.jpg",art:"",latlng:"10.82,106.62"},
		{name:"kucing__laut",twitter:"",message:"Happy birthday to you, Subaru! Thank you for all these years! Your streams and live shows are very good! Your singing and dancing is getting better! I am also looking forward to your stream and show this year!!œI hope you will have another good year to come! Wish you happiness, health, and fortune for next year!",pic:"",art:"",latlng:"-0.79,113.92"},
		{name:"@spaghettisan",twitter:"@spaghettisan",message:"Happy birthday Subaru! I hope you enjoyed the concert present us Subatomo made for you! You bring happiness and joy to everyone around you. I really appreciate the hard work that you put into doing whatever you set as your goal! Whenever I watch you perform in a concert, I always seem to get a bit emotional because I feel so proud of you. Someday, I would like to go to Japan to attend your concert in person and to cheer for you on stage! Please continue to take care of yourself! ",pic:"",art:"",latlng:"43.65,-79.38"},
		{name:"メトロノーム",twitter:"",message:"お誕生日おめでとう！！！スバルちゃんと出会ってから本当に毎日楽しく過ごせています！œ忙しい中でも配信してくれるからちょっと心配になっちゃい時もあるけど、無理ない程度に一緒に配信でわいわいしようね！œこれからもよろしくお願いします！",pic:"FWMoKKiakAAWCyX.jpg",art:"",latlng:"36.67,139.85"},
		{name:"九十九 涼",twitter:"",message:"僕が思うスバルちゃんの魅力は、「ギャップ」です！いつもは「おめえええ！」や、投げキッスなどを普段の配信で見せてくれますが、特に歌枠や3D配信でのスバルちゃんはかわいいの塊です。(もちろん普段のスバルちゃんもかわいいです)この魅力こそが多くの人をスバ友、アヒージョにさせたのではないかと思います！現に何をしても長続きしない僕でもその魅力のおかげで配信を見続けています！短くはなりますが、これからもよろしくお願いします！",pic:"",art:"",latlng:"36.2,138.25"},
		{name:"@dystronix0502",twitter:"@dystronix0502",message:"Happy birthday Subaru!! I hope you have a great day! Felicidades from México!!",pic:"IMG_20220626_144152370_2.jpg",art:"IMG_20220623_205638287_2.jpg",latlng:"23.63,-102.55"},
		{name:"@ThyRealJackWood",twitter:"@ThyRealJackWood",message:"Dear Subaru, thank you for always making me feel inspired to get up and go do activities instead of staying home all day. You are always able to make a moody day nice and bright! Thank you for everything you do!",pic:"",art:"",latlng:"37.27,-76.7"},
		{name:"Claudio Bizama",twitter:"",message:"Happy Birthday Subaru! We hope you enjoy all the art and photos of the fans. Visit us anytime.",pic:"",art:"",latlng:"-35.67,-71.54"},
		{name:"うっちー",twitter:"",message:"スバルちゃん誕生日おめでとう！楽しい配信をいつもありがとう！スバルちゃんのおかげで、忙しくも楽しい一年になりました！これからもずっと応援するよ！",pic:"subarudoduck.webp",art:"",latlng:"35.67,139.65"},
		{name:"@kend9283",twitter:"@kend9283",message:"Love you Subaru! Lots of love from the United States! You have filled our lives with happiness for a long time, so I hope on your birthday you will be filled with happiness too!",pic:"",art:"",latlng:"37.09,-95.71"},
		{name:"@lymephaz",twitter:"@lymephaz",message:"ちわーッス!œI really wanted to write this message as an ahijo, but I don't watch you enough anymore to call myself one. Since I graduated high school, I wasn't able to watch much of your streams. You saved me from my sad and boring life. Your energy and the love you gave us always cheered me up and inspired me to try and be more like you.œI can assure you that next time, I will be able to proudly claim to be an ahijo again !!œHappy Birthday Subaru with all the love that I can give you ! <3",pic:"",art:"Subaru Pic !.jpg",latlng:"46.81,8.22"},
		{name:"Jamie Bastian",twitter:"",message:"Hello Subaru!! Happy Birthday and thank you being the bright sun you are. Enjoy the special day and have a good one. Much love from Denmark." ,pic:"u7TpdYM.jpeg",art:"",latlng:"56.56,9.03"},
		{name:"@olimay",twitter:"@olimay",message:"スバルちゃんお誕生日おめでとうございます！米国バージニア州からHello。今年、スバルちゃんの希望は皆叶いますように！",pic:"jTwJKMc.jpeg",art:"",latlng:"36.85,-75.97"},
		{name:"騎士死神",twitter:"",message:"スバルちゃんと出会って本当に人生楽しくなりましたありがとう！",pic:"",art:"",latlng:"34.69,135.5"},
		{name:"@ramukukki",twitter:"@ramukukki",message:"Happy Birthday, Subaru! May you continue to shine as bright as the sun.",pic:"zvksoPH.png",art:"",latlng:"37.09,-95.71"},
		{name:"TwilitShadow",twitter:"",message:"Happy Birthday Subaru! I love your personality and the energy you bring to every stream and event you are in. You have brought a lot of happiness into my life and the lives of many others. Please take care of yourself and keep shining bright!œWe will always support you! Thank you for being yourself :)",pic:"",art:"",latlng:"29.76,-95.37"},
		{name:"@soccnotsoc",twitter:"@soccnotsoc",message:"For a swan who's finally spread her wings. Thank you for all the joy you've spread to the Subatomos, Hololive and beyond!",pic:"Ce0wNCT.jpeg",art:"fuCsZnr.jpeg",latlng:"-33.86,151.2"},
		{name:"@Pedro_Lucas_M_",twitter:"@Pedro_Lucas_M_",message:"Happy birthday Subaru! I woud like to say that you have made a real difference in my life, and that I think you are an incredible person. Your smile truly makes my everyday life better, and I want to thank you so much for all that. You inspire me into wanting to be a better person, and I have accomplished a lot ever since I came across your streams a little less than 2 years ago. I wish only the best for you! May you be very happy, if there's someone that deserves that, it's you. I love you~",pic:"",art:"",latlng:"37.09,-95.71"},
		{name:"百合音",twitter:"",message:"スバルちゃん、お誕生日おめでとう！！！！œいつも私達に笑顔や希望、光を与えてくれてありがとう。何度でも言うけど、スバルちゃんに出会えて本当によかった。言葉では返しきれないくらいの恩を強く感じています。œこれからもお身体には気を付けてやりたい事を楽しくやっちゃってください！œ飽きる気なんて一生ないからな！！œ誰がなんと言おうと、スバルちゃんは最高のアイドルだよ！！！",pic:"",art:"",latlng:"36.2,138.25"},
		{name:"じっくりコトコト",twitter:"",message:"スバルちゃん！お誕生日おめでとう💐œスバ友になって2回目の誕生日をお祝いできること、とても嬉しく思ってるよおおお！œ来年も祝わせてくれえええ！！！！œこの1年がスバルちゃんにとって良い年になりますように！œ一緒に面白いこと、楽しいことやろーね！🚑=3",pic:"20220627_072715233_iOS.jpg",art:"",latlng:"35.66,138.63"},
		{name:"きんぎょ",twitter:"",message:"スバルちゃんお誕生日おめでとう！！œいつも元気なスバルちゃんの姿を見て、元気をもらいながら生活しています！œスバ友とも友達になれて、最高の日々を過ごしていますœそれもこれもスバルちゃんのおかげ！œこれからも元気に楽しく、配信よろしくお願いしますœスバルちゃんが楽しく、充実していると思える道をぜひ進んで行ってください",pic:"",art:"",latlng:"36.2,138.25"},
		{name:"灯台",twitter:"",message:"スバルちゃん！œお誕生日おめでとう〜🎉œ気がついたら1年！時がすぎるのは早いですねœスバルちゃんを推し始めてから2年になろうとしている自分ですが、スバルちゃんは何か変わったことはありましたか？œ自分は大学生から社会人になり、それでも配信のおかげで毎日楽しんで過ごしています。œスバルちゃんに会えたことで、仲のいいスバ友と遊ぶこともあり感謝しきれません！œスバルちゃん、いつもありがとう！œ改めてお誕生日おめでとう🎉🎉🎉",pic:"",art:"",latlng:"36.2,138.25"},
		{name:"クレイバー",twitter:"",message:"スバルちゃん誕生日おめでとう〜！œ毎回配信を元気にやってくれてとっても嬉しいし、スバ友のことをいっぱい思ってくれてるスバルちゃんのことが大好きだよー！！！œまた1年元気に楽しくスバルちゃんが配信できるように自分もいっぱい応援していくからこれからもよろしくね！！！",pic:"2022年スバルちゃん誕生日用写真.png",art:"",latlng:"36.2,138.25"},
		{name:"てばさき",twitter:"",message:"スバルちゃん！！お誕生日おめでとう！これからも応援していくよー！だいすきだよー！",pic:"",art:"",latlng:"36.2,138.25"},
		{name:"Jiipo",twitter:"",message:"Happy birthday Subaru! Thank you for all the fun times that we have shared together. Let's keep having fun together!",pic:"subaru_submission_pic.jpg",art:"",latlng:"62.43,22.18"},
		{name:"@V7stars",twitter:"@V7stars",message:"スバルちゃんお誕生日おめでとう！今年は自分の私生活が忙しくなって思うように応援できてないけど無理のない範囲で最大限応援してます！これからも最高の太陽少女で輝いてください！",pic:"",art:"",latlng:"35.67,139.65"},
		{name:"@Gray_chr",twitter:"@Gray_chr",message:"I've been watching your channel for more than 2 years now, and there was no day when I didn't think your streams or videos were funny, entertaining, or cute. I really love your singing voice and always enjoy listening to you sing.œHappy Birthday Subaru ! (づᗒᗜᗕ)づ",pic:"IMG_20220626_173901_333.jpg",art:"",latlng:"19.43,-99.13"},
		{name:"Zizaku",twitter:"",message:"Happy birthday Subaru! Super excited to see what you have planned for this year! So proud to be a Subatomo and will always be here supporting you! Have an amazing day Subaru!",pic:"subaruduck.jpg",art:"",latlng:"41.88,-93"},
		{name:"すや饅頭[すやマンティス]",twitter:"",message:"スバルちゃん、お誕生日おめでとう！！！今年もライブやイベント盛りだくさんの1年だったね！！！スバルちゃんが一生懸命に歌ったり踊ったりしている姿、イベントで楽しそうに笑ってる姿、どれも最高だよ！！！いい一年になりますように！！！",pic:"IMG_3885.jpg",art:"",latlng:"35.49,139.28"},
		{name:"haya",twitter:"",message:"お誕生日おめでとう！！！œスバルちゃんと同じ時代に生まれ、スバルちゃんを応援できる事に毎年感謝しています！！！œポジティブで努力家、いつも最高の夢を見せてくれるスバルちゃんのœこれからの鳥生も幸せでいっぱいでありますように！！！",pic:"",art:"",latlng:"35.67,139.65"},
		{name:"@Oruta563",twitter:"@Oruta563",message:"Happy birthday Subaru, you really shine on stage as an idol! ",pic:"",art:"subaru_Oruta563.jpeg",latlng:"37.09,-95.71"},
		{name:"どら",twitter:"@dragonta2ya",message:"スバルちゃん、お誕生日おめでとうございます！いつもお仕事やダンスを頑張ってくれて、配信で楽しませてくれてありがとう。œこの１年、更にスバルちゃんが飛躍する年になります様に！",pic:"",art:"",latlng:"35.67,139.65"},
		{name:"@lazypotatodesu",twitter:"@lazypotatodesu",message:"Thanks for all the laughs and good times Subaru chan!! You are such a bright and cheerful person, you never fail to bring a smile to my face whenever I have a bad day! I really hope you enjoy your birthday and I truly wish you the best! May your day be filled with cute dark skinned girls!! ",pic:"",art:"shuba_birthday.png",latlng:"19.43,-99.13"},
		{name:"@rabbbyyyy304",twitter:"@rabbbyyyy304",message:"Thank you for making me who I am today. I am sorry if I cannot write this in Japanese but I am so happy that I was able to watch you because you have helped me bring myself up from bad times. Watching you makes me so happy and cheerful. I hope you have a good birthday Subaru-san!! Thank you for being a source of my happiness and being an inspiration to keep going!!",pic:"",art:"",latlng:"10.31,123.88"},
		{name:"@OttawaSultan",twitter:"@OttawaSultan",message:"Thank you for being so amazing Subaru!! You are the first vTuber I ever watched (through clips of your Assassin's Creed 4 streams), and you will always be my favourite!! I want to thank you for introducing me to the wonderful world of Hololive as well.œI hope you have an awesome day, do something fun, and eat something delicious. Happy birthday!🎉🎉🎉🎉🎉",pic:"",art:"",latlng:"45.42,-75.69"},
		{name:"Joshuwah",twitter:"",message:"HAPPY BIRTHDAY! ! ! 2 years ago I learned that a certain dancing duck girl meme streams. Your bright and fun personality attracted me, even though I don't understand Japanese. I hope you continue to be healthy and shine brighter in the coming years!",pic:"",art:"",latlng:"14.6,120.98"},
		{name:"@Fatenshi39",twitter:"@Fatenshi39",message:"Happy birthday Subaru! I can't believe how long ago the first time I watched your videos was and you're still one of my favorites. I wish you a very good birthday and wish you all the best, always!",pic:"",art:"1656344034223.jpg",latlng:"-0.79,113.92"},
		{name:"Lejay[ルジェ]", twitter:"", message:"Happy Birthday Subaru!œWishing you a great year.", pic:"IMG_1510.webp", art:"IMG_1516.webp", latlng:"34.69,135.19"},
		{name:"Flocculence", twitter:"", message:"Happy birthday Subaru! I don’t have the plush or a good local landmark, so I took a picture of a duck near my house instead.", pic:"IMG_1622.webp", art:"", latlng:"26.12,-80.13"},
		{name:"LupusEbrius", twitter:"", message:"Happy Birthday! You have grown so much over the years and it's amazing seeing the meaningful change you've inspired. Seeing how much you have picked up on English for us overseas fans really has helped kickstart me to really try and learn Japanese. We all love and appreciate all that you do. I hope you have a wonderful year ahead of you and a wonderful birthday. ", pic:"", art:"", latlng:"46.88,-110.36"},
		{name:"@Julz544", twitter:"@Julz544", message:"Happy birthday Subaru!! Another fun year with you has passed and I wish you much luck and well being for this year too! I am looking forward to spending another year with watching your streams.", pic:"LEdiz9D.jpeg", art:"", latlng:"48.66,9.35"},
		{name:"5chloe", twitter:"", message:"Subaruuuu happy birthday!!! Have fun on your special day with delicious cakes and having fun with friends! I haven't prepared anything for you other than calling you cute 1000 times, but it would not fit here, sadly. You will always be the sun and joy of all subatomo so remember that everytime you feel lonely~!", pic:"", art:"", latlng:"12.88,121.77"},
		{name:"laky", twitter:"", message:"誕生日おめでとう！こうやってお祝いするのも4回目だけど今年も祝うことができて本当に嬉しいよー！œこの1年はオリ曲出してライブに出てとアイドル力を磨いた1年だったけど、次は磨いたアイドル力をどんどん見せつけていくスバルが見られるかな？とひっそり楽しみにしてるね！œ次の1年もスバルにとって良き1年になることを祈っています！", pic:"", art:"", latlng:"35.33,140.18"},
		{name:"Eruben", twitter:"@eruben_thillior", message:"Your positivity, energy, and the effort you put in everything you do is an inspiration to me. Watching Subaru giving her best on streams and concerts pushes me forward to do my best too as a vtuber!", pic:"IMG-20220627-WA0011.jpg", art:"", latlng:"-34.60,-58.38"},
	];
	let data = getMessages()
	let msgs = data;

	let bothIcon, artIcon, picIcon, noneIcon;
	noneIcon = '/assets/images/subaru_waypoint_blue.png';
	picIcon = bothIcon = artIcon = '/assets/images/subaru_waypoint_red.png';

	let initialView;
	initialView = $media.small ? [40, -70] : [0, 0];
	let map;
	let eye = true;
	let showLines = false;
	let hamburgerOpen = false;
	let carousel;

	let vidWidth, vidHeight;
	if (!$media.small) {
		vidWidth = '852';
		vidHeight = '480';
	} else {

	}

	let mapElem;

	function showMap() {
		const elems = document.querySelectorAll('main > *');

		for (let i = 0; i < elems.length; i++) {
			elems[i].style.transition = 'opacity 0.5s linear 0s';
			elems[i].style.opacity = 0;
		}

		if (mapElem === undefined) mapElem = document.querySelector('.msg-map');
		mapElem.style.zIndex = '3';
		mapElem.style.opacity = '1';
	}

	function hideMap() {
		const elems = document.querySelectorAll('main > *');


		for (let i = 0; i < elems.length; i++) {
			elems[i].style.transition = 'opacity 0.5s linear 0s';
			elems[i].style.opacity = 1;
		}

		if (mapElem === undefined) mapElem = document.querySelector('.msg-map');

		mapElem.style.opacity = '0';
		setTimeout(function() {
			mapElem.style.zIndex = '-1';
		}, (500));
	}

	function resizeMap() {
		if (map) {
			map.invalidateSize();
		}
	}

	function resetMapView() {
		map.setView(initialView, 3);
	}

</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Happy 17.4th birthday Subaru!</title>
	<meta name='title' content='Happy 17.4th birthday Subaru!' />
	<meta
		name='description'
		content='Celebration site with a video concert & messages from Subatomos!
お祝いサイトではビデオコンサートやスバ友たちからのメッセージをご紹介しています！！！'
	/>

	<!-- Open Graph / Facebook -->
	<meta property='og:type' content='website' />
	<meta property='og:url' content='https://subatomos.com/birthday2022' />
	<meta property='og:title' content='Happy 17.4th birthday Subaru!' />
	<meta
		property='og:description'
		content='Celebration site with a video concert & messages from Subatomos!
お祝いサイトではビデオコンサートやスバ友たちからのメッセージをご紹介しています！！！'
	/>
	<meta property='og:image' content={metaimg} />

	<meta property='twitter:card' content='summary_large_image' />
	<meta property='twitter:url' content='https://subatomos.com/birthday2022' />
	<meta
		property='twitter:title'
		content='Happy 17.4th birthday Subaru!'
	/>
	<meta
		property='twitter:description'
		content='Celebration site with a video concert & messages from Subatomos!
お祝いサイトではビデオコンサートやスバ友たちからのメッセージをご紹介しています！！！'
	/>
	<meta property='twitter:image' content={`${baseURL}${metatwi}`} />
</svelte:head>

<div class='back-btn'>
	<a sveltekit:prefetch href='/'>
		<span><svg class='w-6 h-6' data-darkreader-inline-stroke='' fill='none' stroke='currentColor'
							 style='--darkreader-inline-stroke:currentColor;' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
			<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10 19l-7-7m0 0l7-7m-7 7h18'></path>
		</svg></span>
	</a>
</div>
<div id='loading'>
	<img src={loading} />
</div>
<main>
	{#if $media.small}
		<!--		<div class='hamburger'>
					<Hamburger
						&#45;&#45;layer-width='30px'
						bind:hamburgerOpen />
				</div>
				{#if hamburgerOpen}
					<div class='burger-menu'>
						{#each ['link 1', 'link 2', 'link 3'] as link, i}
							<p transition:fly={{ y: -15, delay: 50 * i }}>
								{link}
							</p>
						{/each}
					</div>

					<div class='bar' transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
				{/if}-->
	{:else}
		<!--<div class='arrow'>
			<img src={arrow} alt='scroll down' />
		</div>-->
	{/if}

	<!--<svelte:window on:resize={resizeMap} />-->
	<p class='hbd-text'>Happy 17.4th Birthday, Subaru!!!
		<br>
		スバルちゃん、17.4歳のお誕生日おめでとうございます！！！
	</p>
	<div class='top top-color-picker'>

		<div class='instruments instruments-1'>
			<img src={drums} alt='drums'>
			<img src={saxophone} alt='saxophone'
			>
			<img src={guitar}
					 alt='guitar'
			></div>


		<div class='middle'>
			<div class='video-container'>
				<!--				<img style='visibility:hidden' src={metaimg} height={vidHeight} width={vidWidth} />-->
				<!--				height={vidHeight}-->
				<!--				width={vidWidth}-->
				<iframe
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
					frameborder='0'

					src='https://www.youtube.com/embed/JcaeoEXt8uk'
					title='YouTube video player'
				/>
			</div>
			<div class='show-map'>
				{#if $media.small}
					<div class='instruments instruments-2 '>
						<img src={flute} alt='flute'>
						<img src={piano} alt='piano'>
						<img src={accordion} alt='accordion' style='visibility:hidden'>


					</div>
				{/if}
				<p>Tap to see messages from Subatomos!<br>タップするとスバ友からのメッセージが表示されます!</p>
				<input type='image' src={showMapIcon} class:show-map-button={!eye} on:click={showMap} alt='show map' />

			</div>
		</div>
		{#if !$media.small}
			<div class='instruments instruments-2 '>
				<img src={flute} alt='flute'>
				<img src={piano} alt='piano'>
				<img src={accordion} alt='accordion'></div>
		{/if}
	</div>
	{#if browser }
		<div class='credits-btn'>
			{#if !$media.small}
				<Modal styleWindow={{width:'auto',backgroundColor: '#f1bd65'}}
							 styleContent={{paddingBottom:'2rem',overflow:'hidden'}}>
					<Birthday2022CreditsButton />
				</Modal>
			{:else}

				<Modal styleWindow={{width:'auto',backgroundColor: '#f1bd65'}}
							 styleContent={{paddingBottom:'2rem',overflow:'auto'}}>
					<Birthday2022CreditsButton />
				</Modal>
			{/if}
		</div>
	{/if}
	{#if browser}
		<div class='msg-map'>
			{#if browser}
				<svelte:component this={LeafletContainer} bind:map view={initialView} zoom={2} width='100vw' height='100vh'>
					<svelte:component this={ControlContainer} position='topright'>
						<!--								<MapToolbar bind:eye bind:lines={showLines} on:click-reset={resetMapView} />-->
						<MapToolbar bind:eye on:click-hide-map={hideMap} />
						<!--			<svelte:component this={MapToolbarContainer} bind:eye bind:lines={showLines} on:click-reset={resetMapView} />-->
					</svelte:component>


					{#each msgs as { name, twitter, message, pic, art, latlng }}
						<!--{@debug lat, lng}-->
						<svelte:component this={MarkerContainer} {latlng} width={30} height={30}>
							{#if (pic === '' && art === '')}
								<img src={noneIcon} width='30' height='30' alt='message for Subaru' />

							{:else}
								<img src={bothIcon} width='30' height='30' alt='picture for Subaru' />

							{/if}
							<!--						<svg style='width:30px;height:30px' fill='none' stroke-linecap='round' stroke-linejoin='round'
															 stroke-width='2' viewBox='0 0 24 24' stroke='currentColor'>
														<path d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'></path>
													</svg>-->

							<svelte:component this={PopupContainer}>


								<MapOverlayContainer {name} {twitter} {message} {pic} {art} />
							</svelte:component>
							<!--					<Pane></Pane>-->
						</svelte:component>
					{/each}

					<!--{#if showLines}
						{#each lines as {latLngs, color}}
							<Polyline {latLngs} {color} opacity={0.5} />
						{/each}
					{/if}-->
				</svelte:component>
			{/if}
		</div>
	{/if}
</main>

<style lang='scss'>
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  @-webkit-keyframes wobble-hor-bottom {
    2% {
      -webkit-transform: translateX(-30px) rotate(-6deg);
      transform: translateX(-30px) rotate(-6deg);
    }
    4% {
      -webkit-transform: translateX(15px) rotate(6deg);
      transform: translateX(15px) rotate(6deg);
    }
    6% {
      -webkit-transform: translateX(-15px) rotate(-3.6deg);
      transform: translateX(-15px) rotate(-3.6deg);
    }
    8% {
      -webkit-transform: translateX(9px) rotate(2.4deg);
      transform: translateX(9px) rotate(2.4deg);
    }
    10% {
      -webkit-transform: translateX(-6px) rotate(-1.2deg);
      transform: translateX(-6px) rotate(-1.2deg);
    }
    0%, 100%, 12% {
      -webkit-transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform: translateX(0%);
      transform-origin: 50% 50%;
    }
  }

  @keyframes wobble-hor-bottom {
    0%, 100% {
      -webkit-transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform: translateX(0%);
      transform-origin: 50% 50%;
    }
    2% {
      -webkit-transform: translateX(-30px) rotate(-6deg);
      transform: translateX(-30px) rotate(-6deg);
    }
    4% {
      -webkit-transform: translateX(15px) rotate(6deg);
      transform: translateX(15px) rotate(6deg);
    }
    6% {
      -webkit-transform: translateX(-15px) rotate(-3.6deg);
      transform: translateX(-15px) rotate(-3.6deg);
    }
    8% {
      -webkit-transform: translateX(9px) rotate(2.4deg);
      transform: translateX(9px) rotate(2.4deg);
    }
    10%, 12% {
      -webkit-transform: translateX(-6px) rotate(-1.2deg);
      transform: translateX(-6px) rotate(-1.2deg);
    }
  }

  @-webkit-keyframes pulsate-fwd {
    50% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    0%, 100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes pulsate-fwd {
    50% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    0%, 100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  .back-btn {
    font-size: 3em;
    left: 3vw;
    position: absolute;
    top: 0;
    width: 1em;
		z-index:2;

    a {
      color: #000;
    }
  }

  main {
    background: url(/assets/images/bgseamless.webp) no-repeat center center fixed;
    background-size: cover;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-items: center;
    overflow: hidden;
    width: 100vw;
  }

  .arrow {
    animation: bounce 2s infinite;
    bottom: 0;
    position: absolute;

    img {
      width: 90%;
    }
  }

  .credits-btn {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 5vw;
  }

  .hamburger {
    position: absolute;
    right: 0;
  }

  .hbd-text {
    -webkit-text-stroke: 1px #fff;
    color: #D7B377;
    font: bolder 2em keifont, sans-serif;
    position: absolute;
    text-align: center;
    top: -3vh;
    z-index: 1;
  }

  .instruments {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 1 1 10%;
    height: 100%;
    padding: 10vh 0;
    width: 200px;

    img {
      box-sizing: border-box;
      height: 20vh;
      object-fit: contain;
      padding: 0;
      position: relative;
      transition: padding .2s;
      width: 50%;

      &:hover {
        padding: 10px;
      }
    }
  }

  .instruments-1 {
    animation: bounce 5s 0s infinite;
    top: 35%;

    img {
      &:nth-child(1) {
        -webkit-animation: wobble-hor-bottom 5s 1s infinite both;
        animation: wobble-hor-bottom 5s 1s infinite both;
        left: 120px;
        top: -30px;
      }

      &:nth-child(3) {
        -webkit-animation: wobble-hor-bottom 5s 2s infinite both;
        animation: wobble-hor-bottom 5s 2s infinite both;
        bottom: -30px;
        left: 120px;
      }

      &:nth-child(2) {
        -webkit-animation: wobble-hor-bottom 5s 1.5s infinite both;
        animation: wobble-hor-bottom 5s 1.5s infinite both;
      }
    }
  }

  .instruments-2 {
    animation: bounce 5s .5s infinite;
    bottom: 15%;

    img {
      &:nth-child(1) {
        -webkit-animation: wobble-hor-bottom 5s 1s infinite both;
        animation: wobble-hor-bottom 5s 1s infinite both;
        right: 120px;
        top: -30px;
      }

      &:nth-child(3) {
        -webkit-animation: wobble-hor-bottom 5s 2s infinite both;
        animation: wobble-hor-bottom 5s 2s infinite both;
        bottom: -30px;
        right: 120px;
      }

      &:nth-child(2) {
        -webkit-animation: wobble-hor-bottom 5s 1.5s infinite both;
        animation: wobble-hor-bottom 5s 1.5s infinite both;
      }
    }
  }

  #loading {
    background-color: #2B4162;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: absolute;
    width: 100vw;
    z-index: 9999;
  }

  .msg-map {
    position: absolute;
  }

  .show-map {
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-image: url(/assets/images/instruments/stand_pole.png);
    background-size: 100% auto;
    flex: 1 1 20%;
    flex-wrap: wrap;
    justify-content: flex-end;
    position: relative;
    width: 100%;

    p {
      -webkit-animation: pulsate-fwd 5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite both;
      -webkit-text-stroke: 1px #fff;
      animation: pulsate-fwd 5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite both;
      color: #D7B377;
      font: 700 2rem keifont, sans-serif;
      pointer-events: none;
      position: absolute;
      z-index: 1;
      top: 1em;
    }

    input {
      flex: 1 1 30%;
      object-fit: contain;
      object-position: bottom;
      width: 60%;
    }
  }

  .show-map-button {
    display: none;
  }

  .top {
    align-items: flex-start;
    background: #c7c2b6 url(/assets/images/instruments/music_sheet_bg.png) no-repeat 0 20vh;
    background-size: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
    padding-top: 0;

    * {
      box-sizing: border-box;
    }
  }

  .top-color-picker {
    background-size: cover, contain;
    background: #2B4162 url(/assets/images/instruments/music_sheet_bg_border.webp) no-repeat 0 20vh;
    background-size: contain;
  }

  .middle {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1 1 60%;
    height: 100vh;
  }

  body {
    max-width: 100%;
    overflow-x: hidden;
  }

  .video-container {
    align-content: center;
    align-items: center;
    background-image: url(/assets/images/instruments/stand.webp) !important;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 70vh;
    justify-content: flex-end;
    position: relative;
    top: 3px;
    padding: 11.7vw 13vw 0;

    > * {
      text-align: center !important;
    }

    iframe {
      bottom: 35%;
      left: 0;
      -o-object-fit: contain;
      -o-object-position: bottom center;
      height: 100%;
      margin: auto;
      object-fit: contain;
      object-position: bottom center;
      position: initial;
      text-align: center;
      width: 40vw;
      height:calc(40vw / 1.7777777)!important;
    }
  }

  @media screen and (max-width: 849px) {
    .credits-btn {
      bottom: 23vh;
      left: initial;
      right: 5%;
      position: absolute;
      width: 25vw;
    }
    .hbd-text {

      -webkit-text-stroke: 1px #fff;
      background-color: #2b4162;
      color: #d7b377;
      font: bolder 1.5em keifont, sans-serif;
      margin: 0;
      padding-top: .5em;
      position: initial;
      text-align: center;
      top: -3vh;
      z-index: 1 !important;
    }
    .instruments-1 {
      top: 10%;
    }
    .instruments-2 {
      bottom: 0;
    }
    .show-map {
      p {
        font-size: 1em;
        bottom: 10vh;
        top: initial;
      }

      input {
        bottom: 0;
        width: 100%;
        -o-object-fit: contain;
        -o-object-position: bottom;
        flex: 1 1 50%;
        object-fit: contain;
        object-position: bottom;
      }

      align-items: center;
      background-image: url(/assets/images/instruments/stand_pole_mobile.png);
      background-repeat: no-repeat;
      background-size: 100% auto;
      bottom: 0;
      display: flex;
      flex: 1 1 20%;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-end;
      padding-top: 0;
      position: relative;
      text-align: center;
      width: 100%;
    }
    .video-container {
      align-content: center;
      align-items: center;
      background-image: url(/assets/images/instruments/stand_mobile.png) !important;
      background-position: bottom center;
      background-repeat: no-repeat;
      background-size: contain;
      display: block;
      flex-direction: column;
      flex-wrap: wrap;
      height: 30vh;
      justify-content: flex-end;
      padding-top: 80px;
      position: relative;
      text-align: center;
      top: 3px;
      width: 100%;
      margin: 5vh auto auto;
      padding:11.7vw 13vw 0;
			display:flex;



      iframe {
        bottom: 35%;
        left: 0;
        -o-object-fit: contain;
        -o-object-position: bottom center;
        margin: auto;
        object-fit: contain;
        object-position: bottom center;
        position: initial;
        text-align: center;
        width: 100% !important;
        height: auto !important;
				margin:0;
      }

      img {
        bottom: 35%;
        left: 0;
        -o-object-fit: contain;
        -o-object-position: bottom center;
        height: 100%;
        margin: auto;
        object-fit: contain;
        object-position: bottom center;
        position: initial;
        text-align: center;
        width: 75% !important;
      }

      > * {
        display: block;
        height: auto;
        text-align: center;
        width: 64%;
      }
    }
    main {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      justify-items: center;
      min-height: 100vh;
      overflow: hidden;
    }
    .instruments {
      .instruments-2 {
        margin-top: 0;
        position: relative;
        top: -5vh;
      }

      align-items: center !important;
      display: flex !important;
      flex: 0 1 10vh !important;
      flex-direction: row !important;
      flex-wrap: wrap !important;
      height: 10px !important;
      justify-content: space-between !important;
      margin-bottom: -5vh !important;
      margin-top: 5vh !important;
      padding: 0 10px !important;
      width: 100% !important;

      img, div {
        display: block;
        height: 100%;
        position: initial;
        width: 30%;
      }

      div {
        width: 25%;

      }

      .instruments-1 {
        z-index: 1;
      }
    }
    .top.top-color-picker {
      align-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex: 1 1 20%;
    }
    .middle {
      align-content: space-around;
      align-items: flex-start;
      flex: 1 1 60%;
      flex-direction: column;
      height: auto;
      justify-content: space-between;
    }
    #loading {
      img {
        height: 100vw;
        object-fit: contain;
        object-position: center;
        width: 100vw;
      }
    }
    .top {
      height: initial;
    }
  }

  @media (max-aspect-ratio: 2/1) {
    .video-container{
      padding:14vw 13vw 0 !important;;
    }
  }

  @media (max-aspect-ratio: 1/1) {
    .video-container{
      padding:26vw 13vw 0 !important;
    }
  }

  @media (max-width:400px) {
    .video-container{
      padding:16vw 13vw 0 !important;
    }
  }
</style>