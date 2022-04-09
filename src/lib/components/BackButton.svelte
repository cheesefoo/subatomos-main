<script>
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	function goBack(defaultRoute = '/wiki/en') {
		if (browser) {
			const ref = document.referrer;

			goto(ref.length > 0 ? ref : defaultRoute);
		}
	}
</script>

<h2><a href="/wiki/en" >←</a></h2>
