<script>
	import Star from '../Icons/Star.svelte';

	$: technical = [
		{ name: 'Python', value: 4, score: 'Advanced' },
		{ name: 'SQL', value: 3, score: 'Intermediate' },
		{ name: 'R', value: 2, score: 'Capable' },
		{ name: 'Typescript', value: 2, score: 'Capable' },
		{ name: 'Svelte', value: 3, score: 'Intermediate' },
		{ name: 'React', value: 3, score: 'Intermediate' },
		{ name: 'HTML/5', value: 3, score: 'Intermediate' },
		{ name: 'CSS/3', value: 3, score: 'Intermediate' },
		{ name: 'Tailwind 3.x', value: 2, score: 'Capable' }
	];

	$: people = [
		{ name: 'Leadership', value: 4, score: 'Intermediate' },
		{ name: 'People management', value: 4, score: 'Advanced' },
		{ name: 'Upskilling capability', value: 4, score: 'Advanced' },
		{ name: 'Technical consulting', value: 3, score: 'Intermediate' },
		{ name: 'Project management', value: 4, score: 'Capable' }
	];

	$: software = [
		{ name: 'Tableau Desktop', value: 5, score: 'Expert' },
		{ name: 'Tableau Server', value: 5, score: 'Expert' },
		{ name: 'Google Analytics', value: 3, score: 'Intermediate' },
		{ name: 'GitHub / GitLab', value: 4, score: 'Advanced' },
		{ name: 'AWS', value: 3, score: 'Intermediate' },
		{ name: 'Jira / Confluence', value: 3, score: 'Intermediate' },
		{ name: 'Visual Studio', value: 4, score: 'Advanced' },
		{ name: 'Excel', value: 3, score: 'Intermediate' },
		{ name: 'Scrum / Agile', value: 4, score: 'Advanced' }
	];

	$: languages = [
		{ name: 'English (native)', value: 5, score: 'Expert' },
		{ name: 'Spanish (B2)', value: 3, score: 'Intermediate' },
		{ name: 'French (survivable)', value: 2, score: 'Beginner' },
		{ name: "Italian (un po')", value: 1, score: 'Expert' }
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
</script>

<div class="container grid md:grid-cols-6 gap-8 pt-5 md:pt-7 items-center">
	<div class="md:col-start-3 md:col-span-4">
		<h2 class="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-2 rounded-sm text-lg font-bold font-customHeading uppercase">
			Skills
		</h2>
	</div>
	<div class="md:col-start-2 md:col-span-4">
		<p class="ml-px">
			Here is a summary of my most important skills as a Data Visualisation Lead:
		</p>
	</div>
</div>
<div class="mx-6 md:mt-8 w-16 h-0.5 bg-gray-300 md:mx-auto md:relative md:-left-24" />

<section class="px-1 pt-8 min-[370px]:px-5 sm:px-0 sm:flex sm:flex-row sm:justify-around pb-10">
	<div class="flex flex-col">
		<h3 class="text-xl font-customHeading font-semibold mb-2">Technical</h3>
		{#each technical as { name, value, score }}
			<div
				class="group flex justify-between py-0.5 sm:gap-x-1 md:gap-x-10 hover:font-medium hover:text-black hover:delay-75"
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

		<h3 class="text-xl font-customHeading font-semibold pt-5 mb-2">People</h3>
		{#each people as { name, value, score }}
			<div
				class="group flex justify-between py-0.5 sm:gap-x-1 md:gap-x-10 hover:font-medium hover:text-black hover:delay-75"
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
		<h3 class="text-xl font-customHeading pt-5 sm:pt-0 font-semibold mb-2">Software</h3>
		{#each software as { name, value, score }}
			<div
				class="group flex justify-between py-0.5 sm:gap-x-1 md:gap-x-10 hover:font-medium hover:text-black hover:delay-75"
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
		<h3 class="text-xl font-customHeading pt-5 font-semibold mb-2">Languages</h3>
		{#each languages as { name, value, score }}
			<div
				class="group flex justify-between py-0.5 sm:gap-x-1 md:gap-x-10 hover:font-medium hover:text-black hover:delay-75"
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
