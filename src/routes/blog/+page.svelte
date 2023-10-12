<script lang="ts">
	let width;
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ GetAllPost } = data);
</script>

<svelte:head>
	<title>Blog | Harry Kelleher</title>
</svelte:head>

<section
	bind:clientWidth={width}
	class="flex flex-col items-center font-normal px-4 text-sm w-full"
>
	<p class="p-2">Hi, I'm Harry. Check out my latest blog posts listed below.</p>


	{#if $GetAllPost.errors}
  <!-- Display an error message if there was an error -->
  <div class="text-red-500">An error occurred while fetching data. Please try again later.</div>
{:else}
	{#if $GetAllPost.data?.allPost}
		{#each $GetAllPost.data?.allPost as post}
			<div class="p-2 text-lg font-medium pb-4">
				{post.title}
			</div>
			{#if post.tags}
			<div class="flex gap-x-2">
				{#each post.tags as tag}
						<span class="rounded-full px-4 py-1 font-medium bg-indigo-600 text-white text-xs">{tag}</span>
				{/each}
			</div>
			{/if}
		{/each}
	{/if}
	{/if}
</section>
