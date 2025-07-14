<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Prism from 'prismjs';
	import 'prismjs/components/prism-python';

	// Import Prism’s default light theme
	import 'prismjs/themes/prism.css';
	import genImageUrl from '../../Sanity/utils/genImageUrl';

	export let portableText;
	
	let highlightedCode = '';
	let isLocalOrStaging = $page.url.href.includes('localhost') || $page.url.href.includes('staging.harrykelleher.com');
	const dataset = process.env.NODE_ENV === 'development' || isLocalOrStaging ? 'development' : 'production';

	const columns = portableText?.value?.outputTable?.columns ?? [];
	const rawRows = portableText?.value?.outputTable?.rows ?? '';

	// Parse space-delimited values into rows using the provided columns
	function parseRows(columns, raw) {
		const lines = raw.trim().split('\n').filter(Boolean);
		return lines.map(line => {
		const values = line.trim().split(/\s+/);
		return Object.fromEntries(columns.map((col, i) => [col, values[i] ?? '']));
		});
	}

	const rows = parseRows(columns, rawRows);




	onMount(() => {
		if (portableText?.value?.code) {
			highlightedCode = Prism.highlight(
				portableText.value.code,
				Prism.languages.python,
				'python'
			);
		}
	});
</script>

<div class="my-6">
	<div class="border border-gray-200 dark:border-slate-700 rounded-md bg-gray-100">
		<div class="overflow-auto p-2">
<pre class="text-[0.9rem] font-mono">{@html `<code class="language-python">${highlightedCode}</code>`}</pre>
		</div>

		{#if portableText.value.outputText && !portableText.value.outputTable}
			<div class="font-mono p-4 text-sm whitespace-pre-wrap border-t border-gray-200 rounded-bl-md rounded-br-md bg-white dark:bg-slate-900 text-gray-800 dark:text-green-400">
				{portableText.value.outputText}
			</div>
		
		{:else if portableText.value.outputImage}	
		<div class="mt-4 rounded-bl-md rounded-br-md overflow-hidden border-t border-gray-200 dark:border-gray-700">
			<img src="{genImageUrl(portableText.value.outputImage.asset._ref, dataset, '?fit=max')}" alt="Code output" class="w-full h-auto" />
		</div>
		{:else if portableText.value.outputTable}
{#if columns.length > 0 && rows.length > 0}
  <div class="overflow-x-auto mt-1 bg-white border-t border-gray-200 rounded-bl-md rounded-br-md">
    <table class="min-w-full text-sm text-left font-sans">
      <thead class="bg-gray-100 font-semibold">
        <tr>
          {#each columns as col}
            <th class="px-4 py-2 border-b border-[#bfbfbf] bg-white whitespace-nowrap text-right">{col}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
{#each rows as row, rowIndex (rowIndex)}
  <tr class="even:bg-gray-100 hover:bg-sky-100">
    {#each columns as col, colIndex (colIndex)}
      <td
        class="px-4 py-2 whitespace-nowrap
          {rowIndex === rows.length - 1 && colIndex === 0 ? 'rounded-bl-md' : ''}
          {rowIndex === rows.length - 1 && colIndex === columns.length - 1 ? 'rounded-br-md' : ''}"
      >
        {row[col]}
      </td>
    {/each}
  </tr>
{/each}

      </tbody>
    </table>
  </div>
{:else}
  <p class="text-gray-500 italic">No table data available.</p>
{/if}
	{/if}
	</div>
</div>
