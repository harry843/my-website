<script lang="ts">
	import {
		formatTooltipValue,
		getLinkTooltipText
	} from '../../../../routes/portfolio/sankey/utils';
	import { hoverStore, linkTooltipData } from '../../../../stores/stores';
	import nodevalues from '../../../../routes/portfolio/sankey/nodevalues.json';
	import classNames from 'classnames';

	export let paddingY: number;

	const nodes = nodevalues.data;

	$: linkTooltipPadding = paddingY > 10 ? 30 : -20;
</script>

<div
	class={classNames(
		'absolute bg-gray-100 text-gray-800 text-xs shadow-lg px-3 py-1 rounded-md pointer-events-none',
		{
			hidden: !$hoverStore.link
		}
	)}
	style="left:{$linkTooltipData.x1 && $linkTooltipData.x0
		? $linkTooltipData.x1 - ($linkTooltipData.x1 - $linkTooltipData.x0) / 2
		: 0}px;
		 top:{$linkTooltipData.y0 ? $linkTooltipData.y0 - paddingY + linkTooltipPadding : 0}px"
>
	<div class="pb-1">
		<span class="font-medium">{formatTooltipValue($linkTooltipData.value || 0)}</span>
		{getLinkTooltipText($linkTooltipData)}
	</div>
	<div>
		<span class="font-medium"
			>{Math.round(
				(100 * ($linkTooltipData.value || 0)) / nodes[$linkTooltipData.index || 0].nodeSum
			)}%</span
		>
		of {$linkTooltipData.source} total
	</div>
</div>
