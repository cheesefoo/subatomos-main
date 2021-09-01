<script lang='ts'>
	import bigstar from '$images/Star_bg_reszied.png';
	// import stars from '$images/AboutSubaruWindowmobile.png';
	import StarsSVG from '$lib/components/StarsSVG.svelte';
	import SNSLink from '$lib/components/SNSLink.svelte';
	import { Lightbox } from 'svelte-lightbox';
	import { dev } from '$app/env';

	const dir = dev ? '/static/assets/images/fanart/' : '/assets/images/fanart/';
	const thumbsDir = dir + 'thumbs/';

	export let name;
	export let message;
	export let src = undefined;
	export let url = undefined;


	function getThumbnail()
	{
		let thumbnail;
		if (src !== undefined)
		{
			src = decodeURI(src);
			if (src.endsWith('.png'))
			{
				thumbnail = src.slice(0, -4) + '.jpg';
			} else if (src.endsWith('.jpeg'))
			{
				thumbnail = src.slice(0, -5) + '.jpg';
			} else{
				thumbnail=src;
			}

			// console.log('src: ' + src + '\nthumb: ' + thumbnail + '\nsrc.slice(0,-4) : ' + src.slice(0, -4));
		}
		return thumbsDir + thumbnail;
	}
</script>

<div class='box'>
	<div class='box-inner'>
		<span>
			{#if url !== undefined}
				<SNSLink {url} />
			{/if}
			{name}
		</span>
		<hr />
		<p>{message}</p>
		{#if src !== undefined}
			<hr class='art-divider' />
			<div class='fanart'>
				{#if src.endsWith('.mp4')}
					<Lightbox protect={true}>
						<video src={dir + src} />
					</Lightbox>
				{:else}
					<Lightbox thumbnail imagePreset={'fullscreen'} protect={true}>
						<img slot='thumbnail' src={getThumbnail()} alt={name} />
						<img slot='image' src={dir + src} alt={name} />
					</Lightbox>
				{/if}
			</div>
		{/if}
	</div>

	<div class='bigstar'>
		<img src={bigstar} alt='Subaru Message Star' />
	</div>
	<div class='stars'>
		<StarsSVG />
	</div>
	<!--	<div class='megaphone'>-->
	<!--		<img src={megaphone} alt='Subaru Message Star' />-->
	<!--	</div>-->
</div>

<style lang='scss'>
  .box {
    border-image-slice: 20 20 20 20;
    border-image-width: 20px 20px 20px 20px;
    border-image-outset: 0px 0px 0px 0px;
    border-image-repeat: stretch stretch;
    border-style: solid;
    //border-image-source: url('data:image/svg+xml;utf8,%3Csvg%20width%3D%22286pt%22%20height%3D%22156pt%22%20viewBox%3D%220%200%20286%20156%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill%3D%22%235ecde3%22%20stroke%3D%22%235ecde3%22%20stroke-width%3D%220.09375%22%20opacity%3D%221.00%22%20d%3D%22%20M%200.00%200.00%20L%2026.66%200.00%20C%2051.70%201.71%2076.91%202.54%20102.03%201.92%20C%20127.02%20-0.20%20152.24%202.59%20177.16%200.29%20L%20178.27%200.00%20L%20178.53%200.00%20C%20200.59%201.75%20222.84%201.41%20244.99%201.38%20C%20250.73%201.15%20256.67%201.86%20262.21%200.00%20L%20286.00%200.00%20L%20286.00%2015.36%20C%20283.39%2027.81%20284.80%2040.62%20286.00%2053.14%20L%20286.00%2065.69%20C%20284.23%2078.35%20285.97%2091.25%20285.55%20104.00%20C%20285.71%20120.58%20282.44%20137.22%20285.60%20153.70%20C%20285.07%20154.46%20284.54%20155.23%20284.01%20156.00%20L%20283.44%20156.00%20C%20283.45%20155.85%20283.47%20155.55%20283.47%20155.40%20C%20270.34%20154.23%20257.13%20155.02%20243.98%20155.55%20L%20245.01%20156.00%20L%20229.79%20156.00%20C%20225.33%20154.52%20220.60%20154.98%20215.99%20154.90%20C%20186.99%20155.01%20157.99%20154.92%20129.00%20155.16%20C%20114.67%20155.07%20100.30%20155.75%2086.03%20154.25%20C%2057.35%20154.13%2028.67%20154.61%200.00%20154.87%20L%200.00%20145.39%20C%201.41%20137.01%201.06%20128.47%201.33%20120.00%20C%201.25%2081.90%201.54%2043.78%200.47%205.70%20L%200.00%204.87%20L%200.00%200.00%20M%204.75%204.93%20C%204.46%2020.29%203.06%2035.67%204.29%2051.02%20C%206.31%2084.29%203.59%20117.60%204.29%20150.89%20C%2037.86%20150.73%2071.43%20151.51%20104.99%20151.61%20C%20163.64%20152.91%20222.30%20152.00%20280.94%20151.66%20C%20280.69%20102.82%20282.76%2053.89%20280.91%205.06%20C%20269.30%204.22%20257.64%204.03%20246.02%204.87%20C%20219.02%206.41%20191.97%204.10%20165.01%205.34%20C%20141.36%204.45%20117.69%203.87%2094.03%204.80%20C%2064.27%205.52%2034.47%203.02%204.75%204.93%20Z%22%20%2F%3E%0A%3Cpath%20fill%3D%22%23e8ee8b%22%20stroke%3D%22%23e8ee8b%22%20stroke-width%3D%220.09375%22%20opacity%3D%221.00%22%20d%3D%22%20M%207.65%207.85%20C%2039.77%209.23%2071.89%207.16%20104.01%208.42%20C%20161.99%206.93%20219.99%208.84%20277.99%207.93%20C%20277.02%2054.70%20278.23%20101.56%20277.85%20148.35%20C%20267.91%20147.52%20257.95%20148.16%20248.00%20148.15%20C%20172.67%20148.34%2097.33%20148.66%2022.00%20148.01%20C%2017.27%20147.98%2012.52%20148.08%207.83%20148.85%20C%208.60%20125.55%206.83%20102.30%207.85%2079.02%20C%208.45%2055.30%208.19%2031.57%207.65%207.85%20M%2010.06%2010.58%20C%208.92%2019.38%2010.17%2028.21%209.97%2037.03%20C%2010.15%2073.32%209.52%20109.61%2010.16%20145.89%20C%2042.10%20146.73%2074.05%20146.67%20106.00%20146.00%20C%20151.00%20145.76%20196.00%20145.85%20241.00%20146.73%20C%20252.46%20147.22%20263.89%20145.74%20275.35%20145.99%20C%20276.21%20115.03%20276.81%2083.99%20275.12%2053.03%20C%20275.47%2038.73%20276.63%2024.41%20275.08%2010.13%20C%20223.40%209.73%20171.71%2010.29%20120.02%209.98%20C%2083.36%2010.18%2046.68%209.53%2010.06%2010.58%20Z%22%20%2F%3E%0A%3C%2Fsvg%3E%0A');
    border-image-source: url('/assets/images/Window_resized.svg');

    background-color: $ivory;

    position: relative;
    min-height: 20%;
    max-height: 80%;
  }

  $hrmargin: 4ch;
  .box-inner {
    //display: flex;
    //flex-direction: column;
    margin: $hrmargin $hrmargin 0 $hrmargin;
    max-width: 40ch;
    position: relative;
    z-index: 1;
    overflow-wrap: break-word;
    overflow: hidden;
  }

  .art-divider {
    //width:80%;
    width: 100%;
    margin: 0 $hrmargin;

    max-width: 40ch;
  }

  .fanart {
    //max-width:40ch;
    //max-height:80vh;
    //object-fit:contain;
    padding-bottom: 1em;
  }

  //
  //.megaphone {
  //	position: absolute;
  //	bottom: 0;
  //	right: 0;
  //}

  .stars {
    position: absolute;
    bottom: 0;
    right: 0;

    //img {
    //	width: 10rem;
    //}
  }

  img {
    object-fit: cover;
  }

  .bigstar {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
