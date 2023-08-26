<script lang="ts">
	import RadarChartGrid from './RadarChartGrid/RadarChartGrid.svelte';
	import RadarChartLabels from './RadarChartLabels/RadarChartLabels.svelte';
	import RadarChartLines from './RadarChartLines/RadarChartLines.svelte';

	const radarDim = 600
	const domainArray: [number, number] = [0, 10];
	const rangeArray: [number, number] = [0, radarDim / 2 - 80];

	const traits = [
		{ name: 'Data Viz', score: 9 },
		{ name: 'Leadership', score: 7 },
		{ name: 'Storytelling', score: 6 },
		{ name: 'Project Management', score: 7 },
		{ name: 'Data Pipelines', score: 7 },
		{ name: 'Coding', score: 8 }
	];
	const nVertices = traits.length;

</script>

<svg width={radarDim} height={radarDim} class="border">
	<RadarChartGrid {radarDim} {nVertices} {domainArray} {rangeArray} />
	<RadarChartLines {traits} {radarDim} {nVertices} {domainArray} {rangeArray} />
	<RadarChartLabels {traits} {radarDim} {nVertices} {domainArray} {rangeArray} />
</svg>
