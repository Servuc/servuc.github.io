var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('sass', function (){
    gulp.src(['./scss/*.scss'])
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(prefix(
        "last 1 version", "> 1%", "ie 8", "ie 7"
    ))
    .pipe(gulp.dest('./dist'))
    .pipe(minifycss())
    .pipe(gulp.dest('./dist'));
});

gulp.task('fonts', function() {
    gulp.src(["./node_modules/font-awesome/fonts/*"]).pipe(gulp.dest("./dist"));
});

gulp.task('images', function() {
    gulp.src(["./css/*"]).pipe(gulp.dest("./dist"));
});

gulp.task('js', function(){
    gulp.src([
        './js/*.js',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/foundation-sites/dist/js/foundation.min.js',
        './node_modules/slick-carousel/slick/slick.min.js'
    ])
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', [ 'sass', 'images', 'fonts', 'js' ]);
