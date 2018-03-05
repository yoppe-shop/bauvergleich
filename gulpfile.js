var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('generate-all', function() {
  return gulp.src('assets/css/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function(){
  gulp.watch('assets/css/*.scss', ['generate-all']); 
  // Other watchers
});