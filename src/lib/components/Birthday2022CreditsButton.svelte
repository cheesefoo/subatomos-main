<script>
	import { getContext } from 'svelte';
	import Birthday2022Credits from '$lib/components/Birthday2022Credits.svelte';
	let credits = '/assets/images/credits_duck.webp';

	const { open } = getContext('simple-modal');
	const openModal = () => open(Birthday2022Credits);
</script>
<input class='credits-btn' type='image' src={credits} on:click={openModal}  alt='credits'/>

<style lang='scss'>
  .credits-btn {
    border: none;
    background-color: inherit;
    cursor: pointer;
    display: inline-block;
		width:100%;
  }

  .credits-btn:hover {
    background: $salmon;
  }

/*  @media screen and (max-width: 849px) {
    .credits-btn {
      font-size: 1em;
      padding: 1.25em 0.75em;
      background-color: $salmon;
      clip-path: circle(40% at 50% 50%);
    }
  }*/
</style>