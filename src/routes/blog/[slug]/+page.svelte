<script async defer src="https://cusdis.com/js/cusdis.es.js" lang="ts">
	import { onMount, createEventDispatcher, afterUpdate, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import CustomHeading from '../../../component/PortableText/CustomHeading.svelte';
	import CustomParagraph from '../../../component/PortableText/CustomParagraph.svelte';
	import CustomUrl from '../../../component/PortableText/CustomURL.svelte';
	import CustomBullet from '../../../component/PortableText/CustomBullet.svelte';
	import BlockQuote from '../../../component/PortableText/BlockQuote.svelte';
	import CustomListItem from '../../../component/PortableText/CustomListItem.svelte';
	import CustomQuote from '../../../component/PortableText/CustomQuote.svelte';
	import CustomImage from '../../../component/PortableText/CustomImage.svelte';
	import Tag from '../../../component/Tag/Tag.svelte';
	import averageReadingTime from '../../../component/Card/BlogPostCard/averageReadingTime';
	import dateformat from 'dateformat';
	import type { PageData } from './$houdini';
	import { PortableText } from '@portabletext/svelte';

	export let data: PageData;

	$: ({ GetPostBySlug } = data);

	$: blog = $GetPostBySlug.data?.allPost[0];

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
	<meta property="og:title" content={blog?.title} />
	<meta property="og:image" content={blog?.mainImage?.image?.asset?.url + '?w=1200&h=627'} />
	<meta property="og:description" content={blog?.feature}/>
	<meta property="og:url" content={'https://harrykelleher.com/blog/'+blog?.slug.current}/>
</svelte:head>

<section class="mx-2 sm:mx-5 md:mx-[15%] lg:mx-[18%] xl:mx-[22%]">
	{#if blog?.title}
		<h1 class="text-3xl font-semibold font-customHeading text-center pb-6">{blog?.title}</h1>
	{/if}

	<div class="flex flex-row justify-center items-center">
		<img src="/HK_profile2.jpg" class="h-14 mr-2 rounded-full" alt="Harry Kelleher" />

		<div class="flex flex-col justify-center text-center gap-y-1 font-customParagraph">
			<div class="text-sm text-opacity-80">by Harry Kelleher</div>
			<div class="text-sm text-opacity-80">
				{dateformat(blog._createdAt, 'UTC:dd mmm yyyy')} - {averageReadingTime(blog.contentRaw)}
			</div>
			{#if !blog._updatedAt}
				<div class="text-sm text-opacity-80">
					Updated {dateformat(blog._updatedAt, 'UTC:dd mmm yyyy')}
				</div>
			{/if}
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
		<div class="py-4">
			<img src={blog?.mainImage?.image?.asset?.url + '?fit=max'} alt={blog?.mainImage.alt} />
		</div>
	{/if}
	{#if blog?.mainImage?.caption}
		<div><p class="py-2 text-center text-sm">{blog?.mainImage?.caption}</p></div>
	{/if}

	{#if blog?.contentRaw}
		<PortableText
			components={{
				types: {
					quote: CustomQuote,
					imageWithAlt: CustomImage
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
		<br />
	{/if}
</section>
<section class="flex flex-col items-left text-left mx-2 md:mx-[15%] pt-5">
	<h2 class="py-2 font-customHeading font-medium text-2xl">What's your take?</h2>
	<p class="pb-4">A penny for your thoughts in the comments below.</p>
	<div
		id="cusdis_thread"
		data-host="https://cusdis-comments-4386.vercel.app"
		data-app-id="6a1a98be-887b-4480-88ed-0cc2e588698a"
		data-page-id={blog?.slug.current}
		data-page-url="https://staging.harrykelleher.com/blog/{blog?.slug.current}"
		data-page-title={blog?.title}
		data-theme="light"
	/>
</section>
