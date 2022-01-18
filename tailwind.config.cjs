const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'pure-white': '#ffffff',
			'primary-color': '#b9c6d2',
			'secondary-color': '#d0dde9',
			'tertiary-color': '#edf0f8',
			'accent-color': '#ff3e00',
			'tundora': '#474747',
			'444444': '#444444',
			'lightblue': '#aed9ff',
			'lighterblue': '#d2eaff',
			'chromeblue': '#518db9',
			'lightsalmon': '#ffab86',
			'salmon': '#ff6f62',
			'orange': '#f45702',
			'ivory': '#fffef0',
			'sky': '#2d6dce',
			'lightsky': '#91cffe'
		},
		extend: {
			colors: {
				'regal-blue': '#243c5a'

			}
		}
	},

	plugins: []
};

module.exports = config;
