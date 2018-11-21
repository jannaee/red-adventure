var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function(){ 
    gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

//Above code 
//'styles' is the name of the task, second param is a cb func to run task
// .src paths will show what files to watch
// log error will tell where the error is located instead of just killing the process
// gulp dest will tell where to put the final css

