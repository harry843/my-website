<script lang="ts">
import QuotationMarks from "../Icons/QuotationMarks.svelte";

	$: testimonials = [
		{
			name: 'Rupert Chaplin',
			src: 'rupert-chaplin.jpeg',
			role: 'Head of Data Science',
			organisation: 'NHS Digital',
			recommendation:
				'Harry is a remarkable Data Developer. But his contributions extended far beyond his official role - building a data community, setting standards, and being an inspiring mentor to the team.'
		},
		{
			name: 'Alistair Bullward',
			src: 'alistair-bullward.jpeg',
			role: 'Head of Data Product',
			organisation: 'NHS England',
			recommendation:
				'I had the great pleasure of working with Harry over the last 4 years. He not only brings a wealth of data skills but is also a leader who is great at bringing people together to get stuff done!'
		},
		{
			name: 'Penny Chalton',
			src: 'penny-chalton.jpeg',
			role: 'Programme Director',
			organisation: 'DEFRA',
			recommendation:
				'Harry approaches each challenge with determination and a drive to succeed. He has a sharp intellect, a caring attitude and an enormous amount of enthusiasm. A total pleasure to work with!'
		}
	];
</script>
<div class="mx-6 md:mt-8 w-16 h-0.5 bg-gray-300 md:mx-auto md:relative md:-left-24" />
<section class="flex flex-col">
    <div class="md:container grid md:grid-cols-6 gap-8 pt-5 md:pt-10">
    <div class="md:col-start-3 md:col-span-2">
        <h2
            class="inline-block bg-yellow-400 dark:text-gray-900 py-2 px-4 md:-ml-4 mb-2 rounded-sm text-lg font-bold font-customHeading uppercase"
        >
            Testimonials
        </h2>
    </div>
    <div class="md:col-start-2 md:col-span-4">
        <p class="ml-px">I care about making strong relationships. What people say about me reflects the trust I build.</p>
    </div>
    
</div>

<div class="grid place-items-center grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-3 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 pt-10">
    {#each testimonials as testimonial}
        <div class="border-2 border-gray-200 rounded-md mx-[10%] md:mx-2 md:max-w-[300px] md:max-h-[530px]">
            <div class="mx-[12%] flex flex-col items-center justify-between h-full">
                <div class="py-3">
                    <img class="w-28 h-28 rounded-full border-4" src={testimonial.src} alt={testimonial.name} />
                </div>
                
                <div class="pb-2.5 text-center flex flex-col justify-center items-center flex-grow">
                    <QuotationMarks />
                    <p class="italic px-1 py-1.5 text-[1.03rem] h-[225px]">{testimonial.recommendation}</p>
                    <p class="text-center font-customQuote text-slate-700 py-2.5 px-2">{testimonial.name}</p>
                    <p class="p-1 py-1.5 font-customHeading">{testimonial.role}</p>
                    <p class="p-1 py-1.5 font-customHeading font-light">{testimonial.organisation}</p>
                </div>
            </div>
        </div>
    {/each}
</div>
</section>
