<script lang="ts">
	export let portableText;
	const urlStem = 'https://cdn.sanity.io/images/g2pdrwyj/production/';

	$: image = portableText?.value;
	$: ref = image?.image?.asset?._ref;
	$: parts = ref?.split('-');

	$: imageUrl = urlStem + `${parts[1]}-${parts[2]}.${parts[3]}`;

</script>

<br />
<div class="flex flex-col items-center py-2">
	<slot name="image"><img src={imageUrl + '?fit=max'} alt={image.alt} /></slot>
</div>
{#if image?.caption}
	<slot name="caption"><p class="pb-8 text-center text-xs md:text-sm text-gray-800 dark:text-slate-100 mx-[5%]">{image?.caption}</p></slot>
{/if}
