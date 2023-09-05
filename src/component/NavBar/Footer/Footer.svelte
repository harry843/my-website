<script lang="ts">
	import LinkedIn from './icons/LinkedIn.svelte';
	import Email from './icons/Email.svelte';
	import GitHub from './icons/GitHub.svelte';
	import Tableau from './icons/Tableau.svelte';

	const contactInfo = [
		{
			name: 'linkedin',
			contact: 'LinkedIn',
			link: 'https://www.linkedin.com/in/harry-kelleher/',
			icon: LinkedIn
		},
		{
			name: 'tableau',
			contact: 'Tableau',
			link: 'https://public.tableau.com/app/profile/harry.kelleher',
			icon: Tableau
		},
		{ name: 'github', contact: 'GitHub', link: 'https://github.com/harry843', icon: GitHub },
		{ name: 'email', contact: 'Email', link: 'mailto:kelleherharry@gmail.com', icon: Email }
	];
</script>

<footer class="fa">
	{#each contactInfo as { name, link, icon }}
		<div class="fa-{name}">
			<a href={link} target="_blank" rel="noopener noreferrer"><svelte:component this={icon} /></a>
		</div>
	{/each}
</footer>
