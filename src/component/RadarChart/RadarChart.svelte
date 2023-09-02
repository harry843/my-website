<script lang="ts">
	import { onDestroy } from 'svelte';
	import RadarChartGrid from './RadarChartGrid/RadarChartGrid.svelte';
	import RadarChartLabels from './RadarChartLabels/RadarChartLabels.svelte';
	import RadarChartPaths from './RadarChartPaths/RadarChartPaths.svelte';
	import { getTraitCoords } from './utils/utils';

	export let width: number;
	const domainArray: [number, number] = [0, 10];

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

	$: rangeArray = [0, width / 2 - 80];
	$: color = colors[Math.floor(Math.random() * colors.length)];
	$: pathCoords = getTraitCoords(traits, width, nVertices, domainArray, rangeArray);
</script>

<svg {width} height={width}>
	<defs>
		<radialGradient id="myGradient">
			<stop offset="20%" stop-color={color.hex} stop-opacity={0} />
			<stop offset="95%" stop-color={color.hex} stop-opacity={0.4} />
		</radialGradient>
	</defs>
	<RadarChartGrid radarDim={width} {nVertices} {domainArray} {rangeArray} />
	<RadarChartPaths {pathCoords} color={color.name} />
	<RadarChartLabels {traits} radarDim={width} {nVertices} {domainArray} {rangeArray} />
</svg>
