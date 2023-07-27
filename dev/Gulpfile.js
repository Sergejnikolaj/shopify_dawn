"use strict";

const gulp = require("gulp");
const babel = require("gulp-babel");
const changed = require("gulp-changed");
const concat = require("gulp-concat");
const csslint = require("gulp-csslint");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");

/**
 * Stylesheet task
 */
gulp.task("css", function () {
  gulp
    .src("sass/**/*.scss.liquid")
    .pipe(sass().on("error", sass.logError))
    .pipe(rename("dawn-custom.css"))
    .pipe(gulp.dest("../assets/"));
});

/**
 * JavaScript task
 *
 * @type {string}
 */
const jsFiles = [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/slick-slider/slick/slick.js",
  "js/dawn-custom.js",
];
const jsDest = "../assets/";

gulp.task("js", function () {
  return gulp
    .src(jsFiles)
    .pipe(
      babel({
        presets: ["es2015"],
      })
    )
    .pipe(concat("custom.js"))
    .pipe(gulp.dest(jsDest))
    .pipe(rename("custom.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});

/**
 * Images task
 */
gulp.task("images", function () {
  return gulp
    .src("image/**")
    .pipe(changed("../assets/")) // ignore unchanged files
    .pipe(gulp.dest("../assets/"));
});

/**
 * Fonts task
 */
gulp.task("fonts", function () {
  return gulp
    .src("font/**")
    .pipe(changed("../assets/")) // ignore unchanged files
    .pipe(gulp.dest("../assets/"));
});

/**
 * Watch task
 */
gulp.task("watch", function () {
  gulp.watch("sass/**/*.scss", ["css"]);
  gulp.watch("js/**/*.js", ["js"]);
  gulp.watch("image/*.{jpg,jpeg,png,gif,svg}", ["images"]);
  gulp.watch("font/*.{eot,svg,ttf,woff,woff2}", ["fonts"]);
});
