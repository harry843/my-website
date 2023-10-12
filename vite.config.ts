import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path';
import houdini from 'houdini/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [houdini(), sveltekit()],
	resolve: {
        alias: {
            $houdini: path.resolve('.', '$houdini'),
        },
    },
});
