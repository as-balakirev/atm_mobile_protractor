exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4723/wd/hub',
    specs: ['../test/*.test.js'],
    capabilities: {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'myDevice',
        automationName: 'UIAutomator2'
    },
    mochaOpts: {
        timeout: '60000'
    },
    onPrepare: () => browser.waitForAngularEnabled(false)

}