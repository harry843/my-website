<script lang="ts">
	import { rgb } from 'd3';
	import { hoverStore, activeNode, nodeTooltipData } from '../../../stores/stores';

	import classNames from 'classnames';
	import type { TransformedNode } from '../../../types/portfolio';

	export let node: TransformedNode;
	export let nodeWidth: number;

	const darkerColor = rgb(node.colour).darker(0.5);

	const edRegex = /Emergency Department/;

	const label = edRegex.test(node.name)
		? node.name.replace('Emergency Department', 'ED')
		: node.name;

	const getTextAnchorFromNodeLayer = (node: TransformedNode) => {
		switch (node.fixedLayer) {
			case 0:
				return 'end';
			default:
				return 'start';
		}
	};

	const textAnchor = getTextAnchorFromNodeLayer(node);

	const xPadding = 10;

	const getLabelXPositionFromNodeLayer = (node: TransformedNode) => {
		switch (node.fixedLayer) {
			case 0:
				return node.x0 - xPadding;
			default:
				return node.x0 + xPadding + nodeWidth;
		}
	};

	$: labelXPosition = getLabelXPositionFromNodeLayer(node);
	const labelYPosition = node.y1 - (node.y1 - node.y0) / 2;

	const addActiveNode = (nodeIndex: number) => {
		activeNode.update((state: any) => {
			state.active = nodeIndex;
			return state;
		});
	};
	const removeActiveNode = () => {
		activeNode.update((state: any) => {
			state.active = undefined;
			return state;
		});
	};

	$: nodeIsActive = $activeNode.active == node.index;

	const handleNodeClick = () => {
		return nodeIsActive ? removeActiveNode() : addActiveNode(node.index);
	};

	let nodeHovered = false;

	const nodeHandleMouseOver = () => {
		nodeHovered = true;
	};

	const nodeHandleMouseOut = () => {
		nodeHovered = false;
	};
</script>

<rect
	class={classNames('cursor-pointer opacity-90 focus:outline-none', {
		'opacity-100': nodeIsActive
	})}
	fill={node.colour}
	stroke="white"
	stroke-width="1"
	rx="1"
	x={node.x0}
	y={node.y0}
	width={nodeWidth}
	height={node.y1 - node.y0}
	on:click={handleNodeClick}
	on:keydown={handleNodeClick}
	on:mouseenter={() => {
		hoverStore.update((state) => {
			state.node = true;
			return state;
		});
		nodeTooltipData.update((state) => {
			state.index = node.index;
			state.name = node.name;
			state.fixedLayer = node.fixedLayer;
			state.x0 = node.x0;
			state.y0 = node.y0;
			state.colour = node.colour;
			return state;
		});
	}}
	on:mouseleave={() => {
		hoverStore.update((state) => {
			state.node = false;
			return state;
		});
		nodeTooltipData.update((state) => {
			state.index = 0;
			state.name = undefined;
			state.fixedLayer = undefined;
			state.x0 = undefined;
			state.y0 = undefined;
			state.colour = undefined;
			return state;
		});
	}}
	on:mouseover={() => nodeHandleMouseOver()}
	on:focus={() => nodeHandleMouseOver()}
	on:mouseout={() => nodeHandleMouseOut()}
	on:blur={() => nodeHandleMouseOut()}
/>
<text
	class={classNames('fill-gray-800 hidden md:block', { 'font-semibold': nodeIsActive })}
	x={labelXPosition}
	y={labelYPosition}
	text-anchor={textAnchor}
	dominant-baseline="middle"
>
	{label}
</text>
