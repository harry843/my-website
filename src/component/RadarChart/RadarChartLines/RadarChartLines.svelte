<script lang="ts">
	import { angleToCoord } from '../utils/utils';

	export let traits: {
		name: string;
		score: number;
	}[];
	export let radarDim: number;
	export let nVertices: number;
	export let domainArray: [number, number];
	export let rangeArray: [number, number];
	export let color: string;

	const traitsData = traits.map(({ score }, i) => {
		return angleToCoord(radarDim, nVertices, i, score, domainArray, rangeArray);
	});

	const traitsCoords = traitsData.map((traitCoord, i) => [
		traitCoord,
		i < traitsData.length - 1 ? traitsData[i + 1] : traitsData[0]
	]);
	console.log(color)
</script>

<g>
    {#each traitsCoords as traitCoord}
        <line
            x1={traitCoord[0][0]}
            y1={traitCoord[0][1]}
            x2={traitCoord[1][0]}
            y2={traitCoord[1][1]}
            class="stroke-{color}-300 stroke-2"
        />
    {/each}
</g>