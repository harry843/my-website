<script lang="ts">
	import RadarwithAvatar from '../component/Home/RadarwithAvatar.svelte';
	import DynamicButtons from '../component/Home/DynamicButtons.svelte';
	import Star from '../component/Icons/Star.svelte';
	import { userHasNavigated } from '../stores/stores';

	let width: number = 0;
	let screenwidth: number = 0;

	$: bool = true;
	$: additionalClass = screenwidth >= 1024 ? 'lg:translate-x-8' : screenwidth < 768 ? 'pt-10' : '';

	function onFirstVisit() {
		if ($userHasNavigated) {
			return colors[Math.floor(Math.random() * colors.length)];
		} else {
			return { name: 'indigo', hex: '#6366f1' };
		}
	}

	$: colors = [
		{ name: 'rose', hex: '#f43f5e' },
		{ name: 'yellow', hex: '#eab308' },
		//{ name: 'indigo', hex: '#6366f1' },
		{ name: 'teal', hex: '#14b8a6' }
	];

	$: skills = [
		{ name: 'Python', value: 4, score: 'Advanced' },
		{ name: 'SQL', value: 3, score: 'Intermediate' },
		{ name: 'Svelte', value: 3, score: 'Intermediate' },
		{ name: 'Javascript', value: 2, score: 'Capable' }
	];

	$: languages = [
		{ name: 'English (native)', value: 5, score: 'Expert' },
		{ name: 'Spanish (B2)', value: 3, score: 'Intermediate' },
		{ name: 'French (un petit peu)', value: 1, score: 'Beginner' },
		{ name: "Italian (un po')", value: 1, score: 'Expert' }
	];

	$: software = [
		{ name: 'Tableau', value: 5, score: 'Expert' },
		{ name: 'GitHub', value: 4, score: 'Advanced' },
		{ name: 'AWS', value: 3, score: 'Intermediate' },
		{ name: 'Jira / Confluence', value: 3, score: 'Intermediate' }
	];

	function generateStars(numberOfStars) {
		const stars = [];

		for (let i = 0; i < 5; i++) {
			if (i < numberOfStars) {
				stars.push(i === 4 && i >= numberOfStars ? 'text-gray-300' : 'text-yellow-400');
			} else {
				stars.push('text-gray-300');
			}
		}
		return stars;
	}

	$: color = onFirstVisit();
</script>

<svelte:head>
	<title>Harry Kelleher</title>
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
							class="text-{color.name === 'yellow' ? '[#b7791f]' : color.name + '-600'} font-medium"
							>Data Visualisation Lead.</span
						>
					</p>
					<br />
					<p>I create data products to help grow your business.</p>
				</div>
				{#if screenwidth >= 640}
					<DynamicButtons {color} {additionalClass} />
				{/if}
			{/if}

			<RadarwithAvatar {width} {color} {bool} />
		{/if}
	</div>

	<div
		class="flex flex-col items-center justify-center space-y-4 xs:py-6 md:p-8 w-full md:w-1/2"
		bind:clientWidth={width}
	>
		{#if width > 0}
			{#if screenwidth >= 768}
				<div class="translate-y-0 xs:-translate-y-1/2">
					<p>
						I'm a <span
							class="text-{color.name === 'yellow' ? '[#b7791f]' : color.name + '-600'} font-medium"
							>Data Visualisation Lead.</span
						>
					</p>
					<br />
					<p>I create data products to help grow your business.</p>
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
{/if}

<section class="flex flex-row justify-around">
	<div class="flex flex-col">
		<h3 class="text-xl font-customHeading font-semibold mb-2">Skills</h3>
		{#each skills as { name, value, score }}
			<div
				class="group flex justify-between py-0.5 gap-x-1 hover:font-medium hover:text-black hover:delay-75"
			>
				<h1>{name}</h1>
				<div
					data-tooltip-target="tooltip-default"
					class="flex items-center transition duration-150 hover:scale-105 hover:text-black"
				>
					{#each generateStars(value) as starClass}
						<Star {starClass} />
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<div>
		<h3 class="text-xl font-customHeading font-semibold mb-2">Software</h3>
		{#each software as { name, value, score }}
			<div
				class="group flex justify-between py-0.5 gap-x-1 hover:font-medium hover:text-black hover:delay-75"
			>
				<h1>{name}</h1>
				<div
					data-tooltip-target="tooltip-default"
					class="flex items-center transition duration-150 hover:scale-105 hover:text-black"
				>
					{#each generateStars(value) as starClass}
						<Star {starClass} />
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<div>
		<h3 class="text-xl font-customHeading font-semibold mb-2">Languages</h3>
		{#each languages as { name, value, score }}
			<div
				class="group flex justify-between py-0.5 gap-x-1 hover:font-medium hover:text-black hover:delay-75"
			>
				<h1>{name}</h1>
				<div
					data-tooltip-target="tooltip-default"
					class="flex items-center transition duration-150 hover:scale-105 hover:text-black"
				>
					{#each generateStars(value) as starClass}
						<Star {starClass} />
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
