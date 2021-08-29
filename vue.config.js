const CompressionPlugin = require("compression-webpack-plugin")
const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  assetsDir: 'assets',
  publicPath: './',

  css: {
    loaderOptions: {
      sass: {
      }
    }
  },
  pluginOptions: {
  },
  configureWebpack(config) {
    const configNew = {}
    if (process.env.NODE_ENV === 'production') {
      configNew.plugins = [
        new CompressionPlugin({
          filename: '[path].gz[query]',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false
        }),
      ]
    }
    if (process.env.NODE_ENV === 'development') {
      // 关闭 host check，方便使用 ngrok 之类的内网转发工具
      configNew.devServer = {
        disableHostCheck: true
      }

      config.devtool = 'cheap-module-source-map'
    }

    return configNew
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    config.module
      .rule('svgIcon')
      .test(/\.svg$/)
      .include.add(resolve("src/assets/image/apple"))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'os-[name]'
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .end()

    svgRule
      .exclude.add(resolve('src/assets/image/apple'))
      .end()
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/design/var/index.scss";`
      }
    }
  }
}
