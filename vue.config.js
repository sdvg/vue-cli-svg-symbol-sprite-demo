const path = require('path')
const SVGSymbolSprite = require('svg-symbol-sprite-loader')

module.exports = {
  chainWebpack: config => {
    config
      .plugin('svg-symbol-sprite-loader')
      .after('html')
      .use(SVGSymbolSprite.Plugin)
      .end();

    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('svg-symbol-sprite-loader')
      .loader('svg-symbol-sprite-loader')
      .options({
        symbolId: filePath => `icon-${path.basename(filePath, '.svg')}`,
      })
  }
}