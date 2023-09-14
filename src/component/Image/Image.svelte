<script lang="ts">
	import { onMount } from 'svelte';
	import Loading from '../Loading/Loading.svelte';
	import { fade } from 'svelte/transition';
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
	<div class="loaded-image" in:fade>
		<img {src} {alt} style="opacity: 1;" />
	</div>
{:else if failed}
	<img src="https://icon-library.com/images/not-found-icon/not-found-icon-20.jpg" alt="Not Found" />
{:else if loading}
	<Loading />
{/if}

<style>
	/* CSS to reveal the image when it's loaded */
	loaded-image {
		opacity: 0;
		transition: opacity 0.75s ease-in-out;
	}
</style>
