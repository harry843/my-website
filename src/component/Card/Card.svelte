<script lang="ts">
	export let additionalClass: string | undefined = undefined;
	export let href: string | undefined = undefined;
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
	class="bg-gray-50 shadow-slate-200 rounded-md transition-all duration-400 relative overflow-hidden w-full flex flex-col lg:flex-row flex-wrap hover:shadow-lg {additionalClass}"
	{...linkProps}
	data-sveltekit-preload-data
	{...$$restProps}
>		

{#if $$slots.image}
			<div class="relative flex flex-1 max-w-[50%,330px] max-h-300px">
				<slot name="image" />
			</div>
		{/if}
	<div class="flex flex-col justify-between gap-10 px-20 py-20 flex-1/2">

		<div class="flex flex-col flex-1">
			<slot name="content" />
		</div>
		{#if $$slots.footer}
			<div class="">
				<slot name="footer" />
			</div>
		{/if}
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
