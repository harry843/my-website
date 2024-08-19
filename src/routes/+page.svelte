<script lang="ts">
	import RadarwithAvatar from '../component/Home/RadarwithAvatar.svelte';
	import DynamicButtons from '../component/Home/DynamicButtons.svelte';
	import { userHasNavigated } from '../stores/stores';
	import MovingLetters from '../component/Home/MovingLetters.svelte';
	import AnimatedElement from '../component/Home/AnimatedElement.svelte';
	import SkillsSection from '../component/Home/SkillsSection.svelte';
	import AboutSection from '../component/Home/AboutSection.svelte';
	import TestimonialSection from '../component/Home/TestimonialSection.svelte'
	import BlogSection from '../component/Home/BlogSection.svelte';
	import ProjectSection from '../component/Home/ProjectSection.svelte';
	import Loading from '../component/Loading/Loading.svelte';
	import { homeData } from '../stores/stores';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import DataFetcher from '../component/Sanity/DataFetcher.svelte';
	// import SloganAnimation from '../component/Home/SloganAnimation.svelte';

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

	const slogans = [
		"I use data to tell stories you'll remember.",
		"I use data to build solutions you can rely on.",
		'I leverage data to grow your business.'
	];

	$: color = onFirstVisit();

	const getLatestPost = `
	  *[_type == 'post']
	  | order(_createdAt desc)[0] {
		  title, "slug":slug.current, "imageUrl":mainImage.image.asset._ref, "imageCaption":mainImage.caption, "imageAlt":mainImage.alt, feature, tags, content
	  }
	`;

	// Function to receive data from DataFetcher component
	function handleData(data) {
		$homeData = data;
	}
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
		content="I create data dashboards to help grow your business."
	/>
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:locale" content="en_GB" />
</svelte:head>

<svelte:window bind:innerWidth={screenwidth} />

<DataFetcher query={getLatestPost} onData={handleData} store={homeData} />

<section class="flex flex-col md:flex-row">
	<div
		class="relative flex flex-col justify-center items-center w-full xs:w-11/12 xs:translate-x-7 sm:w-3/4 sm:translate-x-20 md:w-1/2 md:-translate-x-5"
		bind:clientWidth={width}
	>
		{#if width > 0}
			{#if screenwidth < 768}
				<div class="">
					<p
						class="text-{color.name === 'yellow'
							? '[#b7791f]'
							: color.name + '-600'} dark:md:text-sky-300 font-medium font-customHeading"
					>
						<MovingLetters text={'Data Developer'} />
					</p>
					<br />
					<p class="w-full xs:w-76 h-7">
						<AnimatedElement {slogans} delay={1800}/>
					</p>
				</div>
				{#if screenwidth >= 640}
					<DynamicButtons {color} {additionalClass} />
				{/if}
			{/if}

			<RadarwithAvatar {width} {color} {bool} />
		{:else}
			<div class="h-screen" />
		{/if}
	</div>

	<div
		class="flex flex-col items-center justify-center space-y-4 md:p-8 w-full md:w-1/2"
		bind:clientWidth={width}
	>
		{#if width > 0}
			{#if screenwidth >= 768}
				<div class="translate-y-0 xs:-translate-y-1/2">
					<p
						class="text-{color.name === 'yellow'
							? '[#b7791f]'
							: color.name + '-600'} dark:md:text-sky-300 font-medium font-customHeading"
					>
						<MovingLetters text={'Data Developer'} />
					</p>
					<br />
					<div class="w-76 h-7">
						<AnimatedElement {slogans} delay={1800}/>
					</div>
				</div>
				{#if screenwidth >= 1024}
					<DynamicButtons {color} {additionalClass} />
				{/if}
			{/if}
		{:else}
			<div class="h-screen" />
		{/if}
	</div>
</section>
{#if width > 0}
	{#if screenwidth >= 768 && screenwidth < 1024}
		<DynamicButtons {color} {additionalClass} />
	{/if}
	<AboutSection />
	<SkillsSection />
	<TestimonialSection {screenwidth} />
	{#if Object.keys($homeData).length == 0}
		<Loading />
	{:else if Object.keys($homeData).length > 0}
		<BlogSection latestPost={$homeData} />
	{/if}

	<ProjectSection />
{:else}
	<div class="h-screen" />
{/if}
