<script lang="ts">
	export let portableText;
	$: quote = portableText?.value
</script>
<br>
<figure
	class="text-lg italic font-customParagraph font-thin bg-gray-100 border-l-8 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 m-0 py-3 px-10"
>
	<blockquote>
		<slot name="text">{quote.text}</slot>
	</blockquote>

	<figcaption class="text-right not-italic text-base pt-2 dark:text-white">
		<slot name="author">{quote.author}</slot>
	</figcaption>
</figure>
<br>
