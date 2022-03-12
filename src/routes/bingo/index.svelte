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
    /*    .board {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						align-content: stretch;
						background-color: transparent;
						border-radius: 20px;
						border: 20px dotted bisque;
				}*/
 
    .row {
        display: flex;
        width: 100%;
        height: auto;
        flex-flow: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: stretch;
    }

    .emoji-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        text-align: center;
        width: 3vmax;
        height: 3vmax;
        margin: 2vmax;
    }

    .emoji {
        z-index: 1;
        cursor: pointer;
        border: 5px solid bisque;
        margin: 0px;
        line-height: 1.1;
        width: 5vmax;
        height: 5vmax;
        min-width: 5vmax;
        min-height: 5vmax;
        font-size: 5vmax;
    }

    .dot {
        position: absolute;
        z-index: 2000;
        border-radius: 100%;
        background-color: bisque;
        border: 5px solid blue;
        opacity: 0.5;
        width: 5vmax;
        height: 5vmax;
    }
</style>
