<script lang="ts">
	import BlogPostCard from '../../component/Card/BlogPostCard/BlogPostCard.svelte';
	import averageReadingTime from '../../component/Card/BlogPostCard/averageReadingTime';

	export let latestPost;

	$: imageUrlParams = '?fm=webp&max-h=300&max-w=500&min-h=240&min-w=400';
</script>

<div class="mx-6 md:mt-8 w-16 h-0.5 bg-gray-300 md:mx-auto md:relative md:-left-24" />
<section class="flex flex-col items-center justify-center px-1">
	<div class="md:container grid md:grid-cols-6 gap-8 pt-5 md:pt-7 items-center">
		<div class="md:col-start-3 md:col-span-4">
			<h2
				class="inline-block bg-yellow-400 dark:text-gray-900 py-2 px-4 md:-ml-4 mb-2 rounded-sm text-lg font-bold font-customHeading uppercase"
			>
				Blog
			</h2>
		</div>
		<div class="md:col-start-2 md:col-span-4">
			<p class="ml-px py-1">Every now and then, I write about something that interests me.</p>
			<h1 class="font-customHeading font-semibold text-left text-xl pt-5">↓ Latest Blog Post ↓</h1>
		</div>
		{#each latestPost as post, index}
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
	<div class="pb-10"></div>
</section>
