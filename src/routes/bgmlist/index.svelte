<script lang='ts'>

	import TooltipLoader from '$lib/components/TooltipLoader.svelte';
	import '../wiki/tw.scss';
	import { Audio, Player, Youtube } from '@vime/svelte';
	import { dev } from '$app/env';
	const dir = dev ? '../static/assets/sound' : '/assets/sound';

	let catbgm = `${dir}/kashikoi_nekodesukedo_nanika_mondai_de_motsu.mp3`;
	let kensetsu = `${dir}/bgm_noloop.mp3`;

	let controls = false;

	let options = {};
</script>
<!--<svelte:head>
	<link
		rel='stylesheet'
		href='https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css'
	/>
</svelte:head>-->

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
				<Player controls>
					<Youtube videoId='BsmGeNIW8K4' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>3stages ファミコン8bit</td>
			<td>3stages Famicom8bit</td>
			<td>Freshly Debuted Subaru 10min opening BGM</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='O8q0q8SnXrY' />

				</Player>
			</td>
		</tr>

		<tr>
			<td>Morning</td>
			<td></td>
			<td></td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='2KzkWWkPSpU' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>笑横丁</td>
			<td>Laughing Lane</td>
			<td></td>
			<td>Also used by Choco, Maimoto</td>
			<td>
				<Player controls>
					<Youtube videoId='5bu1RjFN2yY' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>夏の思い出</td>
			<td>Summer Memories</td>
			<td></td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='j72rz_MZxrs' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>Comical Out</td>
			<td></td>
			<td></td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='pLp68Hdeo9w' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>まったりしましょ</td>
			<td>Let's Take It Easy</td>
			<td>Minecraft (old)</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='u_ZpaqpWJek' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>10℃</td>
			<td></td>
			<td>Freetalk, SC Reading</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='h6VdSjyUbbo' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>学校がはじまる感じ</td>
			<td>Feels Like School's About to Start</td>
			<td>Freetalk (old)</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='R97YidHjmA4' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>しゅわしゅわハニーレモン350ml</td>
			<td>Fizzy Honey Lemon Soda 350ml</td>
			<td>Freetalk (old)</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='q-tTJlz79_c' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>放課後のおしゃべり</td>
			<td>After-school Chat</td>
			<td>Freetalk (old)</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='GyayG1SKz9g' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>シャーロック～捜査、記憶と記録を辿って～</td>
			<td>Sherlock~Investigation, Memories and Records~</td>
			<td>
				<TooltipLoader slug='oozora-keisatsu' text='Oozora Police' />
			</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='wm04SLJIz8g' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>まるでサスペンスドラマ～犯人は語る～</td>
			<td>Like a Suspense Drama~The Culprit Speaks~</td>
			<td>
				<TooltipLoader slug='oozora-keisatsu' text='Oozora Police' />
			</td>
			<td></td>
			<td>

				<Player controls>
					<Youtube videoId='vxMIQiE2Cig' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>記念日</td>
			<td>Anniversary</td>
			<td>SC Reading (old)</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='wSL_jf2Qv3M' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>極東の羊、テレキャスターと踊る</td>
			<td>Sheep of the Far East, Dancing with the Telecaster</td>
			<td>Freechat, SC reading (old)</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='rWduBA8LWgo' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>アトリエと電脳世界</td>
			<td>Atelier and the Cyber World</td>
			<td>Freechat, SC reading (old)</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='FbZoJpRm0H4' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>あけまして</td>
			<td>Happy New Year</td>
			<td>Seasonal, SC reading (seasonal)</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='b0dESbWkNYA' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>清流</td>
			<td>Seiryu // Clear Stream</td>
			<td>Sushi Making</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='F7vc1S5LSTA' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>男の魂めんそーれ</td>
			<td>Man's Soul, <a href='https://okinawahai.com/japanese-corn-2-2/' target='_blank'>Mensore</a></td>
			<td>Sushi Making</td>
			<td>Mensore is Okinawan for "Welcome"</td>
			<td>
				<Player controls>
					<Youtube videoId='acz2aXbj9Ak' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>リコーダーマーチ</td>
			<td>Recorder March</td>
			<td>Ending</td>
			<td>From old CPU</td>
			<td>
				<Player controls>
					<Youtube videoId='9tfveBEakSo' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>南国パラダイス</td>
			<td>Tropical Paradise</td>
			<td>Ending (old)</td>
			<td>Kimagure Cooking BGM</td>
			<td>
				<Player controls>
					<Youtube videoId='TEQ4s6Yv4jc' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>南風</td>
			<td>South Wind</td>
			<td>Ending</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='rxhSCYsQaKQ' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>Unicorn white</td>
			<td></td>
			<td>Space Food Eating</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='2pf6wDKBvVk' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>奇妙なピチカート</td>
			<td>Strange Pizzicato</td>
			<td>I want to get closer to ○○-senpai</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='xN9AHUrFnYo' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>卒業ソング</td>
			<td>Graduation Song</td>
			<td></td>
			<td>Occasionally used for emo moments</td>
			<td>
				<Player controls>
					<Youtube videoId='nF3ZmSDjm2E' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>I'm Trippin'</td>
			<td></td>
			<td>Game Shop Maruyama OP</td>
			<td></td>
			<td>
				<Player controls>
					<Youtube videoId='KpTHaisL2zA' />
				</Player>
			</td>
		</tr>
		<tr>
			<td>かしこい猫ですけどなにか問題でもっ？</td>
			<td>A Smart Cat, But Are There Any Issues?</td>
			<td>Various, Minecraft</td>
			<td>Deleted from DOVA</td>
			<Player controls>
				<Audio>
					<source data-src={catbgm} type='audio/mp3' />
				</Audio>

			</Player>

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
				<Player controls>
					<Audio>
						<source data-src={kensetsu} type='audio/mp3' />
					</Audio>

				</Player>
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
