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
			className: 'grayscale hover:grayscale-0'
		},
		{
			name: 'tableau',
			contact: 'Tableau',
			link: 'https://public.tableau.com/app/profile/harry.kelleher',
			icon: Tableau,
			className: 'grayscale hover:grayscale-0'
		},
		{
			name: 'github',
			contact: 'GitHub',
			link: 'https://github.com/harry843',
			icon: GitHub,
			className: 'hover:fill-gray-700'
		},
		{
			name: 'email',
			contact: 'Email',
			link: 'mailto:kelleherharry@gmail.com',
			icon: Email,
			className: 'hover:fill-red-600'
		}
	];
</script>

<div class="flex justify-center">
	<div
		class="fixed flex justify-center md:right-7 md:flex-col items-center gap-6 md:gap-9 bottom-0 -translate-y-2 md:bottom-1/2 transform md:translate-y-1/2 z-10"
	>
		{#each contactInfo as { link, className, icon }}
			<div class={classNames('no-underline rounded-full', className)}>
				<a href={link} target="_blank" rel="noopener noreferrer"><svelte:component this={icon} /></a
				>
			</div>
		{/each}
	</div>
</div>
