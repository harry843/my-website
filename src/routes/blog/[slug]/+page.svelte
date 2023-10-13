<script lang="ts">
	import type { PageData } from './$houdini';
	import { PortableText } from '@portabletext/svelte';
	export let data: PageData;

	$: ({ GetPostBySlug } = data);

</script>

<div>
	<h1 class="text-xl font-medium">{$GetPostBySlug.data?.allPost[0].title}</h1>

	<br />
	{#if $GetPostBySlug.data?.allPost[0].contentRaw != null}
			<PortableText class="" value={$GetPostBySlug.data?.allPost[0].contentRaw} />
	{/if}
</div>
