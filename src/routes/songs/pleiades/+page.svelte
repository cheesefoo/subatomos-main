<script lang='ts'>
	import { en, jp, romaji } from '../_lyrics_pleiades.ts';
	import { media } from '$lib/stores/stores';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabList from '$lib/components/Tabs/TabList.svelte';
	import Tab from '$lib/components/Tabs/Tab.svelte';
	import TabPanel from '$lib/components/Tabs/TabPanel.svelte';
	import Youtube from '$lib/components/YouTube.svelte';
</script>
<div class='yt'>
	<iframe src='https://www.youtube.com/embed/RRsw5tT8BJI'  allowfullscreen></iframe>
</div>
{#if $media.mobile}
	<script>
		import { Tabs, TabList, TabPanel, Tab } from '../tabs.js';
	</script>

	<Tabs>
		<TabList>
			<Tab>Japanese</Tab>
			<Tab>Romaji</Tab>
			<Tab>English</Tab>
		</TabList>

		<TabPanel>

			ぷ・れ・あ・で・す!
			<br />

			{#each jp as paragraphs}
				{#each paragraphs as line}
					<div>{line}</div>
				{/each}
				<br />
			{/each}
		</TabPanel>

		<TabPanel>

			Pu・re・a・de・su!
			<br />
			{#each romaji as paragraphs}
				{#each paragraphs as line}
					<div>{line}</div>
				{/each}
				<br />
			{/each}
		</TabPanel>
		<TabPanel>
			<h2>
				{#each en as paragraphs}
					{#each paragraphs as line}
						<div>{line}</div>
					{/each}
					<br />
				{/each}
			</h2>
			<tr><td id='1'><b>1.</b> Oozora</td></tr>
			<tr><td id='2'><b>2.</b> Can be interpreted from Subaru's perspective or fans' perspective.</td></tr>
			<tr><td id='3'><b>3.</b> A starmine is a type of firework.</td></tr>
		</TabPanel>
	</Tabs>

{:else}
	<table style='width: 100%;'>
		<tr>
			<td>
				<table style='width:100%;'>
					<tr>
						<td>KANJI</td>
					</tr>
					<tr>
						<td>ちょこっとヤンチャで　ニコっと元気な</td>
					</tr>
					<tr>
						<td>キラッとスマイル ア・イ・ド・ル！</td>
					</tr>
					<tr>
						<td>毎日もっと　楽しくしたい</td>
					</tr>
					<tr>
						<td>ドンヨク with アドベンチャー</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>ひらひらスカートも</td>
					</tr>
					<tr>
						<td>ちゃんと着こなせるんだよ</td>
					</tr>
					<tr>
						<td>だから もっともっと</td>
					</tr>
					<tr>
						<td>好きになってもいいよ？</td>
					</tr>
					<tr>
						<td>一緒に　大空に飛びたとう</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>光れ Starlight　どんな輝きの中も</td>
					</tr>
					<tr>
						<td>強いキラメキ</td>
					</tr>
					<tr>
						<td>キミに届いているかな？</td>
					</tr>
					<tr>
						<td>1ミリでも　伝われ Fight, oh!</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>チャージ！チャレンジ！全力アクセル</td>
					</tr>
					<tr>
						<td>がんばるキミへ</td>
					</tr>
					<tr>
						<td>一番乗りのスマイルを贈る　スバル ch</td>
					</tr>
					<tr>
						<td>Everyday Night&Day みんなで！</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>ブルーな気持ちに　ズバッと駆けつけ</td>
					</tr>
					<tr>
						<td>お助けしちゃう　ヒーロー！</td>
					</tr>
					<tr>
						<td>弱いハートじゃ　いられないから</td>
					</tr>
					<tr>
						<td>つよつよでいきましょう</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>ハラハラなミズギで</td>
					</tr>
					<tr>
						<td>ドキドキのトキメキ Time…？</td>
					</tr>
					<tr>
						<td>いつでもおいでよ　一年中パラダイス</td>
					</tr>
					<tr>
						<td>ドカンと曇り空吹き飛ばそう</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>あがれ！スターマイン　どんな暗闇の中も</td>
					</tr>
					<tr>
						<td>眩しく照らす</td>
					</tr>
					<tr>
						<td>キミに見つけてもらえた</td>
					</tr>
					<tr>
						<td>それだけでもう　運命なんだ</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>もっとずーーっと道は続いてく</td>
					</tr>
					<tr>
						<td>夢に向かって</td>
					</tr>
					<tr>
						<td>一緒に来てくれるかな？</td>
					</tr>
					<tr>
						<td>その手 とって　走れ</td>
					</tr>
					<tr>
						<td>つれて いくよ　みんなで！</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>ささやく (言葉は) 恥ずかしいけれど</td>
					</tr>
					<tr>
						<td>(こっそり、ね) 伝えたい想い</td>
					</tr>
					<tr>
						<td>今なら言える (あのね ドキドキ…)</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>キミのエールがチカラになるよ</td>
					</tr>
					<tr>
						<td>いつも元気を分けてくれて</td>
					</tr>
					<tr>
						<td>頑張っていけるんだ　笑って過ごせるんだ</td>
					</tr>
					<tr>
						<td>ホントに　ありがとうの気持ちを</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>歌え！ Starlight　どんな輝きの中も</td>
					</tr>
					<tr>
						<td>強いキラメキ</td>
					</tr>
					<tr>
						<td>キミに届いているかな？</td>
					</tr>
					<tr>
						<td>1ミリでも　伝われ Fight, oh!</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>もっとずーーっと道は続いてく</td>
					</tr>
					<tr>
						<td>夢に向かって</td>
					</tr>
					<tr>
						<td>一緒に来てくれるかな？</td>
					</tr>
					<tr>
						<td>その手　とって　走れ</td>
					</tr>
					<tr>
						<td>つれていくよ　みんなで！</td>
					</tr>
					<tr>
						<td>キミと　駆ける　スバル！</td>
					</tr>
				</table>
			</td>
			<td>
				<table style='width:100%;'>
					<tr>
						<td>ROMAJI</td>
					</tr>
					<tr>
						<td>Chokotto yancha de nikotto genkina</td>
					</tr>
					<tr>
						<td>kiratto sumairu a i do ru!</td>
					</tr>
					<tr>
						<td>Mainichi motto tanoshiku shitai</td>
					</tr>
					<tr>
						<td>don’yoku u~izu adobencha</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>hirahira sukato mo</td>
					</tr>
					<tr>
						<td>chanto kikonaseru nda yo</td>
					</tr>
					<tr>
						<td>dakara motto motto</td>
					</tr>
					<tr>
						<td>suki ni natte mo ii yo?</td>
					</tr>
					<tr>
						<td>Issho ni ozora ni tobitatou</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>hikare sutaraito don’na kagayaki no naka mo</td>
					</tr>
					<tr>
						<td>tsuyoi kirameki</td>
					</tr>
					<tr>
						<td>kimi ni todoite iru ka na?</td>
					</tr>
					<tr>
						<td>1-Miri demo tsutawa re Fight, oh!</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>Chaji! Charenji! Zenryoku akuseru</td>
					</tr>
					<tr>
						<td>ganbaru kimi e</td>
					</tr>
					<tr>
						<td>ichiban’nori no sumairu o okuru Subaru ch</td>
					</tr>
					<tr>
						<td>eburidi Night& de min’nade!</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>Buruna kimochi ni zubatto kaketsuke</td>
					</tr>
					<tr>
						<td>o tasuke shi chau hiro!</td>
					</tr>
					<tr>
						<td>Yowai hato ja i rarenaikara</td>
					</tr>
					<tr>
						<td>tsuyo tsuyode ikimashou</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>haraharana mizugi de</td>
					</tr>
					<tr>
						<td>dokidoki no tokimeki ontaimu…?</td>
					</tr>
					<tr>
						<td>Itsu demo oideyo ichinenju paradaisu</td>
					</tr>
					<tr>
						<td>dokanto kumorizora fukitobasou</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>agare! Sutamain don’na kurayami no naka mo</td>
					</tr>
					<tr>
						<td>mabushiku terasu</td>
					</tr>
					<tr>
						<td>kimi ni mitsukete moraeta</td>
					</tr>
					<tr>
						<td>sore dake de mo unmeina nda</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>mottozutto michi wa tsudzuite ku</td>
					</tr>
					<tr>
						<td>yume ni mukatte</td>
					</tr>
					<tr>
						<td>issho ni kite kureru ka na?</td>
					</tr>
					<tr>
						<td>Sono te totte hashire</td>
					</tr>
					<tr>
						<td>tsurete iku yo min’na de!</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>Sasayaku (kotoba wa) hazukashikeredo</td>
					</tr>
					<tr>
						<td>(kossori, ne) tsutaetai omoi</td>
					</tr>
					<tr>
						<td>imanara ieru (ano ne dokidoki…)</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>kimi no eru ga Chikara ni naru yo</td>
					</tr>
					<tr>
						<td>itsumo genki o wakete kurete</td>
					</tr>
					<tr>
						<td>ganbatte ikeru nda waratte sugoseru nda</td>
					</tr>
					<tr>
						<td>honto ni arigato no kimochi o</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>utae! Sutaraito don’na kagayaki no naka mo</td>
					</tr>
					<tr>
						<td>tsuyoi kirameki</td>
					</tr>
					<tr>
						<td>kimi ni todoite iru ka na?</td>
					</tr>
					<tr>
						<td>1-Miri demo tsutawa re Fight, oh!</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>Mottozutto michi wa tsudzuite ku</td>
					</tr>
					<tr>
						<td>yume ni mukatte</td>
					</tr>
					<tr>
						<td>issho ni kite kureru ka na?</td>
					</tr>
					<tr>
						<td>Sono te totte hashire</td>
					</tr>
					<tr>
						<td>tsurete iku yo min’na de!</td>
					</tr>
					<tr>
						<td>Kimi to kakeru Subaru!</td>
					</tr>
				</table>
			</td>
			<td>
				<table style='width:100%;'>
					<tr>
						<td>ENGLISH</td>
					</tr>
					<tr>
						<td>A bit mischievous, smiley, lively</td>
					</tr>
					<tr>
						<td>with a sparkly smile I・D・O・L!</td>
					</tr>
					<tr>
						<td>I want to have more fun every day,</td>
					</tr>
					<tr>
						<td>Indulgent with adventure</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>A fluttery skirt</td>
					</tr>
					<tr>
						<td>I can wear it stylishly ya know</td>
					</tr>
					<tr>
						<td>That's why more and more</td>
					</tr>
					<tr>
						<td>it's okay to fall in love</td>
					</tr>
					<tr>
						<td>Together, let's take off to the heavens<sup><a href='#1'>1</a></sup></td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>Shine! Starlight in all its luster</td>
					</tr>
					<tr>
						<td>An intense sparkle</td>
					</tr>
					<tr>
						<td>Am I reaching you?</td>
					</tr>
					<tr>
						<td>Even if it's only 1mm, let me tell you "Fight oh"!</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>Charge! Challenge! Full throttle!</td>
					</tr>
					<tr>
						<td>To you, giving their all</td>
					</tr>
					<tr>
						<td>The first one to give you a smile, Subaru channel!</td>
					</tr>
					<tr>
						<td>Every day, night and day, with everyone!</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>Blue
							feelings? (I'll)<sup><a href='#2'>2</a></sup> Come running without hesitation
						</td>
					</tr>
					<tr>
						<td>I'll help you, a hero!</td>
					</tr>
					<tr>
						<td>Because a weak heart won't do</td>
					</tr>
					<tr>
						<td>Let's get stronger</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>An exciting swimsuit</td>
					</tr>
					<tr>
						<td>Heart-thumping time?</td>
					</tr>
					<tr>
						<td>Come any time, it's an all year round paradise</td>
					</tr>
					<tr>
						<td>Let's blow away the cloudy sky with a bang</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>Rise up! A Starmine<sup><a href='#3'>3</a></sup> no matter the darkness<sup><a href='#2'>2</a></sup></td>
					</tr>
					<tr>
						<td>A dazzling shine!</td>
					</tr>
					<tr>
						<td>I'll find you! Got you!</td>
					</tr>
					<tr>
						<td>That alone is already destiny!</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>The road continues on and on</td>
					</tr>
					<tr>
						<td>towards a dream</td>
					</tr>
					<tr>
						<td>Will you come with me?</td>
					</tr>
					<tr>
						<td>Take that hand and run</td>
					</tr>
					<tr>
						<td>Let's go, with everyone</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>Whispering (words) although it's embarrassing</td>
					</tr>
					<tr>
						<td>(Secretly, hey...) The feelings I want to convey</td>
					</tr>
					<tr>
						<td>I can say them now (You know... my heart is pounding)</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>Your cheers become my power</td>
					</tr>
					<tr>
						<td>You always share your energy</td>
					</tr>
					<tr>
						<td>I can give it my all and spend my time laughing</td>
					</tr>
					<tr>
						<td>Truly, "thank you" is the feeling</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>Sing! Starlight in all its luster</td>
					</tr>
					<tr>
						<td>An intense sparkle</td>
					</tr>
					<tr>
						<td>Am I reaching you?</td>
					</tr>
					<tr>
						<td>Even if it's only 1mm, let me tell you "Fight oh"!</td>
					</tr>
					<tr>
						<td><br/></td>
					</tr>
					<tr>
						<td>The road continues on and on</td>
					</tr>
					<tr>
						<td>towards a dream</td>
					</tr>
					<tr>
						<td>Will you come with me?</td>
					</tr>
					<tr>
						<td>Take that hand and run</td>
					</tr>
					<tr>
						<td>Let's go, with everyone</td>
					</tr>
					<tr>
						<td>Running with you, Subaru!</td>
					</tr>

				</table>
			</td>
		</tr>
	</table>
<br/><br/><br/>

	<tr><td id='1'><b>1.</b> Oozora</td></tr>
	<tr><td id='2'><b>2.</b> Can be interpreted from Subaru's perspective or fans' perspective.</td></tr>
	<tr><td id='3'><b>3.</b> A starmine is a type of firework.</td></tr>
{/if}

<style lang='scss'>
  .yt {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    iframe{

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
</style>