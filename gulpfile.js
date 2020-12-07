const gulp = require("gulp"),
  sass = require("gulp-sass"),
  browsersync = require("browser-sync").create(),
  del = require("del"),
  imagemin = require("gulp-imagemin"),
  autoprefixer = require("gulp-autoprefixer"),
  csso = require("gulp-csso"),
  pug = require("gulp-pug"),
  data = require("gulp-data"),
  htmlmin = require("gulp-htmlmin"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  pump = require("pump");

const path = {
  build: "./build",
  dataJson: "./source/data.json",
  css: {
    source: "./source/styles/main.+(scss|sass)",
    dest: "./build/styles/",
    watchSource: "./source/styles/**/*.scss",
  },
  html: {
    indexSource: "./source/pages/*.pug",
    dest: "./build/styles/",
    watchSource: "./source/pages/**/*.pug",
  },
  scripts: {
    source: "./source/js/**/*",
    dest: "./build/js/",
    watchSource: "./source/js/**/*.js",
  },
  images: {
    source: "./source/img/**/*",
    dest: "./build/img/",
  },
  fonts: {
    source: "./source/fonts/**/*",
    dest: "./build/fonts/",
  },
};
