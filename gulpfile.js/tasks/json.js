var config = require('../config');
var gulp = require('gulp');
var jsoncombine = require('gulp-jsoncombine');
var path = require('path');
var _ = require('lodash');

var jsonTask = function(cb) {
    console.log('Starting jsonTask');
    var dataFiles = [
        path.resolve(config.root.src, config.tasks.html.src, 'data/*.json'),
        '!**/global.json'
    ];

    return gulp
        .src(dataFiles)
        .pipe(
            jsoncombine('global.json', function(data) {
                var dataCC = _.mapKeys(data, function(v, k) {
                    return _.camelCase(k);
                });
                var sData = JSON.stringify(dataCC);

                return new Buffer(sData);
            })
        )
        .pipe(gulp.dest('./src/html/data'));
};

gulp.task('json', jsonTask);
module.exports = jsonTask;
