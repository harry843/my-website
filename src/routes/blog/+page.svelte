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
	{:else if $GetAllPost.data?.allPost && $GetAllPost.data?.allPost != undefined}
		<div class="">
			{#each $GetAllPost.data?.allPost as post}
				<a href={'blog/' + post.slug?.current}>
					<div class="p-2 text-lg font-medium pb-2">
						{post.title}
					</div>
					{#if post.tags}
						<div class="flex justify-center gap-x-2">
							{#each post.tags as tag}
								<span class="rounded-full px-4 py-1 font-medium bg-indigo-600 text-white text-xs"
									>{tag}</span
								>
							{/each}
						</div>
						<br />
					{/if}
					{#if post.mainImage}
						<div class="p-4">
							<img src={post.mainImage?.image?.asset?.url + '?fit=max'} alt={post.mainImage.alt} />
						</div>
					{/if}
				</a>
			{/each}
		</div>
	{/if}
</section>
