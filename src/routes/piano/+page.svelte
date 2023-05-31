<svelte:head>
	<title>Piano | Harry Kelleher</title>
</svelte:head>

<script>
	let width;
</script>

<section bind:clientWidth={width}
	class="flex flex-col items-center font-normal px-4 text-sm w-full "
>
	<p class="p-2">
		Hi, I'm Harry, and I like to play the piano.
	</p>
</section>
