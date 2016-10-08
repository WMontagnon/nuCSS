var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: '*'
});

var port = process.env.SERVER_PORT || 3000;

$.requireDir('../../gulp');

// Builds the documentation and framework files
gulp.task('build', ['sass', 'javascript']);

// Starts a BrowerSync instance
gulp.task('serve', ['build'], function(){
  $.browserSync.init({server: './dist', port: port});
});

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch('lib/scss/**/*.scss', ['sass:lib', $.browserSync.reload]);
  gulp.watch('assets/scss/**/*.scss', ['sass:theme', $.browserSync.reload]);
  gulp.watch('lib/js/**/*.js', ['javascript:lib', $.browserSync.reload]);
  gulp.watch('assets/js/**/*.js', ['javascript:theme', $.browserSync.reload]);
  gulp.watch('dist/index.html', [$.browserSync.reload]);
});

// Runs all of the above tasks and then waits for files to change
gulp.task('default', ['serve', 'watch']);
