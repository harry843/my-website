<script lang="ts">
	import { sankey } from 'd3-sankey';
	import data from './sankey_data.json';
	import SankeyLinkGradient from '../../../component/Sankey/SankeyLink/SankeyLinkGradient/SankeyLinkGradient.svelte';
	import SankeyLink from '../../../component/Sankey/SankeyLink/SankeyLink.svelte';
	import SankeyNode from '../../../component/Sankey/SankeyNode/SankeyNode.svelte';
	import SankeyLinkTooltip from '../../../component/Sankey/SankeyLink/SankeyLinkTooltip/SankeyLinkTooltip.svelte';
	import SankeyNodeTooltip from '../../../component/Sankey/SankeyNode/SankeyNodeTooltip/SankeyNodeTooltip.svelte';
	import MobileBanner from '../../../component/Banner/MobileBanner.svelte';
	import SankeyLayers from '../../../component/Sankey/SankeyLayers/SankeyLayers.svelte';
	import SankeyArrow from '../../../component/Sankey/SankeyArrow/SankeyArrow.svelte';

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

<div class="relative p-0 sm:py-4 md:px-8">
	{#if width > 0 && width < 490}
		<MobileBanner />
	{/if}
	<SankeyLayers />
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
		<SankeyArrow {height} />
	{/if}
</div>
