<script lang="ts">
import handleAnchorClick from "../Blog/utils/handleAnchorClick";
import QuotationMarks from "../Icons/QuotationMarks.svelte";
import Carousel from 'svelte-carousel';

export let screenwidth;
	$: testimonials = [
        {
            name: 'Dr Gareth Whiteley',
            src: 'gareth-whiteley.jpeg',
            role: 'Head of Data Services',
            organisation: 'Answer Digital',
            recommendation: 
            "Harry's work ethic is exemplary. He made a tremendous impact in a short time, building pipelines and shaping architecture on a key contract. I feel fortunate to have worked with such a driven talent."
        },
		{
			name: 'Rupert Chaplin',
			src: 'rupert-chaplin.jpeg',
			role: 'Head of Data Science',
			organisation: 'NHS Digital',
			recommendation:
				'Harry is a remarkable Data Developer. But his contributions extended far beyond his official role - building a data community, setting standards, and being an inspiring mentor to the team.'
		},

		{
			name: 'Penny Chalton',
			src: 'penny-chalton.jpeg',
			role: 'Programme Director',
			organisation: 'DEFRA',
			recommendation:
				'Harry approaches each challenge with determination and a drive to succeed. He has a sharp intellect, a caring attitude and an enormous amount of enthusiasm. A total pleasure to work with!'
		},
        {
			name: 'Alistair Bullward',
			src: 'alistair-bullward.jpeg',
			role: 'Head of Data Product',
			organisation: 'NHS England',
			recommendation:
				'I had the great pleasure of working with Harry over the last 4 years. He not only brings a wealth of data skills but is also a leader who is great at bringing people together to get stuff done!'
		}
	];
</script>
<div class="mx-6 md:mt-8 w-16 h-0.5 bg-gray-300 md:mx-auto md:relative md:-left-24" />
<section id='testimonials' class="flex flex-col">
    <div class="md:container grid md:grid-cols-6 gap-8 pt-5 md:pt-10">
    <div class="md:col-start-3 md:col-span-2">
        <h2
            class="inline-block bg-yellow-400 dark:text-gray-900 py-2 px-4 md:-ml-4 mb-2 rounded-sm text-lg font-bold font-customHeading uppercase"
        >
        <a href="testimonials" on:click={handleAnchorClick}>Testimonials</a>
        </h2>
    </div>
    <div class="md:col-start-2 md:col-span-4">
        <p class="ml-px px-1 font-customQuote xl:text-lg 2xl:text-xl">I care about making strong relationships.</p>
    </div>
    
</div>

<div class="pt-8 pb-10">
<Carousel
autoplay
autoplayDuration={4700}
pauseOnFocus
>
    {#each testimonials as testimonial}
    <div class="border-2 border-gray-200 rounded-md relative">
       <div class="absolute top-3 right-1 md:top-0 md:right-0 md:mx-1 md:my-2 lg:m-2"> <QuotationMarks /> </div>
        <div class="mx-[7.5%] xs:mx-[12%] flex flex-col items-center justify-between h-full">
            <div class="py-3">
                <img class="w-28 h-28 rounded-full border-4" src={testimonial.src} alt={testimonial.name} />
            </div>
            <div class="pb-2.5 text-center flex flex-col justify-center items-center flex-grow">
                <div class="relative">
                    <div class="before:absolute before:top-0 before:left-0 before:border-t-2 before:border-l-2 before:border-slate-400 before:w-6 before:h-5 after:absolute after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:border-slate-400 after:w-6 after:h-5">
                        <p class="italic px-1.5 mx-1 md:mx-2 lg:mx-3 py-4 text-[1.1rem] lg:text-[1.15rem] xl:text-[1.2rem] xl:leading-relaxed 2xl:text-[1.25rem]">
                        {testimonial.recommendation}
                      </p>
                    </div>
                  </div>
                  
                <p class="p-1 py-1.5 pt-7 font-customHeading">{testimonial.name}</p>
                {#if screenwidth >= 768}
                <p class="text-sm xs:text-base text-center font-customHeading font-light dark:text-slate-300 py-2.5 px-2">{testimonial.role} | {testimonial.organisation}</p>
                {/if}
                {#if screenwidth < 768}
                <p class="p-1 py-1.5 font-customQuote text-slate-700 dark:text-slate-300 font-light">{testimonial.role}</p>
                <p class="p-1 py-1.5 font-customHeading font-light">{testimonial.organisation}</p>
                {/if}
            </div>
        </div>
    </div>
    {/each}
</Carousel>
</div>
</section>
