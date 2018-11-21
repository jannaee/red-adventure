var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function(){ 
    gulp.src('styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/**/*.css'));
});

//Above code 
//'styles' is the name of the task, second param is a cb func to run task
// .src paths will show what files to watch
// log error will tell where the error is located instead of just killing the process
// gulp dest will tell where to put the final css

//Watch Task - that will auto build each time a specified file is edited
gulp.task('default', function(){
    gulp.watch('sass/**/*.scss',['styles']); //this takes a path to the files to watch, and array of tasks to run
});




