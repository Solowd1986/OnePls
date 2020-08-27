

const gulp = require('gulp');

let browserSync = require('browser-sync').create();
let nunjucks = require('gulp-nunjucks');
let rename = require("gulp-rename");
let requireDir = require("require-dir");

const autoprefixer = require("gulp-autoprefixer");


const path = {
    
    build: {
        base: './',
        html_index: 'dist',
        html_pages: 'dist/pages',
        css: 'dist/assets/css',
        js: 'dist/assets/js',
        img: 'dist/assets/img'
    },

    src: {
        css: 'src/assets/scss/**/*.css',
        scss: 'src/assets/scss/**/*.scss',
        js: 'src/assets/js/**/*.js',
        tpl: 'src/tpl/**/*.njk',
        tpl_hide: '!src/tpl/**/_*.njk',
        img: 'src/assets/img/**/*.{png, jpeg, jpg, svg, gif, webp}'
    },

    watch: {
        tpl: 'src/tpl/**/*.njk',
        scss: 'src/assets/scss/**/*.scss',
        css: 'src/assets/scss/**/*.css',
        html: './*.html'
    },
    clean: 'dist'
};


gulp.task('prefix', function() {
    return gulp.src(path.src.css)
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
});




gulp.task('build', function() {
    return gulp.src([path.src.tpl, path.src.tpl_hide])
        .pipe(nunjucks.compile())

        .pipe(rename({
            extname: ".html"
        }))
        .pipe(gulp.dest(path.build.base))
});


gulp.task('default', ['build'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch([path.watch.tpl], ['build']);
    gulp.watch([path.watch.html, path.watch.css]).on('change', browserSync.reload);
});


/*  Версия для Gulp 4   */

/*
gulp.task('default', gulp.series('build', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch([path.watch.tpl, path.watch.scss], gulp.series('build'));
    gulp.watch([path.watch.html, path.watch.scss]).on('change', browserSync.reload);
}));
*/
