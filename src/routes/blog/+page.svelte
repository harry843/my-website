<script lang="ts">
	let width;
	import Image from '../../component/Image/Image.svelte';
	import BlogPostCard from '../../component/Card/BlogPostCard/BlogPostCard.svelte';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ GetAllPost } = data);
	$: imageUrlParams = '?fm=webp&max-h=350&max-w=700';
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
		{#each $GetAllPost.data?.allPost as post}
			<div class="w-5/6 py-4 rounded-md">
				<!-- <a href={'blog/' + post.slug?.current}>
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
					{/if} -->
				<BlogPostCard
					slug={'blog/' + post.slug?.current}
					title={post.title}
					coverImage={post.mainImage.image.asset.url + imageUrlParams}
					altText={post.mainImage.alt}
					excerpt="This is blog post taken from my series, under the hood."
					tags={post.tags}
					readingTime="7-mins"
				/>
				<!-- </a> -->
			</div>
		{/each}
	{/if}
</section>
