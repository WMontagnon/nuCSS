var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: '*'
});

gulp.task('sass', function() {
    gulp.src('scss/**/*.scss')
        .pipe($.sass().on('error', $.sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('watch',function() {
    $.browserSync.init({
        proxy: "localhost:8888/will"
    });

    gulp.watch('scss/**/*.scss',['sass']).on('change', $.browserSync.reload);
});

gulp.task('default', ['sass', 'watch']);
