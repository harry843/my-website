<script lang="ts">
	import '../app.css';
	import NavBar from '../component/NavBar/NavBar.svelte';
</script>

<NavBar />
<section class="px-2 xs:px-4 md:px-16 lg:px-32 xl:px-44 2xl:px-56 items-center mt-20 py-4">
	<slot />
</section>
