<script lang='ts'>

	import { Howl } from 'howler';
	import oozoraken from '/static/assets/sound/oozora_kensetsu_by_jeremy_robson.mp3';

	const howl = new Howl({
		src: oozoraken,
		loop: true
	});
	export let paused: boolean;
	$: img = paused ? 'background-image: url(\'/static/assets/images/volume_mute.png\')' : 'background-image: url(\'/static/assets/images/volume.png\')';
	$: if (paused)
	{
		howl.pause();
	}
	$: if (!paused)
	{
		howl.play();
	}

	function togglePause()
	{
		paused = !paused;
	}
</script>

<div class:playing={!paused} style='{img}' on:click={togglePause}>


</div>

<style>
    div {
        width: 5vw;
        height: 5vh;
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;
    }

    audio {
    }

    .playing {
        color: #ff3e00;
    }
</style>
