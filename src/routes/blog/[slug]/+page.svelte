<script lang="ts">
	//import { onMount, createEventDispatcher, afterUpdate, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	//import { browser } from '$app/environment';
	import CustomHeading from '../../../component/Blog/PortableText/CustomHeading.svelte';
	import CustomParagraph from '../../../component/Blog/PortableText/CustomParagraph.svelte';
	import CustomUrl from '../../../component/Blog/PortableText/CustomURL.svelte';
	import CustomBullet from '../../../component/Blog/PortableText/CustomBullet.svelte';
	import BlockQuote from '../../../component/Blog/PortableText/BlockQuote.svelte';
	import CustomListItem from '../../../component/Blog/PortableText/CustomListItem.svelte';
	import CustomQuote from '../../../component/Blog/PortableText/CustomQuote.svelte';
	import CustomImage from '../../../component/Blog/PortableText/CustomImage.svelte';
	import CustomIFrame from '../../../component/Blog/PortableText/CustomIFrame.svelte';
	import CustomCodeBlock from '../../../component/Blog/PortableText/CustomCodeBlock.svelte';
	import Tag from '../../../component/Tag/Tag.svelte';
	import averageReadingTime from '../../../component/Card/BlogPostCard/averageReadingTime';
	import dateformat from 'dateformat';
	import { PortableText } from '@portabletext/svelte';
	import Loading from '../../../component/Loading/Loading.svelte';
	import Eye from '../../../component/Icons/Eye.svelte';
	import Socials from '../../../component/Blog/Socials/Socials.svelte';
	//import Comments from '../../../component/Blog/Comments/Comments.svelte';
	import { slugData } from '../../../stores/stores';
	import DataFetcher from '../../../component/Sanity/DataFetcher.svelte';
	import genImageUrl from '../../../component/Sanity/utils/genImageUrl';
	import BlogMenu from '../../../component/Blog/Menu/BlogMenu.svelte';
	import ProgressBar from '../../../component/Blog/ProgressBar/ProgressBar.svelte';

	export let data;

	let screenWidth: number = 0;

	$: slug = $page.params.slug;

	$: getSlugPost = `
	  *[_type == 'post' && slug.current == '${slug}'] {
		  _createdAt, _updatedAt, title, "slug":slug.current, "imageUrl":mainImage.image.asset._ref, "imageCaption":mainImage.caption, "imageAlt":mainImage.alt, feature, tags, content
	  }
	`;

	$: renderHead = false;

	// Function to receive data from DataFetcher component
	function handleData(data) {
		$slugData = data;
		renderHead = true;
	}

	// const dispatch = createEventDispatcher();

	// const load = () => {
	// 	dispatch('load');
	// };

	// onDestroy(() => {
	// 	if (browser) {
	// 		let url = 'https://cusdis-comments-4386.vercel.app/js/cusdis.es.js';
	// 		let script = document.querySelector(`script[src="${url}"]`);
	// 		script.removeEventListener('load', load);
	// 	}
	// });

	// afterUpdate(async () => {
	// 	load();
	// });

	// onMount(async () => {
	// 	let url = 'https://cusdis-comments-4386.vercel.app/js/cusdis.es.js';
	// 	let script = document.querySelector(`script[src="${url}"]`);
	// 	if (!script) {
	// 		script = document.createElement('script');
	// 		script.src = url;
	// 		script.defer = true;
	// 		script.async = true;
	// 		script.addEventListener('load', load);
	// 		document.querySelector('head').appendChild(script);
	// 	}
	// 	window.CUSDIS.initial();
	// });
</script>

