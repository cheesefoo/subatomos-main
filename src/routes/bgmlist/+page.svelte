<script lang='ts'>
	// import TooltipLoader from '$lib/components/TooltipLoader.svelte';
import './tw.scss';
import { dev } from '$app/environment';
import Youtube from '$lib/components/YouTube.svelte';
import { MetaTags } from 'svelte-meta-tags';

const dir = dev ? '../static/assets/sound' : '/assets/sound';
let catbgm = `${dir}/kashikoi_nekodesukedo_nanika_mondai_de_motsu.mp3`;
let kensetsu = `${dir}/bgm_noloop.mp3`;
let controls = false;
let options = {};
</script>
<svelte:head>
	<link rel='preconnect' href='https://fonts.gstatic.com' />
	<link rel='preconnect' href='https://static.cloudflareinsights.com' />
	<link rel='preconnect' href='https://yt3.ggpht.com' />
</svelte:head>
<MetaTags
	title='Oozora Subaru BGM List 大空スバル　使用BGM'
	description='List of BGM used in streams with links'
	canonical={`https://subatomos.com/bgmlist`}
/>
Last Updated: 11/29/22
<div class='overflow-x-auto text-xxs break-words lg:text-base'>
	<table class='table-auto border border-sky border-collapse '>
		<tr>
			<th>Song</th>
			<th>EN/Romaji</th>
			<th>Used in</th>
			<th>Note</th>
			<th>Link</th>
		</tr>
		<tr>
			<td>夏あじ！！！</td>
			<td>Natsu Aji!!!</td>
			<td>Opening, "Subaru's BGM"</td>
			<td class='break-words'><a class='text-salmon' href='https://twitter.com/creofuga/status/1136831249497018368'
																 target='_blank'>Contest
				winner</a>, link is a mirror
			</td>
			<td>
				<Youtube videoId='BsmGeNIW8K4' />
			</td>
		</tr>
		<tr>
			<td>ジタバタ、パニック！</td>
			<td>Flail, Panic!</td>
			<td><a href='https://www.youtube.com/watch?v=qyOXwlUspHg' target='_blank'>Subaru's Small Room w/ Sora 20221228</a>
			</td>
			<td></td>
			<td>
				<Youtube videoId='MBD4VQE8jPg' />
			</td>
		</tr>
		<tr>
			<td>Happy Christmas</td>
			<td></td>
			<td><a href='https://www.youtube.com/watch?v=Um9HWsNr6Qk' target='_blank'>Freetalk 20221223</a></td>

			<td></td>
			<td>
				<Youtube videoId='g7sN3Vfb6ck' />
			</td>
		</tr>
		<tr>
			<td>SUMMER TRIANGLE</td>
			<td></td>
			<td>Freetalk</td>
			<td></td>
			<td>
				<Youtube videoId='djl6znXfyMk' />
			</td>
		</tr>
		<tr>
			<td>You and Me</td>
			<td></td>
			<td>Freetalk</td>
			<td></td>
			<td>
				<Youtube videoId='gkvz6l1W0g8' />
			</td>
		</tr>
		<tr>
			<td>Menuet</td>
			<td></td>
			<td><a href='https://www.youtube.com/watch?v=3kQpOdzRR-c' target='_blank'>St. Hololive Girls' High School Freedom
				Chat 20221129</a></td>
			<td></td>
			<td>
				<Youtube videoId='gKAP0GIyA9E' />
			</td>
		</tr>
		<tr>
			<td>決死の闘いに挑む者たち</td>
			<td>Those Who Fight To The Death</td>
			<td>Towa bonding quiz 20220706</td>
			<td></td>
			<td>
				<Youtube videoId='pPLWU7mbBsE' />
			</td>
		</tr>
		<tr>
			<td>聳え立つ白き峰</td>
			<td>Towering White Peak</td>
			<td><a href='https://www.youtube.com/watch?v=t-iW-81JaKU' target='_blank'>Towa bonding quiz (opening) 20220706</a>
			</td>
			<td></td>
			<td>
				<Youtube videoId='pPLWU7mbBsE' />
			</td>
		</tr>
		<tr>
			<td>Harvest</td>
			<td></td>
			<td>
				<a href='https://www.youtube.com/watch?v=FjgnOvSFiTA' target='_blank'>Marshmallow Q&A 20220611</a>
			</td>
			<td></td>
			<td>
				<Youtube videoId='JM66q8-09DY' />
			</td>
		</tr>
		<tr>
			<td>Smoky Coffin</td>
			<td></td>
			<td>
