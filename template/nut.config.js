const path = require('path');

module.exports = {
  zh: 'XX平台',
  en: '',
  port: 3000,
  html: {
    title: '',
    favicon: './favicon.png',
  },
  layout: 'kaola',
  sidebar: [
  {
    title: 'Demo',
    icon: 'database-fill',
    children: [
      { title: 'user', path: 'pages/demo/user/index' },
    ]
  }],
  configureWebpack: {
    resolve: {
      alias: {}
    }
  },
  devServer: {
    proxy: {
      '*': 'http://127.0.0.1:7000'
    }
  }
}