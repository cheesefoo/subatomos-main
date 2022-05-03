<script lang='ts'>
	import { jp, romaji } from './_lyrics_pleiades.ts';
	import { media } from '$lib/stores/stores';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabList from '$lib/components/Tabs/TabList.svelte';
	import Tab from '$lib/components/Tabs/Tab.svelte';
	import TabPanel from '$lib/components/Tabs/TabPanel.svelte';

	import tw from '../../tw.scss';
</script>
{#if true}
	<!--{#if $media.mobile}-->
	<script>
		import { Tabs, TabList, TabPanel, Tab } from './tabs.js';
	</script>

	<Tabs>
		<TabList>
			<Tab>Japanese</Tab>
			<Tab>Romaji</Tab>
			<Tab>English</Tab>
		</TabList>

		<TabPanel>

			ぷ・れ・あ・で・す!
			<br/>

			{#each jp as paragraphs}
				{#each paragraphs as line}
					<div>{line}</div>
				{/each}
				<br />
			{/each}
		</TabPanel>

		<TabPanel>

			Pu・re・a・de・su!
			<br/>
			{#each romaji as paragraphs}
				{#each paragraphs as line}
					<div>{line}</div>
				{/each}
				<br />
			{/each}
		</TabPanel>
		<TabPanel>
			<h2>Third panel</h2>
		</TabPanel>
	</Tabs>
{/if}