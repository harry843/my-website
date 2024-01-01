<script>
	import classNames from 'classnames';
	import { page } from '$app/stores';
	import { routes } from '../utils/utils';
	import Sun from '../../Icons/Sun.svelte';
	import Moon from '../../Icons/Moon.svelte';

	let checked = false;

	function handleCheckboxChange(event) {
		checked = event.target.checked;
	}

	$: console.log(checked)
</script>

<div
	class="items-right justify-between hidden w-full md:flex md:w-auto md:order-2"
	id="navbar-sticky"
>
	<ul
		class="flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row space-x-4 lg:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
	>
		{#each routes as route}
			<li>
				<a
					href={'/' + route.slug}
					class={classNames(
						'block py-2 px-2  text-gray-800 rounded-lg hover:bg-gray-50 hover:rounded-md',
						{
							'md:text-indigo-600': route.slug === $page.url.pathname.slice(1)
						}
					)}
					aria-current="page"
				>
					{route.label}</a
				>
			</li>
		{/each}
		<label class="relative inline-flex items-center justify-center cursor-pointer">
			<input type="checkbox" bind:checked value="" class="sr-only peer" on:change={handleCheckboxChange} />
			<div
				class="w-7 h-[15px] bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[14px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-3 after:h-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
			/>
			<div>
				{#if checked}
					<Moon />
				{:else}
				<Sun />
				{/if}
			</div>
		</label>
	</ul>
</div>
