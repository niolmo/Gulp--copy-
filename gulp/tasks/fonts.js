import ttf2woff from 'gulp-ttf2woff'
import  ttf2woff2  from 'gulp-ttftowoff2'

export const font = () => {
	return app.gulp.src(app.path.src.font)
	.pipe(app.plugins.plumber({
		errorHandler: app.plugins.notify.onError({
			title: "Ошибка в FONTS",
			message: "<%= error.message %>"
		  	})
		}))
		.pipe(app.plugins.newer(app.path.build.font))
		.pipe(app.gulp.dest(app.path.build.font))
		.pipe(ttf2woff())
		.pipe( ttf2woff2())
		.pipe(app.gulp.dest(app.path.build.font))
}