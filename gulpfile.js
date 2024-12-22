const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//function to compile SASS

function styles() {
    return gulp
    .src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))

}

exports.default = styles;

// Add the command WATCH

exports.watch = function () {
    gulp.watch('./src/styles/**/*.scss', gulp.series(styles)).on('change', function (path) {
        console.log(`File ${path} was changed! Running tasks...`);
    });
};
