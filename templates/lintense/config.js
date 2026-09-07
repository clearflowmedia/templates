const
	action = require( 'tempaw-zemez-functions' ).action;

action.imgBlur = require( './imgBlur' );

let ROOT = 'lintense-business-consulting';

module.exports = {
	livedemo: {
		enable: true,
		server: {
			baseDir: `dev/${ROOT}/`,
			directory: false
		},
		port: 8000,
		open: false,
		notify: true,
		reloadDelay: 0,
		ghostMode: {
			clicks: false,
			forms: false,
			scroll: false
		}
	},
	sass: {
		enable: true,
		showTask: false,
		watch: `dev/${ROOT}/**/*.scss`,
		source: `dev/${ROOT}/**/!(_)*.scss`,
		dest: `dev/${ROOT}/`,
		options: {
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: 1,
			linefeed: 'cr'
		}
	},
	pug: {
		enable: true,
		showTask: false,
		watch: `dev/${ROOT}/**/*.pug`,
		source: `dev/${ROOT}/pages/!(_)*.pug`,
		dest: `dev/${ROOT}/`,
		options: {
			pretty: true,
			verbose: true,
			self: true,
			emitty: true
		}
	},
	autoprefixer: {
		enable: false,
		options: {
			cascade: true,
			browsers: ['Chrome >= 45', 'Firefox ESR', 'Edge >= 12', 'Explorer >= 10', 'iOS >= 9', 'Safari >= 9', 'Android >= 4.4', 'Opera >= 30']
		}
	},
	watcher: {
		enable: true,
		watch: `dev/${ROOT}/**/*.js`
	},
	lint: {
		showTask: true,
		sass: `dev/${ROOT}/components/!(bootstrap)/**/*.scss`,
		pug: `dev/${ROOT}/**/*.pug`,
		js: `dev/${ROOT}/**/!(*.min).js`,
		html: `dev/${ROOT}/**/*.html`
	},
	buildRules: {
		'Build Dist': [
			// Clean dist
			action.clean({ src: `dist/livedemo/site/${ROOT}` }),

			// Copy files to a temporary folder
			action.copy({
				src: [
					`dev/${ROOT}/**/*.pug`,
					`dev/${ROOT}/**/*.scss`,
					`dev/${ROOT}/**/*.js`
				],
				dest: 'tmp'
			}),

			// Deleting code fragments
			action.delMarker({
				src: [
					'tmp/**/*.pug',
					'tmp/**/*.scss',
					'tmp/**/*.js'
				],
				dest: 'tmp',
				marker: 'DIST'
			}),

			// Compile sass
			action.sass({
				src: 'tmp/**/*.scss',
				dest: `dist/livedemo/site/${ROOT}`,
				autoprefixer: false
			}),

			// Compile pug
			action.pug({
				src: [
					`tmp/pages/!(_)*.pug`,
					`tmp/documentation/!(_)*.pug`
				],
				dest: `dist/livedemo/site/${ROOT}`,
				autoprefixer: false
			}),

			// Copy js files
			action.copy({
				src: 'tmp/**/*.js',
				dest: `dist/livedemo/site/${ROOT}`
			}),

			// Copy fonts
			action.copy({
				src: [
					`dev/${ROOT}/**/*.otf`,
					`dev/${ROOT}/**/*.eot`,
					`dev/${ROOT}/**/*.svg`,
					`dev/${ROOT}/**/*.ttf`,
					`dev/${ROOT}/**/*.woff`,
					`dev/${ROOT}/**/*.woff2`
				],
				dest: `dist/livedemo/site/${ROOT}`
			}),

			// Copy & minify images
			action.minifyimg({
				src: [
					`dev/${ROOT}/**/*.png`,
					`dev/${ROOT}/**/*.jpg`,
					`dev/${ROOT}/**/*.gif`
				],
				dest: `dist/livedemo/site/${ROOT}`
			}),

			// Copy other files
			action.copy({
				src: [
					`dev/${ROOT}/**/*.ico`,
					`dev/${ROOT}/**/*.php`,
					`dev/${ROOT}/**/*.json`,
					`dev/${ROOT}/**/*.txt`,
					`dev/${ROOT}/**/*.mp4`
				],
				dest: `dist/livedemo/site/${ROOT}`
			}),

			// Delete temporary folder
			action.clean({ src: 'tmp' })
		],

		'Babel': [
			action.minifyJs({
				src: [
					'dev/lintense/components/base/core.js',
					'dev/lintense/components/base/script.js'
				],
				dest: 'dev/lintense/components/base'
			})
		],

		'Util Backup': [
			action.pack({
				src: [ 'dev/**/*', '*.*', '.gitignore' ], dest: 'versions/',
				name( dateTime ) { return `backup-${dateTime[0]}-${dateTime[1]}.zip`; }
			})
		],

		'Blur Image': [
			// Blur image
			action.imgBlur({
				blur: 8,
				src: `dist/granter/site/dev/${ROOT}/images/**/*(blur-*|product-*|image-37-*|image-38-*|image-39-*|image-40-*|image-41-*|image-42-*).@(png|jpg)`
			})
		]
	}
};
