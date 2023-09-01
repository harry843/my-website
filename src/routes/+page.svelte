<script lang="ts">
	import RadarChart from '../component/RadarChart/RadarChart.svelte';
	import { first_visit } from '../stores/home';

	let width: number = 0;

	const text = [
		{ name: 'BI developer.', image: 'HK_thumbnail.png', alt: "Harry's profile picture" },
		{ name: 'nerd?', image: 'HK_Naruto.png', alt: 'Harry as a cartoon' },
		{ name: 'musician?', image: 'HK_Music.jpg', alt: 'Harry creating music' },
		{ name: 'enough?', image: 'HK_Ken.png', alt: 'Am I Kenough?' }
	];
	let counter: number = 0;
	let cycles: number = 0;
	const maxCycles: number = 1;
	let interval: number | undefined = undefined;

	function changeText() {
		counter = (counter + 1) % text.length;
		if (counter === 0) {
			cycles++;
			if (cycles === maxCycles) {
				first_visit.set('false');
				clearInterval(interval);
				console.log(first_visit);
			}
		}
	}

	// Computed property to determine the interval based on conditions
	$: {
		clearInterval(interval); // Clear any existing interval

		if (counter === 0 && cycles === 0) {
			interval = setInterval(changeText, 2150);
		} else if (counter === text.length - 1 && cycles === 0) {
			interval = setInterval(changeText, 2500);
		} else if (counter === text.length - 2 && cycles === 0) {
			interval = setInterval(changeText, 1900);
		} else if (counter !== 0 && cycles === 0) {
			interval = setInterval(changeText, 1450);
		}
	}

	$: textStyle =
		counter === 0 || cycles === maxCycles
			? 'text-indigo-600 font-medium'
			: 'text-orange-600 font-medium';

	$: def = counter === text.length - 1 ? 'I am ' : "Hi, I'm a ";

	$: k = counter === text.length - 1 ? '𝓚' : '';
</script>

<svelte:head>
	<title>Harry Kelleher</title>
</svelte:head>

<section class="flex flex-col items-center font-normal px-4 py-2 text-lg w-full">

	{#if $first_visit === 'true'}
		<p>
			{def}<span class="text-3xl text-pink-600 font-medium">{k}</span><span
				id="changeText"
				class={textStyle}>{text[counter].name}</span
			>
		</p>
		{#if cycles === 1}
			<p class="pt-4">I build dashboards to help grow your business.</p>
		{/if}

		{#if cycles != 1}
			<div class="py-8">
				<img
					src={text[counter].image}
					alt={text[counter].alt}
					width="400"
					height="400"
					style="border-radius: 50%"
				/>
			</div>
		{/if}
	{/if}
</section>
<section bind:clientWidth={width} class="flex flex-col items-center border-gray-100">
	{#if width > 0 && $first_visit === 'false'}
		<p>
			I'm a <span class=" text-indigo-600 font-medium"
				>Data Visualisation Developer.</span
			>
		</p>

		<p class="pt-4">I create data products to help grow your business.</p>

		<RadarChart {width} />
	{/if}
</section>
