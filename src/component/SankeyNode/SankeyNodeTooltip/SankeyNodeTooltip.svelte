<script>
	import nodevalues from '../../../routes/portfolio/sankey/nodevalues.json';
	import { formatTooltipValue } from '../../../routes/portfolio/sankey/utils';
	import { clickStore, nodeTooltipData } from '../../../stores';
	import classNames from 'classnames';

	const nodes = nodevalues.data;
</script>

<div
	class={classNames(
		'absolute bg-gray-100 text-gray-800 text-xs shadow-lg space-y-2 p-3 rounded-md -translate-x-1/2 pointer-events-none',
		{
			hidden: !$clickStore.node
		}
	)}
>
	<h2 class="font-semibold text-sm">{nodes[$nodeTooltipData.index].name}</h2>
	<div>
		<p class="pb-1"><span class="font-medium">{formatTooltipValue(nodes[$nodeTooltipData.index].nodeSum)}</span> patients</p>
		<p><span class="font-medium">{nodes[$nodeTooltipData.index].percent}%</span> of total</p>
	</div>
</div>
