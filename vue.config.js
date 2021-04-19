const path = require('path');
const title = process.env.VUE_APP_TITLE;
const base_url = process.env.VUE_APP_SERVER_BASE_URL;

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  productionSourceMap: false,
  runtimeCompiler: true,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData:
          '@import "~@/assets/css/variable.scss";@import "~@/assets/css/tools.scss";',
      },
    },
  },
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: '8000',
    https: false,
    hotOnly: false,
    proxy: {
      '/': {
        target: base_url,
        changeOrigin: true,
        pathRewrite: {
          '^/': '',
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = title;
      return args;
    });

    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    }
  },
};
