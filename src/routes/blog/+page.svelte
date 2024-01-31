<script lang="ts">
	import BlogPostCard from '../../component/Card/BlogPostCard/BlogPostCard.svelte';
	import averageReadingTime from '../../component/Card/BlogPostCard/averageReadingTime';
	import Loading from '../../component/Loading/Loading.svelte';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ GetAllPost } = data);
	$: imageUrlParams = '?fm=webp&max-h=300&max-w=500&min-h=240&min-w=400';

	$: console.log($GetAllPost.source)
</script>

<svelte:head>
	<title>Blog | Harry Kelleher</title>
</svelte:head>

<section
	class={$GetAllPost.fetching
		? 'flex h-screen items-center justify-center'
		: 'px-1 xs:px-2 md:px-4 flex flex-col items-center justify-center text-sm'}
>
	{#if $GetAllPost.fetching}
		<Loading />
	{:else if $GetAllPost.errors}
		<!-- Display error message if there was an error -->
		<div class="text-red-500">An error occurred while fetching data. Please try again later.</div>
	{:else if $GetAllPost.data?.allPost !== undefined}
		<div class="grid grid-cols-2 space-y-6 gap-x-6 rounded-md">
			<h1 class="font-customHeading font-semibold text-left text-2xl">Blog Posts</h1>
			{#each $GetAllPost.data?.allPost as post, index}
				<BlogPostCard
					slug={'blog/' + post.slug?.current}
					title={post.title}
					coverImage={post.mainImage?.image?.asset?.url + imageUrlParams}
					altText={post.mainImage?.alt}
					excerpt={post.feature}
					tags={post?.tags}
					readingTime={averageReadingTime(post?.contentRaw)}
					additionalClass={index === 0 ? 'col-span-full' : 'col-span-full md:col-span-1'}
					{index}
				/>
			{/each}
		</div>
	{/if}
</section>
