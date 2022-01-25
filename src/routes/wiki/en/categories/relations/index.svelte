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

<div class='flex flex-col gap-12'>
	<!--	Groups -->
	<div>
		<h3 class='text-lg text-center text-salmon pt-12'>Groups</h3>
		<div class='grid grid-flow-row-dense grid-cols-2 lg:justify-items-center lg:grid-cols-3 gap-12'>
			<!--		<div class='grid grid-cols-2 gap-y-4'>-->
			<table class='border-collapse table-fixed w-full lg:w-11/12 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
				NEGI☆U
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col lg:flex-row text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/negiu'>
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
							<HoloLink en='Minato Aqua' jp='湊あくあ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Momosuzu Nene' jp='桃鈴ねね' width='6' text='xs' grayscale={false} />
						</a>
					</td>
				</tr>
				</tbody>
			</table>

			<table class='border-collapse table-fixed w-full lg:w-11/12 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky whitespace-nowrap text-center'>
				Spice Love
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col lg:flex-row text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/curry-meshi'>
							<HoloLink en='Minato Aqua' jp='湊あくあ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
							<HoloLink en='Usada Pekora' jp='兎田ぺこら' width='6' text='xs' grayscale={false} />
						</a>
					</td>
				</tr>
				</tbody>
			</table>
			<table class='border-collapse table-fixed w-full lg:w-11/12 text-sm grayscale'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky whitespace-nowrap text-center'>
				Oozora Family
				</thead>
				<tbody>
				<tr>
					<td>
						<!--						<a class='flex flex-col lg:flex-row text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/oozora-family'>-->
						<div class='flex flex-col lg:flex-row text-xs'>
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
							<HoloLink en='Shigure Ui' jp='しぐれうい' width='6' text='xs' grayscale={false} />
							<HoloLink en='Maimoto Keisuke' jp='舞元啓介' width='6' text='xs' grayscale={false} />
						</div>
						<!--						</a>-->
					</td>
				</tr>
				</tbody>
			</table>
		</div>

		<div class='grid grid-flow-row-dense grid-cols-2 lg:justify-items-center gap-12 pt-8 pb-8'>

			<table class='border-collapse table-fixed w-full lg:w-11/12 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
				SubaChocoLunaTan
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col lg:flex-row text-xs' sveltekit:prefetch
							 href='/wiki/{$locale}/posts/subachocolunatan'>
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
							<HoloLink en='Yuzuki Choco' jp='癒月ちょこ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Himemori Luna' jp='姫森ルーナ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Shishiro Botan' jp='獅白ぼたん' width='6' text='xs' grayscale={false} />

						</a>
					</td>
				</tr>
				</tbody>
			</table>
			<table class='border-collapse table-fixed w-full lg:w-11/12 text-sm grayscale'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center grayscale'>
				Citrus
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col lg:flex-row text-xs' sveltekit:prefetch href='#'>
							<HoloLink en='Shishiro Botan' jp='獅白ぼたん' width='6' text='xs' grayscale={false} />
							<HoloLink en='Tokoyami Towa' jp='常闇トワ' width='6' text='xs' grayscale={false} />
							<HoloLink en='La+ Darknesss' jp='ラプラス・ダークネス' width='6' text='xs' />
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />

						</a>
					</td>
				</tr>
				</tbody>
			</table>
			<table class='border-collapse table-fixed w-full lg:w-11/12 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
				SMOK
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col lg:flex-row text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/smok'>
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
							<HoloLink en='Ookami Mio' jp='大神ミオ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Nekomata Okayu' jp='猫又おかゆ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Inugami Korone' jp='戌神ころね' width='6' text='xs' grayscale={false} />
						</a>
					</td>
				</tr>
				</tbody>
			</table>
			<table class='border-collapse table-fixed w-full lg:w-11/12 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
				FAMS
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col lg:flex-row text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/fams'>
							<HoloLink en='Shirakami Fubuki' jp='白上フブキ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Nakiri Ayame' jp='百鬼あやめ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Ookami Mio' jp='大神ミオ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
						</a>
					</td>
				</tr>
				</tbody>
			</table>
			<table class='border-collapse table-fixed w-full lg:w-11/12 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky whitespace-nowrap text-center'>
				Oozora <s>Kensetsu</s> Circle
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col lg:flex-row text-xs' sveltekit:prefetch
							 href='/wiki/{$locale}/posts/oozora-kensetsu'>
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
							<HoloLink en='Himemori Luna' jp='姫森ルーナ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Natsuiro Matsuri' jp='夏色まつり' width='6' text='xs' grayscale={false} />
							<HoloLink en='Yuzuki Choco' jp='癒月ちょこ' width='6' text='xs' grayscale={false} />
						</a>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
		<div class='grid grid-flow-row-dense grid-cols-2  lg:justify-items-center gap-12 pt-12 pb-12'>

			<table class='border-collapse table-fixed w-full lg:w-11/12 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
				Holobirds
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col lg:flex-row text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/holobirds'>
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


			<table class='border-collapse table-fixed w-full lg:w-11/12 text-sm grayscale'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky whitespace-nowrap text-center'>
				The Bonds of Gen 2
				</thead>
				<tbody class='bg-white'>
				<tr class='flex flex-col lg:flex-row text-xs'>
					<td>
						<a class='flex flex-col lg:flex-row text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/gen2'>

							<HoloLink en='Minato Aqua' jp='湊あくあ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Murasaki Shion' jp='紫咲シオン' width='6' text='xs' grayscale={false} />
							<HoloLink en='Nakiri Ayame' jp='百鬼あやめ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Yuzuki Choco' jp='癒月ちょこ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
						</a>
					</td>
				</tr>
				</tbody>
			</table>


		</div>
		<div class='grid grid-cols-2 lg:grid-cols-12 gap-12 lg:justify-items-center pt-8 pb-8'>

			<table class='border-collapse table-fixed w-full lg:col-span-6 lg:col-start-4 lg:justify-items-center text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
				OKFAMS
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col lg:flex-row text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/okfams'>
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
</div>

