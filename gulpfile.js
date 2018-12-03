const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
	gulp.src('app/input/*')
		.pipe(imagemin())
		.pipe(gulp.dest('app/output'))
);