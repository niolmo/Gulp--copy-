import babel from 'gulp-babel';
import uglifyES from 'gulp-uglify-es'
import webpack from 'webpack-stream'

const uglify = uglifyES.default

export const js = () => {
return app.gulp.src(app.path.src.js, {sourcemaps: true})
	.pipe(app.plugins.plumber({
	errorHandler: app.plugins.notify.onError({
		title: "Ошибка в JS",
		message: "<%= error.message %>"
	  })
	}))
	.pipe(babel({
		presets: ['@babel/env']
	  }))
	  .pipe(webpack({
		mode: 'development',
		output: {
			filename: 'minJS.js'
		}
	  }))
	  .pipe(uglify())
	  .pipe(app.gulp.dest(app.path.build.js, {sourcemaps: true}))
}