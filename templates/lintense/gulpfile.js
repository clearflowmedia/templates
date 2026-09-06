const tempaw = require( 'tempaw-zemez-functions' );
const express = require("express");
const sassMiddleware = require("node-sass-middleware");
const path = require("path");

tempaw.init( `${process.cwd().replace( /\\/g, '/' )}/config.js` );


function expressServer () {
	const
		gulp           = require( 'gulp' ),
		browserSync    = require( 'browser-sync' ),
		express        = require( 'express' ),
		sassMiddleware = require( 'node-sass-middleware' ),
		path           = require( 'path' ),
		app            = express();

	// sets template engine
	app.set( 'view engine', 'pug' );

	// sets directory name
	app.set( 'views', './dev/lintense/' );

	app.get( '/', function ( req, res ) {
		console.log( '[request] root: index.pug' );
		res.render( `pages/index.pug` );
	});

	app.get( /.+\.pug/, function ( req, res ) {
		console.log( `[request] pug: ${req.url}` );
		res.render( `pages${req.url}` );
	});

	app.get( /.+\.html/, function ( req, res ) {
		let tmp = req.url.replace( /html$/, 'pug' );
		console.log( '[request] html:', tmp );
		res.render( `pages${tmp}` );
	});

	app.use( sassMiddleware({
		src: path.resolve( __dirname, 'dev/lintense' ),
		dest: path.resolve( __dirname, 'dev/lintense' ),
		debug: true,
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: 1,
		linefeed: 'cr'
	}));

	// static files
	app.use( express.static( 'dev/lintense' ) );

	// listens to server at PORT
	app.listen( 3000, function () {
		console.log( `[Express] Server listening on port 3000` );

		browserSync({
			open: false,
			notify: true,
			port: 8000,
			proxy: 'localhost:3000',
			ui: false,
			reloadDelay: 0,
			ghostMode: {
				clicks: false,
				forms: false,
				scroll: false
			}
		});
	});

	gulp.watch( [ 'dev/lintense/**/*.pug', 'dev/lintense/**/*.js', 'dev/lintense/**/*.md' ] ).on( 'change', function() {
		browserSync.reload();
	});

	gulp.watch( [ 'dev/lintense/**/*.scss' ] ).on( 'change', function() {
		browserSync.reload( '*.css' );
	});
}

exports[ 'Express' ] = expressServer;