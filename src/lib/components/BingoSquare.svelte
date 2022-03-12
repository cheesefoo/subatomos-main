<script lang='ts'>
	import '/src/routes/wiki/tw.scss';

	export let en;
	export let ja;
	let checked: boolean;
</script>

<div class='flex flex-col justify-center items-center border border-black border-1 w-18 h-32'
		 class:checked
		 on:click={()=>checked=!checked}>
	<p class='text-xxs px-2 break-all'>{en}</p>
	<p class='text-xxs px-2 break-all'>{ja}</p>
</div>

<style lang='scss'>
//div{
//	width:4rem;
//	height:8rem;
//}
  .checked {
    //height: 75%;
    //width: 75%;
    background-color: salmon;
    border-radius: 50%;

  }
</style>
