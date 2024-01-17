<script>
	import Bio from '../../component/CV/Bio/Bio.svelte';
	import Education from '../../component/CV/Education/Education.svelte';
	import Experience from '../../component/CV/Experience/Experience.svelte';
	import Header from '../../component/CV/Header/Header.svelte';
	import Skills from '../../component/CV/Skills/Skills.svelte';
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
	<title>CV | Harry Kelleher</title>
</svelte:head>

<div class="grid place-items-center py-2 m-2 sm:mx-auto sm:my-0 lg:m-0">
	<section class="flex flex-col items-center rounded-lg bg-white border px-4 text-sm sm:m-2">
		<div class="h-full w-full overflow-hidden bg-white">
			<Header />
			<Bio />
			<Skills />
			<Experience />
			<Education />

			<div class="xxs:grid grid-rows gap-y-4 lg:grid-cols-2 gap-x-4" />
		</div>
	</section>
</div>