<!--				<TooltipLoader slug='oozora-keisatsu' text='Oozora Police' />-->
				Oozora Police	Mini
			</td>
			<td></td>
			<td>
				<Youtube videoId='sRl_GIwqSqw' />
			</td>
		</tr>
		<tr>
			<td>3:03 PM</td>
			<td></td>
			<td>Marshmallow Q&A 20220420</td>
			<td></td>
			<td>
				<Youtube videoId='xxpg9_2on3I' />
			</td>
		</tr>
		<tr>
			<td>決断の時</td>
			<td>Decision Time</td>
			<td>Typically used with the flames of hell background</td>
			<td></td>
			<td>
				<Youtube videoId='B-dKcH1B0-8' />
			</td>
		</tr>
		<tr>
			<td>3stages ファミコン8bit</td>
			<td>3stages Famicom8bit</td>
			<td>Freshly Debuted Subaru 10min opening BGM</td>
			<td></td>
			<td>
				<Youtube videoId='O8q0q8SnXrY' />
			</td>
		</tr>
		<tr>
			<td>Morning</td>
			<td></td>
			<td></td>
			<td></td>
			<td>
				<Youtube videoId='2KzkWWkPSpU' />
			</td>
		</tr>
		<tr>
			<td>笑横丁</td>
			<td>Laughing Lane</td>
			<td></td>
			<td>Also used by Choco, Maimoto</td>
			<td>
				<Youtube videoId='5bu1RjFN2yY' />
			</td>
		</tr>
		<tr>
			<td>夏の思い出</td>
			<td>Summer Memories</td>
			<td></td>
			<td></td>
			<td>
				<Youtube videoId='j72rz_MZxrs' />
			</td>
		</tr>
		<tr>
			<td>Comical Out</td>
			<td></td>
			<td></td>
			<td></td>
			<td>
				<Youtube videoId='pLp68Hdeo9w' />
			</td>
		</tr>
		<tr>
			<td>まったりしましょ</td>
			<td>Let's Take It Easy</td>
			<td>Minecraft (old)</td>
			<td></td>
			<td>
				<Youtube videoId='u_ZpaqpWJek' />
			</td>
		</tr>
		<tr>
			<td>10℃</td>
			<td></td>
			<td>Freetalk, SC Reading</td>
			<td></td>
			<td>
				<Youtube videoId='h6VdSjyUbbo' />
			</td>
		</tr>
		<tr>
			<td>学校がはじまる感じ</td>
			<td>Feels Like School's About to Start</td>
			<td>Freetalk (old)</td>
			<td></td>
			<td>
				<Youtube videoId='R97YidHjmA4' />
			</td>
		</tr>
		<tr>
			<td>しゅわしゅわハニーレモン350ml</td>
			<td>Fizzy Honey Lemon Soda 350ml</td>
			<td>Freetalk (old)</td>
			<td></td>
			<td>
				<Youtube videoId='q-tTJlz79_c' />
			</td>
		</tr>
		<tr>
			<td>放課後のおしゃべり</td>
			<td>After-school Chat</td>
			<td>Freetalk (old)</td>
			<td></td>
			<td>
				<Youtube videoId='GyayG1SKz9g' />
			</td>
		</tr>
		<tr>
			<td>シャーロック～捜査、記憶と記録を辿って～</td>
			<td>Sherlock~Investigation, Memories and Records~</td>
			<td>
<!--				<TooltipLoader slug='oozora-keisatsu' text='Oozora Police' />-->
				Oozora Police
			</td>
			<td></td>
			<td>
				<Youtube videoId='wm04SLJIz8g' />
			</td>
		</tr>
		<tr>
			<td>まるでサスペンスドラマ～犯人は語る～</td>
			<td>Like a Suspense Drama~The Culprit Speaks~</td>
			<td>
