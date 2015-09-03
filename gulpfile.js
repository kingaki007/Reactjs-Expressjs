/**
 * Created by Engage Beyond on 9/1/2015.
 */
var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('live-server',function(){
    var server = new LiveServer('server/main.js');
    server.start();
});

gulp.task('bundle',['copy'],function(){
    return browserify({
        entries: 'app/main.jsx',
        debug:true,
    }).transform(reactify).bundle().pipe(source('app.js'))
        .pipe(gulp.dest('./.tmp'));
})

gulp.task('copy',function(){
    gulp.src(['bower_components/skeleton/css/*.css',',app/*.css']).pipe(gulp.dest('./.tmp'));
})

gulp.task('heroku', ['bundle','live-server'], function () {
    return gulp.src(config.base)
        .pipe(plugins.webserver({
            host: '0.0.0.0',
            port: process.env.PORT,
            livereload: false,
            open: false
        }));
});

/*gulp.task('serve',['bundle', 'live-server'],function(){
    browserSync.init(null,
        {
            proxy:"http://localhost:3000",
            port:9001
        })
})*/

