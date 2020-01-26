

const gulp = require('gulp');

let data = {name : 'John Doe'};

let nunjucks = require('gulp-nunjucks');
let rename = require("gulp-rename");

gulp.task('build', function() {
    return gulp.src(['tpl/**/*.njk', '!tpl/**/_*.njk'])
        .pipe(nunjucks.compile({data}))
        .pipe(rename({
            extname: ".html"
        }))
        .pipe(gulp.dest('./'))
});