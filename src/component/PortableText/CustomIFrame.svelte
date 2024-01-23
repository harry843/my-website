<script lang="ts">
	export let portableText;
</script>

<br />
<div class="pt-4">
	<slot name="iframe"><iframe class="rounded-md w-full h-96 border border-gray-100 dark:bg-white" frameborder="0" src={portableText?.value.url} title="Embedded visualisation" /></slot>
</div>
{#if portableText?.value.caption}
	<slot name="caption"><p class="pt-2 pb-10 text-center text-gray-800 text-xs md:text-sm dark:text-slate-100 mx-[5%]">{portableText?.value.caption}</p></slot>
{/if}
