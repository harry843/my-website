<script lang="ts">
	import RadarChartGrid from './RadarChartGrid/RadarChartGrid.svelte';
	import RadarChartLabels from './RadarChartLabels/RadarChartLabels.svelte';
	import RadarChartLines from './RadarChartLines/RadarChartLines.svelte';
	import RadarChartPaths from './RadarChartPaths/RadarChartPaths.svelte';
	import { getTraitCoords } from './utils/utils';

	export let width: number;
	export let innerWidth: number;

	let radarDim =
		width > 767
			? 600
			: width == 490
			? innerWidth - 28
			: width > 480
			? width - width / 10
			: width == 320
			? innerWidth - 42
			: width - width / 8;

	const domainArray: [number, number] = [0, 10];
	let rangeArray: [number, number] =
		radarDim === 600 || width > 600
			? [0, radarDim / 2 - 80]
			: width === 490
			? [0, radarDim / 2 - radarDim / 5]
			: width === 320
			? [0, radarDim / 2 - radarDim / 4]
			: [0, radarDim / 2 - width / 5];

	const traits = [
		{ name: 'Data Viz', score: 9 },
		{ name: 'Leadership', score: 8 },
		{ name: 'Storytelling', score: 7 },
		{ name: 'Project Management', score: 7 },
		{ name: 'Data Pipelines', score: 7 },
		{ name: 'Coding', score: 8 }
	];

	const colors = [
		{ name: 'rose', hex: '#f43f5e' },
		{ name: 'yellow', hex: '#eab308' },
		{ name: 'indigo', hex: '#6366f1' },
		{ name: 'teal', hex: '#14b8a6' }
	];

	const color = colors[Math.floor(Math.random() * colors.length)];

	const nVertices = traits.length;

	const pathCoords = getTraitCoords(traits, radarDim, nVertices, domainArray, rangeArray);

</script>

{#if width > 0}
	<svg width={radarDim} height={radarDim} class="md:border overflow-visible items-center">
		<defs>
			<radialGradient id="myGradient">
			  <stop offset="20%" stop-color={color.hex} stop-opacity={0} />
			  <stop offset="95%" stop-color={color.hex} stop-opacity={0.3} />
			</radialGradient>
		  </defs>
		<RadarChartGrid {radarDim} {nVertices} {domainArray} {rangeArray} />
		<RadarChartLines {traits} {radarDim} {nVertices} {domainArray} {rangeArray} color={color.name} />
		<RadarChartPaths {pathCoords} color={color.name} />
		<RadarChartLabels {traits} {radarDim} {nVertices} {domainArray} {rangeArray} />
	</svg>
{/if}
