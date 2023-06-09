import type { TransformedLink } from "../../../types/portfolio";

export const numberWithCommas = (x: number) => {
    return x
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatTooltipValue = (value: number) => {
    return numberWithCommas(Math.floor(value)).replace('.00', '');
};

function edAbbreviation(object: any) {
    const regex = /Emergency Department/;
    const replacement = 'ED';

    if (regex.test(object)) {
        return object.replace(regex, replacement);
    }

    return object;
}

export const getLinkTooltipText = ($linkTooltipData: Partial<TransformedLink>) => {
    const { target, source } = $linkTooltipData;

    if (target === 'No attendance') {
        return `callers did not attend an Emergency Department after receiving a ${edAbbreviation(
            source
        )} disposition from NHS111`;
    }

    if (target === 'Type 1 Emergency Department' || target === 'Types 2-4 Emergency Department') {
        return `people attended a ${target} who received a ${source} disposition from NHS111`;
    }

    if ((target === 'Necessary' || target === 'Low acuity') && source) {
        return `${source} attendances were classified as ${target}`;
    }

    if (target === 'Admission' && source === 'Necessary') {
        return `${source.toLowerCase()} attendances at Type 1 Emergency Department resulted in hospital admission`;
    }

    if (target === 'Admission' && source === 'No attendance') {
        return `callers did not attend an Emergency Department, but were subsequently admitted to hospital`;
    }

    if (target === 'Admission' && source === 'Types 2-4 Emergency Department') {
        return `attendances at ${source} resulted in hospital admission`;
    }

    if (target === 'No admission') {
        return `callers had a necessary Type 1 Emergency Department attendance, but were not admitted to hospital`;
    }
};

export 	function getDonutColour(colour: string | undefined) {
    if (colour === "#FEF121") {
        return "#C7BA0A"
    }
    else {
        return colour
    }
}

export function getDonutConditionalText(layer: number) {
    if (layer === 0) {
        return 'NHS111 calls';
    } else if (layer === 1) {
        return 'attended secondary services';
    } else if (layer === 2) {
        return 'acuity';
    } else {
        return 'admitted';
    }
}