<script lang="ts">
	import CustomHeading from '../../../component/PortableText/CustomHeading.svelte';
	import CustomParagraph from '../../../component/PortableText/CustomParagraph.svelte';
	import CustomUrl from '../../../component/PortableText/CustomURL.svelte';
	import CustomBullet from '../../../component/PortableText/CustomBullet.svelte';
	import BlockQuote from '../../../component/PortableText/BlockQuote.svelte';
	import CustomListItem from '../../../component/PortableText/CustomListItem.svelte';
	import CustomQuote from '../../../component/PortableText/CustomQuote.svelte';
	import type { PageData } from './$houdini';
	import { PortableText } from '@portabletext/svelte';

	export let data: PageData;

	$: ({ GetPostBySlug } = data);

	$: blog = $GetPostBySlug.data?.allPost[0];
	// $: blog ? console.log('blog', blog.contentRaw.filter(x => x._type == 'quote')) : null
</script>

<svelte:head>
	<title>Blog | {blog?.title}</title>
</svelte:head>

<div class="mx-5 md:mx-[15%] lg:mx-[18%] xl:mx-[22%]">
	{#if blog?.title}
		<h1 class="text-3xl font-semibold font-customHeading pb-6">{blog?.title}</h1>
	{/if}
	{#if blog?.mainImage}
		<div class="py-4">
			<img src={blog?.mainImage?.image?.asset?.url + '?fit=max'} alt={blog?.mainImage.alt} />
		</div>
	{/if}

	{#if blog?.contentRaw}
		<PortableText
			components={{
				types: {
					quote: CustomQuote
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
