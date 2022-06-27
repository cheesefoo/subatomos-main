<script>
	import { getContext } from 'svelte';
	import Birthday2022Credits from '$lib/components/Birthday2022Credits.svelte';

	const { open } = getContext('simple-modal');
	const openModal = () => open(Birthday2022Credits);
</script>
<button class='credits-btn' on:click={openModal}>Credits</button>

<style lang='scss'>
  .credits-btn {
    border: none;
    background-color: inherit;
    padding: 1em 2em;
    font-size: 1.5em;
    cursor: pointer;
    display: inline-block;
  }

  .credits-btn:hover {
    background: $salmon;
  }
</style>