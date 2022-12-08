const { src, dest } = require('gulp');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');
//const app = require('../config/app.js');

// Обработка Javascript
const js = function() {
    return src(path.js.src, { sourcemaps: app.isDev })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "JS",
            message: error.message
        }))
    }))
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev }));
}


module.exports = js;