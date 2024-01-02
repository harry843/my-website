<script lang='ts'>
    export let height : number;
</script>
<div class="absolute right-6 top-10 md:top-14 translate-y-24">
    <div class="relative" style="height: {height}px">
        <div class="h-full w-0.5 bg-slate-500" />
        <div
            class="absolute w-0 h-0 border-gray-600 -top-1 -left-[4px]"
            style="border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 6px solid SlateGray;"
        />
        <div class="absolute top-1/2 right-0 -translate-x-1/2 dark:text-slate-200">Acuity</div>
    </div>
</div>