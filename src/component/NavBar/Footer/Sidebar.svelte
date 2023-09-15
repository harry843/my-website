<script lang="ts">
	import LinkedIn from './icons/LinkedIn.svelte';
	import Email from './icons/Email.svelte';
	import GitHub from './icons/GitHub.svelte';
	import Tableau from './icons/Tableau.svelte';
	import classNames from 'classnames';

	const contactInfo = [
		{
			name: 'linkedin',
			contact: 'LinkedIn',
			link: 'https://www.linkedin.com/in/harry-kelleher/',
			icon: LinkedIn,
			className: 'pl-[2.25rem] pr-[2rem] grayscale hover:grayscale-0'
		},
		{
			name: 'tableau',
			contact: 'Tableau',
			link: 'https://public.tableau.com/app/profile/harry.kelleher',
			icon: Tableau,
			className: 'pl-[2.25rem] pr-[2rem] pb-[0.6rem] grayscale hover:grayscale-0',
		},
		{ name: 'github', contact: 'GitHub', link: 'https://github.com/harry843', icon: GitHub, className: 'pl-[2.15rem] pr-[1.85rem] pb-[0.25rem] hover:fill-gray-700'},
		{ name: 'email', contact: 'Email', link: 'mailto:kelleherharry@gmail.com', icon: Email, className: 'pl-[2.05rem] pr-[1.85rem] hover:fill-red-600' }
	];
</script>

<div class="fixed flex right-8 flex-col items-center pt-6 self-start gap-8 top-1/2 w-0 transform -translate-y-3/4 -translate-x-1/4 lg:translate-x-3/4 z-10 bg-red-500">
	{#each contactInfo as { link, className, icon }}
		<div class={classNames("no-underline rounded-full", className)} >
			<a href={link} target="_blank" rel="noopener noreferrer"><svelte:component this={icon} /></a>
		</div>
	{/each}
	</div >

