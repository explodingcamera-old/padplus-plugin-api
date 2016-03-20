const cheerio = require('cheerio');

module.exports = function (args) {
  var $ = args.$;
  var config = args.config;

  var cdn = '';
  if (config.useCDN == true) {
    cdn = config.cdnUrl;
    $('.scripts script').remove();
    $('.scripts').append('<script src="' + cdn + '/lib/js/musiqpad-full.min.js"></script>');
    console.log('Adding CDN links');
  }

  $('script[src="/pads/lib/js/app.js"]').attr('src', cdn + '/lib/js/app.js');
  $('body').append('<script src="/lib/js/padplus.js"></script>');

  return {
    $: $,
    config: config,
  };
};
