<script lang="ts">
	$: width = 0;
	import Image from '../../component/Image/Image.svelte';
	import BlogPostCard from '../../component/Card/BlogPostCard/BlogPostCard.svelte';
	import averageReadingTime from '../../component/Card/BlogPostCard/averageReadingTime';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ GetAllPost } = data);
	$: imageUrlParams = '?fm=webp&max-h=300&max-w=500&min-h=240&min-w=400';
</script>

<svelte:head>
	<title>Blog | Harry Kelleher</title>
</svelte:head>

<section bind:clientWidth={width} class="px-4 w-full">
	<h1 class="font-customHeading font-semibold items-start text-left text-3xl">Blog Posts</h1>
	<section class="flex flex-col items-center text-sm">
	{#if $GetAllPost.errors}
		<!-- Display error message if there was an error -->
		<div class="text-red-500">An error occurred while fetching data. Please try again later.</div>
	{:else if $GetAllPost.data?.allPost && $GetAllPost.data?.allPost != undefined}
		<div class="w-5/6 grid grid-cols-2 space-y-6 gap-x-6 py-3 rounded-md">
			{#each $GetAllPost.data?.allPost as post, index}
				<BlogPostCard
					slug={'blog/' + post.slug?.current}
					title={post.title}
					coverImage={post.mainImage.image.asset.url + imageUrlParams}
					altText={post.mainImage.alt}
					excerpt={post.feature}
					tags={post.tags}
					readingTime={averageReadingTime(post.contentRaw)}
					additionalClass={index === 0 ? 'col-span-full' : 'col-span-full md:col-span-1'}
					{index}
				/>
			{/each}
		</div>
	{/if}
	</section>
</section>
