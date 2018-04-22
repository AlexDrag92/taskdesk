var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var csso = require('gulp-csso');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function(){
  return gulp.src('src/sass/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer({browsers: [
      "last 2 versions"
      ]}),
    ]))
  .pipe(csso())
  .pipe(gulp.dest('src/css'))
  .pipe(bs.stream())
  });

gulp.task('serve', ['sass'], function(){
  bs.init({
    server: 'src/'
    });

  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/libs/bootsrap/stylesheets/**/*.scss', ['sass']);
  gulp.watch('src/*.html').on('change', bs.reload);
  gulp.watch('src/js/*.js').on('change', bs.reload);
  });