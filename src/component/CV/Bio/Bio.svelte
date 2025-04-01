<script>
	import Row from '../Shared/Row/Row.svelte';

    const yearsExperience = new Date().getFullYear() - 2018
</script>

<Row rowHeader="Bio">
    <p class="text-sm">
        I'm a Data all-rounder with over {yearsExperience} years experience across the analytics lifecycle.
        I began my career in the NHS Graduate Scheme as a Data Scientist and Business Analyst, and progressed to become Technical Lead for NHS Business Intelligence.
        I then became a consultant, advising on and building critical infrastructure in my capacity as a Data Engineer. 
        Now, my mission is to share the knowledge I've gained to inspire the next generation of data talent to step into the industry!
    </p>
</Row>
