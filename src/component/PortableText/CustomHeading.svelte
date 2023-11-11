<script lang="ts">
	import type { BlockComponentProps } from '@portabletext/svelte';
	export let portableText: BlockComponentProps;

	//$: ({ indexInParent, global, value } = portableText);
	//$: ({ ptBlocks } = global);
	//$: ({ portableText.value.style } = value);

	const headers = portableText.value.style;
	const precededByHeading = headers ? ['h1', 'h2', 'h3'].includes(headers) : undefined;

	$: anchorId = headers ? `heading-${portableText.value._key}` : undefined;
	// console.log(headers, precededByHeading);
</script>

<!-- If preceded by heading, have a higher margin top -->
<div class="relative {precededByHeading ? 'mt-10 mb-6' : 'mt-2'}" id={anchorId}>
	{#if portableText.value.style === 'h1'}
		<h1 class="text-4xl font-customHeading pb-6"><slot /></h1>
	{:else if portableText.value.style === 'h2'}
		<h2 class="text-3xl font-customHeading"><slot /></h2>
	{:else if portableText.value.style === 'h3'}
		<h3 class="text-xl font-customHeading font-bold">
			<slot />
			<a href="#{anchorId}" aria-hidden="true"
			tabIndex={-1}>
				<span class="sr-only">Link to this heading</span>
					🔗
			</a>
		</h3>
	{:else if portableText.value.style === 'h4'}
		<h4 class="text-xl font-medium font-customHeading text-gray-600 pt-6"><slot /></h4>
	{:else}
		<br />
		<h5 class="text-xl font-medium font-customHeading"><slot /></h5>
		<br />
	{/if}
</div>
