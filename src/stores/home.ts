import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = 'true';
const initialValue = browser
	? window.sessionStorage.getItem('firstVisit') ?? defaultValue
	: defaultValue;

export const firstVisit = writable<string>(initialValue);

firstVisit.subscribe((value) => {
	if (browser) {
		window.sessionStorage.setItem('firstVisit', value);
	}
});

export { firstVisit as default };
