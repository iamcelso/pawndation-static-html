const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// compile scss to css
function style(){

    return gulp.src('./app/scss/**/*.scss')
               .pipe(sass())
               .pipe(gulp.dest('./app/css'))
               .pipe(browserSync.stream());
}

// webpage auto reload
function watch(){
    browserSync.init({
        server:{
            baseDir: './app'
        }
    });


    gulp.watch('./app/scss/**/*.scss', style);
    gulp.watch('./app/*.html').on('change',  browserSync.reload);
    gulp.watch('./app/js/**/*js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;