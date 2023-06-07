<script lang="ts">
	import type { Timeframe } from '../../../../../types/cv';
	import { getMonthDiff, getTimeframe } from '../../../Experience/utils/utils';

	export let timeframe: Timeframe;
</script>

<div class="flex gap-x-2 text-sm" >
	<div class="text-gray-800">{getTimeframe(timeframe)}</div>
	<div class=" text-indigo-500">&#8226;</div>
	<div class="text-gray-800">{getMonthDiff(timeframe)}</div>
</div>