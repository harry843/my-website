import { onMount, afterUpdate } from 'svelte';
import { debounce } from 'lodash-es';

export function useResponsiveGraphDims() {
	let ref: any = null;
	let graphWidth = 0;
	let graphHeight = 0;

	const setGraphDims = debounce((current: HTMLDivElement) => {
		graphWidth = current.clientWidth;
		graphHeight = current.clientHeight;
	}, 50);

	// on mount, update chart and add resize event listener
	onMount(() => {
		if (ref) {
			setGraphDims(ref);
			const setResize = () => setGraphDims(ref);
			window.addEventListener('resize', setResize);

			// clean up event listener on unmount
			afterUpdate(() => {
				return () => {
					window.removeEventListener('resize', setResize);
				};
			});
		}
		return () => {};
	});

	return { ref, graphWidth, graphHeight };
}
