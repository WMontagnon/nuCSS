var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: '*'
});

var port = process.env.SERVER_PORT || 3000;

$.requireDir('../../gulp');

// Builds the documentation and framework files
gulp.task('build', ['sass', 'javascript', 'sassdoc']);

// Starts a BrowerSync instance
gulp.task('serve', ['build'], function(){
  $.browserSync.init({server: './dist', port: port});
});

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', ['sass', $.browserSync.reload]);
  gulp.watch('assets/js/lib/**/*.js', ['javascript:lib', $.browserSync.reload]);
  gulp.watch('assets/js/**/*.js', ['javascript:theme', $.browserSync.reload]);
  gulp.watch('dist/index.html', [$.browserSync.reload]);
});

// Runs all of the above tasks and then waits for files to change
gulp.task('default', ['serve', 'watch']);
