var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: '*'
});

gulp.task('sass', ['sass:lib','sass:theme']);

gulp.task('sass:lib', function() {
    gulp.src('lib/scss/nucss.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:theme', function() {
    gulp.src('assets/scss/theme.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});
