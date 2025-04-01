<script lang="ts">
	import Download from '../Download/Download.svelte';
	import Section from '../Shared/Section/Section.svelte';
	import Contact from './Contact/Contact.svelte';

	export let screenwidth;
</script>

<Section>
	<div class="xxs:flex flex-col text-left lg:flex-row items-left justify-between">
		<div class="flex flex-col gap-y-2">
			<div class="flex gap-x-3.5 xs:gap-x-6">
				<h1 class="max-w-max text-3xl font-medium font-customHeading dark:text-black pb-2">
					Harry Kelleher
				</h1>
				<Download {screenwidth} />
			</div>
			<div class="flex flex-col sm:items-center sm:flex-row gap-x-4 pt-3">
				<h2 class="text-lg font-medium text-gray-800">
					Data Developer <span class="text-indigo-500">&#8226;</span> Analytics Instructor
				</h2>
				<span class="text-indigo-500 hidden sm:block text-xl">|</span>
				<div class="flex flex-col gap-y-2 text-left group relative">
					<p class="pt-2 sm:pt-1 dark:text-gray-950">
						<button class="text-[0.825rem]">Security Cleared</button><img
							src={`secure.svg`}
							alt="security cleared"
							style="float:left;width:24px;height:24px;margin-right:6px"
						/>
						<span
							class="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity rounded bg-gray-900 px-2 py-1 text-ss font-normal text-gray-50 group-hover:opacity-100"
						>
							Expires January 2031.
						</span>
					</p>
				</div>
			</div>
		</div>
		<Contact />
	</div>
</Section>
