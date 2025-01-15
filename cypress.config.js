const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.zoho.com/people/',  //over-rides settings outside e2e for e2e tests
    env:{"foo":"bar"},
    defaultCommandTimeout:5000,
    pageLoadTimeout:15000,
    screenshotOnRunFailure:true,
    screenshotsFolder:"./cypress/screenshots/",
    video:true,
    videosFolder:"./cypress/videos/",
    // retries: {
    //   runMode: 2,
    //   openMode: 2
    // },
    watchForFileChanges:true,
    viewportHeight:1000,
    viewportWidth:1280,
    includeShadowDom:false,
    downloadsFolder:"./cypress/downloads/",
    trashAssetsBeforeRuns:true,
    experimentalRunAllSpecs:true,
    experimentalModifyObstructiveThirdPartyCode:true,
  },
  })
  
