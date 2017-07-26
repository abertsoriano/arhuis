var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('css', function () {
	gulp.src(['css/lib/*.css', 'css/dev/*.css'])
		.pipe(cssmin())
		.pipe(concat('styles.min.css'))
		.pipe(gulp.dest('css'));
});

gulp.task('minify', function() {
	gulp.src('js/*.js')
		.pipe(minify({
			ext:{
				min:'.js'
			}
		}))
		.pipe(gulp.dest('js/app/'))
});