<svelte:head>
	{#if renderHead}
		<title>Blog | {$slugData[0].title}</title>
		<meta property="og:title" content={$slugData[0].title} />
		<meta name="article:published_time" content={$slugData[0]._updatedAt} />
		<meta property="og:image" content={genImageUrl($slugData[0].imageUrl, '?fit=max')} />
		<meta property="og:description" content={$slugData[0].feature} />
		<meta property="og:url" content={'https://harrykelleher.com/blog/' + $slugData[0].slug} />
	{/if}
	<meta property="og:type" content="article" />
	<meta name="author" content="Harry Kelleher" />
	<meta property="og:locale" content="en_GB" />
	<!-- <script async defer src="https://cusdis-comments-4386.vercel.app/js/cusdis.es.js"></script> -->
	<!-- <script async defer src="https://cusdis-comments-4386.vercel.app/js/cusdis.es.js"></script> -->
	<!-- <script async defer src="https://cusdis-comments-4386.vercel.app/js/cusdis.es.js"></script> -->
	<script src="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/prism.js"></script>
</svelte:head>

<svelte:window bind:innerWidth={screenWidth} />

<DataFetcher query={getSlugPost} onData={handleData} store={slugData} />
{#if $slugData[0] === undefined}
	<div class="flex h-screen items-center justify-center">
		<Loading />
	</div>
{:else}
	<section class="mx-2 sm:mx-5 md:mx-[15%] lg:mx-[18%] xl:mx-[22%]">
		{#if Object.keys($slugData[0]).length > 0}
			{#if $slugData[0].title !== undefined}
				<h1 class="text-3xl font-semibold font-customHeading text-center pb-6">
					<!-- svelte-ignore a11y-missing-content -->
					{$slugData[0].title}<a href="#top" />
				</h1>
			{/if}

			<div class="flex flex-row justify-center items-center">
				<img src="/HK_profile2.jpg" class="h-14 mr-2 rounded-full" alt="Harry Kelleher" />
				<div class="flex flex-col justify-center text-center gap-y-1 font-customParagraph">
					<div class="text-sm text-opacity-80">by Harry Kelleher</div>
					<div class="flex flex-row text-sm gap-x-1 xxs:gap-x-1.5 text-opacity-80">
						{#if $slugData[0]._updatedAt !== undefined}
							<div>
								{dateformat($slugData[0]._updatedAt, 'UTC:dd mmm yyyy')}
							</div>
						{/if}
						<div>&#x2022;</div>
						{#if $slugData[0].content !== undefined}
							<div>{averageReadingTime($slugData[0].content)}</div>
						{/if}
						<div>&#x2022;</div>
						{#if data.reads !== undefined}
							<div class="flex flex-row items-center gap-x-1 text-sm text-opacity-80">
								<Eye />
								<div class="items-center text-opacity-80">{data.reads}</div>
							</div>
						{/if}
					</div>
				</div>
			</div>

			{#if $slugData[0].tags !== undefined}
				<div class="pt-6 flex justify-center gap-3 flex-wrap">
					{#each $slugData[0].tags as tag}
						<Tag>{tag}</Tag>
					{/each}
				</div>
			{/if}
			{#if $slugData[0].imageUrl !== undefined}
				<figure class="py-4">
					<img src={genImageUrl($slugData[0].imageUrl, '?fit=max')} alt={$slugData[0].imageAlt} />
					{#if $slugData[0].imageCaption}
						<figcaption
							class="text-xs sm:text-sm text-center mx-[5%] text-gray-800 dark:text-slate-100 py-2"
						>
							{$slugData[0].imageCaption}
						</figcaption>
					{/if}
				</figure>
			{/if}

			{#if $slugData[0].content !== undefined}
				<BlogMenu {screenWidth} content={$slugData[0].content} />

				<PortableText
					components={{
						types: {
							quote: CustomQuote,
							imageWithAlt: CustomImage,
							iframe: CustomIFrame,
							code: CustomCodeBlock
						},
						block: {
							normal: CustomParagraph,
							blockquote: BlockQuote,
							h1: CustomHeading,
							h2: CustomHeading,
							h3: CustomHeading,
							h4: CustomHeading,
							h5: CustomHeading
						},
						marks: {
							link: CustomUrl
						},
						listItem: {
							bullet: CustomListItem
						},
						list: {
							bullet: CustomBullet
						}
					}}
					value={$slugData[0].content}
					onMissingComponent={false}
				/>
			{/if}
		{:else}
			<div class="text-red-500">An error occurred while fetching data. Please try again later.</div>
		{/if}
	</section>

	<Socials title={$slugData[0].title} slug={$slugData[0].slug} />
	<!-- <Comments title={$slugData[0].title} slug={$slugData[0].slug} /> -->
{/if}
