<script lang="ts">
    import { fade } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    export let text: string;
  
    let isInView;
  </script>
  
  <div
    class="py-5"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
      isInView = detail.inView;
    }}
  >
    {#if isInView}
      <div in:fade={{ delay: 165, duration: 600 }}>
        <h3>{text}</h3>
      </div>
    {/if}
  </div>