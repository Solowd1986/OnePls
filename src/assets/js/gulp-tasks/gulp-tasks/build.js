

const gulp = require('gulp');

let browserSync = require('browser-sync').create();

gulp.task('default',['build'],  function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch(['./tpl/**/*.njk', './assets/scss/**/*.scss'], ['build', 'autoprefixer']);
    gulp.watch(['./*.html', './assets/scss/**/*.css']).on('change', browserSync.reload);
});