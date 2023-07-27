<script lang="ts">
	let width = 0;

	$: height = 1600;

	$: url = `https://public.tableau.com/views/NHSDigitalServices/CitizenHealth-NHSAppServices?:language=en-US&:showVizHome=no&:embed=y&:device=desktop&:origin:viz_share_link&:size=${width},1&:apiID=host0#navType=0&navSrc=Parse`;

	//$: src = width < 1000 ? url.replace(/device=desktop/g, "device=mobile") : width < 600 ? url.replace(/device=desktop/g, "device=tablet") : url

	function deviceTypeModifer(width: number, url: string) {
		if (width < 802) {
			return url.replace(/device=desktop/g, 'device=mobile');
		} else if (width < 1200) {
			return url.replace(/device=desktop/g, 'device=tablet');
		} else {
			return url;
		}
	}
</script>

<svelte:head>
	<title>Digital Services | Harry Kelleher</title>
</svelte:head>

<section
	bind:clientWidth={width}
	class="flex flex-col items-center font-normal px-4 text-sm w-full"
>
	<!-- <p>Width of screen is: {width} pixels.</p> -->

	<iframe title="digital-services" src={deviceTypeModifer(width, url)} {height} {width} />
	
</section>