<!--	Holo JP-->
<h3 class='text-lg text-center text-salmon pt-12'>Hololive</h3>
<div class='grid grid-cols-2 gap-12'>
	<!--<div class='flex flex-col gap-y-8'>-->
	<table class='border-collapse table-fixed w-full text-sm'>
		<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
		Gen 0
		</thead>
		<tbody class='bg-white'>
		<tr class='flex flex-col lg:flex-row text-xs'>
			<HoloLink en='Tokino Sora' jp='ときのそら' width='6' text='xs' />
			<HoloLink en='Roboco-san' jp='ロボ子さん' width='6' text='xs' />
			<HoloLink en='Sakura Miko' jp='さくらみこ' width='6' text='xs' />
			<HoloLink en='Hoshimachi Suisei' jp='星街すいせい' width='6' text='xs' />
			<HoloLink en='AZKi' jp='AZKi' width='6' text='xs' />
		</tr>
		</tbody>
	</table>
	<table class='border-collapse table-fixed w-full text-sm'>
		<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
		Gen 1
		</thead>
		<tbody class='bg-white'>
		<tr class='flex flex-col lg:flex-row text-xs'>
			<HoloLink en='Yozora Mel' jp='夜空メル' text='xs' />
			<HoloLink en='Shirakami Fubuki' jp='白上フブキ' text='xs' />
			<HoloLink en='Natsuiro Matsuri' jp='夏色まつり' text='xs' />
			<HoloLink en='Aki Rosenthal' jp='アキ・ローゼンタール' text='xs' />
			<HoloLink en='Akai Haato' jp='赤井はあと' text='xs' />
		</tr>
		</tbody>
	</table>
	<table class='border-collapse table-fixed w-full text-sm'>
		<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
		Gen 2
		</thead>
		<tbody class='bg-white'>
		<tr class='flex flex-col lg:flex-row text-xs'>
			<HoloLink en='Minato Aqua' jp='湊あくあ' href='' text='xs' />
			<HoloLink en='Murasaki Shion' jp='紫咲シオン' text='xs' />
			<HoloLink en='Nakiri Ayame' jp='百鬼あやめ' text='xs' />
			<HoloLink en='Yuzuki Choco' jp='癒月ちょこ' text='xs' />
			<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' />
		</tr>
		</tbody>
	</table>
	<div class='lg:grid lg:grid-cols-5'>
		<table class='lg:col-start-2 lg:col-span-3 border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			GAMERS
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col lg:flex-row text-xs'>
				<HoloLink en='Ookami Mio' jp='大神ミオ' text='xs' />
				<HoloLink en='Nekomata Okayu' jp='猫又おかゆ' href='/wiki/{$locale}/posts/subaokappi' text='xs' />
				<HoloLink en='Inugami Korone' jp='戌神ころね' text='xs' />
			</tr>
			</tbody>
		</table>
	</div>
	<table class='border-collapse table-fixed w-full text-sm'>
		<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center whitespace-nowrap'>
		Gen 3: Hololive Fantasy
		</thead>
		<tbody class='bg-white'>
		<tr class='flex flex-col lg:flex-row text-xs'>
			<HoloLink en='Usada Pekora' jp='兎田ぺこら' text='xs' />
			<HoloLink en='Uruha Rushia' jp='潤羽るしあ' text='xs' />
			<HoloLink en='Shiranui Flare' jp='不知火フレア' text='xs' />
			<HoloLink en='Shirogane Noel' jp='白銀ノエル' text='xs' />
			<HoloLink en='Houshou Marine' jp='宝鐘マリン' sveltekit:prefetch href='/wiki/{$locale}/posts/babadonna' text='xs' />
		</tr>
		</tbody>
	</table>
	<table class='border-collapse table-fixed w-full text-sm'>
		<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
		Gen 4
		</thead>
		<tbody class='bg-white'>
		<tr class='flex flex-col lg:flex-row text-xs'>
			<HoloLink en='Amane Kanata' jp='天音かなた' text='xs' />
			<HoloLink en='Kiryu Coco' jp='桐生ココ' text='xs' />
			<HoloLink en='Tsunomaki Watame' jp='角巻わため' text='xs' />
			<HoloLink en='Tokoyami Towa' jp='常闇トワ' href='../groups/icarus-jet-coaster' text='xs' />
			<HoloLink en='Himemori Luna' jp='姫森ルーナ' text='xs' />
		</tr>
		</tbody>
	</table>
	<div class='lg:grid lg:grid-cols-10'>

		<table class='lg:col-start-2 lg:col-span-8 border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky whitespace-nowrap text-center'>
			Gen 5 - NePoLaBo
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col lg:flex-row text-xs'>
				<HoloLink en='Yukihana Lamy' jp='雪花ラミィ' text='xs' />
				<HoloLink en='Momosuzu Nene' jp='桃鈴ねね' text='xs' />
				<HoloLink en='Shishiro Botan' jp='獅白ぼたん' text='xs' />
				<HoloLink en='Omaru Polka' jp='尾丸ポルカ' text='xs' />
			</tr>
			</tbody>
		</table>
	</div>
	<table class='border-collapse table-fixed w-full text-sm'>
		<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
		Gen 6 - HoloX
		</thead>
		<tbody class='bg-white'>
		<tr class='flex flex-col lg:flex-row text-xs'>
			<HoloLink en='La+ Darknesss' jp='ラプラス・ダークネス' text='xs' />
			<HoloLink en='Takane Lui' jp='鷹嶺ルイ' text='xs' />
			<HoloLink en='Hakui Koyori' jp='博衣こより' text='xs' />
			<HoloLink en='Sakamata Chloe' jp='沙花叉クロヱ' text='xs' />
			<HoloLink en='Kazama Iroha' jp='風真いろは' text='xs' />
		</tr>
		</tbody>
	</table>
