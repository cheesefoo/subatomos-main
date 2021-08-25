<script>
	export let name = undefined;
	export let avatar = `https://avatars.dicebear.com/api/human/${name}.svg`;
	export let sns = undefined;
	export let url = undefined;
</script>

<div>
	<img class="avatar" src={avatar} alt="avatar" />
	<i class="fab fa-twitter" />
	<a href={url}>{name}</a>
</div>

<style lang="scss">
	div {
		display: block;
	}

	img {
		height:100px;
		width:100px;
		clip-path: circle(50% at 50% 50%);
	}
</style>
