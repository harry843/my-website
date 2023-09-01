<script lang="ts">
	import { curveCardinalClosed, line } from 'd3-shape';

	export let pathCoords: any;
	export let color: string;

	const lineGenerator = line()
		.x((d) => d[0])
		.y((d) => d[1])
		.curve(curveCardinalClosed);

	const getStrokeClass = (color: string) => {
		return `stroke-${color}-500`;
	};

	const d = lineGenerator(pathCoords);
    const strokeClass = getStrokeClass(color)

</script>

<g>
    {#if d}
	<path d={d} fill="url('#myGradient')" class={`path-base`}/>
	<path d={d} fill-opacity={0} stroke-width="1" class={`${strokeClass} path`}/>

    {/if}
</g>
