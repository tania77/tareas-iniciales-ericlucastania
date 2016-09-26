// Dependencies
var gulp = require('gulp');
var run = require('gulp-run');

/*
gulp.task('build', function(){
  return gulp.src(['scripts/*'])
    .pipe(run('npm run build'));
    //.pipe(gulp.dest('./dist'))
    //.pipe(connect.reload());

});
*/
gulp.task('depl', function() {
  return run('npm run deploy').exec();    // ahorrando time
})