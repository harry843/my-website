<script lang="ts">
	import RadarwithAvatar from '../component/Home/RadarwithAvatar.svelte';
	import DynamicButtons from '../component/Home/DynamicButtons.svelte';
	import { userHasNavigated } from '../stores/stores';
	import SkillsSection from '../component/Home/SkillsSection.svelte';
	import AboutSection from '../component/Home/AboutSection.svelte';
	import BlogSection from '../component/Home/BlogSection.svelte';
	import ProjectSection from '../component/Home/ProjectSection.svelte';
	import type { PageData } from './$houdini';
	import { browser } from '$app/environment';

	export let data: PageData;

	$: ({ GetLatestPost } = data);

	$: latestPost = $GetLatestPost.data?.allPost;

	let width: number = 0;
	let screenwidth: number = 0;

	$: bool = true;
	$: additionalClass = screenwidth >= 1024 ? 'lg:translate-x-8' : screenwidth < 768 ? 'pt-10' : '';

	function onFirstVisit() {
		if (browser) {
			if (
				localStorage.theme === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				return { name: 'sky', hex: '#7dd3fc' };
			}
			if (
				($userHasNavigated && localStorage.theme !== 'dark') ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				return colors[Math.floor(Math.random() * colors.length)];
			} else {
				return { name: 'indigo', hex: '#6366f1' };
			}
		}
	}

	$: colors = [
		{ name: 'rose', hex: '#f43f5e' },
		{ name: 'yellow', hex: '#eab308' },
		{ name: 'teal', hex: '#14b8a6' }
	];

	$: color = onFirstVisit();

	// let previousPage: string = base;

	// afterNavigate(({ from }) => {
	// 	previousPage = from?.url.pathname || previousPage;
	// });

	// onMount(() => {
	// 	if (typeof latestPost === undefined) {
	// 		location.reload();
	// 	}
	// });
	$: console.log($GetLatestPost.source);
</script>

<svelte:head>
	<title>Harry Kelleher</title>
	<meta property="og:title" content="Harry Kelleher" />
	<meta property="og:type" content="article" />
	<meta name="author" content="Harry Kelleher" />
	<meta name="article:published_time" content={new Date().toLocaleDateString()} />
	<meta property="og:image" content="https://ibb.co/B6d632h" />
	<meta
		property="og:description"
		content="Hi - I'm Harry Kelleher. I'm a Data Visualisation Developer. I create data products to help grow your business."
	/>
	<meta property="og:url" content="https://harrykelleher.com/" />
	<meta property="og:locale" content="en_GB" />
</svelte:head>

<svelte:window bind:innerWidth={screenwidth} />

<section class="flex flex-col md:flex-row">
	<div
		class="relative flex flex-col justify-center items-center w-full xs:w-11/12 xs:translate-x-7 sm:w-3/4 sm:translate-x-20 md:w-1/2 md:-translate-x-5"
		bind:clientWidth={width}
	>
		{#if width > 0}
			{#if screenwidth < 768}
				<div class="">
					<p>
						I'm a <span
							class="text-{color.name === 'yellow'
								? '[#b7791f]'
								: color.name + '-600'} dark:text-sky-300 font-medium"
							>Data Visualisation Developer.</span
						>
					</p>
					<br />
					<p>I use data to tell stories you'll remember.</p>
				</div>
				{#if screenwidth >= 640}
					<DynamicButtons {color} {additionalClass} />
				{/if}
			{/if}

			<RadarwithAvatar {width} {color} {bool} />
		{/if}
	</div>

	<div
		class="flex flex-col items-center justify-center space-y-4 md:p-8 w-full md:w-1/2"
		bind:clientWidth={width}
	>
		{#if width > 0}
			{#if screenwidth >= 768}
				<div class="translate-y-0 xs:-translate-y-1/2">
					<p>
						I'm a <span
							class="text-{color.name === 'yellow'
								? '[#b7791f]'
								: color.name + '-600'} dark:md:text-sky-300 font-medium"
							>Data Visualisation Developer.</span
						>
					</p>
					<br />
					<p>I build data products to create experiences which make impact.</p>
				</div>
				{#if screenwidth >= 1024}
					<DynamicButtons {color} {additionalClass} />
				{/if}
			{/if}
		{/if}
	</div>
</section>
{#if width > 0}
	{#if screenwidth >= 768 && screenwidth < 1024}
		<DynamicButtons {color} {additionalClass} />
	{/if}
	<AboutSection />
	<SkillsSection />
	{#key latestPost}
		<BlogSection {latestPost} />
	{/key}
	<ProjectSection />
{/if}
