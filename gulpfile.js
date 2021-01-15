const gulp = require("gulp");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const cheerio = require("gulp-cheerio");
const concat = require("gulp-concat");
const del = require("del");
const gulpIf = require("gulp-if");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const sourcemap = require("gulp-sourcemaps");
const svgstore = require("gulp-svgstore");
const sync = require("browser-sync").create();
const terser = require("gulp-terser");
const removeHtml = require("gulp-remove-html");
const rename = require("gulp-rename");
const webp = require("gulp-webp");

// Функция включения режима продакшена

let production = false;

const productionOn = (done) => {
  production = true;
  done();
};

// Styles

const styles = () => {
  return gulp
    .src("source/sass/style.scss", { sourcemaps: true })
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), csso()]))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css", { sourcemaps: "." }))
    .pipe(sync.stream());
};

// HTML

const html = () => {
  return gulp
    .src("source/*.html")
    .pipe(gulpIf(production, removeHtml()))
    .pipe(
      htmlmin({
        caseSensitive: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true,
      })
    )
    .pipe(gulp.dest("build"))
    .pipe(sync.stream());
};

// Scripts

const scripts = () => {
  return gulp
    .src(["./source/js/**/*.js"], { sourcemaps: true })
    .pipe(concat("script.js"))
    .pipe(
      terser({
        format: {
          comments: false,
        },
      })
    )
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("./build/js", { sourcemaps: "." }))
    .pipe(sync.stream());
};

// Images

const images = () => {
  return gulp
    .src(["source/img/**/*.{png,jpg,svg}", "!source/img/icons/*.svg"])
    .pipe(
      gulpIf(
        production,
        imagemin([
          imagemin.mozjpeg({
            progressive: true,
            quality: 90,
          }),
          imagemin.optipng({ optimizationLevel: 3 }),
          imagemin.svgo(),
        ])
      )
    )
    .pipe(gulp.dest("build/img"));
};

// WebP

const createWebp = () => {
  return gulp
    .src("source/img/content/**/*.{jpeg,jpg,png}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("build/img/content"));
};

// Sprite

const sprite = () => {
  return gulp
    .src("source/img/icons/*.svg")
    .pipe(
      imagemin([
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              removeDimensions: true,
            },
          ],
        }),
      ])
    )
    .pipe(
      cheerio({
        run: function ($) {
          $("[fill]").removeAttr("fill");
          $("[stroke]").removeAttr("stroke");
          $("[style]").removeAttr("style");
          $("[opacity]").removeAttr("opacity");
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(
      svgstore({
        inlineSvg: true,
      })
    )
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("./build/img"));
};

// Copy

const devTools = (done) => {
  gulp
    .src(["source/pixel-glass/**/*"], {
      base: "source",
    })
    .pipe(gulp.dest("build"));
  done();
};

const fontsAndIco = (done) => {
  gulp
    .src(["source/fonts/*.{woff2,woff}", "source/*.ico"], {
      base: "source",
    })
    .pipe(gulp.dest("build"));
  done();
};

// Clean

const clean = () => {
  return del("build");
};

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

// Watcher

const reload = (done) => {
  sync.reload();
  done();
};

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series(styles));
  gulp.watch("source/js/script.js", gulp.series(scripts));
  gulp.watch("source/*.html", gulp.series(html, reload));
};

// Tasks

const startServer = gulp.series(server, watcher);

const build = gulp.series(
  clean,
  gulp.parallel(styles, html, scripts, sprite, fontsAndIco, images, createWebp)
);

const buildProd = gulp.series(productionOn, build);

const dev = gulp.series(build, gulp.parallel(startServer, devTools));

// Export

exports.default = dev;
exports.build = buildProd;
