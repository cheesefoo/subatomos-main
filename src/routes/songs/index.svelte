<script lang='ts' context='module'>
	import GhostContentAPI from '@tryghost/content-api';

	import { ghostAPI, ghostURL } from '$lib/variables';

	let promise = Promise.resolve([]);

	export async function load( )
	{
		const api = new GhostContentAPI({
			url: `${ghostURL}`,
			key: `${ghostAPI}`,
			version: 'v3.0'
		});

		try
		{
			const page = api.pages.read({ slug: 'oozora-subaru' }, { formats: ['html'] });
			const posts = api.posts.browse({
				limit: 10,
				include: 'tags',
				filter: 'tag:-hash-ja+tag:-hash-it'
			});
			const tags = api.tags.browse({ limit: 10, filter: 'visibility:public' });

			promise = Promise.all([page, posts, tags]);

			return {
				props: {
					page: await page,
					posts: await posts,
					tags: await tags
				}
			};
		} catch (err)
		{
			console.log(err);

			return {
				status: 503,
				error: new Error(`Coldbooting`)
			};
		}
	}
</script>

<script>
	import { onMount } from 'svelte';
	import '/src/routes/wiki/tw.scss';
	import TooltipLoader from '$lib/components/TooltipLoader.svelte';
	import WikiSearch from '$lib/components/WikiSearch.svelte';

	export let page;
	export let posts;
	export let tags;
	onMount(async () => {
		document.querySelectorAll('.content p a').forEach((a) => {
			if (!a.getAttribute('href').startsWith('./')) {
				a.setAttribute('target', '_blank');
			}
		});
	});
</script>

<svelte:head>
	<link rel='alternate' href='https://subatomos.com/wiki/ja/' hreflang='ja' />
	<link rel='alternate' href='https://subatomos.com/wiki/en/' hreflang='en' />
	<title>Oozora Subaru Fan Wiki</title>
</svelte:head>

