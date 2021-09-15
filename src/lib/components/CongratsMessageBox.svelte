<script lang="ts">
	// import stars from '$images/stars_red.svg';
	import StarsSVG from '$lib/components/StarsSVG.svelte';
	import SNSLink from '$lib/components/SNSLink.svelte';
	import { Lightbox } from 'svelte-lightbox';
	import { dev } from '$app/env';
	import { media } from '$lib/stores/stores.ts';

	const dir = dev ? '/assets/images/fanart/' : '/assets/images/fanart/';
	const thumbsDir = $media.small ? dir + 'thumbs/mobile/' : dir + 'thumbs/';

	export let name: string;
	export let message;
	export let src = undefined;
	export let url = undefined;
	export let yellow: boolean = true;

	let size = '0.9x';
	if ($media.small) {
		size = '0.9x';
	}

	function getThumbnail() {
		let thumbnail;
		if (src !== undefined) {
			src = decodeURI(src);
			if (src.endsWith('.png') || src.endsWith('.mp4') || src.endsWith('.jpg')) {
				thumbnail = src.slice(0, -4) + '.webp';
			} else if (src.endsWith('.jpeg')) {
				thumbnail = src.slice(0, -5) + '.webp';
			} else {
				thumbnail = src;
			}

			// console.log('src: ' + src + '\nthumb: ' + thumbnail + '\nsrc.slice(0,-4) : ' + src.slice(0, -4));
		}
		return thumbsDir + thumbnail;
	}

	function getTwitter() {
		let user = name.substring(name.lastIndexOf('@') + 1);
		if (user.endsWith(')')) {
			user = user.slice(0, -1);
		}
		return 'https://twitter.com/' + user;
	}
</script>

<div class="box-border">
	<div class="box" class:yellow class:pink={!yellow}>
		<div class="stars">
			<StarsSVG width={200} height={111} />
		</div>

		<div class="box-inner-border" class:yellow class:pink={!yellow}>
			<div class="box-inner">
				<span class:yellow class:pink={!yellow}>
					{#if url !== undefined}
						<SNSLink {url} {size} />
					{:else if name.includes('@')}
						<SNSLink url={getTwitter()} {size} />
					{/if}
					{name}
				</span>

				<p>{message}</p>
				{#if src !== undefined}
					<hr class="art-divider" />
					<div class="fanart">
						{#if src.endsWith('.mp4')}
							<Lightbox clickToClose={true} thumbnail protect={true}>
								<img slot="thumbnail" src={getThumbnail()} alt={name} />
								<video slot="image" autoplay loop src={dir + src} />
							</Lightbox>
						{:else}
							<Lightbox clickToClose={true} thumbnail imagePreset={'fullscreen'} protect={true}>
								<img slot="thumbnail" src={getThumbnail()} alt={name} />
								<img slot="image" src={dir + src} alt={name} />
							</Lightbox>
						{/if}
					</div>
				{/if}
			</div>
		</div>
		<!--	<div class='bigstar'>-->
		<!--		<img src={bigstar} alt='Subaru Message Star' />-->
		<!--	</div>-->
	</div>
</div>

<style lang="scss">
  @font-face {
    // This is parsed as a normal function call that takes a quoted string.
    src: url('/static/851CHIKARA-DZUYOKU_kanaA_004.woff2') format('woff2');
    font-family: '851CHIKARA-DZUYOKU_kanaA_004';
    font-weight: normal bold;
  }

	.box-border {
		border: white solid 0.5em;
		border-radius: 1em;
		box-shadow: 5px 5px 5px rgb(0 0 0 / 0.4);
	}

	.box {
		position: relative;
		min-height: 20%;
		max-height: 80%;
	}

	.box-inner-border {
		border-style: solid;
		border-image-slice: 96 96 96 96;
		border-image-width: 20px 20px 20px 20px;
		border-image-outset: 0 0 0 0;
		border-image-repeat: stretch stretch;
		border-image-source: url('/static/assets/images/Cross.png');
		background-size: contain;
		background-clip: border-box;
		background-origin: border-box;

		&.yellow {
			background: #fff9e9 url('/static/assets/images/Star_bg_yellow.png') no-repeat right top;
			background-image: url('/static/assets/images/namebanner.webp'),
				url(/static/assets/images/Star_bg_yellow.png);
			background-position: 0 20px, right top;
			background-size: 100% 2.5em, 40% auto;
		}

		&.pink {
			background: #fdebe7 url('/static/assets/images/Star_bg_pink.png') no-repeat right top;
			background-image: url('/static/assets/images/namebanner.webp'),
				url(/static/assets/images/Star_bg_pink.png);
			background-position: 0 20px, right top;
			background-size: 100% 2.5em, 40% auto;
		}
	}

	$hrmargin: 4ch;
	.box-inner {
		margin: 2.7ch $hrmargin 0 $hrmargin;
		max-width: 40ch;
		position: relative;
		z-index: 1;
		overflow-wrap: break-word;
		overflow: hidden;
		background-size: 100%;

		&.yellow {
			background: #fff9e9;
		}

		&.pink {
			background: #fdebe7;
		}

		span {
			font-size: 1.6rem;
			font-family: '851CHIKARA-DZUYOKU_kanaA_004', sans-serif;
			font-weight: normal;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;

			&.yellow {
				color: #a3504d;
			}

			&.pink {
				color: #43638a;
			}
		}

		p {
			font-family: setofont, sans-serif;
			font-size: 1em;
			padding: 1.5em 0;
			color: #51b1c4;
		}
	}

	.art-divider {
		width: 100%;
		margin: 0 $hrmargin;

		max-width: 40ch;
	}

	.fanart {
		padding-bottom: 2em;
	}

	.stars {
		position: absolute;
		z-index: 9999;
		right: -3.5ch;
		top: -4ch;
		zoom: 0.5;
	}

	@media screen and (max-width: 849px) {
	}
</style>
