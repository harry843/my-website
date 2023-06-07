<script lang="ts">
	import { formatTooltipValue } from '../../../../routes/portfolio/sankey/utils';
	import { hoverStore, linkTooltipData } from '../../../../stores';
	import nodevalues from '../../../../routes/portfolio/sankey/nodevalues.json';
	import classNames from 'classnames';
	import type { TransformedLink } from '../../../../types/portfolio';

	export let paddingY: number;

	const nodes = nodevalues.data;

	$: linkTooltipPadding = paddingY > 10 ? 30 : -20;

	function edAbbreviation(object: any) {
		const regex = /Emergency Department/;
		const replacement = 'ED';

		if (regex.test(object)) {
			return object.replace(regex, replacement);
		}

		return object;
	}

	const getLinkTooltipText = ($linkTooltipData: Partial<TransformedLink>) => {
		const { target, source } = $linkTooltipData;

		if (target === 'No attendance') {
			return `callers did not attend an Emergency Department after receiving a ${edAbbreviation(
				source
			)} disposition from NHS111`;
		}

		if (target === 'Type 1 Emergency Department' || target === 'Types 2-4 Emergency Department') {
			return `people attended a ${target} who received a ${source} disposition from NHS111`;
		}

		if ((target === 'Necessary' || target === 'Low acuity') && source) {
			return `${source} attendances were classified as ${target}`;
		}

		if (target === 'Admission' && source === 'Necessary') {
			return `${source.toLowerCase()} attendances at Type 1 Emergency Department resulted in hospital admission`;
		}

		if (target === 'Admission' && source === 'No attendance') {
			return `callers did not attend an Emergency Department, but were subsequently admitted to hospital`;
		}

		if (target === 'Admission' && source === 'Types 2-4 Emergency Department') {
			return `attendances at ${source} resulted in hospital admission`;
		}

		if (target === 'No admission') {
			return `callers had a necessary Type 1 Emergency Department attendance, but were not admitted to hospital`;
		}
	};
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
