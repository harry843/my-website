<script lang="ts">
	import copyToClipboard from './utils/copyToClipboard';

	export let portableText;

	$: isCopied = false;

	function setIsCopied() {
		isCopied = true;
		setTimeout(() => (isCopied = false), 2100);
	}

	$: console.log(portableText.value);
</script>

<br />
<div
	class="border dark:border-accent-5/50 shadow-lg dark:shadow-none bg-accent-4/10 dark:bg-accent-5/25 px-3 pb-3 pt-1 rounded-xl my-6"
>
	<div class="flex justify-between mb-1">
		<div class="flex">
			{#if portableText.value.filename}
				<p class="opacity-70 pr-4">
					{portableText.value.filename}
				</p>
			{/if}
			{#if portableText.value.language !== 'batchfile'}
				<p>
					lang: <span class="opacity-70">{portableText.value.language}</span>
				</p>
			{/if}
		</div>

		<button
			type="button"
			class="bg-transparent border border-accent-4/15 hover:bg-accent-4/20 dark:border-accent-4/10 dark:text-neutral-200/95"
			on:click={async () => {
				await copyToClipboard(portableText.value.code);
				setIsCopied();
			}}
		>
			{#if isCopied}
				Copied!
			{:else}
				Copy
			{/if}
		</button>
	</div>
	<div
		class=" py-4 bg-accent-solid-white shadow dark:bg-accent-5/50 max-h-[36rem] sm:max-h-[46rem] rounded-lg overflow-y-scroll scrollbar-hide"
	>
		<pre class="p-2"> 
			<code>
			  {portableText.value.code} 
			</code>
		  </pre>
	</div>
</div>
