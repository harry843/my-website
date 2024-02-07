import {
	GOOGLE_APPLICATION_CREDENTIALS,
	propertyId,
	startDate,
	dimensionName,
	metricName
} from '$env/static/private';
import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { formatTooltipValue } from '../../portfolio/sankey/utils';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const analyticsDataClient = new BetaAnalyticsDataClient({
		keyFilename: GOOGLE_APPLICATION_CREDENTIALS
	});
	const [response] = await analyticsDataClient.runReport({
		property: `properties/${propertyId}`,
		dateRanges: [
			{
				startDate: startDate,
				endDate: 'today'
			}
		],
		dimensions: [
			{
				name: dimensionName
			}
		],
		metrics: [
			{
				name: metricName
			}
		]
	});

	let reads = 0;
	response.rows.forEach((row) => {
        //console.log(row.metricValues[0], row.dimensionValues[0])
		if (row.dimensionValues[0].value.startsWith(`/blog/${params.slug}`)) {
			
            reads += parseInt(row.metricValues[0].value);
		}
	});
	console.log("Reads:",reads)
	return { "reads" : formatTooltipValue(reads) };
}