</div>

<!--	holo en-->
<h3 class='text-lg text-center text-salmon pt-12'>Hololive English</h3>
<div class='grid grid-cols-2 gap-12'>

	<!--<div class='flex flex-col gap-y-16'>-->
	<table class='border-collapse table-fixed w-full text-sm'>
		<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
		Gen 1: -Myth-
		</thead>
		<tbody class='bg-white'>
		<tr class='flex flex-col lg:flex-row text-xs'>
			<HoloLink en='Mori Calliope' jp='森カリオペ' text='xs' />
			<HoloLink en='Takanashi Kiara' jp='小鳥遊キアラ' text='xs' />
			<HoloLink en='Ninomae Ina’nis' jp='一伊那尓栖' text='xs' />
			<HoloLink en='Gawr Gura' jp='がうる・ぐら' text='xs' />
			<HoloLink en='Watson Amelia' jp='ワトソン・アメリア' text='xs' />
		</tr>
		</tbody>
	</table>
	<table class='border-collapse table-fixed w-full text-sm'>
		<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
		Gen 2: -Council-
		</thead>
		<tbody class='bg-white'>
		<tr class='flex flex-col lg:flex-row text-xs'>
			<HoloLink en='Tsukumo Sana' jp='九十九佐命' text='xs' />
			<HoloLink en='Ceres Fauna' jp='セレス・ファウナ' text='xs' />
			<HoloLink en='Ouro Kronii' jp='オーロ・クロニー' text='xs' />
			<HoloLink en='Nanashi Mumei' jp='七詩ムメイ' text='xs' />
			<HoloLink en='Hakos Baelz' jp='ハコス・ベールズ' text='xs' />
		</tr>
		</tbody>
	</table>
</div>

<!--	holo id-->
<h3 class='text-lg text-center text-salmon pt-12'>Hololive Indonesia</h3>
<div class='grid grid-cols-2 gap-12'>

	<!--<div class='flex flex-col gap-y-16'>-->
	<div class='lg:grid lg:grid-cols-5'>

		<table class='lg:col-start-2 lg:col-span-3 border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			Gen 1 - Area 15
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col lg:flex-row'>
				<HoloLink en='Ayunda Risu' jp='アユンダ・リス' text='xs' />
				<HoloLink en='Moona Hoshinova' jp='ムーナ・ホシノヴァ' text='xs' />
				<HoloLink en='Airani Iofifteen' jp='アイラニ・イオフィフティーン' text='xxs' />
			</tr>
			</tbody>
		</table>
	</div>

	<div class='lg:grid lg:grid-cols-5'>
		<table class='lg:col-start-2 lg:col-span-3 border-collapse table-fixed w-full text-sm'>
			<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
			Gen 2 - Holoro
			</thead>
			<tbody class='bg-white'>
			<tr class='flex flex-col lg:flex-row text-xs'>
				<HoloLink en='Kureiji Ollie' jp='クレイジーオリー' text='xs' />
				<HoloLink en='Anya Melfissa' jp='アーニャメルフィッサ' text='xs' />
				<HoloLink en='Pavolia Reine' jp='パボリアレイネ' sveltekit:prefetch href='/wiki/{$locale}/posts/holobirds' text='xs' />
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
			<tr class='flex flex-col lg:flex-row text-xs'>
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
