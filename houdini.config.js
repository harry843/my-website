/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'https://g2pdrwyj.api.sanity.io/v2023-08-01/graphql/production/default'
	},
	plugins: {
		'houdini-svelte': {}
	},
	features: {
		imperativeCache: true
	},

	scalars: {
		DateTime: {
			type: 'Date',
			unmarshal(val) {
				return val ? new Date(val) : null;
			},
			marshal(date) {
				return date && date.getTime();
			}
		},
		JSON: {
			type: 'JSON' // <-  The TypeScript type
		}
	},
	cacheBufferSize: 12
};

export default config;
