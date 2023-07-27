<script>
	import { each } from 'svelte/internal';

	let width;
	const projects = [
		{
			title: 'Habit Tracker',
			description: "Weekly tracker of eight habits I've commited to in 2023, each connected to a broader goal I want to achieve.",
			image: 'habit-tracker.png',
			url: '/portfolio/habit-tracker',
			isExternal: true,
			skills: ['Tableau', 'Data Viz']
		},
		{
			title: 'Patient Flow',
			description:
				'Sankey diagram showing patient flow through different NHS services following an NHS 111 call.',
			image: 'sankey.png',
			url: '/portfolio/sankey',
			isExternal: false,
			skills: ['d3.js', 'Svelte']
		},
		{
			title: 'COVID-19 Vaccine Trials',
			description: "Dashboard showing the number of people signed up for the COVID-19 vaccine studies volunteer service across the UK.",
			image: 'covid-vaccine-volunteers.png',
			url: '/portfolio/covid-vaccine',
			isExternal: false,
			skills: ['Tableau', 'Data Viz']
		},
		{
			title: 'NHS Digital Services',
			description: "Uptake of digital products and services produced by the NHS for public consumption.",
			image: 'digital-services.png',
			url: '/portfolio/digital-services',
			isExternal: false,
			skills: ['Tableau', 'Data Viz']
		}
	];
</script>

<svelte:head>
	<title>Portfolio | Harry Kelleher</title>
</svelte:head>

<section bind:clientWidth={width} class="flex flex-col px-4 text-sm w-full space-y-4">
	<h1 class="font-medium text-2xl">Projects</h1>
	<section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-4 ">
		{#each projects as project}
			<a
				href={project.url}
				target={project.isExternal ? '_blank' : null}
				rel="noreferrer"
				class="border rounded-sm shadow-sm hover:shadow-md"
			>
				<div class="border-b flex items-center">
					<img src={`/${project.image}`} alt={project.title} />
				</div>
				<div class="p-4 space-y-2">
					<div class="flex justify-between items-center">
						<h1 class="font-medium text-base">{project.title}</h1>
						<div class="flex gap-x-2">
							{#each project.skills as skill}
								<span class="rounded-full px-4 py-1 bg-indigo-600 text-white text-xs">{skill}</span>
							{/each}
						</div>
					</div>
					<div class="flex justify-between">
						<h2>{project.description}</h2>
					</div>
				</div>
			</a>
		{/each}
	</section>
</section>

