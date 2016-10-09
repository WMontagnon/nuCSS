var gulp = require('gulp');
var sassdoc = require('sassdoc');

gulp.task('sassdoc', function () {
  var options = {
    dest: 'docs',
    package: './package.json',
    autofill: ["requires", "throws", "content"],
    verbose: true
  };

  return gulp.src('assets/scss/**/*.scss')
    .pipe(sassdoc(options));
});
