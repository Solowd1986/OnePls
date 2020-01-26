

const gulp = require('gulp');

let autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function() {
    return gulp.src('./assets/scss/main.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('./assets/scss'))
});
