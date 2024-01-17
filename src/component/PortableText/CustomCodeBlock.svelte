<script lang="ts">
	import CopyToClipboard from '../Icons/CopyToClipboard.svelte';
	import Tick from '../Icons/Tick.svelte';
	import copyToClipboard from './utils/copyToClipboard';

	export let portableText;

	$: isCopied = false;

	function setIsCopied() {
		isCopied = true;
		setTimeout(() => (isCopied = false), 1800);
	}

	$: console.log(portableText.value);
</script>

<br />
<div
	class="border dark:border-accent-5/50 shadow-lg dark:shadow-none bg-gray-50 dark:bg-slate-900 dark:bg-accent-5/25 px-3 pb-3 pt-1 rounded-xl my-6"
>
	<div class="flex justify-between border-b p-1 pb-1.5">
		<div class="flex gap-x-1 md:gap-x-3">
			{#if portableText.value.language !== 'batchfile'}
				<div class="text-indigo-600 dark:text-sky-300 rounded-md text-sm md:text-base font-medium px-1 pr-1 first-line:xxs:pr-2 border">
					{portableText.value.language ==="mysql" ? "SQL" : portableText.value.language}
				</div>
			{/if}
			{#if portableText.value.filename}
				<div class=" pl-1 xxs:pl-2 text-[0.7rem] md:text-sm text-gray-700 dark:text-slate-200 flex items-center justify-center">
					{portableText.value.filename}
				</div>
			{/if}
		</div>

		<button
			type="button"
			class="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-500 rounded-md hover:fill-indigo-600 hover:text-indigo-700 hover:border-indigo-200 dark:hover:border-gray-200 dark:text-gray-300 dark:hover:text-white p-0.5 dark:fill-gray-300 dark:hover:fill-white"
			on:click={async () => {
				await copyToClipboard(portableText.value.code);
				setIsCopied();
			}}
			on:keydown={async () => {
				await copyToClipboard(portableText.value.code);
				setIsCopied();
			}}
		>
			{#if isCopied}
				<span class="flex flex-row text-[0.7rem] items-center gap-x-1 pr-1"
					><Tick size={3.5} />Copied</span
				>
			{:else}
				<span class="flex flex-row text-[0.7rem] items-center gap-x-1 pr-1"
					><CopyToClipboard size={3.5} />Copy</span
				>
			{/if}
		</button>
	</div>
	<div
		class=" py-4 bg-accent-solid-white shadow dark:bg-accent-5/50 max-h-[36rem] sm:max-h-[46rem] rounded-lg overflow-y-scroll scrollbar-hide"
	>
		<pre class="text-sm p-2"><code>{portableText.value.code}</code></pre>
	</div>
</div>
