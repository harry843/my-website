<script>
	let width = 0;

	const height = 2850;

	$: src = `https://public.tableau.com/shared/MQJRSQ5W7?:language=en-US&:showVizHome=no&:embed=y&:device=mobile&:origin:viz_share_link&:size=${width},1&:apiID=host0#navType=0&navSrc=Parse`;

	//$: src = width < 1000 ? url.replace(/device=desktop/g, 'device=mobile') : url;
</script>

<svelte:head>
	<!-- Clarity tag
	<script type="text/javascript">
		(function(c,l,a,r,i,t,y){
			c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
			t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
			y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
		})(window, document, "clarity", "script", "krsxfgbemy");
	</script> -->
	<title>COVID-19 Vaccine Trials | Harry Kelleher</title>
</svelte:head>

<section bind:clientWidth={width} class="flex items-center font-normal px-4 text-sm w-full">
	<iframe title="covid-vaccine-trials" {src} {height} {width} />
</section>
