<script lang="ts">
	import { sankeyLinkHorizontal } from 'd3-sankey';
	import { hoverStore, linkTooltipData, activeNode } from '../../stores';
	import type { TransformedLink } from '../../types/portfolio';
	import classNames from 'classnames';

	export let link: TransformedLink;
	let hovered = false;

	const gradientId = link.source.index + '-' + link.target.index;
	const strokeGradient = `url(#${gradientId})`;
	const handleMouseOver = () => {
		hovered = true;
	};

	const handleMouseOut = () => {
		hovered = false;
	};

	$: linkIsActive = $activeNode.active == link.source.index;
	$: nodeIsSelected = $activeNode.active != undefined;
</script>

<path
	fill="none"
	class={classNames("outline-none cursor-pointer", {
		'opacity-100': linkIsActive && hovered,
		'opacity-70': linkIsActive || hovered,
		'opacity-50': !linkIsActive && !nodeIsSelected,
		'opacity-5': nodeIsSelected && !linkIsActive
	})}
	stroke={strokeGradient}
	d={sankeyLinkHorizontal()(link)}
	stroke-width={link.width ? Math.max(1, link.width) : undefined}
	on:mouseenter={() => {
		hoverStore.update((state) => {
			state.link = true;
			return state;
		});
		linkTooltipData.update((state) => {
			state.source = link.source.name;
			state.target = link.target.name;
			state.value = link.value;
			state.x0 = link.target.x0;
			state.x1 = link.source.x1;
			state.y0 = link.y0;
			state.y1 = link.y1;
			return state;
		});
	}}
	on:mouseleave={() => {
		hoverStore.update((state) => {
			state.link = false;
			return state;
		});
		linkTooltipData.update((state) => {
			state.source = undefined;
			state.target = undefined;
			state.value = undefined;
			state.x0 = undefined;
			state.x1 = undefined;
			state.y0 = undefined;
			state.y1 = undefined;
			return state;
		});
	}}
	on:mouseover={() => handleMouseOver()}
	on:focus={() => handleMouseOver()}
	on:mouseout={() => handleMouseOut()}
	on:blur={() => handleMouseOut()}
/>
/>
