/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'https://g2pdrwyj.api.sanity.io/v2023-08-01/graphql/production/default'
	},
	plugins: {
		'houdini-svelte': {}
	},

	scalars: {
		/* in your case, something like */
		JSON: {
			// <- The GraphQL Scalar
			type: 'JSON' // <-  The TypeScript type
		},
		DateTime: {
			type: 'Date',
			marshal(val) {
			  return val.toISOString()
			},
			unmarshal(val) {
			  return new Date(val)
			}
		  }
	}
};

export default config;
