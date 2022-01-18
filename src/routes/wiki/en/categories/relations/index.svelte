<script lang='ts'>
	import '/src/tw.scss';
	import { locale } from '/src/i18n/i18n-svelte';

	import HoloLink from '$lib/components/HoloLink.svelte';
	/*
		let gens = [...new Set(hololive.map((x) => x.details?.group))];
		let byGen = [];
		gens.forEach((gen) =>
		{
			// console.log(gen);
			let g = hololive.filter((holo) => holo.details?.group == gen);
			// console.log(g)
			byGen.push(g);
		});
		console.log(byGen);*/
</script>

<div class='flex flex-col gap-y-16'>
	<!--	Groups -->
	<div>
		<h3 class='text-lg text-center text-salmon'>Groups</h3>
		<div class='grid grid-flow-row-dense grid-cols-2 gap-y-4'>
<!--		<div class='grid grid-cols-2 gap-y-4'>-->
			<table class='border-collapse table-fixed w-1/2 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
				NEGI☆U
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/negiu'>
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
							<HoloLink en='Minato Aqua' jp='湊あくあ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Momosuzu Nene' jp='桃鈴ねね' width='6' text='xs' grayscale={false} />
						</a>
					</td>
				</tr>
				</tbody>
			</table>
			<table class='border-collapse table-fixed w-1/2 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky whitespace-nowrap text-center'>
				Spice Love
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/curry-meshi'>
							<HoloLink en='Minato Aqua' jp='湊あくあ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
							<HoloLink en='Usada Pekora' jp='兎田ぺこら' width='6' text='xs' grayscale={false} />
						</a>
					</td>
				</tr>
				</tbody>
			</table>
			<table class='border-collapse table-fixed w-1/2 text-sm' >
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky whitespace-nowrap text-center'>
				Oozora Family
				</thead>
				<tbody >
				<tr >
					<td >
						<a class='flex flex-col text-xs ' sveltekit:prefetch href='/wiki/{$locale}/posts/oozora-family'>
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
							<HoloLink en='Shigure Ui' jp='しぐれうい' width='6' text='xs' grayscale={false} />
							<HoloLink en='Maimoto Keisuke' jp='舞元啓介' width='6' text='xs' grayscale={false} />
						</a>
					</td>
				</tr>
				</tbody>
			</table>
			<br/>

			<table class='border-collapse table-fixed w-1/2 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
				SubaChocoLunaTan
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/subachocolunatan'>
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
							<HoloLink en='Yuzuki Choco' jp='癒月ちょこ' width='6' text='xs' grayscale={false}/>
							<HoloLink en='Himemori Luna' jp='姫森ルーナ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Shishiro Botan' jp='獅白ぼたん' width='6' text='xs' grayscale={false} />

						</a>
					</td>
				</tr>
				</tbody>
			</table>
			<table class='border-collapse table-fixed w-1/2 text-sm grayscale'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center '>
				Citrus
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col text-xs' sveltekit:prefetch href='#'>
							<HoloLink en='Shishiro Botan' jp='獅白ぼたん' width='6' text='xs' grayscale={false} />
							<HoloLink en='Tokoyami Towa' jp='常闇トワ' width='6' text='xs' grayscale={false} />
							<HoloLink en='La+ Darknesss' jp='ラプラス・ダークネス' />
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />

						</a>
					</td>
				</tr>
				</tbody>
			</table>
			<table class='border-collapse table-fixed w-1/2 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
				SMOK
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col' sveltekit:prefetch href='/wiki/{$locale}/posts/smok'>
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
							<HoloLink en='Ookami Mio' jp='大神ミオ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Nekomata Okayu' jp='猫又おかゆ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Inugami Korone' jp='戌神ころね' width='6' text='xs' grayscale={false} />
						</a>
					</td>
				</tr>
				</tbody>
			</table>
			<table class='border-collapse table-fixed w-1/2 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
				FAMS
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/fams'>
							<HoloLink en='Shirakami Fubuki' jp='白上フブキ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Nakiri Ayame' jp='百鬼あやめ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Ookami Mio' jp='大神ミオ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
						</a>
					</td>
				</tr>
				</tbody>
			</table>
			<table class='border-collapse table-fixed w-1/2 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky whitespace-nowrap text-center'>
				Oozora <s>Kensetsu</s> Circle
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/oozora-kensetsu'>
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
							<HoloLink en='Himemori Luna' jp='姫森ルーナ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Natsuiro Matsuri' jp='夏色まつり' width='6' text='xs' grayscale={false} />
							<HoloLink en='Yuzuki Choco' jp='癒月ちょこ' width='6' text='xs' grayscale={false}/>
						</a>
					</td>
				</tr>
				</tbody>
			</table>

			<table class='border-collapse table-fixed w-1/2 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
				Holobirds
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/holobirds'>
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
							<HoloLink en='Takanashi Kiara' jp='小鳥遊キアラ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Pavolia Reine' jp='パボリアレイネ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Nanashi Mumei' jp='七詩ムメイ' width='6' text='xs' />
							<HoloLink en='Takane Lui' jp='鷹嶺ルイ' width='6' text='xs' />
						</a>
					</td>
				</tr>
				</tbody>
			</table>
			<table class='border-collapse table-fixed w-full text-sm grayscale'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
				Gen 2's Bonds
				</thead>
				<tbody class='bg-white'>
				<tr class='flex flex-col'>
					<HoloLink en='Minato Aqua' jp='湊あくあ' width='6' text='xs' grayscale={false}  />
					<HoloLink en='Murasaki Shion' jp='紫咲シオン' width='6' text='xs' grayscale={false}  />
					<HoloLink en='Nakiri Ayame' jp='百鬼あやめ' width='6' text='xs' grayscale={false}  />
					<HoloLink en='Yuzuki Choco' jp='癒月ちょこ'  width='6' text='xs' grayscale={false}  />
					<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
				</tr>
				</tbody>
			</table>

			<table class='border-collapse table-fixed w-1/2 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
				OKFAMS
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/okfams'>
							<HoloLink en='Nekomata Okayu' jp='猫又おかゆ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Inugami Korone' jp='戌神ころね' width='6' text='xs' grayscale={false} />
							<HoloLink en='Shirakami Fubuki' jp='白上フブキ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Nakiri Ayame' jp='百鬼あやめ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Ookami Mio' jp='大神ミオ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
						</a>
					</td>
				</tr>
				</tbody>
			</table>

		</div>
	</div>

	<!--	Holo JP-->
	<div class='flex flex-col gap-y-8'>
		<h3 class='text-lg text-center text-salmon'>Hololive</h3>
		<table class='border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			Gen 0
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col'>
				<HoloLink en='Tokino Sora' jp='ときのそら' />
				<HoloLink en='Roboco-san' jp='ロボ子さん' />
				<HoloLink en='Sakura Miko' jp='さくらみこ' />
				<HoloLink en='Hoshimachi Suisei' jp='星街すいせい' />
				<HoloLink en='AZKi' jp='AZKi' />
			</tr>
			</tbody>
		</table>
		<table class='border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			Gen 1
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col'>
				<HoloLink en='Yozora Mel' jp='夜空メル' />
				<HoloLink en='Shirakami Fubuki' jp='白上フブキ' />
				<HoloLink en='Natsuiro Matsuri' jp='夏色まつり' />
				<HoloLink en='Aki Rosenthal' jp='アキ・ローゼンタール' />
				<HoloLink en='Akai Haato' jp='赤井はあと' />
			</tr>
			</tbody>
		</table>
		<table class='border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			Gen 2
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col'>
				<HoloLink en='Minato Aqua' jp='湊あくあ' href='' />
				<HoloLink en='Murasaki Shion' jp='紫咲シオン' />
				<HoloLink en='Nakiri Ayame' jp='百鬼あやめ' />
				<HoloLink en='Yuzuki Choco' jp='癒月ちょこ' />
			</tr>
			</tbody>
		</table>
		<table class='border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			GAMERS
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col'>
				<HoloLink en='Ookami Mio' jp='大神ミオ' />
				<HoloLink en='Nekomata Okayu' jp='猫又おかゆ' sveltekit:prefetch href='/wiki/{$locale}/posts/subaokappi' />
				<HoloLink en='Inugami Korone' jp='戌神ころね' />
			</tr>
			</tbody>
		</table>
		<table class='border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			Gen 3: Hololive Fantasy
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col'>
				<HoloLink en='Usada Pekora' jp='兎田ぺこら' />
				<HoloLink en='Uruha Rushia' jp='潤羽るしあ' />
				<HoloLink en='Shiranui Flare' jp='不知火フレア' />
				<HoloLink en='Shirogane Noel' jp='白銀ノエル' />
				<HoloLink en='Houshou Marine' jp='宝鐘マリン' sveltekit:prefetch href='/wiki/{$locale}/posts/babadonna' />
			</tr>
			</tbody>
		</table>
		<table class='border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			Gen 4
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col'>
				<HoloLink en='Amane Kanata' jp='天音かなた' />
				<HoloLink en='Kiryu Coco' jp='桐生ココ' />
				<HoloLink en='Tsunomaki Watame' jp='角巻わため' />
				<HoloLink en='Tokoyami Towa' jp='常闇トワ' href='../groups/icarus-jet-coaster' />
				<HoloLink en='Himemori Luna' jp='姫森ルーナ' />
			</tr>
			</tbody>
		</table>
		<table class='border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			Gen 5 - NePoLaBo
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col'>
				<HoloLink en='Yukihana Lamy' jp='雪花ラミィ' />
				<HoloLink en='Momosuzu Nene' jp='桃鈴ねね' />
				<HoloLink en='Shishiro Botan' jp='獅白ぼたん' />
				<HoloLink en='Omaru Polka' jp='尾丸ポルカ' />
			</tr>
			</tbody>
		</table>
		<table class='border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			Gen 6 - HoloX
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col'>
				<HoloLink en='La+ Darknesss' jp='ラプラス・ダークネス' />
				<HoloLink en='Takane Lui' jp='鷹嶺ルイ' />
				<HoloLink en='Hakui Koyori' jp='博衣こより' />
				<HoloLink en='Sakamata Chloe' jp='沙花叉クロヱ' />
				<HoloLink en='Kazama Iroha' jp='風真いろは' />
			</tr>
			</tbody>
		</table>
	</div>

	<!--	holo en-->
	<div class='flex flex-col gap-y-16'>
		<h3 class='text-lg text-center text-salmon'>Hololive English</h3>
		<table class='border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			Gen 1: -Myth-
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col'>
				<HoloLink en='Mori Calliope' jp='森カリオペ' />
				<HoloLink en='Takanashi Kiara' jp='小鳥遊キアラ' />
				<HoloLink en='Ninomae Ina’nis' jp='一伊那尓栖' />
				<HoloLink en='Gawr Gura' jp='がうる・ぐら' />
				<HoloLink en='Watson Amelia' jp='ワトソン・アメリア' />
			</tr>
			</tbody>
		</table>
		<table class='border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			Gen 2: -Council-
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col'>
				<HoloLink en='Tsukumo Sana' jp='九十九佐命' />
				<HoloLink en='Ceres Fauna' jp='セレス・ファウナ' />
				<HoloLink en='Ouro Kronii' jp='オーロ・クロニー' />
				<HoloLink en='Nanashi Mumei' jp='七詩ムメイ' />
				<HoloLink en='Hakos Baelz' jp='ハコス・ベールズ' />
			</tr>
			</tbody>
		</table>
	</div>

	<!--	holo id-->
	<div class='flex flex-col gap-y-16'>
		<h3 class='text-lg text-center text-salmon'>Hololive Indonesia</h3>
		<table class='border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			Gen 1 -Area 15
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col'>
				<HoloLink en='Ayunda Risu' jp='アユンダ・リス' />
				<HoloLink en='Moona Hoshinova' jp='ムーナ・ホシノヴァ' />
				<HoloLink en='Airani Iofifteen' jp='アイラニ・イオフィフティーン' />
			</tr>
			</tbody>
		</table>
		<table class='border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			Gen 2 - Holoro
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col'>
				<HoloLink en='Kureiji Ollie' jp='クレイジーオリー' />
				<HoloLink en='Anya Melfissa' jp='アーニャメルフィッサ' />
				<HoloLink en='Pavolia Reine' jp='パボリアレイネ' sveltekit:prefetch href='/wiki/{$locale}/posts/holobirds' />
			</tr>
			</tbody>
		</table>
	</div>

</div>
<!--<div>
	{#each byGen as gen}
		<table class='border-collapse table-fixed w-full text-sm'>
			<th>{gen[0].details.group}</th>
			<tbody class='bg-white'>
			<tr class='flex flex-col'>
				{#each gen as { name, platform, channel, details }}
					<td>
						<p>{name.en}</p>
						<p>{name.jp}</p>
					</td>
				{/each}
			</tr>
			</tbody>
		</table>
	{/each}
</div>-->
