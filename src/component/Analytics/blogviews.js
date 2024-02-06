import { env } from '$env/dynamic/public';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
const analyticsDataClient = new BetaAnalyticsDataClient({
	keyFilename: env.PUBLIC_GOOGLE_APPLICATION_CREDENTIALS
});

// Runs a simple report.
export default async function queryData(slug) {
	const [response] = await analyticsDataClient.runReport({
		property: `properties/${env.PUBLIC_propertyId}`,
		dateRanges: [
			{
				startDate: env.PUBLIC_startDate,
				endDate: 'today'
			}
		],
		dimensions: [
			{
				name: env.PUBLIC_dimensionName
			}
		],
		metrics: [
			{
				name: env.PUBLIC_metricName
			}
		]
	});

	console.log('Report result:');
    let reads = 0;
	response.rows.forEach((row) => {
		
        if (row.dimensionValues[0].value.startsWith(`/blog/${slug}`)) {
			//console.log(row.dimensionValues[0], row.metricValues[0]);
            reads += parseInt(row.metricValues[0].value)
        
		}
	});    
    console.log(reads)
	return reads;
}

queryData();
