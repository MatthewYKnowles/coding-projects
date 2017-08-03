module.exports = function (config) {
    config.set({
        testRunner: 'karma',
        testFramework: 'jasmine',
        coverageAnalysis: 'perTest',
        reporter: ['html', 'progress'],
        karmaConfigFile: 'karma.conf.js',
        mutate: ['src/**/*.js']
    });
}