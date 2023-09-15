<script lang="ts">
	import '../app.css';
	import Sidebar from '../component/NavBar/Footer/Sidebar.svelte';
	import NavBar from '../component/NavBar/NavBar.svelte';
</script>

<NavBar />
<section class="flex min-h-screen px-2 xs:px-4 md:px-16 lg:px-32 xl:px-44 2xl:px-56 mt-20 py-4">
	<slot />
	<Sidebar />
</section>
