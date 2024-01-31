<script>
	let width = 0;
	// let innerWidth = 0;

	$: height = width >= 1000 ? 830 : 1830;

	$: url = `https://public.tableau.com/views/HabitTracker_16751705386590/HabitTracker?:language=en-US&:showVizHome=no&:embed=y&:device=desktop&:origin:viz_share_link&:size=${width},1&:apiID=host0#navType=0&navSrc=Parse`;

	$: src = width < 1000 ? url.replace(/device=desktop/g, 'device=mobile') : url;
</script>

<svelte:head>
	<!-- Clarity tag -->
	<!-- <script type="text/javascript">
		(function(c,l,a,r,i,t,y){
			c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
			t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
			y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
		})(window, document, "clarity", "script", "krsxfgbemy");
	</script> -->
	<title>Habit Tracker | Harry Kelleher</title>
</svelte:head>

<!-- <svelte:window bind:innerWidth={innerWidth} /> -->

<section
	bind:clientWidth={width}
	class="flex flex-col items-center font-normal px-4 text-sm w-full"
>
	<!-- <p>Total width of screen is: {innerWidth} pixels.</p>
	<p>Width of screen is: {width} pixels.</p> -->

	<iframe title="habit-tracker" {src} {width} {height} />
</section>
