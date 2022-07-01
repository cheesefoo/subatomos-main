<script lang='ts'>
	import * as L from 'leaflet';
	import { getContext } from 'svelte';

	let classNames: string | undefined = undefined;
	export { classNames as class };

	export let popup: L.Popup | undefined = undefined;

	let showContents = false;
	let popupOpen = false;

	// const layer = getContext('layer')();
	const getMap = getContext('layer');
	const layer = getMap();

	function createPopup(popupElement: HTMLElement)
	{
		popup = L.popup().setContent(popupElement);
		layer.bindPopup(popup);

		layer.on('popupopen', () =>
		{
			popupOpen = true;
			showContents = true;
		});

		layer.on('popupclose', () =>
		{
			popupOpen = false;
			// Wait for the popup to completely fade out before destroying it.
			// Otherwise the fade out looks weird as the contents disappear too early.
			setTimeout(() =>
			{
				if (!popupOpen)
				{
					showContents = false;
				}
			}, 500);
		});

		return {
			destroy()
			{
				if (popup)
				{
					layer.unbindPopup();
					popup.remove();
					popup = undefined;
				}
			}
		};
	}
</script>

<div class='hidden'>
	<div use:createPopup class={classNames}>
		{#if showContents}
			<slot />
		{/if}
	</div>
</div>

<style lang='scss'>

  :global(.leaflet-popup-content) {
    width: 100% !important;
    //height:25%;
  }

  :global(.leaflet-popup) {
    top: 20px !important;
  }

  /* Here I move the "tip" to the right location, but didn't succeed in making it visible. So I just remove the box-shadow and leave it: */
  :global(.leaflet-popup-tip-container) {
    top: 0px !important;
  }

  :global(.leaflet-popup-tip) {
    box-shadow: none !important;
  }

  :global(.leaflet-popup ) {
    width: 35vw;
    height: 60%;

    :before {
      content: "";
      position: absolute;
			left:48%;
      border: 13px solid transparent;
      border-bottom-color: white;
      bottom: 0px;
      margin-top: -15px;
    }
  }
</style>