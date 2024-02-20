import gulp  from 'gulp';
import { path } from './gulp/config/path.js';
import  { plugins }  from './gulp/config/plugins.js';

global.app = {
	gulp :  gulp,
	path :  path,
	plugins :  plugins
}

//Tasks
// import  {html} from './gulp/tasks/html.js';
import  {clean} from './gulp/tasks/clean.js';
import { pug } from './gulp/tasks/pug.js';
import {server} from './gulp/tasks/server.js';
// import  {css}  from './gulp/tasks/css.js';
import  {scss} from './gulp/tasks/scss.js'
import {img} from './gulp/tasks/img.js'
import {js} from './gulp/tasks/js.js'
import {font} from './gulp/tasks/fonts.js'
// import {svgSpriteTask} from './gulp/tasks/svg-sprive.js'

//Watcher
export const watcher = () => {
	// gulp.watch(app.path.watch.html, html).on("all", app.plugins.browsersync.reload)
	gulp.watch(app.path.watch.pug, pug).on("all", app.plugins.browsersync.reload)
	// gulp.watch(app.path.watch.css, css).on("all", app.plugins.browsersync.reload)
	gulp.watch(app.path.watch.scss, scss).on("all", app.plugins.browsersync.reload)
	gulp.watch(app.path.watch.img, img).on("all", app.plugins.browsersync.reload)
	gulp.watch(app.path.watch.js,  js).on("all", app.plugins.browsersync.reload)
	gulp.watch(app.path.watch.font,  font).on("all", app.plugins.browsersync.reload)
// 	gulp.watch(app.path.watch.svgicons,  svgSpriteTask).on("all", app.plugins.browsersync.reload)
}
//Alone
export const clear = clean
// export const htmls = html
export const pugs = pug
// export const style = css
export  const  style = scss
export  const  imag = img
export  const  script = js
export  const  fonts =  font
// export  const svgSprite =  svgSpriteTask


//The script
 export const build = gulp.series(clear, gulp.parallel(pug, scss, js, img, font))
 export const dev =  gulp.series(build, gulp.parallel(watcher, server))

 gulp.task('default', dev);
