<script>
	import { PortableText } from "@portabletext/svelte";
	import CustomQuote from "./CustomQuote.svelte";
	import CustomImage from "./CustomImage.svelte";
	import CustomIFrame from "./CustomIFrame.svelte";
	import CustomCodeBlock from "./CustomCodeBlock.svelte";
	import CustomJupyterCell from "./CustomJupyterCell.svelte";
	import BlockQuote from "./BlockQuote.svelte";
	import CustomHeading from "./CustomHeading.svelte";
	import CustomUrl from "./CustomURL.svelte";
	import CustomListItem from "./CustomListItem.svelte";
	import CustomOrderedListItem from "./CustomOrderedListItem.svelte";
	import CustomBullet from "./CustomBullet.svelte";
	import CustomOrderedList from "./CustomOrderedList.svelte";
	import CustomAdmonitionParagraph from "./CustomAdmonitionParagraph.svelte";

    export let portableText;

    $: open = portableText.value.open
</script>

  <details class="bg-{portableText.value.color}-50 border-l-4 border-{portableText.value.color}-500 p-4 rounded-md my-4 group" {open}>
    <summary class="cursor-pointer font-semibold text-{portableText.value.color}-800">
      {portableText.value.header}
    </summary>
    <div class="mt-2 text-sm text-gray-800 space-y-2">
                      <PortableText
                    components={{
                        types: {
                            quote: CustomQuote,
                            imageWithAlt: CustomImage,
                            iframe: CustomIFrame,
                            code: CustomCodeBlock,
                            jupyterCell: CustomJupyterCell
                        },
                        block: {
                            normal: CustomAdmonitionParagraph,
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
                            bullet: CustomListItem,
                            number: CustomOrderedListItem
                        },
                        list: {
                            bullet: CustomBullet,
                            number: CustomOrderedList
                        }
                    }}
                    value={portableText.value.content}
                    onMissingComponent={false}
                />
    </div>
  </details>