<!--				<TooltipLoader slug='oozora-keisatsu' text='Oozora Police' />-->
				Oozora Police
			</td>
			<td></td>
			<td>
				<Youtube videoId='vxMIQiE2Cig' />
			</td>
		</tr>
		<tr>
			<td>記念日</td>
			<td>Anniversary</td>
			<td>SC Reading (old)</td>
			<td></td>
			<td>
				<Youtube videoId='wSL_jf2Qv3M' />
			</td>
		</tr>
		<tr>
			<td>極東の羊、テレキャスターと踊る</td>
			<td>Sheep of the Far East, Dancing with the Telecaster</td>
			<td>Freechat, SC reading (old)</td>
			<td></td>
			<td>
				<Youtube videoId='rWduBA8LWgo' />
			</td>
		</tr>
		<tr>
			<td>アトリエと電脳世界</td>
			<td>Atelier and the Cyber World</td>
			<td>Freechat, SC reading (old)</td>
			<td></td>
			<td>
				<Youtube videoId='FbZoJpRm0H4' />
			</td>
		</tr>
		<tr>
			<td>あけまして</td>
			<td>Happy New Year</td>
			<td>Seasonal, SC reading (seasonal)</td>
			<td></td>
			<td>
				<Youtube videoId='b0dESbWkNYA' />
			</td>
		</tr>
		<tr>
			<td>清流</td>
			<td>Seiryu // Clear Stream</td>
			<td>Sushi Making</td>
			<td></td>
			<td>
				<Youtube videoId='F7vc1S5LSTA' />
			</td>
		</tr>
		<tr>
			<td>男の魂めんそーれ</td>
			<td>Man's Soul, <a href='https://okinawahai.com/japanese-corn-2-2/' target='_blank'>Mensore</a></td>
			<td>Sushi Making</td>
			<td>Mensore is Okinawan for "Welcome"</td>
			<td>
				<Youtube videoId='acz2aXbj9Ak' />
			</td>
		</tr>
		<tr>
			<td>リコーダーマーチ</td>
			<td>Recorder March</td>
			<td>Ending</td>
			<td>From old CPU</td>
			<td>
				<Youtube videoId='9tfveBEakSo' />
			</td>
		</tr>
		<tr>
			<td>南国パラダイス</td>
			<td>Tropical Paradise</td>
			<td>Ending (old)</td>
			<td>Kimagure Cooking BGM</td>
			<td>
				<Youtube videoId='TEQ4s6Yv4jc' />
			</td>
		</tr>
		<tr>
			<td>南風</td>
			<td>South Wind</td>
			<td>Ending</td>
			<td></td>
			<td>
				<Youtube videoId='rxhSCYsQaKQ' />
			</td>
		</tr>
		<tr>
			<td>Unicorn white</td>
			<td></td>
			<td>Space Food Eating</td>
			<td></td>
			<td>
				<Youtube videoId='2pf6wDKBvVk' />
			</td>
		</tr>
		<tr>
			<td>奇妙なピチカート</td>
			<td>Strange Pizzicato</td>
			<td>I want to get closer to ○○-senpai</td>
			<td></td>
			<td>
				<Youtube videoId='xN9AHUrFnYo' />
			</td>
		</tr>
		<tr>
			<td>卒業ソング</td>
			<td>Graduation Song</td>
			<td></td>
			<td>Occasionally used for emo moments</td>
			<td>
				<Youtube videoId='nF3ZmSDjm2E' />
			</td>
		</tr>
		<tr>
			<td>I'm Trippin'</td>
			<td></td>
			<td>Game Shop Maruyama OP</td>
			<td></td>
			<td>
				<Youtube videoId='KpTHaisL2zA' />
			</td>
		</tr>
		<tr>
			<td>かしこい猫ですけどなにか問題でもっ？</td>
			<td>A Smart Cat, But Are There Any Issues?</td>
			<td>Various, Minecraft</td>
			<td>Deleted from DOVA</td>
			<td>
				<audio controls>
					<source src={catbgm} type='audio/mp3' />
				</audio>
			</td>
		</tr>
		<tr>
			<td>大空建設の社歌</td>
			<td>Oozora Kensetsu Company Song</td>
			<td>Minecraft</td>
			<td class='break-words'><a class='text-salmon'
																 href='https://twitter.com/asobibavbeacon/status/1321775023879671809' target='_blank'>Source</a>
				- Embedded
				audio is a clean version ripped from streams
			</td>
			<td>
				<audio controls>
					<source src={kensetsu} type='audio/mp3' />
				</audio>
			</td>
		</tr>
	</table>
</div>
<style lang='scss'>
  td:nth-of-type(5) {
    width: 10px;
  }

  td {
    overflow-wrap: break-word;
    margin: 2px 0px;
  }

  td, th {
    border-width: 1px;
    border-color: $sky;
    text-align: center;
    word-break: normal;
  }
</style>
