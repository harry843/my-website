<script lang="ts">
	import ProjectIcon from '../Icons/Projects.svelte';
	import ExperienceIcon from '../Icons/Experience.svelte';
	import BlogIcon from '../Icons/Blog.svelte';

    export let color: {name: string, hex: string};
	export let additionalClass: string;

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
	
</script>

<div class="flex flex-row justify-center {additionalClass}">
	{#each icons as { name, icon, slug }}
		<a href={slug}
			><div class={generateButtonCss(name, color)}>
				<svelte:component this={icon} />{name}
			</div></a
		>
	{/each}
</div>