import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';
import exorcist from 'exorcist';
import browserSync from 'browser-sync';
import watchify from 'watchify';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import ifElse from 'gulp-if-else';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import prefix from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';

import fontAwesome from 'node-font-awesome';

import nodemon from 'gulp-nodemon';
import path from 'path';

import util from 'gulp-util';

const config = {
	paths: {
		html: './src/*.html',
		js: './src/scripts/**/*.js?',
		sass: './src/sass/**/*.scss',
		css: './dist/styles/',
		dist: './dist',
		mainJs: './src/scripts/main.js'
	}
}

const appUrl = "http://localhost:3000/";

gulp.task('browser-sync', () => {
  log('browser-sync watch proxy: '+ appUrl);
  browserSync({
    files: [
      config.paths.dist + '/styles/*.css',
      config.paths.dist + '/scripts/*.js',
      config.paths.dist + '/**/*.html'
    ],
    browser: "google chrome",
    proxy: appUrl
  });
});

// Input file.
watchify.args.debug = true;
var bundler = browserify('src/scripts/main.js', watchify.args);

// Babel transform
bundler.transform(babelify.configure({
  sourceMapRelative: 'src'
}));

// On updates recompile
bundler.on('update', bundle);

function bundle() {
  return bundler.bundle()
    .on('error', function(error){
      console.error( '\nError: ', error.message, '\n');
      this.emit('end');
    })
    .pipe(exorcist('dist/scripts/bundle.js.map'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(ifElse(process.env.NODE_ENV === 'production', uglify))
    .pipe(gulp.dest('dist/scripts'));
}

gulp.task('transpile', ['lint'], () => bundle());

gulp.task('lint', () => {
	log('lint task started');

  return gulp.src(['src/scripts/**/*.js', 'gulpfile.babel.js'])
    .pipe(eslint())
    .pipe(eslint.format())
});

gulp.task('html', () => {
	log('html task starts');

	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist));

	log('html task ends');
});

gulp.task('sass', () => {
	log('sass task starts');

  gulp.src([config.paths.sass])
	  .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [fontAwesome.scssPath]
	    }).on('error', sass.logError))
    .pipe(prefix())
    .pipe(cssnano())
    .pipe(sourcemaps.write())
		.pipe(gulp.dest(config.paths.css));

	log('sass task ends');
});

gulp.task('js-watch', ['transpile']);
gulp.task('html-watch', ['html']);
gulp.task('sass-watch', ['sass']);

gulp.task('watch', ['html', 'sass', 'transpile'], () => {
  gulp.watch('src/*.html', ['html-watch'])
  gulp.watch(config.paths.sass, ['sass-watch'])
  gulp.watch('src/scripts/**/*.js', ['js-watch'])
  gulp.watch('src/scripts/**/*.jsx', ['js-watch'])
})

gulp.task('setup-db', function() {
  log('setup-db task starts');

  const src = 'src/data/booklist.json';
  const dist= 'dist/data';

  gulp.src(src)
    .pipe(gulp.dest(dist));

  log('setup-db task ends');
});

gulp.task('server', ['setup-db'], () => {
	log('server task starts');

  const babelPath = path.join(__dirname, 'node_modules/.bin/babel-node');

  nodemon({
    script: 'server/server.js',
    exec: babelPath,
    watch: ['server/server.js'],
    ext: 'js html'
  });

	log('server task ends');
});

gulp.task('default', ['watch', 'browser-sync']);

///////////
function log(msg) {
	if (typeof(msg) === 'object') {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				util.log(util.colors.blue(msg[item]));
			}
		}
	}
	else {
		util.log(util.colors.blue(msg));
	}
}
