import svgSprite from "gulp-svg-sprite";

export const svgSpriteTask = () => {
	return app.gulp.src(app.path.src.svgicons)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "Ошибка в SVG",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: `../img/svg/icons.svg`,
					// Создавать страницу с перечнем иконок
					example: true
				}
			},
		}
		))
		
		.pipe(app.gulp.dest(app.path.build.svgicons));
}