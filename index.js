const pkg = require('./package.json');

module.exports = {

  //Gets passed $ and the padplus.config.json. $ documentation: https://github.com/cheeriojs/cheerio
  //The exported Function MUST return $ after it has been modified!
  modifyHtml: function($) {return $},

  //Entry point for Browserify
  //Included transforms: browserify-css, hbsfy
  clientJs: '',

  //You can just pass in the package.json as config if you want to, but these are the things padplus can use:
  config: {
    name: '',
    version: pkg.version,
  },

  //This will also be added soonTM!
  /*resources: [
    __dirname + '/resources/icon.png',
  ],*/
};
