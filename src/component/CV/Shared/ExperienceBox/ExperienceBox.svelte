<script lang="ts">
	import type { Timeframe } from '../../../../types/cv';
	import ExperienceBoxHeader from './ExperienceBoxHeader/ExperienceBoxHeader.svelte';
	import ExperienceBullets from './ExperienceBullet/ExperienceBullet.svelte';
	import ExperienceDates from './ExperienceDates/ExperienceDates.svelte';
	import ExperienceLocations from './ExperienceLocations/ExperienceLocations.svelte';
	export let withArrow = false;
	export let imageColorClass: string;
	export let image: string;
	export let title: string;
	export let employer: string;
	export let employer_url: string;
	export let bullets: string[];
	export let timeframe: Timeframe;
	export let locations: string[];
</script>

<div
	class="flex max-h-max w-full flex-col gap-y-2 rounded-xl border border-gray-100 p-4 text-xs text-gray-600"
>
	<ExperienceBoxHeader {imageColorClass} {image} {title} {employer} {employer_url} {withArrow}/>
	<ExperienceBullets {bullets} />
	<div class="flex flex-col xs:flex-row justify-between">
		<ExperienceDates {timeframe} />
		<ExperienceLocations {locations} />
	</div>
</div>