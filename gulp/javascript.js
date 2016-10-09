var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: '*'
});

gulp.task('javascript', ['javascript:lib','javascript:theme']);

gulp.task('javascript:lib', () =>
    gulp.src('assets/js/lib/**/*.js')
        .pipe($.sourcemaps.init())
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe($.concat('nucss.js'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'))
);

gulp.task('javascript:theme', () =>
    gulp.src('assets/js/**/*.js')
        .pipe($.sourcemaps.init())
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe($.concat('theme.js'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'))
);
