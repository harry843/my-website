<script lang="ts">
	import Image from '../Image/Image.svelte';
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
	<slot name="caption"><p class="py-2 text-center text-sm">{image?.caption}</p></slot>
{/if}
