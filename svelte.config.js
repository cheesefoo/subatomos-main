import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-static';
import { optimizeImports } from 'carbon-preprocess-svelte';
import adapter from '@sveltejs/adapter-cloudflare';

const production = process.env.NODE_ENV === 'production';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: `@use 'src/lib/styles/variables' as *;
			@use 'src/lib/styles/base' as *;`,
				includePaths: ['src', 'node_modules']
			}
		}),
		optimizeImports()
	],
	onwarn: (warning, handler) => {
		const { code, frame } = warning;
		if (code === 'css-unused-selector')
			return;

		handler(warning);
	},
	kit: {
		// adapter:adapter(),
		adapter: adapter({

			routes: {
				include: ['/*'],
				exclude: ['<build>','<prerendered>','/assets/*','/wiki/*']
			},
			pages: 'build',
			assets: 'build',
			fallback: null
		})
		/*vite: {
			/!*			plugins:[    replace({
				"process.env.NODE_ENV": JSON.stringify("production")
			})],*!/
			// plugins: [isoImport()],
			optimizeDeps: {
				include: ['fuzzy','@carbon/charts','lodash.get', 'lodash.isequal', 'lodash.clonedeep']
			},
			server: {
				fs: {
					// Allow serving files from one level up to the project root
					allow: ['static']
				}
			},
			build: {
				commonjsOptions: {},
			},
/!*			ssr: {
				noExternal: [production && '@carbon/charts' && "fuzzy"].filter(Boolean)
			},*!/
			resolve: {
				alias: {
					// these are the aliases and paths to them
					$assets: path.resolve('static/assets'),
					$images: path.resolve('static/assets/images')
				}
			}
		}*/
	}
};

export default config;
