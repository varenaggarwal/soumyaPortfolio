module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Soumya-Aggarwal","short_name":"SoumyaArt","start_url":"/","background_color":"#000000","theme_color":"#000000","display":"minimal-ui","icon":"src/assets/images/icon.svg"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
