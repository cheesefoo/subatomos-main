<script>
	import thirdlogo from '/static/assets/images/3rdanniversarylogo-transparent.png';
	import pondslogo from '/static/assets/images/subatomopondslogo.png';
	import secondpic from '/static/assets/images/2020anniversary.jpg';
</script>

<main>
	<h1>Subatomos Projects</h1>
	<div class='content'>
		<h1>2021</h1>
		<div class='year21'>
			<div>
				<h4>3rd anniversary</h4>
				<a sveltekit:prefetch href='/3rd-anniversary'>
					<img src={thirdlogo} />
				</a>
			</div>
			<div>
				<h4>1 Million Subscribers & Birthday</h4>
				<a sveltekit:prefetch href='/ponds'>
					<img src={pondslogo} />
				</a>
			</div>
		</div>

		<h1>2020</h1>
		<div class='year20'>
			<div>
				<h4>2nd anniversary</h4>
				<a href='https://twitter.com/SubatomoFan/status/1306244299995017217' target='_blank'>
					<img src={secondpic} />
				</a>
			</div>
		</div>
	</div>
</main>

<style lang='scss'>
  .content {
    display: flex;
    //grid-template-columns: 80%;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    max-width: 100%;
  }

  .year21,
  .year20 {
    display: flex;
    padding: 0 1em;
  }

  .year20 {
    max-width: 50%;
  }

  h3,
  h4,
  a {
    text-align: center;
  }

  h4 {
    color: $salmon;
  }

  img {
    //height: 100%;
    width: 100%;
    border: solid $chromeblue 1px;
    //width:auto;
  }
</style>
