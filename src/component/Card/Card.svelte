<script lang="ts">
	export let additionalClass: string | undefined = undefined;
	export let href: string | undefined = undefined;
	export let index: number | undefined = undefined;
	const isExternalLink = !!href && /^((http|https):\/\/)/.test(href);
	export let target: '_self' | '_blank' = isExternalLink ? '_blank' : '_self';
	export let rel = isExternalLink ? 'noopener noreferrer' : undefined;

	$: tag = href ? 'a' : 'article';
	$: linkProps = {
		href,
		target,
		rel
	};
</script>

<svelte:element
	this={tag}
	class="rounded-md border border-gray-100 transition-all duration-400 relative w-full hover:shadow-lg {additionalClass}"
	{...linkProps}
	data-sveltekit-preload-data
	{...$$restProps}
>		
<div class={index === 0 ? "grid grid-cols-1 lg:grid-cols-2 lg:place-items-center lg:gap-x-3 p-1 md:p-3" : "p-1 md:p-3"}>
{#if $$slots.image}
			<div class={index === 0 ? "" : "grid grid-cols-1 place-items-center"} >
				<slot name="image" />
			</div>
		{/if}
	<div class="flex flex-col justify-between gap-10 px-2 lg:px-3 xl:px-6 py-6 flex-1/2">

		<div class="flex flex-col flex-1">
			<slot name="content" />
		</div>
		{#if $$slots.footer}
			<div class="">
				<slot name="footer" />
			</div>
		{/if}
	</div>
</div>

</svelte:element>

<!-- <style lang="scss">
	.card {
		background: var(--color--card-background);
		box-shadow: var(--card-shadow);
		color: var(--color--text);
		border-radius: 10px;
		transition: all 0.4s ease;
		position: relative;
		overflow: hidden;
		width: 100%;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		text-decoration: none;

		&[href],
		&[onclick] {
			cursor: pointer;
			&:hover {
				box-shadow: var(--card-shadow-hover);
				transform: scale(1.01);
			}
		}
	}

	.body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 10px;
		padding: 20px 20px;
		flex: 1 0 50%;

		.content {
			display: flex;
			flex-direction: column;
			flex: 1;
		}
	}

	.image {
		position: relative;
		flex: 1 0 max(50%, 330px);
		// height: min(100%, 300px);
		min-height: 280px;
		max-height: 350px;
	}

	:global(.card [slot='image']) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
	}
</style> -->
