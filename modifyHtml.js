const cheerio = require('cheerio');

module.exports = function ($, config) {
  var cdn = '';
  if (config.useCDN == true)
    cdn = config.cdnUrl;
  $('script[src="/pads/lib/js/app.js"]').attr('src', cdn + '/lib/js/app.js');
  $('body').append('<script src="/lib/js/padplus.js"></script>');
  return $;
};
