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
      '/api': {
        target: 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/',
        ws: true,
        changeOrigin: true
        // pathRequiresRewrite: { // 替换域名前缀
        //   '^/api': ''
        // }
      }
    }
  }
}
