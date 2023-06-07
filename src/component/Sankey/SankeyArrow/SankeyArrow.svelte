<script lang='ts'>
    export let height : number;
</script>
<div class="absolute right-6 top-10 md:top-14">
    <div class="relative" style="height: {height}px">
        <div class="h-full w-0.5 bg-gray-600" />
        <div
            class="absolute w-0 h-0 border-gray-600 -top-1 -left-[4px]"
            style="border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 6px solid black;"
        />
        <div class="absolute top-1/2 right-0 -translate-x-1/2">Acuity</div>
    </div>
</div>