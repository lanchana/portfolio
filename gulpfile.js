var gulp = require("gulp"),
    plumber = require("gulp-plumber"),
    uglyfly = require("gulp-uglyfly"),
    rename = require("gulp-rename");

gulp.task("scripts", () => {
    gulp.src("js/*.js")
        .pipe(plumber())
        .pipe(uglyfly())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("js/js-min/"));
});

gulp.task("watch", () => {
    gulp.watch("js/*.js", ["scripts"]);
});

gulp.task("default", ["scripts", "watch"]);
