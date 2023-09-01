import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = 'true';
const initialValue = browser
	? window.sessionStorage.getItem('one_cycle') ?? defaultValue
	: defaultValue;

export const first_visit = writable<string>(initialValue);

first_visit.subscribe((value) => {
	if (browser) {
		window.sessionStorage.setItem('first_visit', value);
	}
});

export { first_visit as default };
