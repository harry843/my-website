<script lang="ts">
	import {
		getDonutColour,
		getDonutConditionalText
	} from '../../../../../routes/portfolio/sankey/utils';
	import { nodeTooltipData } from '../../../../../stores/stores';

	export let nodes: any;
</script>

<div class="flex items-center bg-gray-50">
	<div>
		<svg class="w-11 h-11 -translate-x-0.5">
			<circle
				class="fill-current text-transparent transform translate-x-1/2 translate-y-1/2 opacity-30"
				r="16"
				fill="transparent"
				stroke-dashoffset="25"
				stroke-width="6"
				stroke={getDonutColour($nodeTooltipData.colour)}
			/>
			<circle
				r="14"
				class="fill-current text-gray-200 transform translate-x-1/2 translate-y-1/2 opacity-50"
			/>
			<circle
				class="fill-current text-transparent transform translate-x-1/2 translate-y-1/2"
				r="16"
				fill="transparent"
				stroke-dasharray={nodes[$nodeTooltipData.index || 0].percent +
					',' +
					(100 - nodes[$nodeTooltipData.index || 0].percent)}
				stroke-dashoffset="25"
				stroke-width="8"
				stroke={getDonutColour($nodeTooltipData.colour)}
			/>
		</svg>
	</div>
	<div class="ml-2 whitespace-wrap text-gray-700">
		<div>
			Accounting for <span class="font-medium text-black"
				>{nodes[$nodeTooltipData.index || 0].percent}%</span
			>
			of {getDonutConditionalText($nodeTooltipData.fixedLayer || 0)}
		</div>
		<div />
	</div>
</div>
