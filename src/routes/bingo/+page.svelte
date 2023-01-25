<script lang='ts'>
	import '/src/routes/wiki/tw.scss';

	import squares from './_squares';
	import BingoSquare from '$lib/components/BingoSquare.svelte';

	let board = [];
	shuffleSquares();

	/**https://stackoverflow.com/a/6274381/3403223
	 * Shuffles array in place. ES6 version
	 * @param {Array} a items An array containing the items.
	 */
	function shuffle(a)
	{
		for (let i = a.length - 1; i > 0; i--)
		{
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	function shuffleSquares()
	{
		shuffle(squares);
		board = squares;
		board.splice(12, 0, { en: 'Subaru is cute\n(FREE)', ja: 'スバルはかわいい\n（FREE）' });

	}
</script>
<div
	class='board grid grid-cols-5 auto-rows-max gap-2 center-items background-transparent border-all border-dotted border-black text-center lg:px-32 lg:py-8'>
	<i class='text-sm text-center lg:text-base'>S</i>
	<i class='text-sm text-center lg:text-base'>H</i>
	<i class='text-sm text-center lg:text-base'>U</i>
	<i class='text-sm text-center lg:text-base'>B</i>
	<i class='text-sm text-center lg:text-base'>A</i>
	{#each board as { en, ja }}
		<BingoSquare {en} {ja} />
	{/each}
</div>
<style>


</style>
