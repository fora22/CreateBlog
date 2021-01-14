# Markdown to HTML
먼저 gulp를 npm를 사용하여 설치한다.

```
npm i -g gulp
npm i gulp gulp-markdown-it
```

설치가 완료되면 gulp -v 명령어를 사용하여 정상적으로 설치됬는지 확인한다. 이후 gulp를 동작 시킬 js파일을 생성한다. 해당 js 파일의 이름은 `gulpfile`로 한다(꼭). root 디렉토리에 생성한다.

```js
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
```

작성 한 다음 vscode에서 `Terminal` -> `Run Task` -> `gulp` -> `gulp: Default`를 눌러 `tasks.json` 파일을 만들고 밑의 내용으로 바꾼다.
```json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "type": "gulp",
            "task": "default",
            "problemMatcher": [],
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
```
vscode에서 `Terminal` -> `Run Build Task` 혹은 `ctrl + shift + b`를 누르면 md 파일이 html로 바뀐다.

# Reference
- [Visual Studio Code를 사용하여 markdown 을 html로 변환하기](https://medium.com/@wdjty326/visual-studio-code%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-markdown-%EC%9D%84-html%EB%A1%9C-%EB%B3%80%ED%99%98%ED%95%98%EA%B8%B0-1bdf6508eaad)
- [gulp AssertionError [ERR_ASSERTION]: Task function must be specified 에러처리](https://okayoon.tistory.com/entry/gulp-AssertionError-ERRASSERTION-Task-function-must-be-specified-%EC%97%90%EB%9F%AC%EC%B2%98%EB%A6%AC)