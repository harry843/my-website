<script lang="ts">
	import nodevalues from '../../../../routes/portfolio/sankey/nodevalues.json';
	import { formatTooltipValue } from '../../../../routes/portfolio/sankey/utils';
	import { hoverStore, nodeTooltipData } from '../../../../stores/stores';
	import classNames from 'classnames';
	import type { TransformedNode } from '../../../../types/portfolio';
	import SankeyNodeTooltipDonut from './SankeyNodeTooltipDonut/SankeyNodeTooltipDonut.svelte';

	export let paddingX: number;
	export let nodeWidth: number;
	export let paddingY: number;

	const nodes = nodevalues.data;

	const nodeTooltipPadding = 5;

	const getNodeTooltipXPositionFromNodeLayer = ($nodeTooltipData: Partial<TransformedNode>) => {
		switch ($nodeTooltipData.fixedLayer) {
			case 3:
			case 2:
				return ($nodeTooltipData.x0 || 0) + paddingX - nodeTooltipPadding;
			default:
				return ($nodeTooltipData.x0 || 0) + paddingX + nodeWidth + nodeTooltipPadding;
		}
	};

	function getContrastYIQ(hexcolor: string) {
		var r = parseInt(hexcolor.substring(1, 3), 16);
		var g = parseInt(hexcolor.substring(3, 5), 16);
		var b = parseInt(hexcolor.substring(5, 7), 16);
		var yiq = (r * 299 + g * 587 + b * 114) / 1000;
		return yiq >= 128 ? 'black' : 'white';
	}

	const getNodeTooltipText = ($nodeTooltipData: Partial<TransformedNode>) => {
		switch ($nodeTooltipData.fixedLayer) {
			case 0:
				return `people called NHS111 and received a ${$nodeTooltipData.name} disposition`;
			case 1:
				if ($nodeTooltipData.index !== 6) {
					return `callers went on to attend a ${$nodeTooltipData.name}`;
				} else {
					return `callers did not attend a downstream NHS service`;
				}
			case 2:
				return `of those attendances were classified as ${$nodeTooltipData.name}`;
			default:
				if ($nodeTooltipData.index === 8) {
					return `callers were subsequently admitted to hospital`;
				} else {
					return `callers had a necessary Type 1 Emergency Department attendance, but were not admitted to hospital`;
				}
		}
	};
</script>

<div
	class={classNames(
		'absolute text-xs w-44 md:w-72 shadow-lg space-y-1/2 pointer-events-none rounded-sm',
		{
			hidden: !$hoverStore.node,
			'transform -translate-x-full': ($nodeTooltipData.fixedLayer || 0) > 1
		}
	)}
	style="
		left: {getNodeTooltipXPositionFromNodeLayer($nodeTooltipData)}px;
		top: {($nodeTooltipData.y0 || 0) + paddingY}px;
		background: {$nodeTooltipData.colour?.toLowerCase()};
		color: {getContrastYIQ($nodeTooltipData.colour ? $nodeTooltipData.colour?.toLowerCase() : 'black')};
		"
>
	<h2 class="font-semibold text-sm px-4 py-2">{nodes[$nodeTooltipData.index || 0].name}</h2>
	<div class="bg-gray-50 py-2 px-4 space-y-2 text-gray-700">
		<p>
			<span class="font-medium text-black"
				>{formatTooltipValue(nodes[$nodeTooltipData.index || 0].nodeSum)}</span
			>
			<span class="text-gray-700">{getNodeTooltipText($nodeTooltipData)}</span>
		</p>
		<SankeyNodeTooltipDonut {nodes} />
	</div>
</div>
