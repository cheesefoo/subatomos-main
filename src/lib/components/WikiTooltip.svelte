<script>
	export let hoverText;
</script>

<!--{#if hoverText!==undefined}-->
<i>{hoverText}</i>
<!--{/if}-->
<style lang="scss">
  i {
    color: #1da1f2;
		padding: .15rem;
    background: #ff3e00aa;
    border-radius: .5rem;
  }
</style>
<!--

<script>
	// import tooltip from "./Tooltip";
	// import tooltip from "./tt";
	export let hoverText;
export let slug;
export let text;
</script>
&lt;!&ndash; 	 	<a href="./{slug}" class='excerpt' use:tooltip={{ content: hoverText }}>{text}</a>&ndash;&gt;
<div>{hoverText}</div>
<style>
		.excerpt{
    color: #1da1f2;
}
    div {
        color: #1da1f2;
        padding: .15rem;
        background: #ff3e00aa;
        border-radius: .5rem;
    }

</style>
-->
