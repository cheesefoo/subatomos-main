<script lang='ts'>
	import HoloLink from '$lib/components/HoloLink.svelte';
	import '/src/routes/wiki/tw.scss';

	import { locale } from '/src/i18n/i18n-svelte';

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

		<div class='grid grid-flow-row-dense grid-cols-2 lg:grid-cols-9 lg:justify-items-center gap-6 pt-8 pb-8'>

			<table class='border-collapse table-fixed w-full lg:col-span-3 text-sm'>
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
			<table class='border-collapse table-fixed w-full lg:col-span-3 text-sm'>
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
			<table class='border-collapse table-fixed w-full lg:col-span-3 text-sm grayscale'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center grayscale'>
				常MOS
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col lg:flex-row text-xs'>
							<HoloLink en='Tokoyami Towa' jp='常闇トワ' width='6' text='xs' grayscale={false} />

							<HoloLink en='Ookami Mio' jp='大神ミオ' width='6' text='xs'  />
							<HoloLink en='Nekomata Okayu' jp='猫又おかゆ' width='6' text='xs'  />
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs'   />
						</a>
					</td>
				</tr>
				</tbody>
			</table>

			<table class='border-collapse table-fixed w-full lg:col-span-3 text-sm grayscale'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center grayscale'>
				Citrus
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col lg:flex-row text-xxs' >
							<HoloLink en='Shishiro Botan' jp='獅白ぼたん' width='6' text='xs' grayscale={false} />
							<HoloLink en='Tokoyami Towa' jp='常闇トワ' width='6' text='xs' grayscale={false} />
							<HoloLink en='La+ Darknesss' jp='ラプラス・ダークネス' width='6' text='xxs' />
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />

						</a>
					</td>
				</tr>
				</tbody>
			</table>

			<table class='border-collapse table-fixed w-full lg:col-span-3 text-sm'>
				<thead class='border-b text-lg p-4 pl-8 pb-3 text-sky text-center'>
				FAMS
				</thead>
				<tbody class='bg-white'>
				<tr>
					<td>
						<a class='flex flex-col lg:flex-row lg:grow-0 text-xs' sveltekit:prefetch href='/wiki/{$locale}/posts/fams'>
							<HoloLink en='Shirakami Fubuki' jp='白上フブキ' width='6' text='xxs' grayscale={false} />
							<HoloLink en='Nakiri Ayame' jp='百鬼あやめ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Ookami Mio' jp='大神ミオ' width='6' text='xs' grayscale={false} />
							<HoloLink en='Oozora Subaru' jp='大空スバル' width='6' text='xs' grayscale={false} />
						</a>
					</td>
				</tr>
				</tbody>
			</table>

			<table class='border-collapse table-fixed w-full lg:col-span-3 text-sm'>
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
