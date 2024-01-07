<script lang="ts">
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	export let src: string;
	export let alt: string;
	export let formats: string[] = ['avif', 'webp', 'png'];
	export let widths: string[] = ['500w', '1000w'];

	// Get just the file name without extension (so "image.png" becomes "image")
	$: fileName = src.split('.')[0];

	// Function to build the srcset string
	function buildSrcset() {
		// if (dev) return;
		let srcset = '';

		// Cycle through formats and add them to the srcset
		for (let i = 0; i < formats.length; i++) {
			srcset += `${fileName}-${widths[i]}.${formats[i]} ${widths[i]}`;

			if (i < formats.length - 1) {
				srcset += ', ';
			}
		}

		return srcset;
	}

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
	<img
		srcset={buildSrcset()}
		sizes="(max-width: 979px) 500px, 1000px"
		{src}
		{alt}
		class="object-contain rounded-lg w-full h-full"
		loading="lazy"
		decoding="async"
	/>
{:else if failed}
	<img src="https://icon-library.com/images/not-found-icon/not-found-icon-20.jpg" alt="Not Found" />
	<p>{buildSrcset()}</p>
{:else if loading}
	<div class="bg-gray-50 animate-pulse h-[250px]" />
{/if}
