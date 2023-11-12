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
    <slot />
  </a>
{:else}
  <slot />
{/if}