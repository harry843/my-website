<script lang="ts">
	import Image from '../../component/Image/Image.svelte';

	let width;

	$: projects = [
		{
			title: 'Habit Tracker',
			description:
				"Weekly tracker of eight habits I've commited to in 2023, each connected to a broader goal I want to achieve.",
			image: 'habit-tracker.png',
			url: '/portfolio/habit-tracker',
			isExternal: false,
			skills: ['Tableau', 'Data Viz'],
			loaded: false
		},
		{
			title: 'Patient Flow',
			description:
				'Sankey diagram showing patient flow through different NHS services following an NHS 111 call.',
			image: 'sankey.png',
			url: '/portfolio/sankey',
			isExternal: false,
			skills: ['D3.js', 'Svelte'],
			loaded: false
		},
		{
			title: 'Covid Vaccine Trials',
			description:
				'Dashboard showing the number of people signed up for the COVID-19 vaccine studies volunteer service across the UK.',
			image: 'covid-vaccine-volunteers.png',
			url: '/portfolio/covid-vaccine',
			isExternal: false,
			skills: ['Tableau', 'Data Viz'],
			loaded: false
		},
		{
			title: 'NHS Digital Services',
			description:
				'Uptake of digital products and services produced by the NHS for public consumption.',
			image: 'digital-services.png',
			url: '/portfolio/digital-services',
			isExternal: false,
			skills: ['Tableau', 'Data Viz'],
			loaded: false
		},
		{
			title: 'Add your Dog App',
			description:
				'A React app with the four key operations an application should perform – Create, Read, Update, and Delete',
			image: 'dog-crud-app.png',
			url: 'https://dog-crud-application.vercel.app/',
			isExternal: true,
			skills: ['React', 'Next.js'],
			loaded: false
		}
	];
</script>

<svelte:head>
	<!-- Google tag (gtag.js) --> 
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-28Y41L6BQN"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-28Y41L6BQN');
	</script>
	<!-- Clarity tag -->
	<script type="text/javascript">
		(function(c,l,a,r,i,t,y){
			c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
			t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
			y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
		})(window, document, "clarity", "script", "krsxfgbemy");
	</script>
	<title>Portfolio | Harry Kelleher</title>
</svelte:head>

<section bind:clientWidth={width} class="flex flex-col px-4 text-sm w-full space-y-4">
	<h1 class="font-semibold text-2xl font-customHeading pb-2">Projects</h1>
	<section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-4">
		{#each projects as project}
			<a
				href={project.url}
				target={project.isExternal ? '_blank' : null}
				rel="noreferrer"
				class="border border-gray-200 dark:border-gray-600 flex flex-col divide-y rounded-lg shadow-sm hover:shadow-lg dark:hover:scale-[1.02] dark:hover:ease-in dark:hover:duration-200 dark:hover:delay-75"
			>
				<Image src={`${project.image}`} alt={project.title} />
				<div class="p-4 space-y-2">
					<div
						class="flex flex-col xs:flex-row md:flex-col lg:flex-row lg:items-center xl:flex-col xl:items-start mxl:flex-row mxl:items-start sm:items-center md:items-start justify-between gap-y-2"
					>
						<h1 class="font-medium text-lg">{project.title}</h1>
						<div class="flex gap-x-2">
							{#each project.skills as skill}
								<span
									class="rounded-md px-4 py-1 font-medium bg-indigo-50 text-indigo-700 dark:bg-sky-300 dark:text-gray-900 text-xs"
									>{skill}</span
								>
							{/each}
						</div>
					</div>
					<div class="flex justify-between text-sm">
						<h2>{project.description}</h2>
					</div>
				</div>
			</a>
		{/each}
	</section>
</section>
