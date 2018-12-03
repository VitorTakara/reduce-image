const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
	gulp.src('app/Entrada/*')
		.pipe(imagemin())
		.pipe(gulp.dest('app/Imagens Comprimidas'))
);