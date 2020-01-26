
const gulp = require('gulp');

let group_queries = require('gulp-group-css-media-queries');

gulp.task('query', function () {
    gulp.src('./assets/scss/**/*.css')
        .pipe(group_queries())
        .pipe(gulp.dest('dist'));
});