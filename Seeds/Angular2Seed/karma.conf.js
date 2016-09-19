module.exports = function(config) {
    config.set({
        basePath: '.',
        plugins: ['karma-systemjs', 'karma-jasmine', 'karma-chrome-launcher'],
        frameworks: ['systemjs', 'jasmine'],
        files: [
            'app/*.js',
            {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/zone.js/dist/zone.js'
            ],
        systemjs: {configFile: 'systemjs.config.js'},
        browsers: ['Chrome'],
        singleRun: true
    })
};