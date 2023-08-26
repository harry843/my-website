import { scaleLinear } from 'd3-scale';

export function radialScale(domainArray: number[], rangeArray: number[]) {
	return scaleLinear().domain(domainArray).range(rangeArray);
}

export function angleToCoord(
	width: number,
	num_vertices: number,
	index: number,
	radial_input: number,
	domainArray: number[],
	rangeArray: number[]
) {
	const scale = radialScale(domainArray, rangeArray);
	const angle = Math.PI / 2 + (2 * Math.PI * index) / num_vertices;
	const x = width / 2 + Math.cos(angle) * scale(radial_input);
	const y = width / 2 - Math.sin(angle) * scale(radial_input);
	const coordinate: [number, number] = [x, y];
	return coordinate;
}
