var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: '*'
});

gulp.task('sass', function() {
    gulp.src('assets/scss/nucss.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});
