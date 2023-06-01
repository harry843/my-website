<script>
	import { formatTooltipValue } from '../../../routes/portfolio/sankey/utils';
	import { hoverStore, linkTooltipData } from '../../../stores';
	import classNames from 'classnames';
</script>

<div
	class={classNames(
		'absolute bg-gray-100 text-gray-800 text-xs shadow-lg p-3 rounded-md pointer-events-none',
		{
			hidden: !$hoverStore.link
		}
	)}
	style="left:{$linkTooltipData.x1 && $linkTooltipData.x0
		? $linkTooltipData.x1 - ($linkTooltipData.x1 - $linkTooltipData.x0) / 2
		: 0}px;
		 top:{$linkTooltipData.y0 ? $linkTooltipData.y0 - 30 : 0}px"
>
	<div class="pb-1">{$linkTooltipData.source} → {$linkTooltipData.target}</div>
	<div><span class="font-medium">{formatTooltipValue($linkTooltipData.value || 0)}</span> patients</div>
</div>
