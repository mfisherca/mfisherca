var gulp = require('gulp');
var sass = require('gulp-sass');
var version = require('gulp-version-number');

gulp.task('default', ['sass','version'], function() {
});

gulp.task('sass', function() {
  return gulp.src('css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
})

gulp.task('version', function() {
  return gulp.src('*.html')
    .pipe(version({
      'replaces' : [
        [/{{TIMESTAMP}}/g, '%TS%']
      ]
    }))
    .pipe(gulp.dest('build'))
})
