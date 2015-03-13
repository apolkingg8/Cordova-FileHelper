var gulp = require('gulp');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');

gulp.task('copyLib', function(){

    gulp.src('lib/q/q.js')
        .pipe(gulp.dest('dest/'))
        .pipe(gulp.dest('test/CDVFileHelperTestApp/www/js/'));
});

gulp.task('copyTypings', function(){

    gulp.src('typings/**/*.*')
        .pipe(gulp.dest('test/CDVFileHelperTestApp/www/typings/'));
});

gulp.task('default', ['copyLib', 'copyTypings'], function() {

    gulp.src('src/main.js')
        //.pipe(uglify())
        .pipe(rename('CDVFileHelper.js'))
        .pipe(gulp.dest('dest/'))
        .pipe(gulp.dest('test/CDVFileHelperTestApp/www/js/'));

});