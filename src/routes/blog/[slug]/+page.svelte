<script async defer src="https://cusdis.com/js/cusdis.es.js" lang="ts">
	import { onMount, createEventDispatcher, afterUpdate, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
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
	import type { PageData } from './$houdini';
	import { PortableText } from '@portabletext/svelte';
	import Email from '../../../component/CV/Header/Contact/icons/Email.svelte';
	import Loading from '../../../component/Loading/Loading.svelte';
	import Socials from '../../../component/Blog/Socials/Socials.svelte';
	import Comments from '../../../component/Blog/Comments/Comments.svelte';

	export let data: PageData;

	$: ({ GetPostBySlug } = data);

	$: blog = $GetPostBySlug.data?.allPost[0];

	$: console.log($GetPostBySlug.source)


	const dispatch = createEventDispatcher();

	const load = () => {
		dispatch('load');
	};

	onDestroy(() => {
		if (browser) {
			let url = 'https://cusdis-comments-4386.vercel.app/js/cusdis.es.js';
			let script = document.querySelector(`script[src="${url}"]`);
			script.removeEventListener('load', load);
		}
	});

	afterUpdate(async () => {
		load();
	});

	onMount(async () => {
		let url = 'https://cusdis-comments-4386.vercel.app/js/cusdis.es.js';
		let script = document.querySelector(`script[src="${url}"]`);
		if (!script) {
			script = document.createElement('script');
			script.src = url;
			script.defer = true;
			script.async = true;
			script.addEventListener('load', load);
			document.querySelector('head').appendChild(script);
		}
		window.CUSDIS.initial();
	});
</script>

<svelte:head>
	<title>Blog | {blog?.title}</title>
	<script async defer src="https://cusdis-comments-4386.vercel.app/js/cusdis.es.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/prism.js"></script>
	<meta property="og:title" content={blog?.title} />
	<meta property="og:type" content="article" />
	<meta name="author" content="Harry Kelleher" />
	<meta name="article:published_time" content={blog?._updatedAt.toISOString()} />
	<meta property="og:image" content={blog?.mainImage?.image?.asset?.url} />
	<meta property="og:description" content={blog?.feature} />
	<meta property="og:url" content={'https://harrykelleher.com/blog/' + blog?.slug.current} />
	<meta property="og:locale" content="en_GB" />
</svelte:head>

<section
	class={$GetPostBySlug.fetching
		? 'flex h-screen items-center justify-center'
		: 'mx-2 sm:mx-5 md:mx-[15%] lg:mx-[18%] xl:mx-[22%]'}
>
	{#if $GetPostBySlug.fetching}
		<Loading />
	{:else if $GetPostBySlug.errors}
		<!-- Display error message if there was an error -->
		<div class="text-red-500">An error occurred while fetching data. Please try again later.</div>
	{:else if $GetPostBySlug.data?.allPost !== undefined}
		{#if blog?.title}
			<h1 class="text-3xl font-semibold font-customHeading text-center pb-6">{blog?.title}</h1>
		{/if}

		<div class="flex flex-row justify-center items-center">
			<img src="/HK_profile2.jpg" class="h-14 mr-2 rounded-full" alt="Harry Kelleher" />
			<div class="flex flex-col justify-center text-center gap-y-1 font-customParagraph">
				<div class="text-sm text-opacity-80">by Harry Kelleher</div>
				<div class="text-sm text-opacity-80">
					{dateformat(blog._updatedAt, 'UTC:dd mmm yyyy')} - {averageReadingTime(blog.contentRaw)}
				</div>
			</div>
		</div>

		{#if blog.tags}
			<div class="pt-6 flex justify-center gap-3 flex-wrap">
				{#each blog.tags as tag}
					<Tag>{tag}</Tag>
				{/each}
			</div>
		{/if}
		{#if blog?.mainImage}
			<figure class="py-4">
				<img src={blog?.mainImage?.image?.asset?.url + '?fit=max'} alt={blog?.mainImage.alt} />
				{#if blog?.mainImage?.caption}
					<figcaption
						class="text-xs sm:text-sm text-center mx-[5%] text-gray-800 dark:text-slate-100 py-2"
					>
						{blog?.mainImage.caption}
					</figcaption>
				{/if}
			</figure>
		{/if}

		{#if blog?.contentRaw}
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
				value={blog?.contentRaw}
				onMissingComponent={false}
			/>
		{/if}
	{/if}
</section>

<Socials title={blog?.title} slug={blog?.slug.current} />
<Comments title={blog?.title} slug={blog?.slug.current} />
