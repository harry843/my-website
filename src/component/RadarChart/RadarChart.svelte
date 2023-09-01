<script lang="ts">
	import { onDestroy } from 'svelte';
	import RadarChartGrid from './RadarChartGrid/RadarChartGrid.svelte';
	import RadarChartLabels from './RadarChartLabels/RadarChartLabels.svelte';
	import RadarChartPaths from './RadarChartPaths/RadarChartPaths.svelte';
	import { getTraitCoords } from './utils/utils';
  
	export let width: number;
  
	let graphHeight = 600;
	let radarDim = Math.min(width, graphHeight);
  
	const domainArray: [number, number] = [0, 10];
	let rangeArray: [number, number] = [0, radarDim / 2 - 80];
  
	const traits = [
	  { name: 'Data Viz', score: 10 },
	  { name: 'Leadership', score: 8 },
	  { name: 'Storytelling', score: 7 },
	  { name: 'Project Management', score: 7 },
	  { name: 'Data Pipelines', score: 8 },
	  { name: 'Coding', score: 8 }
	];
  
	const colors = [
	  { name: 'rose', hex: '#f43f5e' },
	  { name: 'yellow', hex: '#eab308' },
	  { name: 'indigo', hex: '#6366f1' },
	  { name: 'teal', hex: '#14b8a6' }
	];
  
	$: color = colors[Math.floor(Math.random() * colors.length)];
  
	const nVertices = traits.length;
  
	$: pathCoords = getTraitCoords(traits, radarDim, nVertices, domainArray, rangeArray);
  
	// Function to update radarDim when window is resized
	function updateRadarDim() {
	  radarDim = Math.min(width, graphHeight);
	  rangeArray = [0, radarDim / 2 - 80];
	}
  
	// Add window resize event listener
	window.addEventListener('resize', updateRadarDim);
  
	// Cleanup the event listener when the component is destroyed
	onDestroy(() => {
	  window.removeEventListener('resize', updateRadarDim);
	});
  </script>
  
  <div class="flex flex-col items-center justify-center font-normal -translate-y-8 md:-translate-y-4">
	  <svg width={radarDim} height={radarDim} class="">
		<defs>
		  <radialGradient id="myGradient">
			<stop offset="20%" stop-color={color.hex} stop-opacity={0} />
			<stop offset="95%" stop-color={color.hex} stop-opacity={0.4} />
		  </radialGradient>
		</defs>
		<RadarChartGrid {radarDim} {nVertices} {domainArray} {rangeArray} />
		<RadarChartPaths {pathCoords} color={color.name} />
		<RadarChartLabels {traits} {radarDim} {nVertices} {domainArray} {rangeArray} />
	  </svg>
  </div>
  

