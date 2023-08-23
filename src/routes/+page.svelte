<script lang="ts">
	let width;
	const text = [
		{name:'BI developer.', image:'HK_thumbnail.png'},
		{name:'nerd?', image:'HK_Naruto.png'},
		{name:'musician?', image:'HK_Music.jpg'},
		{name:'enough?', image:'HK_Ken.png'}
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

	$: def = cycles === maxCycles ? "Well, I'm definitely a " : counter === text.length - 1 ? "I am " : "Hi, I'm a ";

	$: k = counter === text.length - 1 ? '𝓚' : '';
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
		<img src={text[counter].image} alt="Harry as Ken" width="400" height="400" style="border-radius: 50%" />
	</div>

</section>
