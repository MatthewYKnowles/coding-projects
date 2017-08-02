// stryker.conf.js
module.exports = function (config) {
    config.set({
        files: [
            // Add your files here, this is just an example:
            { pattern: 'src/**/*.js', mutated: true, included: true },
            'spec/**/*.js',
        ],
        testRunner: 'karma',
        testFramework: 'jasmine',
        coverageAnalysis: 'perTest',
        reporter: ['html', 'progress'],
        karmaConfigFile: 'karma.conf.js'
    });
}