module.exports = function(config) {
    config.set({
        plugins: ['karma-systemjs', 'karma-jasmine', 'karma-chrome-launcher', 'karma-coverage'],
        frameworks: ['systemjs', 'jasmine'],
        files: ['spec/*.js', 'src/*.js'],
        reporters: ['progress', 'coverage'],
        preprocessors: {'src/**/*.js': ['coverage']},
        systemjs: {configFile: 'system.config.js'},
        browsers: ['Chrome'],
        singleRun: true
    })
};