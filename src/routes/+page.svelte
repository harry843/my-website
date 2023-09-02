<script lang="ts">
	import RadarChart from '../component/RadarChart/RadarChart.svelte';
	import RadarChartGrid from '../component/RadarChart/RadarChartGrid/RadarChartGrid.svelte';
	import RadarChartLabels from '../component/RadarChart/RadarChartLabels/RadarChartLabels.svelte';
	import RadarChartPaths from '../component/RadarChart/RadarChartPaths/RadarChartPaths.svelte';
	import { getTraitCoords } from '../component/RadarChart/utils/utils';

	let width: number = 0;
	const domainArray: [number, number] = [0, 10];
	$: rangeArray = [0, width / 2 - 80]

	const traits = [
		{ name: 'Data Viz', score: 10 },
		{ name: 'Leadership', score: 8 },
		{ name: 'Storytelling', score: 7 },
		{ name: 'Project Management', score: 7 },
		{ name: 'Data Pipelines', score: 8 },
		{ name: 'Coding', score: 8 }
	];
	const nVertices = traits.length;

	const colors = [
		{ name: 'rose', hex: '#f43f5e' },
		{ name: 'yellow', hex: '#eab308' },
		{ name: 'indigo', hex: '#6366f1' },
		{ name: 'teal', hex: '#14b8a6' }
	];

	$: color = colors[Math.floor(Math.random() * colors.length)];

	$: pathCoords = getTraitCoords(traits, width, nVertices, domainArray, rangeArray);
</script>

<svelte:head>
	<title>Harry Kelleher</title>
</svelte:head>

<section class="border" bind:clientWidth={width}>
	{#if width > 0}
		<svg {width} height={width} class="border border-red-500">
			<defs>
				<radialGradient id="myGradient">
					<stop offset="20%" stop-color={color.hex} stop-opacity={0} />
					<stop offset="95%" stop-color={color.hex} stop-opacity={0.4} />
				</radialGradient>
			</defs>
			<RadarChartGrid radarDim={width} {nVertices} {domainArray} {rangeArray} />
			<RadarChartPaths {pathCoords} color={color.name} />
			<RadarChartLabels {traits} radarDim={width} {nVertices} {domainArray} {rangeArray} /> -->
		</svg>
		<svg {width} height={width}><rect class="fill-red-500" width="100%" height="100%" /></svg>
	{/if}
	{JSON.stringify(rangeArray)}
</section>
