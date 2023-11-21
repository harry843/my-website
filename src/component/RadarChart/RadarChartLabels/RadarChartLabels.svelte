<script lang="ts">
	import { angleToCoord } from '../utils/utils';

	export let traits: {
		name: string;
		score: number;
	}[];
	export let radarDim: number;
	export let nVertices: number;
	export let domainArray: number[];
	export let rangeArray: number[];

	$: labelsData = traits.map(({ name }, i) => {
		const coordinate = angleToCoord(radarDim, nVertices, i, 10.65, domainArray, rangeArray);
		const isFirstXHalf = coordinate[0] < radarDim / 2;
		const textAnchor =
			i === 0 || i === traits.length / 2 ? 'middle' : isFirstXHalf ? 'end' : 'start';
		return { name, coordinate, textAnchor };
	});
</script>

<g>
	{#each labelsData as { name, coordinate, textAnchor }}
		<text
			class="text-xs sm:text-sm fill-slate-700 font-semibold"
			alignment-baseline="middle"
			text-anchor={textAnchor}
			x={coordinate[0]}
			y={coordinate[1]}>{name}</text
		>
	{/each}
</g>
