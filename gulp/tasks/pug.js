import pugs from "gulp-pug";
//PUG
export const pug = () => {
  return app.gulp
    .src(app.path.src.pug)
    .pipe(pugs({}))
    .pipe(
      app.plugins.plumber({
        errorHandler: app.plugins.notify.onError({
          title: "Ошибка в PUG",
          message: "<%= error.message %>"
        })
      })
    )
    .pipe(app.gulp.dest(app.path.build.pug))
    .pipe(app.plugins.browsersync.stream());
};
