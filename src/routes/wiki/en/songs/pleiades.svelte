<script lang='ts'>
	import { jp, romaji } from './_lyrics_pleiades.ts';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabList from '$lib/components/Tabs/TabList.svelte';
	import Tab from '$lib/components/Tabs/Tab.svelte';
	import TabPanel from '$lib/components/Tabs/TabPanel.svelte';
	import { media } from '$lib/stores/stores';
	import Youtube from '$lib/components/YouTube.svelte';
</script>
<!--{#if true}-->
<h1>ぷ・れ・あ・で・す! Lyrics</h1>
<div class='yt'>
	<Youtube videoId='j69l0KUkltw' />
</div>
{#if $media.small}


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
			Pleiades!
			<br />
			<div>A bit mischievous, smiley, lively</div>
			<div>with a sparkly smile I・D・O・L!</div>
			<div>I want to have more fun every day,</div>
			<div>Indulgent with adventure</div>
			<br />
			<div>A fluttery skirt</div>
			<div>I can wear it stylishly ya know</div>
			<div>That's why more and more</div>
			<div>it's okay to fall in love</div>
			<div>Together, let's take off to the heavens<sup><a href='#footnote-1m'>1</a></sup></div>
			<br />
			<div>Shine! Starlight in all its luster</div>
			<div>An intense sparkle</div>
			<div>Am I reaching you?</div>
			<div>Even if it's only 1mm, let me tell you "Fight oh"!</div>
			<br />
			<div>Charge! Challenge! Full throttle!</div>
			<div>To you, giving their all</div>
			<div>The first one to give you a smile, Subaru channel!</div>
			<div>Every day, night and day, with everyone!</div>
			<br />
			<div>Blue feelings? [I'll]<sup><a href='#footnote-2m'>2</a></sup> Come running without hesitation</div>
			<div>"I'll help you," a hero!</div>
			<div>Because a weak heart won't do</div>
			<div>Let's get stronger</div>
			<br />
			<div>An exciting swimsuit</div>
			<div>Heart-thumping time?</div>
			<div>Come any time, it's an all year round paradise</div>
			<div>Let's blow away the cloudy sky with a bang</div>
			<br />
			<div>Rise up! A Starmine<sup><a href='#footnote-3m'>3</a></sup> no matter the darkness<sup><a
				href='#footnote-2m'>2</a></sup></div>
			<div>A dazzling shine!</div>
			<div>I'll find you! Got you!</div>
			<div>That alone is already destiny!</div>
			<br />
			<div>The road continues on and on</div>
			<div>towards a dream</div>
			<div>Will you come with me?</div>
			<div>Take that hand and run</div>
			<div>Let's go, with everyone</div>
			<br />
			<div>Whispering (words) although it's embarrassing</div>
			<div>(Secretly, hey...) The feelings I want to convey</div>
			<div>I can say them now (You know... my heart is pounding)</div>
			<br />
			<div>Your cheers become my power</div>
			<div>You always share your energy</div>
			<div>I can give it my all and spend my time laughing</div>
			<div>Truly, "thank you" is the feeling</div>
			<br />
			<div>Sing! Starlight in all its luster</div>
			<div>An intense sparkle</div>
			<div>Am I reaching you?</div>
			<div>Even if it's only 1mm, let me tell you "Fight oh"!</div>
			<br />
			<div>The road continues on and on</div>
			<div>towards a dream</div>
			<div>Will you come with me?</div>
			<div>Take that hand and run</div>
			<div>Let's go, with everyone</div>
			<div>Running with you, Subaru!</div>
			<p>
				<a id='footnote-1m'>1.</a> Oozora 大空
				<br />
				<a id='footnote-2m'>2.</a> Can be interpreted from a fan perspective or Subaru's perspective.
				<br />
				<a id='footnote-3m'>3.</a> A Starmine is a type of firework
			</p>
		</TabPanel>
	</Tabs>

{:else }

	<!--	<iframe src='https://www.youtube.com/embed/j69l0KUkltw' align='middle' allowfullscreen></iframe>-->

	<table>
		<thead>
		<tr>
			<th>Japanese</th>
			<th>Romaji</th>
			<th>English</th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td>ぷ・れ・あ・で・す!</td>
			<td> Pu・re・a・de・su!</td>
			<td> Pleiades!
			</td>
		</tr>
		<br />
		<tr>
			<td>ちょこっとヤンチャで　ニコっと元気な</td>
			<td> Chokotto yancha de nikotto genkina</td>
			<td> A bit mischievous, smiley, lively</td>
		</tr>
		<tr>
			<td>キラッとスマイル ア・イ・ド・ル！</td>
			<td> kiratto sumairu a i do ru!</td>
			<td> with a sparkly smile I・D・O・L!</td>
		</tr>
		<tr>
			<td> 毎日もっと　楽しくしたい</td>
			<td> Mainichi motto tanoshiku shitai</td>
			<td> I want to have more fun every day,</td>
		</tr>
		<tr>
			<td>ドンヨク with アドベンチャー</td>
			<td> don’yoku u~izu adobencha</td>
			<td> Indulgent with adventure</td>
		</tr>
		<br />
		<tr>
			<td>ひらひらスカートも</td>
			<td> hirahira sukato mo</td>
			<td> A fluttery skirt</td>
		</tr>
		<tr>
			<td>ちゃんと着こなせるんだよ</td>
			<td> chanto kikonaseru nda yo</td>
			<td> I can wear it stylishly ya know</td>
		</tr>
		<tr>
			<td>だから もっともっと</td>
			<td> dakara motto motto</td>
			<td> That's why more and more</td>
		</tr>

		<tr>
			<td>好きになってもいいよ？</td>
			<td> suki ni natte mo ii yo?</td>
			<td> it's okay to fall in love</td>
		</tr>

		<tr>
			<td> 一緒に　大空に飛びたとう</td>
			<td> Issho ni ozora ni tobitatou</td>
			<td> Together, let's take off to the heavens<sup><a href='#footnote-1'>1</a></sup></td>
		</tr>
		<br />


		<tr>
			<td>光れ Starlight　どんな輝きの中も</td>
			<td> hikare sutaraito don’na kagayaki no naka mo</td>
			<td> Shine! Starlight in all its luster</td>
		</tr>

		<tr>
			<td>強いキラメキ</td>
			<td> tsuyoi kirameki</td>
			<td> An intense sparkle</td>
		</tr>

		<tr>
			<td> キミに届いているかな？</td>
			<td> kimi ni todoite iru ka na?</td>
			<td> Am I reaching you?</td>
		</tr>

		<tr>
			<td> 1ミリでも　伝われ Fight, oh!</td>
			<td> 1-Miri demo tsutawa re Fight, oh!</td>
			<td> Even if it's only 1mm, let me tell you "Fight oh"!</td>
		</tr>
		<br />


		<tr>
			<td> チャージ！チャレンジ！全力アクセル</td>
			<td> Chaji! Charenji! Zenryoku akuseru</td>
			<td> Charge! Challenge! Full throttle!</td>
		</tr>

		<tr>
			<td>がんばるキミへ</td>
			<td> ganbaru kimi e</td>
			<td> To you, giving their all</td>
		</tr>

		<tr>
			<td>一番乗りのスマイルを贈る　スバル ch</td>
			<td> ichiban’nori no sumairu o okuru Subaru ch</td>
			<td> The first one to give you a smile, Subaru channel!</td>
		</tr>

		<tr>
			<td> Everyday Night&Day みんなで！</td>
			<td> eburidi Night& de min’nade!</td>
			<td> Every day, night and day, with everyone!</td>
		</tr>
		<br />


		<tr>
			<td>ブルーな気持ちに　ズバッと駆けつけ</td>
			<td> Buruna kimochi ni zubatto kaketsuke</td>
			<td> Blue feelings? [I'll]<sup><a href='#footnote-2'>2</a></sup> Come running without hesitation</td>
		</tr>

		<tr>
			<td>お助けしちゃう ヒーロー！</td>
			<td> o tasuke shi chau hiro!</td>
			<td> "I'll help you," a hero!</td>
		</tr>

		<tr>
			<td> 弱いハートじゃ いられないから</td>
			<td> Yowai hato ja i rarenaikara</td>
			<td> Because a weak heart won't do</td>
		</tr>

		<tr>
			<td>つよつよでいきましょう</td>
			<td> tsuyo tsuyode ikimashou</td>
			<td> Let's get stronger</td>
		</tr>
		<br />


		<tr>
			<td> ハラハラなミズギで</td>
			<td> haraharana mizugi de</td>
			<td> An exciting swimsuit</td>
		</tr>

		<tr>
			<td>ドキドキのトキメキ Time…？</td>
			<td> dokidoki no tokimeki ontaimu…?</td>
			<td> Heart-thumping time?</td>
		</tr>

		<tr>
			<td> いつでもおいでよ 一年中パラダイス</td>
			<td> Itsu demo oideyo ichinenju paradaisu</td>
			<td> Come any time, it's an all year round paradise</td>
		</tr>

		<tr>
			<td>ドカンと曇り空吹き飛ばそう</td>
			<td> dokanto kumorizora fukitobasou</td>
			<td> Let's blow away the cloudy sky with a bang</td>
		</tr>

		<br />

		<tr>
			<td>あがれ！スターマイン どんな暗闇の中も</td>
			<td> agare! Sutamain don’na kurayami no naka mo</td>
			<td>Rise up! A Starmine<sup><a href='#footnote-3'>3</a></sup> no matter the darkness<sup><a
				href='#footnote-2'>2</a></sup></td>
		</tr>

		<tr>
			<td> 眩しく照らす</td>
			<td> mabushiku terasu</td>
			<td> A dazzling shine!</td>
		</tr>

		<tr>
			<td> キミに見つけてもらえた</td>
			<td> kimi ni mitsukete moraeta</td>
			<td> I'll find you! Got you!</td>
		</tr>

		<tr>
			<td> それだけでもう 運命なんだ</td>
			<td> sore dake de mo unmeina nda</td>
			<td> That alone is already destiny!</td>
		</tr>

		<br />

		<tr>
			<td> もっとずーーっと道は続いてく</td>
			<td> mottozutto michi wa tsudzuite ku</td>
			<td> The road continues on and on</td>
		</tr>

		<tr>
			<td> 夢に向かって</td>
			<td> yume ni mukatte</td>
			<td> towards a dream</td>
		</tr>

		<tr>
			<td> 一緒に来てくれるかな？</td>
			<td> issho ni kite kureru ka na?</td>
			<td> Will you come with me?</td>
		</tr>

		<tr>
			<td> その手 とって 走れ</td>
			<td> Sono te totte hashire</td>
			<td> Take that hand and run</td>
		</tr>

		<tr>
			<td>つれて いくよ みんなで！</td>
			<td> tsurete iku yo min’na de!</td>
			<td> Let's go, with everyone</td>
		</tr>
		<br />


		<tr>
			<td> ささやく (言葉は) 恥ずかしいけれど</td>
			<td> Sasayaku (kotoba wa) hazukashikeredo</td>
			<td> Whispering (words) although it's embarrassing</td>
		</tr>

		<tr>
			<td>(こっそり、ね) 伝えたい想い</td>
			<td> (kossori, ne) tsutaetai omoi</td>
			<td> (Secretly, hey...) The feelings I want to convey</td>
		</tr>

		<tr>
			<td> 今なら言える (あのね ドキドキ…)</td>
			<td> imanara ieru (ano ne dokidoki…)</td>
			<td> I can say them now (You know... my heart is pounding)</td>
		</tr>


		<tr>
			<td> キミのエールがチカラになるよ</td>
			<td> kimi no eru ga Chikara ni naru yo</td>
			<td> Your cheers become my power</td>
		</tr>

		<tr>
			<td> いつも元気を分けてくれて</td>
			<td> itsumo genki o wakete kurete</td>
			<td> You always share your energy</td>
		</tr>

		<tr>
			<td> 頑張っていけるんだ 笑って過ごせるんだ</td>
			<td> ganbatte ikeru nda waratte sugoseru nda</td>
			<td> I can give it my all and spend my time laughing</td>
		</tr>

		<tr>
			<td>ホントに ありがとうの気持ちを</td>
			<td> honto ni arigato no kimochi o</td>
			<td> Truly, "thank you" is the feeling</td>
		</tr>
		<br />


		<tr>
			<td> 歌え！ Starlight どんな輝きの中も</td>
			<td> utae! Sutaraito don’na kagayaki no naka mo</td>
			<td> Sing! Starlight in all its luster</td>
		</tr>

		<tr>
			<td>強いキラメキ</td>
			<td> tsuyoi kirameki</td>
			<td> An intense sparkle</td>
		</tr>

		<tr>
			<td> キミに届いているかな？</td>
			<td> kimi ni todoite iru ka na?</td>
			<td> Am I reaching you?</td>
		</tr>

		<tr>
			<td>1ミリでも 伝われ Fight, oh!</td>
			<td> 1-Miri demo tsutawa re Fight, oh!</td>
			<td> Even if it's only 1mm, let me tell you "Fight oh"!</td>
		</tr>
		<br />


		<tr>
			<td>もっとずーーっと道は続いてく</td>
			<td> Mottozutto michi wa tsudzuite ku</td>
			<td> The road continues on and on</td>
		</tr>

		<tr>
			<td>夢に向かって</td>
			<td> yume ni mukatte</td>
			<td> towards a dream</td>
		</tr>

		<tr>
			<td> 一緒に来てくれるかな？</td>
			<td> issho ni kite kureru ka na?</td>
			<td> Will you come with me?</td>
		</tr>

		<tr>
			<td>その手 とって 走れ</td>
			<td> Sono te totte hashire</td>
			<td> Take that hand and run</td>
		</tr>

		<tr>
			<td>つれていくよ みんなで！</td>
			<td> tsurete iku yo min’na de!</td>
			<td> Let's go, with everyone</td>
		</tr>

		<tr>
			<td> キミと 駆ける スバル！</td>
			<td> Kimi to kakeru Subaru!</td>
			<td> Running with you, Subaru!</td>
		</tr>


		</tbody>
	</table>
	<p>
		<a id='footnote-1'>1.</a> Oozora 大空
		<br />
		<a id='footnote-2'>2.</a> Can be interpreted from a fan perspective or Subaru's perspective.
		<br />
		<a id='footnote-3'>3.</a> A Starmine is a type of firework
	</p>
{/if}

<style lang='scss'>
  .yt {
    display: flex;
    text-align: center;
    align-content: center;
    justify-content: center;
  }

  td {
    padding: 0 2rem;
  }
</style>