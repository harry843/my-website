<script lang="ts">
	import classNames from 'classnames';
	export let withArrow: boolean; 
	export let imageColorClass: string;
	export let image: string;
	export let title: string;
	export let employer: string;
	export let employer_url: string;
</script>

<div class="flex justify-between">
	<div class="flex items-center gap-x-2">
		<div class={classNames('flex items-center w-8 h-8 rounded-full', imageColorClass !== 'bg-white' && 'p-0.5', imageColorClass)}>  
			<img src={image} alt="flow" class={image.endsWith('.png') || image.endsWith('.jpeg') ? "rounded-full" : ""} />
		</div>
		<div>
			<h1 class="font-medium text-gray-800 text-sm">{title}</h1>
			<h2 class="hover:text-indigo-500 hover:underline "><a href={employer_url} target="_blank" rel="noopener noreferrer">{employer}</a></h2>
		</div>
	</div>
	{#if withArrow}
		<div class="text-right text-indigo-500 text-lg">&#x2192;</div>
	{/if}
</div>