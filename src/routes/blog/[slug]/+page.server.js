import {
	GOOGLE_APPLICATION_CREDENTIALS,
	propertyId,
	startDate,
	dimensionName,
	metricName
} from '$env/static/private';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

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

	//console.log('Report result:', parseInt(response.rows[0].metricValues[0].value));
	let reads = 0;
	response.rows.forEach((row) => {
		if (row.dimensionValues[0].value.startsWith(`/blog/${params.slug}`)) {
			//console.log(row.dimensionValues[0], row.metricValues[0]);
			reads += parseInt(row.metricValues[0].value);
		}
	});
	console.log("Reads:",reads)
	return { "reads" : reads };
}