<script>
	export let videoId;
	export let width = '';
	export let height = '';
</script>

<iframe loading="lazy" src='https://www.youtube.com/embed/{videoId}' allowfullscreen width={width} height={height}
></iframe>
