import imagemin from 'gulp-imagemin'
import webp from 'gulp-webp'

export const img = () => {
	return app.gulp.src(app.path.src.img)
		.pipe(app.plugins.plumber({
		errorHandler: app.plugins.notify.onError({
			title: "Ошибка в IMG",
			message: "<%= error.message %>"
		  	})
		}))
		.pipe(app.plugins.newer(app.path.build.img))
		.pipe(webp())
		.pipe(app.gulp.dest(app.path.build.img))
		.pipe(app.gulp.src(app.path.src.img))
		.pipe(app.plugins.newer(app.path.build.img))
		.pipe( imagemin({
			progressive: true,
					svgoPlugins: [{ removeViewBox: false }],
					interlaced: true,
					optimizationLevel: 3 // 0 to 7
		}))
		.pipe(app.gulp.dest(app.path.build.img))
}