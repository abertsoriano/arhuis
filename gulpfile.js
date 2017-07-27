var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('css', function () {
	gulp.src(['css/lib/*.css', 'css/dev/*.css'])
		.pipe(cssmin())
		.pipe(concat('styles.min.css'))
		.pipe(gulp.dest('css'));
});

gulp.task('minify', function() {
	gulp.src(['js/*.js', '!js/app.min.js'])
		.pipe(uglify())
		.pipe(gulp.dest('js/app/'))
});

gulp.task('concat', function () {
	gulp.src([
		'js/app/jquery-2.1.1.min.js',
		'js/app/bootstrap.min.js',
		'js/app/jquery.*js',
		'js/app/custom.js',
	])
		.pipe(concat('app.min.js'))
		.pipe(gulp.dest('js/'));
});

gulp.task('build', ['minify', 'concat']);