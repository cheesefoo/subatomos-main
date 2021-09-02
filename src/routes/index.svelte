<script>
	import { faDiscord, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
	import official from '/static/assets/images/subaru-logo-official.png';
	import subatomo from '/static/assets/images/subatomo-wh.png';
	import subaru from '/static/assets/images/cbimage.png';
	import Fa from 'svelte-fa';
	import '../app.scss';
	import Sakura from '../../node_modules/sakura-js/dist/sakura.js';
	import { onMount } from 'svelte';

	let twitterblue = '#1DA1F2';
	let youtubered = '#FF0000';
	let discordpurple = '#7289d9';
	let discordblurple = '#5865F2';

	onMount(() => {
		var sakura = new Sakura('#main', {
			colors: [
				{
					gradientColorStart: 'rgba(255, 183, 197, 0.9)',
					gradientColorEnd: 'rgba(255, 197, 208, 0.9)',
					gradientColorDegree: 120
				},
				{
					gradientColorStart: 'rgba(255,189,189)',
					gradientColorEnd: 'rgba(227,170,181)',
					gradientColorDegree: 120
				},
				{
					gradientColorStart: 'rgba(212,152,163)',
					gradientColorEnd: 'rgba(242,185,196)',
					gradientColorDegree: 120
				}
			]
		});
	});


</script>
<svelte:head>

</svelte:head>
<main id='main'>
	<div class='subaru-logo-group'>
		<div class='subaru-logo'>
			<img src={official} alt='oozora subaru' />
		</div>
		<div class='subaru-socials'>
			<a href='https://www.youtube.com/channel/UCHs7wgimVZHIp5sfNUkQTHA' target='_blank'>
				<Fa icon={faYoutube} size='6x' color={youtubered} fw spin pulse />
			</a>
			<a href='https://twitter.com/oozorasubaru' target='_blank'>
				<Fa icon={faTwitter} size='6x' color={twitterblue} fw spin />
			</a>
		</div>
	</div>
	<div class='nav'>
		<div>
			<a sveltekit:prefetch href='/3rd-anniversary'><h4>3rd anniversary</h4>
			</a>
		</div>
		<div>
			<!--			<LoadingDuck />-->
			<a sveltekit:prefetch href='/projects/ponds'><h4>1 Million Subscribers & Birthday</h4></a>
		</div>
		<div>
			<a href='https://twitter.com/SubatomoFan/status/1306244299995017217' target='_blank'><h4>2nd anniversary</h4>
			</a>
		</div>
		<div>
			<!--			<LoadingDuck />-->
			<a sveltekit:prefetch href='/soundboard'><h4>Soundboard</h4></a>
		</div>
	</div>
	<div class='subatomo-logo-group'>
		<div class='subatomo-logo'>
			<img src={subatomo} alt='oozora subaru' />
		</div>
		<div class='subatomo-socials'>
			<a href='https://discord.gg/subatomos' target='_blank'>
				<Fa icon={faDiscord} size='2x' color={discordblurple} />
			</a>
			<a href='https://www.youtube.com/channel/UCHs7wgimVZHIp5sfNUkQTHA' target='_blank'>
				<Fa icon={faYoutube} size='2x' color={youtubered} />
			</a>
			<a href='https://twitter.com/subatomos' target='_blank'>
				<Fa icon={faTwitter} size='2x' color={twitterblue} />
			</a>
		</div>
	</div>
	<div class='subaru'>
		<img src={subaru} alt='oozora subaru' />
	</div>
</main>

<style lang='scss'>
  @import '../../node_modules/sakura-js/dist/sakura.min.css';

  main {
    overflow: hidden;
    max-width: 100vw;
    max-height: 100vh;
  }

  .subaru-logo-group {
    display: flex;
    position: absolute;
    top: 5%;
    left: 10%;
  }

  .subaru-logo {
    object-fit: cover;

    img {
      height: 30vh;
    }
  }

  .subaru-socials {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h4 {
    font-weight: 900;
    font-size: 32px;
  }

  .nav {
    position: absolute;
    left: 15%;
    top: 40%;
  }

  .subatomo-logo-group {
    position: absolute;
    bottom: 5%;
    left: 5%;
    //overflow:hidden;
  }

  .subatomo-logo {
    object-fit: cover;

    img {
      width: 20vw;
    }
  }

  .subaru {
    position: absolute;
    right: 0;
    bottom: 0;
    object-fit: cover;

    img {
      width: 40vw;
      height: 100vh;
    }
  }

  a {
    &.grow {
      transition: all .2s ease-in-out;

      &:hover {
        transform: scale(1.5);
      }
    }
  }
</style>
