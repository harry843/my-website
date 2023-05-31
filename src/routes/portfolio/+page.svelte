<svelte:head>
    <title>Portfolio | Harry Kelleher</title> 
</svelte:head>

<script>
	let width;
</script>

<section bind:clientWidth={width} class="container flex flex-col items-center font-normal px-4 text-sm w-full ">
	<p class="p-2">Hi, I'm Harry, and I like to create.</p>
	<p>Click <a href="/portfolio/sankey" style="color:blue"><u>here</u></a> to see my Sankey diagram on patient flow through NHS services. </p>
	<p class="pt-2">Click <a href="https://public.tableau.com/app/profile/harry.kelleher" target=”_blank” style="color:blue"><u>here</u></a> to check out my Tableau portfolio. </p>
</section>
