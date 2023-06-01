const { defineConfig } = require('@vue/cli-service')
const path = require("path");
// const path = require('path');
// const resolve = p => path.resolve(__dirname, '../', p);

module.exports = {
  configureWebpack: {
    output: {
      // libraryExport: 'default'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@pack': path.resolve(__dirname, 'packages'),
      }
    }
  },
  chainWebpack: config =>{
    const dir = path.resolve(__dirname, 'src/assets/icons')
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, 'src/icons')).end()
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({symbolId: 'icon-[name]'}).end()

    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(path.join(__dirname, 'src/icons'))
  },
  css: {
    extract: false
  }
}
