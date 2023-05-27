const { gulp, src, watch, series, dest } = require("gulp");
const prefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat-css");
const sass = require("gulp-sass")(require("sass"));

const buildCSS = () => {
  return src(["main.sass", "sass/**/*.sass"])
          .pipe(sass({ outputStyle: "compressed" }))
          .pipe(prefixer("last 2 versions"))
          .pipe(dest("dist/css/"))
}

const watchTasks = () => {
  return watch(["main.sass", "sass/**/*.sass"], buildCSS);
}

exports.default = series(watchTasks, buildCSS);