const pkg = require('./package.json');
module.exports = {
  modifyHtml: require('./modifyHtml'),
  config: {
    name: 'API',
    version: pkg.version,
  },
};
