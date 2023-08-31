import { scaleLinear } from 'd3-scale';

export function radialScale(domainArray: number[], rangeArray: number[]) {
	return scaleLinear().domain(domainArray).range(rangeArray);
}

export function angleToCoord(
	radarDim: number,
	num_vertices: number,
	index: number,
	radial_input: number,
	domainArray: number[],
	rangeArray: number[]
) {
	const scale = radialScale(domainArray, rangeArray);
	const angle = Math.PI / 2 + (2 * Math.PI * index) / num_vertices;
	const x = radarDim / 2 + Math.cos(angle) * scale(radial_input);
	const y = radarDim / 2 - Math.sin(angle) * scale(radial_input);
	const coordinate: [number, number] = [x, y];
	return coordinate;
}

export function getTraitCoords(
	traits: {
		name: string;
		score: number;
	}[],
	radarDim: number,
	num_vertices: number,
	domainArray: number[],
	rangeArray: number[]
) {
	return traits.map(({score}, i) => {
		const coords = angleToCoord(radarDim, num_vertices, i, score, domainArray, rangeArray);
		return coords;
	});
}