<div class='content p-4 text-sm lg:text-base lg:p-24 break-words'>
	<div class='intro'>
		<span>turn a hat wearing duck into a shrimp dish drowned in olive oil</span>
		<p class='pt-8 pb-8'>
			This section of the website's goal is to improve readers' impressions of Subaru, as
			well as to provide more
			information on references that newer fans may not know about. The content here is specific to Subaru and is likely
			unfit to be on the unofficial <a href='https://hololive.wiki/wiki/Oozora_Subaru' target='_blank'>hololive wiki</a>
			or the <a href='https://virtualyoutuber.fandom.com/wiki/Oozora_Subaru' target='_blank'>virtual YouTuber wiki</a>.
		</p>
		<blockquote class='lg:text-base text-justify pl-4 lg:ml-8 lg:pl-8 border-l border-l-salmon'>
			Subaru has the unyielding spirit of a true protagonist that allows her to "work hard for the sake of
			others" and "utilize setbacks as a springboard to spread her wings". She pursued idol activities despite her
			public perception as a comedian. Without denying either aspect, she indulged in both until the last drop. When she
			declared that she wanted to be an idol that "any fan would be glad to have supported", a massive number of
			<TooltipLoader slug='ahijo' text='gachikoi' url='./en/posts' />
			came into being.<br> -adapted from <a
			href='https://dic.pixiv.net/a/%E5%A4%A7%E7%A9%BA%E3%82%B9%E3%83%90%E3%83%AB'>dic.pixiv.net page on Subaru</a>
		</blockquote>
		<p class='text-xs mt-4'>If you'd like to contribute, please contact us in <a href='https://subatomos.com/discord'>discord</a>
			or email info at subatomos dot com</p>
	</div>
	<div class='border text-sm my-8 p-4 lg:pl-16 lg:pr-16 lg:mx-16'>
		<WikiSearch />
		<div class='wiki-content flex flex-col lg:flex-row lg:justify-between'>
			<div class='pt-8 pb-8 lg:pt-0 lg:pb-0'>
				<h3 class='text-sm py-4'>Categories</h3>
				<li><a href='../../bgmlist'>BGM List</a></li>
				{#each tags as tag}
					<li><a href='/wiki/en/categories/{tag.slug}'>{tag.name}</a></li>
				{/each}
			</div>

			<div>
				<h3 class='text-sm py-4'>recently updated</h3>
				{#each posts as post}
					<li>
						<TooltipLoader url='/wiki/en/posts' slug={post.slug} text={post.title} />
					</li>
				{/each}
			</div>
		</div>
	</div>
	<div>
		<h1 class='text-lg py-4'>Personality</h1>
		<p>Subaru is naturally extroverted, though she will deny it. She is hardworking, and always optimistic, even in bad
			situations. She always tries her best and seldom shows vulnerable sides to her viewers, which makes the rare
			occasions where they break through evoke empathetic feelings in viewers. Subaru is easygoing, optimistic, and very
			upbeat, which further endears viewers when she shows her true girlish nature.
			Subaru is regarded as the brightest person in Hololive, a descriptor with multiple meanings. Her bright
			personality
			makes newer and introverted members nervous to interact with her at first but also encourages them to leave their
			shells over time. Furthermore, her title as "the Sun of Hololive" highlights her warm and energizing personality,
			from stories told by other vtubers describing how talking to and interacting with Subaru had saved them from
			depressive states or from quitting their vtuber career.
		</p>
		<h1 class='text-lg py-4'>Hobbies</h1>

		<p>Subaru most recently has gotten into Pokemon, having only a surface-level knowledge of the franchise. Her gushing
			over her favorite Pokemon Rowlett (Mokuro モクロー in Japanese) highlights her girliness and is objectively cute.
			Additionally, her genuine reactions to discovering the existence of the competitive side of Pokemon and Pokemon
			breeding display her innocent views, uncorrupted by the internet.</p>
		<h1 class='text-lg py-4'>Streams</h1>
		<h3 class='text-sm py-4'>Collabs</h3>
		<p>Subaru fans often say that she "makes any collab work", owing to her ability to entertain an audience and to
			bring
			out the best in others. Even on groups that do not make any sense on a surface level, such as
			<TooltipLoader slug='ahijo' text='SubaChocoLunaTan'
										 url='./en/posts' />
			, work in large part due to Subaru.
		</p>
		<h3 class='text-sm py-4'>Gaming</h3>
		<p>Before entering hololive, Subaru was a "normie" who did not know much about otaku culture. She did not play many
			games or read/watch anime/manga. Since joining hololive, she has been slowly introduced to these hobbies by other
			talents. Her favorite game genre is RPGs and especially likes games with a pixel art style. She often plays retro
			games or games released in the early 2000s, stirring up feelings of nostalgia in viewers.
			During game streams, Subaru likes to speculate and anticipate game story plot points. She often gets very close to
			the correct plot points, and it is fun as a viewer to listen to her sleuthing and genuine reactions. She gets very
			invested and excited in stories, which rubs off onto viewers. For example, she played Granblue Fantasy, a mobile
			gacha RPG with a slave-like competitive mode dreaded by players and done out of obligation. Many fans relayed to
			her
			that her playthrough, which focuses on the plot, reinspired and reignited their original love for the game.</p>
		<h3 class='text-sm py-4'>Membership</h3>
		<p>Subaru's membership streams are typically free-talk streams. These streams tend to be more relaxed and relatively
			intimate. She has previously put her karaoke stream archives behind membership, provided wallpapers and other
			unique
			contents.</p>
		<h1 class='text-lg py-4'>Fanbase</h1>
		<p>Subaru's fanbase, named Subatomos (Suba-friends, but call it subatomos), often likes to tease her, in a fashion
			similar to an elementary schoolboy. She interacts with them and is very in-tune with what is happening amongst
			them.
			She claims that she watches her long-time fans and silently judges them when they interact with other hololive
			members on Twitter.
			For overseas Subatomos, Subaru understands the frustration of being unable to understand what people are saying
			due
			to the language barrier, due to her own frustration while trying to watch interviews with Marvel actors. She stays
			up late every week before her morning stream to create an English translation for those who cannot understand
			Japanese.</p>
	</div>
</div>
<style lang='scss'>


  h1, h3, {
    font-weight: 400;
    color: $headingcolor;

  }

  p {
    color: $tundora
  }





  blockquote {
    font-family: klee, sans-serif;
    font-weight: 900;
  }
</style>
