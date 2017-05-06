var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    gulp.src('./public/stylesheets/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/stylesheets/'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('libraries', function () {
    gulp.src('./public/stylesheets/libraries/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets/libraries/'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('sass:watch', ['browserSync'], function () {
    gulp.watch('./public/stylesheets/libraries/**/*', ['libraries']);
    gulp.watch('./public/stylesheets/**/*', ['sass']);
    gulp.watch('./public/**/*', browserSync.reload);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './public/'
        },
    })
});

gulp.task('default', ['sass:watch', 'sass', 'libraries']);
