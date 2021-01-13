// npm i -g gulp
// npm i gulp gulp-markdown-it
let gulp = require('gulp');
let markdown = require('gulp-markdown-it');

gulp.task('md', function() {
    return gulp.src('**/*.md')
        .pipe(markdown())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
});

gulp.task('watch', function() {
    gulp.watch('**/*.md', gulp.series('md'));
});

gulp.task('default', gulp.parallel('md', 'watch'));