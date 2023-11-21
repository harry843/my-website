<script lang="ts">
	import '../app.css';
	import Sidebar from '../component/NavBar/Footer/Sidebar.svelte';
	import NavBar from '../component/NavBar/NavBar.svelte';
	import { page } from '$app/stores';
	$: outerWidth = 0
</script>

<svelte:window bind:outerWidth={outerWidth} />

<NavBar />
<section class="px-2 xs:px-4 md:px-16 lg:px-32 xl:px-44 2xl:px-56 mt-20 py-4">
	<slot />
</section>
{#if $page.url.pathname.slice(1) != 'cv' && outerWidth !== 0}
<Sidebar {outerWidth}/>
{/if} 

