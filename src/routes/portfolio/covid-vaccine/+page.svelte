<script>
	let width = 0;

	const height = 2850;

	$: src = `https://public.tableau.com/views/VolunteersforCovidVaccineTrials/Coronavirus_Vaccine_Studies_Volunteers_Open_Data?:language=en-US&:showVizHome=no&:embed=y&:device=desktop&:origin:viz_share_link&:size=${width},1&:apiID=host0#navType=0&navSrc=Parse`;

</script>

<svelte:head>
	<title>COVID-19 Vaccine Trials | Harry Kelleher</title>
</svelte:head>

<section bind:clientWidth={width} class="flex items-center font-normal px-4 text-sm w-full">
	<iframe title="covid-vaccine-trials" {src} {height} {width} />
</section>
