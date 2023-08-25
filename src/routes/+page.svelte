<script lang="ts">
	import * as d3 from 'd3';

	let width;
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
				clearInterval(interval);
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

	$: def =
		cycles === maxCycles
			? "Well, I'm definitely a "
			: counter === text.length - 1
			? 'I am '
			: "Hi, I'm a ";

	$: k = counter === text.length - 1 ? '𝓚' : '';

	const data = [
		{
			Name: 'Harry',
			'Data Viz': 9,
			Leadership: 16,
			Storytelling: 12,
			'Project Management': 12,
			'Data Pipelines': 18,
			Coding: 15
		}
	];

	let radar;
	let radarWidth = 400;
	let radarHeight = 400;
	let svg = d3.select('#radar').append('svg').attr('width', radarWidth).attr('height', radarHeight);

	let radialScale = d3.scaleLinear().domain([0, 10]).range([0, 250]);
	let ticks = [2, 4, 6, 8, 10];

	svg
		.selectAll('circle')
		.data(ticks)
		.join((enter) =>
			enter
				.append('circle')
				.attr('cx', radarWidth / 2)
				.attr('cy', radarHeight / 2)
				.attr('fill', 'none')
				.attr('stroke', 'gray')
				.attr('r', (d) => radialScale(d))
		);
</script>

<svelte:head>
	<title>Harry Kelleher</title>
</svelte:head>

<section
	bind:clientWidth={width}
	class="container flex flex-col items-center font-normal px-4 py-2 text-lg w-full"
>
	<p>
		{def}<span class="text-3xl text-pink-600 font-medium">{k}</span><span
			id="changeText"
			class={textStyle}>{text[counter].name}</span
		>
	</p>
	{#if cycles === 1}
		<p class="py-4">I build dashboards to help grow your business.</p>
	{/if}

		<div class="py-8">
			<img
				src={text[counter].image}
				alt={text[counter].alt}
				width="400"
				height="400"
				style="border-radius: 50%"
			/>
		</div>

		<div id="radar" class="items-center" bind:this={radar} />

</section>
