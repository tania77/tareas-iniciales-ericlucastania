// Dependencies

var gulp = require('gulp'),
	 run = require('gulp-run'),
	 //livereload = require('gulp-livereload'),
	 browserSync = require('browser-sync').create(),
	 notify = require("gulp-notify");
	 

var paths = {
 
  scripts: [
    './scripts.js/**'
  ],
  
  
  html: [
  './gh-pages/index.html'
  ],
  
  book: [
  './txt/*'
  ]
  


};

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./gh-pages/"
        }
    });
}); 


gulp.task('build',function() {
    return run('./scripts/generate-gitbook').exec();
});

gulp.task('html', function(){
  browserSync.reload();
 
});

gulp.task('watch', function(){
  gulp.watch(paths.book,['build']);
  gulp.watch(paths.html,['html']);
 
});

// Defaults
gulp.task('default', ['watch']);