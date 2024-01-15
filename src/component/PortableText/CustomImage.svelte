<script lang="ts">
	export let portableText;
	const urlStem = 'https://cdn.sanity.io/images/g2pdrwyj/production/';

	$: image = portableText?.value;
	$: ref = image?.image?.asset?._ref;
	$: parts = ref?.split('-');

	$: imageUrl = urlStem + `${parts[1]}-${parts[2]}.${parts[3]}`;

</script>

<br />
<div class="py-4">
	<slot name="image"><img src={imageUrl + '?fit=max'} alt={image.alt} /></slot>
</div>
{#if image?.caption}
	<slot name="caption"><p class="pb-8 text-center text-sm dark:text-slate-100">{image?.caption}</p></slot>
{/if}
