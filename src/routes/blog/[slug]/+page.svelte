<script lang="ts">
	import CustomHeading from '../../../component/PortableText/CustomHeading.svelte';
	import CustomParagraph from '../../../component/PortableText/CustomParagraph.svelte';
	import CustomUrl from '../../../component/PortableText/CustomURL.svelte';
	import CustomBullet from '../../../component/PortableText/CustomBullet.svelte';
	import BlockQuote from '../../../component/PortableText/BlockQuote.svelte';
	import CustomListItem from '../../../component/PortableText/CustomListItem.svelte';
	import CustomQuote from '../../../component/PortableText/CustomQuote.svelte';
	import CustomImage from '../../../component/PortableText/CustomImage.svelte';
	import Image from '../../../component/Image/Image.svelte';
	import Tag from '../../../component/Tag/Tag.svelte';
	import averageReadingTime from '../../../component/Card/BlogPostCard/averageReadingTime';
	import dateformat from 'dateformat';
	import type { PageData } from './$houdini';
	import { PortableText } from '@portabletext/svelte';

	export let data: PageData;

	$: ({ GetPostBySlug } = data);

	$: blog = $GetPostBySlug.data?.allPost[0];
</script>

<svelte:head>
	<title>Blog | {blog?.title}</title>
</svelte:head>

<div class="mx-5 md:mx-[15%] lg:mx-[18%] xl:mx-[22%]">
	{#if blog?.title}
		<h1 class="text-3xl font-semibold font-customHeading text-center pb-6">{blog?.title}</h1>
	{/if}

	<div class="flex flex-row justify-center items-center">
		<img src="/HK_thumbnail.png" class="h-12 mr-2" alt="Harry Kelleher" />

		<div class="flex flex-col justify-center text-center gap-y-1 font-customParagraph">
			<div class="text-sm text-opacity-80 ">by Harry Kelleher</div>
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
</div>