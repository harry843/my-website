export default function genImageUrl(ref, urlParams) {
	const imageBaseUrl = 'https://cdn.sanity.io/images/g2pdrwyj/production/';
	const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'svg', 'avif', 'webp'];
	const extension = ref.split('-').slice(-1)[0];
	const hasImageExtension = imageExtensions.includes(extension);

	if (hasImageExtension) {
		return imageBaseUrl + ref.replace('image-', '').replace(`-${extension}`, `.${extension}`) + urlParams;
	} else {
		return undefined;
	}
}
