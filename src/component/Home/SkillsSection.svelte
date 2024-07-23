<script>
	import Star from '../Icons/Star.svelte';

	$: technical = [
		{ name: 'Python', value: 4, score: 'Advanced' },
		{ name: 'SQL', value: 4, score: 'Advanced' },
		{ name: 'R', value: 2, score: 'Capable' },
		{ name: 'Typescript', value: 3, score: 'Competent' },
		{ name: 'Svelte', value: 3, score: 'Competent' },
		{ name: 'React', value: 2, score: 'Capable' },
		{ name: 'HTML/5', value: 3, score: 'Competent' },
		{ name: 'CSS/3', value: 2, score: 'Capable' },
		{ name: 'Tailwind 3.x', value: 4, score: 'Advanced' }
	];

	$: people = [
		{ name: 'Leadership', value: 4, score: 'Advanced' },
		{ name: 'People management', value: 4, score: 'Advanced' },
		{ name: 'Upskilling capability', value: 4, score: 'Advanced' },
		{ name: 'Technical consulting', value: 4, score: 'Advanced' },
		{ name: 'Project management', value: 3, score: 'Competent' }
	];

	$: software = [
		{ name: 'Tableau', value: 5, score: 'Expert' },
		{ name: 'GitHub / GitLab', value: 4, score: 'Advanced' },
		{ name: 'Scrum / Agile', value: 4, score: 'Advanced' },
		{ name: 'AWS', value: 3, score: 'Competent' },
		{ name: 'Azure Data Factory', value: 3, score: 'Competent' },
		{ name: 'Jira / Confluence', value: 4, score: 'Advanced' },
		{ name: 'Visual Studio', value: 4, score: 'Advanced' },
		{ name: 'Google Analytics', value: 3, score: 'Competent' },
		{ name: 'Excel', value: 4, score: 'Advanced' },

	];

	$: languages = [
		{ name: 'English (native)', value: 5, score: 'Expert' },
		{ name: 'Spanish (B2)', value: 3, score: 'Competent' },
		{ name: 'French (survivable)', value: 2, score: 'Capable' },
		{ name: "Italian (un po')", value: 1, score: 'Beginner' }
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
		<h2
			class="inline-block bg-yellow-400 dark:text-gray-900 py-2 px-4 md:-ml-4 mb-2 rounded-sm text-lg font-bold font-customHeading uppercase"
		>
			Skills
		</h2>
	</div>
	<div class="md:col-start-2 md:col-span-4">
		<p class="ml-px font-customQuote xl:text-lg 2xl:text-xl">Here's a taste of what makes me unique.</p>
	</div>
</div>

<section class="px-1 pt-2 min-[370px]:px-5 sm:px-0 sm:flex sm:flex-row sm:justify-around pb-10">
	<div
		class="flex flex-col sm:grid sm:grid-rows-[320px_200px] sm:grid-flow-col sm:gap-x-[4rem] md:grid-rows-[320px_180px] md:gap-x-[5rem] lg:gap-x-[10rem]"
	>
		{#each [{ name: 'Technical', skill: technical }, { name: 'People', skill: people }, { name: 'Software', skill: software }, { name: 'Languages', skill: languages }] as skills}
			<div class="py-4">
				<h3 class="text-xl font-customHeading font-semibold mb-2">{skills.name}</h3>

				{#each skills.skill as { name, value, score }}
					<div
						class="grid grid-cols-2 gap-x-3 xs:gap-x-5 sm:flex sm:justify-between py-0.5 sm:gap-x-1 md:gap-x-10 hover:font-medium hover:text-black dark:hover:text-white hover:delay-75"
					>
						<h1>{name}</h1>
						<button
							data-tooltip-target="tooltip-default"
							class="flex items-center transition duration-150 hover:scale-105 hover:text-black"
						>
							{#each generateStars(value) as starClass}
								<Star {starClass} />
							{/each}
							<div
								id="tooltip-default"
								role="tooltip"
								class="absolute z-10 w-[100px] px-1 sm:px-3 py-1.5 text-sm font-medium text-indigo-700 dark:text-gray-900 transition-opacity hover:opacity-100 delay-200 duration-300 bg-indigo-50 rounded-md shadow-sm opacity-0 flex items-center justify-center dark:bg-sky-300"
							>
								{score}
							</div>
						</button>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</section>
