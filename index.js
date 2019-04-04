'use strict';

module.exports = function lazy_image_plugin(md, options) {
  // Plugin options
  var pluginOptions = md.utils.assign({
    placeholder: 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs='
  }, options || {})

  var defaultImageRenderer = md.renderer.rules.image;

  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    var token = tokens[idx];
    var srcValue = token.attrGet('src');
    token.attrPush(['data-src', srcValue]);
    token.attrSet('src', pluginOptions.placeholder);
    return defaultImageRenderer(tokens, idx, options, env, self);
  };
};
