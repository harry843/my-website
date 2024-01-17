<script>
	let width;
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-28Y41L6BQN"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-28Y41L6BQN');
	</script>
	<title>Piano | Harry Kelleher</title>
</svelte:head>

<section
	bind:clientWidth={width}
	class="flex flex-col items-center font-normal px-4 text-sm w-full"
>
	<p class="p-2">Hi, I'm Harry, and I like to play the piano.</p>
</section>
