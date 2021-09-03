import preprocess from 'svelte-preprocess';
import path from 'path';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@use 'src/lib/styles/variables' as *;
			@use 'src/lib/styles/base' as *;`,
			includePaths: ['src', 'node_modules']
		}
	}),

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		target: '#svelte',

		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					$assets: path.resolve('static/assets'),
					$images: path.resolve('static/assets/images')
				}
			}
		}
	}
};

export default config;
