<script lang="ts">
  import type {MarkComponentProps} from '@portabletext/svelte'

  // Property custom marks receive from @portabletext/svelte when rendered
  export let portableText: MarkComponentProps<{
    href?: string
    openInNewTab?: boolean
  }>

  const value = portableText.value
  const newWindow = value.openInNewTab || false

</script>

{#if value.href}
  <a class="text-blue-600 underline" href={value.href} rel="noreferrer" target={newWindow ? '_blank' : undefined}>
    <!-- Marks receive children which you can render with Svelte's slots -->
    <slot />
  </a>
{:else}
  <slot />
{/if}