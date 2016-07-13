var gulp = require('gulp');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');


gulp.task('structure', function () {
  gulp.src('*.html')
  .pipe(livereload());
});

gulp.task('scripts', function () {
  gulp.src('build/js/*.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('puplic/js'))
  .pipe(livereload());
});

gulp.task('styles', function () {
  gulp.src('build/css/*.css')
  .pipe(cleanCSS())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('puplic/css'))
  .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen({ start: true});
  gulp.watch('*.html', ['structure']);
  gulp.watch('build/js/*.js', ['scripts']);
  gulp.watch('build/css/*.css', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'structure', 'watch']);
