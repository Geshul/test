import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import squoosh from 'gulp-libsquoosh';
import del from 'del';
import browser from 'browser-sync';

// Styles

export const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
};

// HTML

const html = () => {
  return gulp.src('source/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build/'))
};

// Scripts

const scripts = () => {
  return gulp.src('source/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('build/js'))
    .pipe(browser.stream());
};

// Images

const images = () => {
  return gulp.src('source/img/**/*.{png,jpg}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/img'))
};

const copyImages = () => {
  return gulp.src('source/img/**/*.{png,jpg}')
    .pipe(gulp.dest('build/img'))
};

// favicon

const favicon =() => {
  return gulp.src(['favicon.ico', 'manifest.webmanifest'])
    .pipe(gulp.dest('build'))
};

// Clean

const clean = () => {
  return del('build');
};

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

// Watcher

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/js/*.js', gulp.series(scripts));
  gulp.watch('source/*.html').on('change', browser.reload);
};

// Build

export const build = gulp.series(
  clean,
  images,
  gulp.parallel(
    styles,
    html,
    scripts,
    favicon
  ),
);

// Default

export default gulp.series(
  clean,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    favicon
  ),
  gulp.series(
    server,
    watcher
  ));
