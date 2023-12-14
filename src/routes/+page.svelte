<script lang="ts">
	import RadarChart from '../component/RadarChart/RadarChart.svelte';
	import ProjectIcon from '../component/Icons/Projects.svelte';
	import ExperienceIcon from '../component/Icons/Experience.svelte';
	import BlogIcon from '../component/Icons/Blog.svelte';
	import Avatar from '../component/Avatar/Avatar.svelte';
	import AvatarHover from '../component/Avatar/AvatarHover.svelte';
	import { userHasNavigated } from '../stores/stores';

	let width: number = 0;

	$: bool = true;

	$: icons = [
		{ name: 'Experience', icon: ExperienceIcon, slug: '/cv' },
		{ name: 'Projects', icon: ProjectIcon, slug: '/portfolio' },
		{ name: 'Blog', icon: BlogIcon, slug: '/blog' }
	];

	function generateButtonCss(name, color) {
		const isProject = name === 'Projects';

		if (isProject) {
			return `flex flex-row gap-x-3 items-center text-black bg-gradient-to-r hover:bg-gradient-to-br hover:ring-1 font-medium rounded-lg text-base px-5 py-2 text-center me-4 mb-2 from-white via-${color.name}-50 to-white border border-${color.name}-600`;
		} else {
			return `flex flex-row gap-x-3 items-center text-white bg-gradient-to-r hover:bg-gradient-to-br hover:ring-1 font-medium rounded-lg text-base px-5 py-2 text-center me-4 mb-2 from-${color.name}-500 via-${color.name}-600 to-${color.name}-700 border border-${color.name}-600`;
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

	// const text = [
	// 	{ name: 'BI developer.', image: 'HK_thumbnail.png', alt: "Harry's profile picture" },
	// 	{ name: 'nerd?', image: 'HK_Naruto.png', alt: 'Harry as a cartoon' },
	// 	{ name: 'musician?', image: 'HK_Music.jpg', alt: 'Harry creating music' },
	// 	{ name: 'enough?', image: 'HK_Ken.png', alt: 'Am I Kenough?' }
	// ];
	// let counter: number = 0;
	// let cycles: number = 0;
	// const maxCycles: number = 1;
	// let interval: number | undefined = undefined;

	// function changeText() {
	// 	counter = (counter + 1) % text.length;
	// 	if (counter === 0) {
	// 		cycles++;
	// 		if (cycles === maxCycles) {
	// 			firstVisit.set('false');
	// 			clearInterval(interval);
	// 		}
	// 	}
	// }

	// // Computed property to determine the interval based on conditions
	// $: {
	// 	clearInterval(interval); // Clear any existing interval

	// 	if (counter === 0 && cycles === 0) {
	// 		interval = setInterval(changeText, 2150);
	// 	} else if (counter === text.length - 1 && cycles === 0) {
	// 		interval = setInterval(changeText, 2500);
	// 	} else if (counter === text.length - 2 && cycles === 0) {
	// 		interval = setInterval(changeText, 1900);
	// 	} else if (counter !== 0 && cycles === 0) {
	// 		interval = setInterval(changeText, 1450);
	// 	}
	// }

	// $: textStyle =
	// 	counter === 0 || cycles === maxCycles
	// 		? 'text-indigo-600 font-medium'
	// 		: 'text-orange-600 font-medium';

	// $: def = counter === text.length - 1 ? 'I am ' : "Hi, I'm a ";

	// $: k = counter === text.length - 1 ? '𝓚' : '';
</script>

<svelte:head>
	<title>Harry Kelleher</title>
</svelte:head>

<!-- {#if $firstVisit === 'true'}
	<section class="flex flex-col items-center font-normal px-4 py-2 text-lg w-full">
		<p>
			{def}<span class="text-3xl text-pink-600 font-medium">{k}</span><span
				id="changeText"
				class={textStyle}>{text[counter].name}</span
			>
		</p>
		{#if cycles != 1}
			<div class="py-8">
				<Image
					src={text[counter].image}
					alt={text[counter].alt}
					width="400"
					height="400"
					style="border-radius: 50%"
				/>
			</div>
		{/if}
	</section>
{:else} -->
<section class="flex flex-col-reverse md:flex-row">
	<div
		class="relative flex flex-col justify-center items-center w-full xs:w-11/12 xs:translate-x-7 sm:w-3/4 sm:translate-x-20 md:w-1/2 md:translate-x-0"
		bind:clientWidth={width}
	>
		{#if width > 0}
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
				{#if bool}
					<Avatar />
				{:else}
					<AvatarHover />
				{/if}
			</div>
		{/if}
	</div>

	<div
		class="flex flex-col items-center justify-center space-y-4 md:p-8 w-full md:w-1/2"
		bind:clientWidth={width}
	>
		{#if width > 0}<div class="-translate-y-1/2">
				<p>
					I'm a <span
						class="text-{color.name === 'yellow' ? '[#b7791f]' : color.name + '-600'} font-medium"
						>Data Visualisation Lead.</span
					>
				</p>
				<br />
				<p>I create data products to help grow your business.</p>
			</div>
			<div class="flex flex-row">
				{#each icons as { name, icon, slug }}
					<a href={slug}
						><div class={generateButtonCss(name, color)}>
							<svelte:component this={icon} />{name}
						</div></a
					>
				{/each}
			</div>{/if}
	</div>
</section>
<section class="flex items-center" />
