module.exports = function(config) {
    config.set({
        plugins: ['karma-systemjs', 'karma-jasmine', 'karma-chrome-launcher'],
        frameworks: ['systemjs', 'jasmine'],
        files: ['spec/*.js', 'src/*.js'],
        systemjs: {configFile: 'system.config.js'},
        browsers: ['Chrome'],
        singleRun: true
    })
};