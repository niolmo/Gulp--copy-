import autoprefixer from "gulp-autoprefixer";
import concat from "gulp-concat";
import cssimport from "gulp-cssimport";
import csso from "gulp-csso";
import rename from "gulp-rename";
import size from "gulp-size";
import shorthand from "gulp-shorthand";
import webpCss from "gulp-webp-css";
import groupCssMedia from "gulp-group-css-media-queries";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass =  gulpSass(dartSass)

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: true })
	.pipe(sass())
	.pipe(
		app.plugins.plumber({
		  errorHandler: app.plugins.notify.onError({
			title: "Ошибка в  SCSS",
			message: "<%= error.message %>"
		  })
		})
	  )
	  .pipe(concat("style.css"))
	  .pipe(cssimport())
	  .pipe(webpCss())
	  .pipe(
		autoprefixer({
		  overrideBrowserslist: ["last 3 versions"]
		})
	  )
	  .pipe(shorthand())
	  .pipe(groupCssMedia())
	  .pipe(size({ title: "style.css" }))
	  .pipe(app.gulp.dest(app.path.build.scss, { sourcemaps: true }))
	  .pipe(rename({ suffix: ".min" }))
	  .pipe(csso())
	  .pipe(size({ title: "style.min.css" }))
	  .pipe(app.gulp.dest(app.path.build.scss, { sourcemaps: true }));
}