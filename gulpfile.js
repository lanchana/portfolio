var gulp = require("gulp"),
    plumber = require("gulp-plumber"),
    uglyfly = require("gulp-uglyfly"),
    rename = require("gulp-rename"),
    cssmin = require("gulp-uglifycss"),
    htmlmin = require("gulp-minify-html");

gulp.task("scripts", () => {
    gulp.src("js/*.js")
        .pipe(plumber())
        .pipe(uglyfly())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("js/js-min/"));
});

gulp.task("styles", () => {
    gulp.src("css/*.css")
        .pipe(plumber())
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest("css/css-min/"));
});

gulp.task("content", () => {
    gulp.src("index-src/index.html")
        .pipe(htmlmin({
            empty: true,
            quotes: true
        }))
        .pipe(gulp.dest(""));
})

gulp.task("watch", () => {
    gulp.watch("js/*.js", ["scripts"]);
    gulp.watch("css/*.css", ["styles"]);
});

gulp.task("default", ["scripts", "styles", "content", "watch"]);
