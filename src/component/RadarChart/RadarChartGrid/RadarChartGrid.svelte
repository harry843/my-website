<script lang="ts">
	import { angleToCoord } from '../utils/utils';

	export let nVertices: number;
	export let radarDim: number;
	export let domainArray: [number, number];
	export let rangeArray: [number, number];

	const verticesArray = [...Array(nVertices).keys()];
	const levels = [0, 2, 4, 6, 8, 10];

	$: diagonalData = levels.map((level) => {
		const coords = [];
		for (let i = 0; i < nVertices; i += 1) {
			const coordinate = angleToCoord(radarDim, nVertices, i, level, domainArray, rangeArray);
			coords.push(coordinate);
		}
		return coords;
	});

	$: diagonalCoords = diagonalData.map((levelArray) =>
		levelArray.map((levelCoord, i) => [
			levelCoord,
			i < levelArray.length - 1 ? levelArray[i + 1] : levelArray[0]
		])
	);
</script>

<g>
	{#each diagonalCoords as lineCoords}
		{#each verticesArray as vertice}
			<line
				x1={lineCoords[vertice][0][0]}
				y1={lineCoords[vertice][0][1]}
				x2={lineCoords[vertice][1][0]}
				y2={lineCoords[vertice][1][1]}
				class="stroke-gray-400 opacity-50"
			/>
		{/each}
	{/each}
</g>
