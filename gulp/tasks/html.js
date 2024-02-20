//Plugins
import fileInclude from "gulp-file-include";
import  htmlmin  from 'gulp-htmlmin';
import size from 'gulp-size';
import webpHtml  from 'gulp-webp-html';
//HTML
export const html =  () => {
	return  app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber({
			errorHandler: app.plugins.notify.onError({
				title: "Ошибка в HTML",
				message: "<%= error.message %>"
			  })
		}))
		.pipe(fileInclude ({
			prefix: "@@",
       		 basepath: "@file"
		}))
		.pipe(webpHtml())
		.pipe(htmlmin({
			collapseWhitespace: true 
		}))
    	.pipe(size())
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins. browsersync.stream())
}