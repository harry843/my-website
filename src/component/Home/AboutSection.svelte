<script lang="ts">
    const src = '/hk-about.jpg';
	const alt = 'A profile of Harry Kelleher';
</script>

<section class="flex flex-col items-center justify-center px-1">
    <div class="mx-6 mt-8 w-16 h-0.5 bg-gray-300 md:mx-auto md:relative md:-left-24" />
    <div class="md:container grid md:grid-cols-3 gap-8 pt-5 md:pt-10">
            <div class="md:col-span-2 items-start">
            <h2
                class="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-2 rounded-sm text-lg font-bold font-customHeading uppercase"
            >
                About Me
            </h2>
            <p class="ml-px py-1">
                Hi, I'm Harry. I'm a Data Visualisation Developer from the U.K. Over the years, I have
                cultivated a skill set across a range of technologies including <b>Tableau,</b>
                <b>Python</b>
                and <b>SQL</b>.
            </p>
            <p class="ml-px py-1">
                My greatest skill is that I am highly versatile. I influence others, encode data
                pipelines, create websites, build furniture and write symphonies. As a consequence, I
                deliver projects end-to-end: from requirements elicitation and data engineering; through
                to analysis and visualisation.
            </p>

            <p class="ml-px py-1">
                Right now, I manage a team of developers to deliver interactive dashboards which empower
                users with critical insights to improve patient care. My mission? I help organisations use
                big data to take action, and discover their stories waiting to be told.
            </p>
        </div>
        <div class="md:order-first md:col-span-1 items-center justify-center flex">
            <img class="rounded-xl max-h-[500px] md:h-80" {src} {alt} />
        </div>
    
    </div>
    <div class="mx-6 mt-8 w-16 h-0.5 bg-gray-300 md:mx-auto md:relative md:-left-24" />
</section>