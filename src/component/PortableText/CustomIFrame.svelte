<script lang="ts">
	export let portableText;

	// $: url = portableText?.value;
	// $: caption = portableText?.iframe.caption

	$: console.log(portableText.value)
</script>

<br />
<div class="py-4">
	<slot name="iframe"><iframe class="rounded-md w-full h-96 dark:bg-white" frameborder="0" src={portableText?.value.url} title="Embedded visualisation" /></slot>
</div>
{#if portableText?.value.caption}
	<slot name="caption"><p class="py-1 pb-8 text-center text-sm">{portableText?.value.caption}</p></slot>
{/if}
