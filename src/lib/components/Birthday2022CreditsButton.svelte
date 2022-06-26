<script>
	import credits from '/static/assets/images/credits_ghetto.png';
import { getContext } from 'svelte';
import Birthday2022Credits from '$lib/components/Birthday2022Credits.svelte';

const { open } = getContext('simple-modal');
const openModal = () => open(Birthday2022Credits);
</script>
<input class='credits-btn' type='image' on:click={openModal} src={credits} alt='credits' />