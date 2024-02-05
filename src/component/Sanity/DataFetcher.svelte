<script lang="ts">
    import { createClient } from '@sanity/client';
    import { onMount } from 'svelte';
    import type { Writable } from 'svelte/store';

    export let query: string; // Allow passing different queries to the component
    export let onData: (data: any) => void; // callback function to pass data to parent
    export let store: Writable<any[]>;

    const client = createClient({
        projectId: 'g2pdrwyj',
        dataset: 'production',
        useCdn: true,
        apiVersion: '2024-02-04'
    });

    let data = null;

    const getData = async (query) => {
        let storedData = null;
        const unsubscribe = store.subscribe(value => {
            storedData = value;
        });

        if (Object.keys($store).length > 0) {
            unsubscribe();
            console.log("Cache")
            return storedData;
        } else {
            const response = await client.fetch(query);
            store.set(response);
            unsubscribe();
            console.log("API")
            return response;
        }
    };

    onMount(async () => {
        data = await getData(query);
        onData(data); // Pass data to parent component
    });
</script>


