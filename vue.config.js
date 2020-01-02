module.exports = {
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  publicPath: '',
  productionSourceMap: false, // 不在production环境使用SourceMap
  devServer: {
    // 跨域
    port: 8088, // 端口号
    open: false, // 配置自动启动浏览器
    proxy: {
      // 配置跨域处理 可以设置多个
      '/ddmc': {
        target: 'https://easy-mock.com/mock/5e0962dc1c1f71356ef22f06',
        ws: true,
        changeOrigin: true,
        pathRequiresRewrite: { // 替换域名前缀
          '^/ddmc': ''
        }
      }
    }
  }
}
