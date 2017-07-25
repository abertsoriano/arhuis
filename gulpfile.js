var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');

gulp.task('css', function () {
	gulp.src(['css/lib/*.css', 'css/dev/*.css'])
		.pipe(cssmin())
		.pipe(concat('styles.min.css'))
		.pipe(gulp.dest('css'));
});
