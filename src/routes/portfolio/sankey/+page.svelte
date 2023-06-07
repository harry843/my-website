<script lang="ts">
	import { sankey } from 'd3-sankey';
	import data from './sankey_data.json';
	import SankeyLinkGradient from '../../../component/SankeyLink/SankeyLinkGradient/SankeyLinkGradient.svelte';
	import SankeyLink from '../../../component/SankeyLink/SankeyLink.svelte';
	import SankeyNode from '../../../component/SankeyNode/SankeyNode.svelte';
	import SankeyLinkTooltip from '../../../component/SankeyLink/SankeyLinkTooltip/SankeyLinkTooltip.svelte';
	import SankeyNodeTooltip from '../../../component/SankeyNode/SankeyNodeTooltip/SankeyNodeTooltip.svelte';

	let width = 0;
	let innerWidth = 0;

	const height = 600;
	const nodeWidth = 20;
	$: paddingX = innerWidth > 767 ? 110 : 10;
	$: paddingY = innerWidth > 767 ? 0 : 20;

	$: vizWidth = width - paddingX * 2;
	$: vizHeight = height - paddingY * 2;
	$: send = sankey()
		.nodeWidth(nodeWidth)
		.nodePadding(30)
		.nodeSort(null)
		.size([vizWidth, vizHeight])(data);
</script>

<svelte:head>
	<title>Patient Flow through NHS Services | Harry Kelleher</title>
</svelte:head>

<svelte:window bind:innerWidth />

<div class="relative p-0 md:py-4 md:px-8">
	<div class="flex justify-between px-24 pt-2 pb-6 font-medium">
		<div
			class="text-xs md:text-base px-2 md:px-4 border-l-[12px] md:border-l-0 md:border-r-[16px] border-gray-200 text-center -translate-x-full md:-translate-x-[69px]"
		>
			NHS111
		</div>
		<div
			class="text-xs md:text-base px-2 md:px-4 border-l-[12px] md:border-l-0 md:border-r-[16px] border-gray-200 text-center -translate-x-1 md:-translate-x-[20px]"
		>
			ED
		</div>
		<div
			class="text-xs md:text-base px-2 md:px-4 border-r-[12px] md:border-r-0 md:border-l-[16px] border-gray-200 text-center translate-x-4 md:translate-x-[81px]"
		>
			Necessary
		</div>
		<div
			class="text-xs md:text-base px-2 md:px-4 border-r-[12px] md:border-r-0 md:border-l-[16px] border-gray-200 text-center translate-x-[82px] md:translate-x-[75px]"
		>
			Hospital
		</div>
	</div>
	<section
		bind:clientWidth={width}
		class="relative flex flex-col items-center font-normal text-sm h-full w-full"
	>
		{#if width > 0}
			<svg width="100%" {height}>
				<defs>
					{#each send.links as link}
						<SankeyLinkGradient source={link.source} target={link.target} />
					{/each}
				</defs>
				<g transform={`translate(${paddingX},${paddingY})`}>
					<g id="links">
						{#each send.links as link}
							<SankeyLink {link} />
						{/each}
					</g>
					<g id="nodes">
						{#each send.nodes as node}
							<SankeyNode {node} {nodeWidth} />
						{/each}
					</g>
				</g>
			</svg>
		{/if}
		<SankeyLinkTooltip {paddingY} />
		<SankeyNodeTooltip {paddingX} {paddingY} {nodeWidth} />
	</section>
	{#if innerWidth > 767}
		<div class="absolute right-6 top-10 md:top-14">
			<div class="relative" style="height: {height}px">
				<div class="h-full w-0.5 bg-gray-600" />
				<div
					class="absolute w-0 h-0 border-gray-600 -top-1 -left-[4px]"
					style="border-left: 5px solid transparent;
				border-right: 5px solid transparent;
				border-bottom: 6px solid black;"
				/>
				<div class="absolute top-1/2 right-0 -translate-x-1/2">Acuity</div>
			</div>
		</div>
	{/if}
</div>
