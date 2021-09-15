import { dev } from '$app/env';

const dir = dev ? '/assets/images/fanart' : '/assets/images/fanart';

interface SubaFanart {
	name: string;
	url?: string | URL;
	message: string;
	src: string;
}

let fanart: Array<SubaFanart> = [
	{
		name: 'kirome_toru_2',
		url: 'https://twitter.com/kirome_toru_2',
		message:
			'スバルちゃん活動三周年おめでとう！！ どんなに嫌なことがあってもスバルちゃんの笑い声や面白い話を聞くとめっちゃ元気でるんだ。いつも私たちに元気を届けてくれてありがとう。これからもずっと応援してる。スバルちゃん大好き！！！！',
		src: 'kirome_toru_2 @kirome_toru_2.png'
	},
	{
		name: '五色',
		url: 'https://twitter.com/meganekko360',
		message:
			'私事ですが、一時期イラストが描けなくなったことがありました。 そのときyoutubeで、スバルちゃんの「どぅーまいべすと！」を偶然みつけて、サムネに惹かれて聞いてみました。 スバルちゃんのかわいさに魅了され、また自分の状況もあり、その歌詞にとても励まされました。 「自分のペースで、自分のベストをつくせばいいんだよ。」 そうスバルちゃんに言われているようで、とても元気をもらえました。 現在は、イラストも自分のペースで描けるようになって、とても楽しいです。 いつもリスナーが楽しめるように、企画や配信を考えてくれてありがとうございます。 これからも体調に気を付けて頑張ってください！応援してます！！',
		src: '五色 @meganekko360.png'
	},
	{
		name: 'notseijikun',
		url: 'https://twitter.com/notseijikun',
		message:
			'HAPPY 3 YEAR ANNIVERSARY SHUBA!!!! Thank you for bringing happiness to the world with your cheerful and positive personality and I hope we get to see more in the upcoming years to come! Please continue to be you and continue being the best duck girl idol. ',
		src: 'notseijikun @notseijikun.png'
	},
	{
		name: '柏月すず@ebi_osushi_',
		url: 'https://twitter.com/ebi_osushi_',
		message:
			'スバルちゃん3周年おめでとう！ 3年間色んなことに挑戦していたスバルちゃんを陰ながらずっと応援してたよ！最初は苦手だと言っていた歌もゲーム実況も雑談配信も3年でここまでできるようになった！すごい！！ 逃げないで自分と向き合う。これだけで立派なVTuber、立派なアイドルだよ！ スバルちゃんが大きなステージで歌って踊ってる姿を見る度に｢出会えてよかった｣って思って泣きそうになってます...！ これからもこっそり応援してます！ふぁいとー！',
		src: '柏月すず @ebi_osushi_.jpg'
	},
	{
		name: 'きんぎょ',
		url: 'https://twitter.com/goldfish_22',
		message:
			'スバルちゃん3周年おめでとう！！！いつも配信で元気をもらっていますー！！いつもありがとう～～～！！！4年目もスバルちゃんにとって楽しい日々が訪れますように☆ﾐ',
		src: 'きんぎょ @goldfish_22.jpg'
	},
	{
		name: 'AtofreakingB',
		url: 'https://twitter.com/AtofreakingB',
		message:
			"Congrats on your 3rd Anniversary celebration! Been a Subatomo for 2 years now and it's a blast following your Growth over the 3 years! The Subatomo community has been a fun place to hang out and chat random stuff. Cheers to another year with Subaru!",
		src: 'AtofreakingB @AtofreakingB.png'
	},
	{
		name: 'woom110',
		url: 'https://twitter.com/woom110',
		message:
			'thank you subaru!! i became a fan after seeing a video about your past and how your house burned down, people offering shady jobs and you working hard while we were similiar in age. it helps motivate me when i need to work hard!! keep going!!',
		src: 'woom110.png'
	},
	{
		name: 'いもりこはふ',
		url: 'https://twitter.com/imoricohafumura',
		message:
			'新しい環境になかなか馴染めない時に大空スバルちゃんの配信に出逢いました。 暗い気持ちをいつも明るく照らしてくれるスバルちゃんが大大だーい好きです‼️‼️‼️ いつも楽しくて笑いが絶えない配信をありがとう！３周年おめでとうございます💮 これからもずっと応援してます👀👀💕',
		src: 'いもりこはふ @imoricohafumura.png'
	},
	{
		name: 'かなミ',
		url: 'https://twitter.com/kanami9731',
		message: 'スバル3周年おめでとう！ かっこいいスバルも可愛いスバルも全部大好き！',
		src: 'かなミ @kanami9731.png'
	},
	{
		name: 'オクトパスプライム',
		url: 'https://twitter.com/ibonnko',
		message: 'スバルちゃん3周年おめでとうございます！！！！！これからも大好き！！！！！！！！',
		src: 'オクトパスプライム @ibonnko.jpg'
	},
	{
		name: 'Alkahf,Jr. @iyskeyhold',
		url: 'https://twitter.com/iyskeyhold',
		message:
			"YO Subaru! Happy 3rd anniversary!! I was not around last year, but I feel happy that I've known you these past 7 months. You are really funny, cute, interesting, hardworking, unique, energetic, and you are the brightest and the loudest Idol Vtuber on earth! lol       I hope you can achieve your dreams, so let's do our best this year too! and we'll celebrate again next year!!!! Bye-bye      ",
		src: 'Alkahf,Jr.  @iyskeyhold.png'
	},
	{
		name: 'PLewds',
		url: 'https://twitter.com/PLewds',
		message:
			'スバルちゃん！三周年記念おめでとうございます！ いつも元気すぎるスバルちゃんは僕の太陽だ！いつまでも応援するね！ 大好きだよ！！ -ピーン祭り',
		src: 'PLewds @Plewds.png'
	},
	{
		name: 'pipe50760530',
		url: 'https://twitter.com/pipe50760530',
		message:
			'すばるちゃん！3周年記念おめでとうございます！かわいさと笑いと涙と感動をありがとう！！！これからも何が起こるかとても楽しみにしています！ 益々の活躍と健康と発展を祈っております！あじまる！',
		src: 'pipe @pipe50760530.jpg'
	},
	{
		name: 'TMFoxz',
		url: 'https://twitter.com/TMFoxz',
		message:
			"Subaru has pulled me out of a tough spot. After finding out about her, she's helped me smile once again and helped me see the good side of things. Minor inconveniences used to bother me so much but after hearing what Subaru has gone through in her life and how she still manages to push through, it inspires me to do the same. I may not be able to support her directly but I will always be there to watch her streams whenever I can. Thank You Subaru and congratulations on your third anniversary! ^^",
		src: 'TMFoxz @TMFoxz.png'
	},
	{
		name: 'Yurian',
		url: 'https://twitter.com/ace_highwind',
		message:
			"Happy third anniversary Subaru-chan!!!  I've been following you for a bit more than a year and it has been a wonderful time, your streams had been always a moment in which I can relax and enjoy, one of my goals is to learn Japanese and chat more during your live streams cause I am a Shubanobi, most of the time I just chat during members streams and your live streams cause I feel we need to cheer you during those, I really hope you gain more confidence in it. Looking forward to the 3D anniversary !",
		src: 'Yurian @ace_highwind.jpg'
	},
	{
		name: 'てんてん',
		url: 'https://twitter.com/akaneten10.',
		message:
			'スバルちゃん3周年おめでとうございます！スバルちゃんのトークが本当に面白くていつもたくさん笑わせてもらっています！これからも楽しい配信を楽しみにしてます！！',
		src: 'てんてん @akaneten10.png'
	},
	{
		name: 'YehezkielKrist1',
		url: 'https://twitter.com/YehezkielKrist1',
		message:
			'Happy anniversary, I hope you all the best. I hope you find your joy in your life and can share with every one that close to you.  regards  subatomo~',
		src: 'YehezkielKrist1 @YehezkielKrist1.jpeg'
	},
	{
		name: 'yuu_2201',
		url: 'https://twitter.com/yuu_2201',
		message:
			'スバルちゃん3周年おめでとうございます！！！！（〃＾∇＾） いつも楽しませてくれてありがとう～！！o(〃＾▽＾〃)o スバルちゃんに会えて本当に良かった！！ これからもずっとずっと応援してるから！！！(｡´ω`｡)ﾉ♡',
		src: 'yuu_2201 @yuu_2201.jpg'
	},
	{
		name: 'JAubreyART',
		url: 'https://twitter.com/JAubreyART',
		message:
			'Subaru, Happy 3rd debut Anniversary!  Thank you so much for your efforts to make everyone smile , when watching you every moment is filled with laughter and joy! We will always support and love you!.',
		src: 'JAubreyART @JAubreyART.jpg'
	},
	{
		name: '虎丸@toramal9831',
		url: 'https://twitter.com/toramal9831',
		message: 'スバルちゃん3周年おめでとう！',
		src: '虎丸 @toramal9831.png'
	},
	{
		name: 'kebslangako',
		url: 'https://twitter.com/kebslangako',
		message:
			"Hello! I have been following Subaru for around almost a year now and I appreciate the time and effort you do in your streams and concerts. At first i didn't think I would like you because of your voice but after hearing you sing and seeing clips of your life stories I was hooked! You can be someone that can have so much energy at the same time someone who I can also relax to.   Congratulations on your 3rd Anniversary and I hope you have more anniversaries!",
		src: 'kebslangako @kebslangako.png'
	},
	{
		name: 'みかく　@mikaku_i',
		url: 'https://twitter.com/mikaku_i',
		message:
			'3周年おめでとうっ！！！ スバルちゃんと出会ってからたくさんの笑顔をいただきました✨ 日々成長するスバルちゃんに心を打たれ、自分も毎日を全力で過ごすことができています。 忙しい日々だと思いますが、無理せず自分のペースで生活を楽しんでください。 これから先の活動も楽しみに、ずっと応援しております。',
		src: 'みかく　@mikaku_i.jpg'
	},
	{
		name: 'brontidepng',
		url: 'https://twitter.com/brontidepng',
		message:
			"おめでとうございます！！ Congratulations on your 3rd anniversary! I've been supporting you for almost a year now and it's been really fun~! All the hard work and effort you put into your streams, your singing, your dancing is truly admirable! Everytime I watch you, you're always able to put a smile on my face! How could I not love you? I want to be as cool, as cute and as dedicated as you are. Your dancing is too cute!! Ahh! Three amazing years of Oozora Subaru! Here's to many more~!!! ",
		src: 'brontidepng @brontidepng.jpeg'
	},
	{
		name: 'subaru_is_cute',
		url: 'https://twitter.com/subaru_is_cute',
		message:
			'スバルはかわいいんだー！！！芸人としてじゃなく！アイドルとしてスバルをすーぱー愛してるーーーーー！！！3周年おめでとー！！！！！',
		src: 'subaru_is_cute @subaru_is_cute.jpg'
	},
	{
		name: 'SHINOMARU',
		url: 'https://twitter.com/sh1n0maru',
		message:
			'スバルちゃん3周年おめでとぉ！ スバルちゃんを知ってまだ1年経ってない未熟者ではありますが、みんなより遅れた分推していきたいと思いますぜ！これからの1年、更にスバルちゃんに良い事がありますように！！',
		src: 'SHINOMARU @sh1n0maru.jpg'
	},
	{
		name: 'DomCosmic',
		url: 'https://twitter.com/domcosmic',
		message:
			"Hello Subaru, I'm a big fan of yours and I just wanted to wish my favorite idol a Happy Anniversary! I hope you enjoy this fan art, I do have a very cartoony art style lol",
		src: 'DomCosmic @domcosmic.png'
	},
	{
		name: 'スライムマン',
		url: 'https://twitter.com/slimeman_hickku',
		message:
			'3周年本当におめでとう！ スバルちゃんの明るい姿を見て元気と勇気を貰っています！ いつも大変な努力をしてスバ友達が喜ぶようなことをしてくれてありがとう！ これからもずっと応援していくよ〜',
		src: 'スライムマン @slimeman_hickku.jpg'
	},
	{
		name: 'KoichiChikata',
		url: 'https://twitter.com/KoichiChikata',
		message:
			'スバルちゃん３周年おめでとうございます！いつもスバルちゃんのテンションの高い配信に元気をもらっています。これからもお体に気をつけて楽しい配信を続けてください！',
		src: 'KoichiChikata @KoichiChikata.png'
	},
	{
		name: 'shadownine',
		url: 'https://twitter.com/shadownine_',
		message:
			'Thank you Subaru and Happy 3rd Anniversary! Your laughter, screams, and interactions with the community have always made me smile and will continue to do so. Best wishes!',
		src: 'shadownine_.png'
	},
	{
		name: 'Josh',
		message: 'Subaru is very, very cute idol who makes my day. Happy 3rd anniversary!',
		src: 'josh.png'
	},
	{
		name: 'yeqwep',
		url: 'https://twitter.com/yeqwep',
		message: 'めでたい',
		src: 'yeqwep @yeqwep.mp4'
	},
	{
		name: 'Un_Tenedor_Mas',
		url: 'https://twitter.com/Un_Tenedor_Mas',
		message:
			"Hello Subaru. CONGRATULATIONS!!! It's your 3rd anniversary!! I only found you a couple of months ago but the happy times you've given me may as well be a life time! Thank you for ypur hard work and I hope to keep giving you my support for a long time more! HAPPY ANNIVERSARY!!!",
		src: 'Un_Tenedor_Mas @Un_Tenedor_Mas.png'
	},
	{
		name: 'はぬけアヒージョ',
		url: 'https://twitter.com/hawahaetoru',
		message:
			'しゅばーう3周年おめでとう！！！！今年はセカンドライブやbloom、スバルちゃんのアニソン担当等ビッグイベントが目白押しでしたね。 各所でお祝いメッセージを書いてるのでぶっちゃけ書けることは多くはないですが（笑）、事務所の炎上やあれやそれや色んな事があった中スバルちゃんが元気に3周年を迎えられた事、私もそれに立ち会えた事が何よりも喜ばしい事だと思います。 3年近くスバルちゃんを推してきて、スバルちゃんがデッカくなるにつれてちょっとガチ恋とか名乗るのは引け目を感じてきましたが、それでもスバルちゃんは依然として私の1番のアイドルです。これからも、突っ走ってください。',
		src: 'はぬけアヒージョ @hawahaetoru .png'
	},
	{
		name: 'めおぷん @meopen429',
		url: 'https://twitter.com/meopen429)',
		message:
			'スバルちゃん3周年おめでとう！！スバルちゃんの明るく弾む笑い声にいつもいっぱい元気をもらっています。前向きにレッスンに取り組む姿、リスナーを楽しませるために色んな企画を考えてくれるところに憧れています。これからもお体に気をつけて活動頑張って下さい！応援してます！',
		src: 'めおぷん @meopen429.png'
	},
	{
		name: 'なつきめい',
		url: 'https://twitter.com/natukituki',
		message:
			'スバルちゃんを知ったのは去年のさざ波ASMRからで、そこから沼にはまりました！これからも応援しています！改めまして、三周年おめでとうございます！',
		src: 'なつきめい @natukituki.jpg'
	},
	{
		name: 'Silverlotus',
		message:
			"Happy 3rd Annivasery Oozora Subaru! Your stream feels very energetic and having a lot of fun makes you stood out from from many other vtuber. There is also some kind of unique charisma that I found in you which makes me as viewers feels lighthearted whenever I open your steam. Your best content for me is your ''OhaSuba'' segment and I wish you all the best in your future stream as Vtuber. You are my favorite and No.1!",
		src: 'Silverlotus.jpeg'
	},
	{
		name: '鬼武羅alzon',
		url: 'https://twitter.com/benson70030',
		message:
			'スバルの映画を最初に見たのは”ib”です。今は隠しているのが残念ですが，その時のスバルちゃんの反応がとても良かったです。当時の悔しい、泣いていてもまた挑戦するという。とてもよく覚えています。 あなたの素直さが好き，記念に描いたものなので、気に入ってもらえたら嬉しいです。 三周年おめでとうございます！これからもよろしくお願いします！！',
		src: '鬼武羅alzon @benson70030.png'
	},
	{
		name: 'innoalvin',
		url: 'https://twitter.com/innoalvin',
		message: 'Subaru in Autumn Style!',
		src: 'innoalvin @innoalvin.jpeg'
	}
];
// fanart.forEach((f) =>
// {
// 	f.src = `${dir}/${f.src}`;
// });
export default fanart;
