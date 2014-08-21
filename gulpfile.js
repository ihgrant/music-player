var gulp = require('gulp');
var concat = require('gulp-concat');
var react = require('gulp-react');
var del = require('del');

var paths = {
	react: 'jsx/*.jsx'
};

gulp.task('clean', function(cb) {
	del('js/ui.js', cb);
});

gulp.task('react', ['clean'], function() {
	return gulp.src(paths.react)
		.pipe(react())
		.pipe(concat('ui.js'))
		.pipe(gulp.dest('js'));
});

var react_watcher = gulp.watch(paths.react, ['react']);
react_watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
