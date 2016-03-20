const pkg = require('./package.json');
module.exports = {
  func: require('./main'),
  config: {
    name: 'API',
    version: pkg.version,
  },
};
