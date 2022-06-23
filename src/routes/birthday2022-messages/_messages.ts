/*
interface message{
	name:string,
	twitter: string,
	message:string,
	pic:string,
	art:string,
	latlng: any
}
*/
let dir = '/assets/images/subarudoducks/';

let messages = [
	{
		name: 'Huangas',
		twitter: '',
		message: 'Hello Subaru, I heard it was your Birthday and I wish you a happy birthday, I love watching your videos as they give me a lot of joy. Thank you ',
		pic: '',
		art: '',
		latlng: '-25,133'
	},
	{
		name: 'Orion',
		twitter: '',
		message: 'Happy Birthday Subaru ! I\'ve followed you since 2020 now, you\'re the one who made me discover Hololive and Vtubers !  I hope you\'ll make a lot more of good memories and experience during this year with your friends !  Happy Birthday ! ',
		pic: '',
		art: '',
		latlng: '48.85,2.35'
	},
	{
		name: '@r_kudrav',
		twitter: '',
		message: 'Happy Birthday to our beloved Tomboy Duck. May you always be enthusiastic to make time for us Subatomo and Ahijo. Keep it up Subaru.',
		pic: '',
		art: '',
		latlng: '-0.789,133.92'
	},
	{
		name: 'タカカイ',
		twitter: '',
		message: 'スバルちゃんお誕生日おめでとう！！！！ これからも一緒に楽しい一年つくろ 大好き！！！',
		pic: '',
		art: '',
		latlng: '34.65,135.5'
	},
	{
		name: '@KumaStarlight',
		twitter: '',
		message: 'Subaru Happy birthday!! Wish you good luck and stay healthy!! you are amazing!!!',
		pic: '',
		art: '',
		latlng: '0.89,113.46'
	},
	{
		name: 'Rehan',
		twitter: '',
		message: 'Happy birthday, Subaru!  May all of your wishes come true and have a wonderful year!  You\'re a special person to me and I\'m grateful to have met you. ',
		pic: '',
		art: '',
		latlng: '4.93,117.59'
	},
	{
		name: 'Alex',
		twitter: '',
		message: 'Happy Birthday Suba! I hope your day is special and you feel like you are truly loved, because you definitely are! I\'ve only known and watched you for a year, but within that year you\'ve only been positive for me, and a deeply beloved section of my day to day.',
		pic: '',
		art: '',
		latlng: '35.75,-79'
	},
	{
		name: 'Abhyudit M',
		twitter: '',
		message: 'Subaru has never failed to put a smile on my face Subaru always has a nice charismatic energy which radiates and makes me feel calm and happy on stressful days Subaru also has pretty amazing dance moves and dancing talent which always blows us away and never fails to impress the audience  Even though I am not able to catch her streams live I will always continue to support Subaru however I can All the Best for your future endeavors, We Subatomos of the world will always love and appreciate you!!!',
		pic: '',
		art: '',
		latlng: '18.52,73.856'
	},
	{
		name: 'Colby',
		twitter: '',
		message: 'Happy birthday Subaru! Here\'s a picture of Shuba Duck on the Eerie Canal near a historic boat. I love your high positive tomboy energy that always makes me smile. I appreciate the effort you make for us overseas fans. Have a great birthday!',
		pic: '4GZ8rqN.jpeg',
		art: '',
		latlng: '40.71,-74'
	},
	{
		name: 'Nari',
		twitter: '',
		message: 'Happy Birthday Subaru, your streams always make me smile whenever I feel down, おたんじょびおめでとう！！！！',
		pic: '',
		art: '',
		latlng: '1.35,103.819'
	},
	{
		name: '@Erendon0',
		twitter: '',
		message: 'Happy birthday Subaru! I started watching you in 2020. You and your streams have gotten me through many tough times. I have been learning Japanese for 2 years so I can watch your streams without subtitles. You always make us happy! Be safe Subaru and take as many days off as you can! Thank you Subaru! OOZORA SUBARU, OOOOTAAAAAAANNNJOOOOUBIIIIIIIIIIIII OOOOOOOOOOOOOOMMMMMMMMMEEEEEEEEEDEEEEEEEEEEEEEETOOOOOOOOOOOOOUUUUUU!!!!',
		pic: '',
		art: '',
		latlng: '61.21,-149.89'
	},
	{
		name: 'Edward wantono ',
		twitter: '',
		message: 'Subaru has helped me in many ways when I\'m feeling sad or stressed. She always cheers me up! Her cheerful side and words has given me the motivation to study Japanese because I want to understand what she\'s saying. Since then my Japanese has improved a lot and I would like to go to Japan. Thank you Subaru ありがとう！元気だね。',
		pic: '',
		art: '',
		latlng: '-6.15,106.89'
	},
	{
		name: 'Blaxe Frost',
		twitter: '',
		message: 'Hello! I\'m one of those fans that can\'t watch every stream so I just leave likes every time I see you\'re Live and just enjoy the clips. I Love how while being truthful to yourself and others, you also seem very interested and involved in everything you do. Your story is one of an aimless energy made into focused passion which is very inspiring for any aimless kind of person. I wish you a happy next year... maybe not happy but, let\'s say... prosperous and meaningful next year.',
		pic: '',
		art: '',
		latlng: '-33.58,-70.69'
	},
	{
		name: 'UberHobber',
		twitter: '',
		message: 'Happy Birthday Subaru! Your super powerful energy makes so many people around the world very happy, so I hope our messages can make you happy too! I don\'t understand Japanese very well, but I still enjoy watching your streams and listening to your music. I hope that your birthday is very fun!',
		pic: 'High_Falls_Subarudo.jpg',
		art: '',
		latlng: '43.16,-77.61'
	},
	{
		name: '@ace_highwind',
		twitter: '',
		message: 'Hello Subaru. First of all, HAPPY BIRTHDAY!! How are you feeling? Another year went by.  Do you think that you managed to grow up as a person or achieved something meaningful? It\'s great to look back and check what you have done the previous years and compare how much we have changed, the photo I added is a place that I have visited a lot and besides the castle that hasn\'t changed that much, the surroundings have changed a lot. If you want to check it, the place it\'s called: El parc de la Mar.',
		pic: 'Subarudo_in_Majorca_edited2.jpg',
		art: '',
		latlng: '39.56,2.65'
	},
	{
		name: '@gegeji4',
		twitter: '',
		message: 'Your streams and personality always make my day! I like how you are funny and it\'s very entertaining to watch you! I really loved your performance of Pleiades, the song and your dance is great! So Happy Birthday and I wish you further success for the future and beyond!',
		pic: '',
		art: '',
		latlng: '48.89,8.69'
	},
	{
		name: 'Jimie Megane',
		twitter: '',
		message: 'I started to know Subaru around one year ago, which was the ASMR clip. Her ASMR was really funny, and weirdly enough I\'m into it LOL. And her 3rd anniversary performance just made me into full Ahijo. Really love her passion on learning English. Keep on shining Subaru-san, and never give up!',
		pic: '',
		art: '',
		latlng: '6.11,102.21'
	},
	{
		name: '@nezotempest',
		twitter: '',
		message: 'Subaru I hope you have a wonderful and awesome birthday!!!! I\'ve been following you since your debut stream and gosh you sure have changed a lot but I still love watching your streams!!! I hope for another wonderful year of subaru!!! Happy birthday my favorite duck!!!',
		pic: '',
		art: '',
		latlng: '37.2,-115.79'
	},
	{
		name: '@Kohiru_Aam',
		twitter: '',
		message: 'Subaru! I\'ve been watching you for about 2 years now. You always make my day better every time I tune in your stream or watch your clips. You give me motivation to continue doing my best even when I\'m feeling down . Please continue to be the sun of Hololive for all of us! Your brightest smile is like our morning cup of coffee and I will continue to support you till the end of the road!  From your truly, Subatomo.',
		pic: '',
		art: '',
		latlng: '5.3,103.11'
	},
	{
		name: 'Armin',
		twitter: '',
		message: 'Whether you read this or not, I\'m quite happy that you are able to do what you do! I usually don\'t enjoy watching streams, but you are the exception. I enjoy watching you doing your best!  I wish you the best and happy birthday! お誕生日おめでとう！ ',
		pic: 'IMG_20220525_144608.jpg',
		art: 'IMG_20220525_132257.jpg',
		latlng: '14.6,121.02'
	},
	{
		name: 'Dennis Ast',
		twitter: '',
		message: 'Hello I wanted to thank you for all the hard work and I am looking forward to see more of your amazing content in the future. You\'re the reason I started to learn japanese as my second non native language. (native: german; first non native: english)',
		pic: '',
		art: '',
		latlng: '48.21,9.02'
	},
	{
		name: '@Linajabba',
		twitter: '',
		message: 'Hello Subaru,  I have watched you for over 1 and a half years now and I really respect your hard work and how you handle other people (you seem like a great friend and support to other Holomems) anyways I really like you and will keep supporting you. Greetings from Germany, Linajabba',
		pic: '',
		art: '',
		latlng: '51.45,7.01'
	},
	{
		name: '@hanaz__kambing',
		twitter: '',
		message: '  Shuba!! Subaru is cute! Before knowing Subaru, I\'ve never know that Hololive- no, VTuber was a thing. I thought that there\'s just HoloMyth because I don\'t remember seeing such an interesting concept of streaming. But then I realized that VTuber are kinda my childhood 😅  But anyway, Subaru is the one who made me more interested in Hololive. Subaru changed my life and I am glad that I discover her! Everytime I feel empty or lonely, I get me some Subaru 😌  So, thank you Subaru!! Love ya!! 😊💖',
		pic: '',
		art: '',
		latlng: '3.07,101.51'
	},
	{
		name: 'Exoduce',
		twitter: '@RP_Exoduce',
		message: 'Happy Birthday Subaru-chan! Thank you for your hard work this year as well! Your streams always gives me the energy I need to go on both good and bad days! Your bright smile and sun-like energy goes beyond the virtual world to the real world! Have a wonderful year ahead and more hell streams to come! P.S. Always enjoy what you do and we will surely enjoy it too! ',
		pic: '',
		art: '',
		latlng: '12.87,121.77'
	},
	{
		name: '緋凪',
		twitter: '',
		message: 'お誕生日おめでとう！ いつも面白い企画をありがとう！ 今年も最高の一年にしてくれええ！',
		pic: '',
		art: '',
		latlng: '35.67,139.65'
	},
	{
		name: '2 legends, 1 noob.',
		twitter: '',
		message: 'お誕生日おめでとうございます、スバルさん! 誕生日は楽しんでください!',
		pic: '',
		art: '',
		latlng: '1.35,103.67'
	},
	{
		name: '@Lucas_R_Liso',
		twitter: '@Lucas_R_Liso',
		message: 'To Subaru: I\'m sure there are thousands of other messages, so I\'ll try to keep mine brief. Simply put, I admire you. Your story, and your joy of life is inspiring. You inspire me to try and become the best version of myself I can possibly can. Thank you for being yourself, and happy birthday.',
		pic: 'YGuYkRK.jpeg',
		art: '',
		latlng: '-38.41,-63.61'
	},
	{
		name: '@mikachu051',
		twitter: '@mikachu052',
		message: 'Happy birthday!!! I wish you a wonderful birthday. Everyone in the UK is celebrating with you! Thank you for making me smile and laugh everyday!!!',
		pic: 'Duck.png',
		art: 'Subaru birthday.png',
		latlng: '52.61,0.88'
	},
	{
		name: '@MrJunior717',
		twitter: '@MrJunior718',
		message: 'Dancing Shuba was my introduction into VTubers and hololive, now I take Shuba with me to remind me I can do anything I set my mind to! Keep it up!',
		pic: '0BEwHbv.jpeg',
		art: '',
		latlng: '51.22,4.40'
	},
	{
		name: 'Christopher Choo',
		twitter: '',
		message: 'Happy birthday! I\'m always looking forward to your streams even though I can\'t watch them all and am grateful for any that I\'m able to. Even watching just clips of your streams will make my day. Just like you have been learning and improving yourself on english, I\'m also trying my best with japanese. We see your effort in everything you are doing! Please continue to do your best but don\'t overwork yourself.',
		pic: 'SubarudoDuckVisitsUbisoftSingapore.jpg',
		art: '',
		latlng: '1.29,103.79'
	},
	{
		name: 'Skirrtle',
		twitter: '',
		message: 'Subaru chan, I want to wish you a happy birthday. I hope you\'re having a blast on your birthday and hope all of your wishes come true!! This is the 4th time we\'ve celebrated your birthday together. I hope we can celebrate more birthdays together. Once again Happy Birthday Subaru chan or in Indonesia we usually say " Selamat ulang tahun", I love you!!!',
		pic: '20220528_104457.jpg',
		art: '',
		latlng: '-7.25,112.75'
	},
	{
		name: 'Radheshyam',
		twitter: '@_U_dunno_ME',
		message: '🎂スバルちゃん🎂お誕生日おめでとう🎂🥳 May all your dreams come true this year!🥰 Thank you for your wonderful streams.♥️ Whenever I\'m feeling down your streams 🚑ALWAYS cheer me up and makes me feel better. Sending virtual hugs 🤗 Have a nice day🌞 and take care of your health Happy Birthday Subaru Chan🥳 ',
		pic: '',
		art: '',
		latlng: '13.08,80.27'
	},
	{
		name: 'Rarely',
		twitter: '',
		message: 'Happy Birthday Subaru! I\'ve been a fan for 2 years now. Your never-ending energy makes everything you do fun and always cheers me up! It\'s been fun watching you work hard and grow as an idol, a streamer, and a (very cute) duck! Keep being you, and have a great birthday!',
		pic: '20220530_231649.jpg',
		art: '',
		latlng: '1.29,103.77'
	},
	{ name: 'mo', twitter: '', message: 'お誕生日おめでとう！！！笑顔をありがとう＜３', pic: 'HqmwpKl.png', art: '', latlng: '-31.95,115.86' },
	{
		name: '@Goondius',
		twitter: '@Goondius',
		message: 'I really adore Subaru, what started as just mild interest developed into something that brightens my every day. Even to the point that I picked up learning japanese and even started drawing. I really love our duck. She really is Hololive\'s sun but also our sun.　(bad self translation following)  僕はスバルをすきだ。最初にスバルは少し面白いだでもいまは毎日は幸せだ。だから日本語を少し習ったと描画習った。僕たちのアヒルはめっちゃすき。スバルはホロライブの太陽だでもも僕たちの太陽だ。   ',
		pic: '',
		art: 'xCqhzgd.jpg',
		latlng: '51.16,10.45'
	},
	{
		name: 'David Ting',
		twitter: '',
		message: 'Hope you have a very happy shuba birthday from your Subafriends in Sydney, Australia',
		pic: 'Subarado Duck at  Sydney Opera House 1.jpg',
		art: 'Subarado Duck at Sydney Opera House 2.jpg',
		latlng: '-33.85,151.21'
	},
	{
		name: 'スバルモ',
		twitter: '@subarumodayo',
		message: 'タンジョウビオメデトウナンダヨ！コレカラモケンコウニハキヲツケテガンバルンダヨ！オウエンシテルンダヨ！',
		pic: '',
		art: '',
		latlng: '34.69,135.5'
	},
	{
		name: '@gurekoro',
		twitter: '@gurekoro',
		message: '今年も楽しい配信を毎日ありがとうっ！！頑張り屋さんなところは大好きだけども身体は大事に、そしてもっと笑ってて欲しい、幸せになってね！！ これからもよろしくちゃん！',
		pic: '',
		art: '',
		latlng: '35,137'
	},
	{
		name: 'DyerWolf',
		twitter: '',
		message: 'Happy birthday Subaru!! I took you to Boston Public Garden, the home of many adorable ducks. This statue honors the famous American children\'s book "Make Way for Ducklings" which is set in the same garden.  They were also celebrating, what a fun surprise party! I hope this is the start of a wonderful year for Oozora Subaru and Subatomos worldwide!',
		pic: '20220531_093433.jpg',
		art: '',
		latlng: '42.35,-71.06'
	},
	{
		name: 'Ragin\' Canadian',
		twitter: '',
		message: 'Happy birthday to the idol with a fantastic voice, great dancing, and a personality that shines like the sun. Happy birthday Subaru!!!',
		pic: 'JN1rFlX.jpeg',
		art: '',
		latlng: '37.02,-76.34'
	},
	{
		name: 'Barsett',
		twitter: '@Barsett1',
		message: 'Happy Birthday Subaru! May it be a day filled with joy and laughter!',
		pic: 'Subaru_Merch.jpg',
		art: '',
		latlng: '47.75,-122.16'
	},
	{
		name: '@SapphireLeo2',
		twitter: '@SapphireLeo2',
		message: 'Hi Subaru! Thank you for being an inspiration. I always love your energy and you being hard working! It\'s amazing how you try new things as well.   You improved speaking English a lot, so please be more confident about it!  I\'m genuinely happy being one of your fans. Let\'s do our best continuing forward!!! ',
		pic: 'ducc.JPG',
		art: '',
		latlng: '53.14,-8.24'
	},
	{
		name: 'ふじ',
		twitter: '',
		message: 'スバルちゃん誕生日おめでとう！！ スバルちゃんに出会って約10ヶ月！ほんとうに楽しくてあっという間でした！！ ぷれあですで感動してメンバーに入り、3rdライブでさらにキレを増したダンスを見て、スバルちゃんの頑張りを感じ、僕も頑張ろうと思って最近は勉強を頑張れるようになりました！ 月並みですが、本当にあなたに出会えてよかった。 これからもずっと応援してます！体調には気をつけて頑張ってください！！',
		pic: 'FUZavklaMAAHJGB.jpg',
		art: '',
		latlng: '35.49,139.28'
	},
	{
		name: '@KineticPhylum',
		twitter: '@KineticPhylum',
		message: 'Happy birthday Subaru-sama! I support Icarus Jet Coaster!',
		pic: '20220531_162340_HDR.jpg',
		art: '20220531_155722.jpg',
		latlng: '49.28,-123.12'
	},
	{
		name: 'あんとん',
		twitter: '@12_antooon',
		message: '誕生日おめでとうッス！ 新たな1年でさらにスバルちゃんが飛躍することを願ってるッス！',
		pic: '',
		art: '',
		latlng: '36.3,139.8'
	},
	{
		name: 'Rybuca',
		twitter: '',
		message: 'Thank you for bringing many smiles to people all over the world. I will always be cheering for Subaru.',
		pic: 'TYE7m1w.jpg',
		art: '',
		latlng: '52.62,1.29'
	},
	{
		name: 'Anna',
		twitter: '',
		message: 'お誕生日おめでとうございます〜！ いつも楽しい配信をしてくれてありがとうございます！ スバルのおかげで、日本語能力試験の２級を無事に合格しました。 これからもスバルの配信を見て日本語を勉強します♪ よろしくお願いします！',
		pic: 'subaru make way for ducklings.png',
		art: '',
		latlng: '42.35,-72.06'
	},
	{
		name: 'リムリン',
		twitter: '',
		message: 'CHIWASSSU！！ いつも私たちを笑顔にしてくれてありがとう！スバルは私たちが落ち込んでいるときに励ましてくれます。スバルは私たちが寂しいときにそこに居てくれます。私たちの愛はスバルが思うより大きいものです！おつヴぁる！ありがとう。♡♡',
		pic: 'Subarudonesia.png',
		art: '',
		latlng: '-7.25,111.75'
	},
	{
		name: 'Raze レーズ',
		twitter: '',
		message: 'Happy Birthday to you, Subaru!   It\'s not a lot, but I want to express my gratitude to you with this short message. Thank you always for sharing your positive energy, streaming nearly everyday, and of course, your wonderful singing and dancing with us Subatomos. You really are like the sun that always brightens my days!   Love from Malaysia! Hope you have another wonderful year ahead of you!',
		pic: 'My small collection of Subaru\'s merch.jpg',
		art: '',
		latlng: '5.3,102.11'
	},
	{
		name: 'A251t_にゅーと',
		twitter: '',
		message: '時に険しく、時に辛さに襲われることもありましたが、いつもスバルさんに元気と気力をもらってきました。中々形には出来ないコトですが、せめてこのような形ででも、貰っていた元気や勇気を、感謝や祈りを込めて届いたら、と願います。 誕生日おめでとうございます！これからも楽しく活動が続いてゆくことを、そしてスバルさんの幸せを願っています。',
		pic: 'DSC_0242.jpg',
		art: '',
		latlng: '35.3,139.8'
	},
	{
		name: 'Absolute Link',
		twitter: '',
		message: 'Happy Birthday, Subaru!  I love the energy, enthusiasm, and hard work you bring to everything. Seeing you on stage is incredibly inspiring!  Wishing you all the best!  (For the photo, I took Subarudo Duck to watch Niagara Falls, which light up at night)',
		pic: 'duck-nf-combined.jpg',
		art: '',
		latlng: '43.09,-79,09'
	},
	{
		name: 'Isaac',
		twitter: '@Irsacfac',
		message: 'Feliz cumpleaños Subaru, thats happy birthday in spanish. Hope you have had a wonderful day. I am not good with words, but I can say you put smiles in many of us and I hope we can return the favor. Thanks for all you does and I hope we can celebrate next year together too.',
		pic: '20220612_152711.jpg',
		art: '20220612_161403[1].jpg',
		latlng: '9.84,-83.9'
	},
	{
		name: '@AtofreakingB',
		twitter: '@AtofreakingB',
		message: 'Happy Birthday Subaru!! It\'s been over 2 years now since I started watching your streams and it\'s been a blast watching you grow so much since then.  Subaru\'s charms and positive energy certainly never stops to amaze me. I remember when Subaru mentioned that only 2% of fans were overseas and even called them Ninjas. That number has certainly increased by a lot now! Here\'s hoping to another amazing year with Subaru and Subatomos! ',
		pic: 'v5yBJgX.jpeg',
		art: '',
		latlng: '1.35,103.81'
	},
	{
		name: '鬼武羅alzon',
		twitter: '@benson70031',
		message: '大好きなアイドルに捧げる、あなたは私たちの宝物。この大好きな気分が、あなたにも伝わりますように。この日、あなたは私たちの愛で幸せに祝うことができます。',
		pic: '',
		art: '5pnFMhV.png',
		latlng: '23.69,120.96'
	},
	{
		name: 'スライムマン',
		twitter: '',
		message: 'スバルちゃんお誕生日おめでとう！🎊🎉🥳 スバルちゃんがゲームを楽しくプレイする姿、嬉しそうに雑談する姿、アイドルとして輝いている姿、どれも見ていて本当に楽しくて元気を貰えてるよ！ おかげで明るい気持ちになれて毎日がすごく楽しく過ごせてます！ いつも本当にありがとうね！スバルちゃんは誇れる推しだよ！！ これからもいっぱい楽しんで応援していくよー！',
		pic: '',
		art: 'スバルちゃん誕生日.jpg',
		latlng: '34.68,135.8'
	},
	{
		name: 'Yonsei',
		twitter: '',
		message: 'Tanjoubi Omedetou Subaru! Hope you have a great birthday and thank you for all the hard work you have put into your streams and Hololive. You have made Hololive incredibly enjoyable for me as both the sun and tsukkomi. You take many bits in stride and work as an MC very well. Keep up the good work and please take breaks when necessary. I took subarodu duck at the college I have recently graduated at!',
		pic: 'gZHvweN.jpeg',
		art: '',
		latlng: '38.02,-78.47'
	},
	{ name: 'コア', twitter: '', message: 'お誕生日おめでとう', pic: '36.jpg', art: '', latlng: '31.96,-99.9' },
	{
		name: 'reece',
		twitter: '@reecevvv',
		message: '誕生日おめでとう🎉色々な意味でまた飛躍の一年になったけどまた新たな活躍を期待してる！これからも応援してる！',
		pic: '',
		art: '',
		latlng: '35.86,139.64'
	},
	{
		name: '戦龍',
		twitter: '',
		message: 'スバルちゃんお誕生日おめでとう！いつも面白い配信ありがとう！スバルちゃんと一緒に泣いたり笑ったりマジで最高です！スバルちゃんに出会って本当に良かったと思っています、これからもずっと応援しますよ！',
		pic: '',
		art: '2022shuba birth.png',
		latlng: '25.03,121.56'
	},
	{
		name: '@keruvin_ka',
		twitter: '@keruvin_ka',
		message: 'Hello Subaru! This is your Subatomo from Indonesia, ケルヴィンKA! Happy Birthday to you Subaru! I wish you to be always healthy and happy, and lots of inspirations will come to our creative idol. I want you to know that I’m really grateful to be able to discover you and Hololive. You changed my life for the better and really help me survived during the hard times. I always appreciated all of your hard work trying to give your best in everything for us. I will always do my best to support you too!',
		pic: 'SubaBirthday_Heine.png',
		art: '',
		latlng: '-6.81,110.79'
	},
	{
		name: 'Cato',
		twitter: '',
		message: 'Happy Birthday! Thank you for the many hours of entertainment!',
		pic: 'shuba.jpg',
		art: '',
		latlng: '35,-97'
	},
	{
		name: 'Citrous',
		twitter: '',
		message: 'Happy BIRD-day Subaaaru! Love your energy, keep up the good work!',
		pic: '',
		art: '',
		latlng: '45.8,9.08'
	},
	{
		name: 'ChrisPeko08',
		twitter: '',
		message: 'Happy birthday Subaru, thank you for your great work and hard work every day, with love from all your fans',
		pic: '',
		art: '',
		latlng: '-31.95,115.86'
	},
	{
		name: 'はやかわそうた',
		twitter: '',
		message: 'スバルちゃん誕生日おめでとう！これからも太陽みたいに明るくて元気なスバルちゃんでいてね',
		pic: 'FT5NysNagAEmZM0.jpg',
		art: '',
		latlng: '34.22,134.01'
	},
	{
		name: '@Kaiser_Milan',
		twitter: '@Kaiser_Milan',
		message: 'Subaru-chan congrats!! Have a fun birthday!',
		pic: '',
		art: '',
		latlng: '45.46,9.19'
	},
	{
		name: 'Gabriel',
		twitter: '',
		message: 'Happy birthday Subaru. I hope that you keep up the incredible work with your streams and other content. By the way have you seen Moon Knight? I’ve heard its really good.',
		pic: '',
		art: '',
		latlng: '38.58,-121.49'
	},
	{
		name: 'Dichu De Leon',
		twitter: '',
		message: 'Happy birthday Subaru thank you for entertaining and bringing joy to the world.',
		pic: '',
		art: '',
		latlng: '37.33,-121.88'
	},
	{
		name: 'Ryushindai',
		twitter: '',
		message: 'Happy Birthday Subaru!! This year has been a rough one but thanks to your streams and energy I have enough will to keep going on!',
		pic: '',
		art: '',
		latlng: '-23.55,-46.63'
	},
	{
		name: 'EliR',
		twitter: '',
		message: 'You are great Subaru! thank you for being yourself, happy birthday!',
		pic: '',
		art: '',
		latlng: '-35.67,-72.54'
	},
	{
		name: 'Aiken ',
		twitter: '',
		message: 'Dear Subaru, I can\'t believe that a single duck could make millions of people happy and that I\'m one of them. I truly thank you for your efforts and for not giving up. Keep on shining!',
		pic: '',
		art: '',
		latlng: '16.47,120.58'
	},
	{
		name: 'Hisora',
		twitter: '',
		message: 'どうもスバルちゃん、僕は韓国のスバルちゃんのファンです。2022年の誕生日おめでとう！！！僕がスバルちゃんの配信を始めてみた時からも1年が過ぎ、スバルちゃんのこともっと好きになりました！高校3年生なので、あまり配信見れないけどいつも応援してます。いつも楽しい配信してくれてありがとう！！！愛してます！！！',
		pic: '',
		art: '',
		latlng: '37.56,126.97'
	},
	{
		name: '@_loog_',
		twitter: '@_loog_',
		message: 'Ajimaru!!!!! o((>ω< ))o, Happy birthday Subaru!! Thank you for all the laughs you have given me since I started watching your streams 3 years ago, I wish you all of the best, may you continue to be this bright and cheerful girl full of spirit delivering great content for many more years to come!!╰(￣ω￣ｏ)',
		pic: '',
		art: '',
		latlng: '-19.91,-43.93'
	},
	{
		name: '@sexykaigainiki',
		twitter: '@sexykaigainiki',
		message: 'Happy birthday Subaru, thank you for all the hard work you do to keep all your fans from everywhere entertained and happy. Its been fun to have you with us and I\'m glad you are a part of Hololive. I look forward to more fun times and happy memories :^)',
		pic: '',
		art: '',
		latlng: '34.05,-118.24'
	},
	{
		name: '@duckcrusader208',
		twitter: '@duckcrusader209',
		message: 'Happy birthday Subaru!!!',
		pic: 'DSC02829.JPG',
		art: '',
		latlng: '29.76,-95.36'
	},
	{
		name: '@kitaikanadesu',
		twitter: '@kitaikanadesu',
		message: 'お誕生日おめでとう、スバルちゃん！ I hope this wonderful birthday of yours is filled with joy and happiness! May you always be blessed in health, talent, and everything on this wonderful day! A wonderful day also means wonderful wishes in your heart, so may this day brings you all that your heart desires!  Happy birthday, Oozora Subaru! 🦆🎉 (with love from one of your 海外ニキ)',
		pic: '',
		art: '',
		latlng: '-1.23,116.85'
	},
	{
		name: 'やなぎ',
		twitter: '',
		message: 'あなたを見つけられて、その魅力に気づくことが出来て本当に良かった。いつも楽しい配信で元気をもらっています。ありがとう！',
		pic: '',
		art: '',
		latlng: '36.25,138.09'
	},
	{
		name: '@Banjo_su',
		twitter: '@Banjo_su',
		message: 'スバルちゃん誕生日おめでとう！スバルちゃんとホロライブのお陰で色んな人との関わりが出来たよ！これからも元気で、スバルちゃんのやりたいタイミングで配信してね！自分も気のままに推すのでね',
		pic: '',
		art: '',
		latlng: '35.99,139.44'
	},
	{
		name: '@noot_ks',
		twitter: '@noot_ks',
		message: 'HAPPY BIRTHDAY SUBARU THANK YOU FOR ALL THE MEMORIES AND ALWAYS MAKING US SMILE!! I HOPE YOU HAVE A GREAT BIRTHDAY AND GREAT MEMORIES TO COME! 🥳🌼',
		pic: '',
		art: '',
		latlng: '39.01,-98.48'
	},
	{
		name: '@Blazignite5',
		twitter: '@Blazignite6',
		message: 'Happy Birthday Subaru! Watching you has always lifted me up whenever I\'m down that day. Thank you for being there for the Subatomos. Also, remember to keep taking breaks whenever you need it. We can handle a couple of days without Shuba.',
		pic: '',
		art: '',
		latlng: '12.21,125.02'
	},
	{
		name: 'Rex',
		twitter: '',
		message: 'Happy birthday !!',
		pic: '20220606_132233.jpg',
		art: '',
		latlng: '3.14,101.69'
	},
	{
		name: 'Thunderwing',
		twitter: '',
		message: 'Happy Birthday Subaru! Another birthday, another season. Time really flies when having fun, in this case, watching you. May you keep on shining, Hololive\'s Sun!',
		pic: '',
		art: '',
		latlng: '46.86,-71.2'
	},
	{
		name: 'テスト太郎',
		twitter: '',
		message: '君が進みたい道へ進んで行けるように陰ながら応援してます。あ、適度に休んでね(杞憂民',
		pic: '',
		art: '',
		latlng: '35.69,139.7'
	},
	{
		name: 'James Jackson',
		twitter: '',
		message: 'Happy birthday, Subaru-chan! Thank you for always doing your best and trying so hard to communicate with us kagai niki. Your English has improved so much!',
		pic: '',
		art: '',
		latlng: '34.09,-118.32'
	},
	{
		name: 'Chris',
		twitter: '',
		message: 'Merry Birthmas Subaru! I just wanted to let you know how much I appreciate you. You always brighten my day with your wonderful personality, your funny stories, and your adorable voice. Keep being the amazing person that you are.',
		pic: '',
		art: '',
		latlng: '39.55,-105.78'
	},
	{
		name: '@RossComputerGuy',
		twitter: '@RossComputerGuy',
		message: 'Your content has been inspirational from a creative viewpoint. I love watching you ever since that baseball clip I randomly found on YouTube. You are one of the biggest reasons why I am learning Japanese. Even though I am using Duolingo, it is not the best but I am improving. Your one of my favorite content creators and I hope to see even more content from you in the future.',
		pic: '',
		art: '',
		latlng: '41.89,-87.66'
	},
	{
		name: 'Grommitmug',
		twitter: '',
		message: 'Hello Subaru-chan! Happy birthday!  Your streams are always very entertaining, they keep me company whenever I study. They make me feel a little less lonely. Seeing your spirited personality makes me wanna work harder too! I might miss your birthday stream live because I have a university entrance exam on that day, but I\'ll make sure to watch the archive! Anyway, happy birthday Subaru-chan! I wish you happiness and best of luck in life!',
		pic: '',
		art: '',
		latlng: '-6.2,106.84'
	},
	{
		name: 'Kuma',
		twitter: '@Rafif48',
		message: 'Happy Birthday SUBARU!!!! ',
		pic: '',
		art: '',
		latlng: '-1.18,116.83'
	},
	{
		name: 'naori',
		twitter: '',
		message: 'Happy Birthday Subaru! Hope you have a great day. Always take care and just be yourself! We subatomos are happy just you being yourself and happy on what you do. Also thank you for always making me smile whenever I watch your stream/clips. Again, happy birthday Subaru!!!',
		pic: '',
		art: '',
		latlng: '11.18,122.59'
	},
	{
		name: 'Novus',
		twitter: '',
		message: 'Happy Birthday Subaru chan! Ever since I discovered you while I was going around in hololive, I had fallen for you! I have always seen you as the little sister I never had. You are so bright, cheerful, motivating, and adorable. Take care, have fun and goodluck out there dear Subaru chan :)',
		pic: '',
		art: '',
		latlng: '14.59,120.98'
	},
	{
		name: '@ryutamasaki',
		twitter: '@ryutamasaki',
		message: 'Happy birthday Subaru-chan! During the anime convention Dokomi in germany I carried Shuba Duck around to promote hololive JP and was happy to also meet other Subatomos! ',
		pic: 'IMG_5444.JPEG',
		art: '',
		latlng: '51.22,6.77'
	},
	{
		name: 'Billy',
		twitter: '',
		message: 'Happy Birthday Subaru! Your streams make me feel a lot better when I\'m sad or lonely! I hope we get to keep having fun together this year too!',
		pic: '',
		art: '',
		latlng: '41.95, -70.66'
	},
	{
		name: '@MakkaUmemori',
		twitter: '@MakkaUmemori',
		message: '大空スバルちゃん!　お誕生日おめでっと! I\'m so glad I feel into this rabbit hole to find an amazing idol like you!!! Your hardworking attitude always lifts me up and your songs are so cute! Here\'s to another great year with you and us Subatomos!!! ',
		pic: '',
		art: '',
		latlng: '49.05,-122.30'
	},
	{
		name: 'ITIK',
		twitter: '',
		message: 'Selamat Hari Jadi to Subaru!!! Happy birthday, eat well, sleep a lot and keep shining to brighten up people\'s lives with your smile!!! Love how you fly in Alternative!!',
		pic: '',
		art: '',
		latlng: '4.53,144.72'
	},
	{
		name: '@ren_ydn810',
		twitter: '@ren_ydn811',
		message: 'スバルちゃん誕生日おめでとう！チャージ チャレンジ 全力アクセル 頑張るキミへ一番乗りのエールを贈るそんなスバ友でありたい！これからも応援してます！',
		pic: '',
		art: '',
		latlng: '35.21,140.02'
	},
	{
		name: 'にくだん',
		twitter: '@NikudanB',
		message: '17.4歳のお誕生日おめでとう！！！色んなとこでお祝いすると思うけどここでも盛大にお祝いするぜ！！！！',
		pic: 'IMG_20220530_133308.jpg',
		art: '',
		latlng: '35.8,139.72'
	},
	{
		name: 'J L',
		twitter: '',
		message: 'お誕生日おめでとうございます！ Let\'s make more memories together!',
		pic: '',
		art: '',
		latlng: '14.81,121.31'
	},
	{
		name: '@WokeButLazy23',
		twitter: '@WokeButLazy24',
		message: 'Hi Subaru, I love your content and my favorite work of yours is your Officer Subaru segments! I think your English skills are improving very nicely and I believe you brighten every collab you are apart of! I\'m proud to have you as my oshi!',
		pic: '',
		art: '',
		latlng: '42.65,-73.75'
	},
	{
		name: 'Andy',
		twitter: '',
		message: 'Met Subaru one year ago, I really like your voice and cheerfulness! You always bring energy and vitality for the whole year. I\'ll never regret being one of the Subatomo!',
		pic: '',
		art: '',
		latlng: '3.06,101.61'
	},
	{
		name: 'Suzaku',
		twitter: '',
		message: 'Thank you for being in hololive. Thank you for streaming and making my day better Thank you for always being bright and cheerful. Thank you for being our Sun Thank you Subaru for being Subaru Happy birthday!!',
		pic: '',
		art: '',
		latlng: '1.35,103.96'
	},
	{
		name: 'Phoebe',
		twitter: '',
		message: 'Happy birthday, Subaru! A cute, energetic, and wonderful idol who cares about all her fans. That\'s what Subaru means to me. I love your voice and cheerfulness, and hope you\'ll stay with us for a long time to come.',
		pic: '',
		art: '',
		latlng: '35.76,-78.60'
	},
	{
		name: 'Sobatomo',
		twitter: '',
		message: 'chiwa subaru, Time flies and I have been a subatomo for 1 year!! really appreciate the happiness you bring to me and I hope you are also having fun when streaming. Wish you the best on your future and I will keep rooting for you 🦆💖',
		pic: '',
		art: '',
		latlng: '2.97,101.79'
	},
	{
		name: '@itsyoboibrent',
		twitter: '',
		message: 'スバルちゃんお誕生日おめでとう！スバルの配信はめっちゃめっちゃ楽しかったよ！ありがとうよ！',
		pic: '',
		art: '',
		latlng: '2.08,103.36'
	}
];
messages.forEach(msg =>
{
	if (msg.pic != '') msg.pic = dir + msg.pic;
	if (msg.art != '') msg.art = dir + msg.art;
});
export default messages;
