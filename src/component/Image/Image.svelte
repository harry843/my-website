<script lang="ts">
	import { onMount } from 'svelte';
	export let src: string;
	export let alt: string;

	let loaded = false;
	let failed = false;
	let loading = true;

	onMount(() => {
		const img = new Image();
		img.src = src;

		img.onload = () => {
			loading = false;
			loaded = true;
		};
		img.onerror = () => {
			loading = false;
			failed = true;
		};
	});
</script>

{#if loaded}
	<img {src} {alt} style="opacity: 1;" class="object-contain h-[250px]" />
{:else if failed}
	<img src="https://icon-library.com/images/not-found-icon/not-found-icon-20.jpg" alt="Not Found" />
{:else if loading}
	<div class="bg-gray-50 animate-pulse h-[250px]" />
{/if}
