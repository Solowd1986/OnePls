


const gulp = require('gulp');

const cleanDir = require('gulp-clean-dir');

gulp.task('clean-dir', function() {
    return gulp.src('./assembly.json')
        .pipe(cleanDir('./dist'))
        .pipe(gulp.dest('./dist'))
});
