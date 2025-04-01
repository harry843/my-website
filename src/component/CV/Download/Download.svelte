<script lang="ts">
	export let screenwidth: number;

	const downloadFile = () => {
		const link = document.createElement('a');
		link.href = '/Harry Kelleher CV_2025.pdf';
		link.download = 'Harry_Kelleher_CV.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
</script>

<button
	on:click={downloadFile}
	class="flex items-center p-2 gap-x-2 text-[0.825rem] font-normal hover:underline hover:text-indigo-700 focus:ring-indigo-100 focus:ring-2 focus:rounded-lg"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="w-5 h-5 xl:w-6 xl:h-6 stroke-indigo-600"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
		<polyline points="7 10 12 15 17 10" />
		<line x1="12" y1="15" x2="12" y2="3" />
	</svg>
	{screenwidth >= 430 ? "Download CV" : ""}
</button>
