import { writable } from 'svelte/store';
import type { TransformedLink, TransformedNode } from './types/portfolio';

export const linkTooltipData = writable<Partial<TransformedLink>>({
	index: 0,
	source: undefined,
	target: undefined,
	value: undefined,
	x0: undefined,
	x1: undefined,
	y0: undefined,
	y1: undefined
});
export const nodeTooltipData = writable<Partial<TransformedNode>>({
	index: 0,
	name: undefined,
	fixedLayer: undefined,
	x0: undefined,
	y0: undefined,
	colour: undefined
});
export const activeNode = writable({active : undefined});

export const addActiveNode = writable((node: number) => {
		(state: any) => ({
			activeNodes: [...state.activeNodes, node]
		});
	}
);

export const removeActiveNode = writable((node: number) => {
		(state: any) => ({
			activeNodes: state.activeNodes.filter((nodeName: number) => nodeName !== node)
		});
	}
);

export const hoverStore = writable({ link: false, node: false });
export const clickStore = writable({ node: false });
