<script lang="ts">
	import RadarChart from '../component/RadarChart/RadarChart.svelte';
	import ProjectIcon from '../component/Icons/Projects.svelte';
	import ExperienceIcon from '../component/Icons/Experience.svelte';
	import BlogIcon from '../component/Icons/Blog.svelte';
	import Avatar from '../component/Avatar/Avatar.svelte';
	import AvatarHover from '../component/Avatar/AvatarHover.svelte';
	import { userHasNavigated } from '../stores/stores';

	let width: number = 0;
	let screenwidth: number = 0;

	$: bool = true;

	$: icons = [
		{ name: 'Experience', icon: ExperienceIcon, slug: '/cv' },
		{ name: 'Projects', icon: ProjectIcon, slug: '/portfolio' },
		{ name: 'Blog', icon: BlogIcon, slug: '/blog' }
	];

	function generateButtonCss(name, color) {
		const isProject = name === 'Projects';

		if (isProject) {
			return `flex flex-row gap-x-3 items-center text-black bg-gradient-to-r hover:bg-gradient-to-br hover:ring-1 font-medium rounded-lg text-sm sm:text-base px-2 sm:px-5 py-2 text-center me-4 mb-2 from-white via-${color.name}-50 to-white border border-${color.name}-600`;
		} else {
			return `flex flex-row gap-x-3 items-center text-white bg-gradient-to-r hover:bg-gradient-to-br hover:ring-1 font-medium rounded-lg text-sm sm:text-base px-2 sm:px-5 py-2 text-center me-4 mb-2 from-${color.name}-500 via-${color.name}-600 to-${color.name}-700 border border-${color.name}-600`;
		}
	}

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

	$: color =	onFirstVisit()

</script>

<svelte:head>
	<title>Harry Kelleher</title>
</svelte:head>

<svelte:window bind:innerWidth={screenwidth} />

<section class="flex flex-col md:flex-row">
	<div
		class="relative flex flex-col justify-center items-center w-full xs:w-11/12 xs:translate-x-7 sm:w-3/4 sm:translate-x-20 md:w-1/2 md:translate-x-0"
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
		{#if screenwidth >=640}
		<div class="flex flex-row justify-center pt-10">
			{#each icons as { name, icon, slug }}
				<a href={slug}
					><div class={generateButtonCss(name, color)}>
						<svelte:component this={icon} />{name}
					</div></a
				>
			{/each}
		</div>
		{/if}
		{/if}

			<RadarChart {width} {color} />

			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				on:mouseover={() => {
					bool = false;
				}}
				on:mouseleave={() => {
					bool = true;
				}}
				on:focus={() => (bool = false)}
			>
			<div class="translate-y-1/2 xs:translate-y-1/3 md:translate-y-0">
				{#if bool}
					<Avatar />
				{:else}
					<AvatarHover />
				{/if}
			</div>
			</div>
			
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
			
			{/if}
			{#if screenwidth >= 768}
			<div class="flex flex-row justify-center lg:translate-x-8">
				{#each icons as { name, icon, slug }}
					<a href={slug}
						><div class={generateButtonCss(name, color)}>
							<svelte:component this={icon} />{name}
						</div></a
					>
				{/each}
			</div>
			{/if}
			{/if}
	</div>
</section>
<section class="flex items-center" />
