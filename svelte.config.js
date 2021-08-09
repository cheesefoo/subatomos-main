import preprocess from 'svelte-preprocess';
import path from 'path';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import 'src/lib/styles/_base.scss';
			@import 'src/lib/styles/_variables.scss';`
		}
	}),

	kit: {		adapter: adapter({
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
					$assets: path.resolve('./src/assets'),
					$images: path.resolve('./src/assets/images')
				}
			}
		}
	}
};

export default config;
