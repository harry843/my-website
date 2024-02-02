<script lang="ts">
	import RadarChart from '../RadarChart/RadarChart.svelte';
	import Avatar from '../Avatar/Avatar.svelte';
	import AvatarHover from '../Avatar/AvatarHover.svelte';

	export let width: number;
	export let color: { name: string; hex: string };
	export let bool: boolean;

</script>

<RadarChart {width} {color} />

<div
	class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
	role="tooltip"
	on:mouseover={() => {
		bool = false;
	}}
	on:mouseleave={() => {
		bool = true;
	}}
	on:focus={() => (bool = false)}
>
	<div class="translate-y-1/2 xs:translate-y-1/3 md:translate-y-0">
		{#if bool}
			<Avatar />
		{:else}
			<AvatarHover />
		{/if}
	</div>
</div>
