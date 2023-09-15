<script lang="ts">
	import RadarChart from '../component/RadarChart/RadarChart.svelte';
	import { firstVisit } from '../stores/home';

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
				firstVisit.set('false');
				clearInterval(interval);
				console.log(firstVisit);
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

{#if $firstVisit === 'true'}
	<section class="flex flex-col items-center font-normal px-4 py-2 text-lg w-full">
		<p>
			{def}<span class="text-3xl text-pink-600 font-medium">{k}</span><span
				id="changeText"
				class={textStyle}>{text[counter].name}</span
			>
		</p>
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
	</section>
{:else}
	<section class="">
		<div class="flex flex-col md:flex-row-reverse space-y-4 md:p-8 w-full md:w-1/2">
			<p>
				I'm a <span class=" text-indigo-600 font-medium">Data Visualisation Developer.</span>
			</p>
			<p>I create data products to help grow your business.</p>
		</div>
		<div class="w-full md:w-1/2" bind:clientWidth={width}>
			{#if width > 0}
				<RadarChart {width} />
			{/if}
		</div>
	</section>
{/if}
