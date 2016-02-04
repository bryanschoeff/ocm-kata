var gulp = require('gulp');
var mocha = require('gulp-mocha');
 
gulp.task('test', function () {
    return gulp.src('test/*.spec.js')
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('watch', function () {
    gulp.watch('./**/*.js', ['test']);
});