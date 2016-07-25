// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
// var imagemin = require('gulp-imagemin');
var imageop = require('gulp-image-optimization');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'));
});

// Compile Our Jade
gulp.task('jade', function() {
    return gulp.src('src/jade/!(_)*.jade')
        .pipe(jade())
        .pipe(gulp.dest('build'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/js'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

// pipe assets
// gulp.task('assets', function() {
//     return gulp.src('src/assets/*.jpg')
//         .pipe(gulp.dest('build/assets'));
// });

// compress images
gulp.task('imagemin', function() {
    return gulp.src('src/assets/*')
        // .pipe(imagemin())
        .pipe(imageop())
        .pipe(gulp.dest('build/assets'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/jade/*.jade', ['jade']);
});

// Default Task
gulp.task('default', ['sass','jade','scripts','imagemin','watch']);