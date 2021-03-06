import preprocess from 'svelte-preprocess';
import path from 'path';
import adapter from '@sveltejs/adapter-static';
import { optimizeImports } from 'carbon-preprocess-svelte';
// import cloudflare from '@sveltejs/adapter-cloudflare';
const production = process.env.NODE_ENV === 'production';
import { isoImport } from 'vite-plugin-iso-import'
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

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		prerender: {
			default: true,
			onError: 'continue'
		},
		vite: {
			/*			plugins:[    replace({
				"process.env.NODE_ENV": JSON.stringify("production")
			})],*/
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
/*			ssr: {
				noExternal: [production && '@carbon/charts' && "fuzzy"].filter(Boolean)
			},*/
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
