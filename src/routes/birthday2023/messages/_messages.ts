const messages = [
	{ name: 'Crow', message: 'Happy birthday!!! 	' },
	{ name: 'カイト', message: 'スバルちゃん誕生日おめでとう！！！！ 今年も一緒に一年楽しんで一緒に頑張ろう！！！！	' },
	{ name: 'Kojin', message: 'お誕生日おめでとう、私の女王 💖	' },
	{
		name: 'Ryùgo',
		message: 'Happy 5th Birthday to the cutest duck of the world ! We are so proud, and so happy to have you, Subaru ! Keep striving and doing your best, we love you !  PS : I\'m sure you would look adorable with glasses, please try some when you get the occasion 👓✨	'
	},
	{
		name: 'BotCereal',
		message: 'YO! Subaru I love your streams and love you and your personality. Your streams help me learn japanese better and i wish to visit one day. HAPPY BIRTHDAY!!!!	'
	},
	{ name: 'GreenFalcon3146', message: 'Happy Birthday Subaru! Thank you for everything!!!!!!	' },
	{ name: 'きんぎょ', message: 'スバルちゃんお誕生日おめでとう🐥 いつもスバルちゃんからは元気を貰っています いつまでも元気に、楽しく配信頑張ってください！！	' },
	{ name: 'Shaspear', message: 'Happy Birthday Subaru🥳🥳🥳  We will always love you whatever you do	' },
	{
		name: 'Mastergrunt',
		message: 'Happy 5th birthday Subaru! 2 years since i watch your channel and this 2 years with you have been a lot of fun, you help me in a lot of hard times you give me a lot of motivation in the things i do, i want to thank you for these 2 years wish you the best and lots of luck on what you do, thanks for your hard work Subaru!!! 🚑🥳❤️	'
	},
	{
		name: 'Gatsu',
		message: 'Happy birthday, dear Subaru-chan ! Today, we celebrate the day an incredible star was born into this world. You bring boundless joy and inspiration to so many, and your positive energy is truly infectious.  Suba-chan, your dedication and hard work shine brightly in everything you do. Your unwavering passion for entertaining others, whether through your captivating voice, engaging streams, or delightful singing, has touched the hearts of countless fans around the globe. Your genuine and down-to-earth nature makes us feel like we\'re a part of your journey, and that connection is truly special.  As you embark on another year of adventures, may you find even more happiness, success, and fulfillment in every aspect of your life. May your dreams continue to soar higher than the skies, and may you always be surrounded by love, support, and friendship.  Remember to take time for yourself, to rest and recharge, for you deserve all the self-care and relaxation in the world. Your well-being is just as important as the happiness you bring to others. Your smile brightens our days, and we wish for your days to be filled with smiles as well.  On this special day, we celebrate you, Oozora Subaru, a cherished and irreplaceable part of our lives. Thank you for being you and for sharing your incredible talents with the world. You have made a positive impact on so many, and we eagerly anticipate the adventures yet to come.  Happy birthday, Subaru-chan ! May this day be filled with laughter, love, and the warmest wishes from your fans who hold you dear in their hearts. Here\'s to an amazing year ahead, full of endless possibilities and incredible achievements. You deserve all the happiness in the world. Enjoy your special day!	'
	},
	{ name: 'Crøssed', message: 'HAPPY BURTHDAYYY SHUBAAAAAA !!!	' },
	{
		name: 'Ahide',
		message: 'Happy 5th birthday to my savior, i have been saved when my days were worst. Everytime i heard your laugh and voice, and everytime i knew about your activities i feel blessed because you still stay with us and still be as oozora subaru we know. I wish you all the best, may we can be your savior someday. Thank you for you and all of subatomos	'
	},
	{
		name: 'Counter',
		message: 'Hello/Kon\'nichiwa (only word i know from my brain without looking it up but still don\'t know how to write it) Subaru, (i hope you understand because i don\'t undertand japanese but still watches japanese) a fan from sweden who is lonely, deaf and have autism want to wish you a happy birthday and thanks for entertaining me even through just got back to hololive thanks to you via youtube recommendation. Also imma try catch some stream but as im in sweden. timezones yikes anyhow, again Happy birthday and continue to do what you enjoy	'
	},
	{ name: 'Marshall', message: 'スバル神様🙏	' },
	{
		name: 'SilverScizor',
		message: 'Thank you for being an idol that brightens our days and gives us a reason to smile everyday! I will always support you!	'
	},
	{ name: 'Qoduq', message: 'Happy Birthday Suabru!!!🎉🎉	' },
	{
		name: 'A251tにゅーと',
		message: '僕にとっては3年目の生誕祭となりました。 そして8月末にはメンバーに参加してから3年目も迎えます これからも迎えてゆくことが出来たら良いな、と願いつつ… 誕生日おめでとうございます！	'
	},
	{
		name: 'Simurgh',
		message: 'Happy birthday Subaru!  It\'s been 5 years already that you have been providing us a happiness!  Thank you for all the hard work that you have done. I wish you the very best of luck in all aspect.  We love you Subaru!	'
	},
	{
		name: 'Reverie Neko',
		message: 'お誕生日おめでとうございます！スバルはいつも明るくて元気で、マジで太陽少女です！これからも応援しています！Happy Birthday, Subaru!!	'
	},
	{
		name: 'Rafly Andrian',
		message: 'お誕生日、おめでとう！ スバルさん Keep doing what you\'re doing and keep smiling, Love from Indonesia	'
	},
	{
		name: 'DEMONICSLAYER',
		message: 'Happy 5th Birthday, Subaru!! Keep doing what you enjoy and always be happy and healthy, our beloved Sun of Hololive.	'
	},
	{
		name: 'Brightjade',
		message: 'Subaruちゃん,お誕生日おめでとう!  Congrats on 5 years in hololive! Thank you being our sunshine girl and making us smile! Stay healthy and happy!  We love you Subaru!!! <3	'
	},
	{
		name: 'Holic Shot',
		message: 'Happy Birthday, Subaru!  Since I started watching you in 2020, you\'ve been a consistent and welcomed presence in my life. I\'ve greatly valued every chance I\'ve gotten to see your streams live and recorded, to see translated clips (eternal gratitude to the clipper-translators out there!), your concerts, and even your tweets! Your shining, bright disposition and strength inspires me. Through sunny days and tough stretches on both your side and mine, you never fail to lift my spirits up, no matter what! Wherever your path takes you, I\'ll be rooting for you, and I hope I get to see you take every step!   Sincerely, Holic Shot	'
	},
	{
		name: 'ミレニアム',
		message: 'A wonderful birthday to you Subaru ! Thank you for everything you\'ve done, and everything you do.  You shine so brightly whatever you do, and whether it be your singing, dancing, your streams; zatsudan or gaming, you never fail to bring us a smile. You genuinly make us happier and I don\'t think we\'ll ever be able to thank you enough for it !  I\'m sure you might have seen us kaigai niki call you "the sun of Hololive", and it is no exaggeration when talking about how much you brighten your surrounding, and our lives as well.  Once again, a happy birthday to you, and I cannot wait to see what the future holds for you and for us all !	'
	},
	{name: "shub bass", message: "Happy birthday Subaru! It's crazy how you've been with hololive for almost 5 years! You've grown up so much and learned so much these past years, I can't wait to see what you do next!"},
	{ name: 'callmelordy', message: 'Hbd yo. I love yo.' }
];
export default messages;
