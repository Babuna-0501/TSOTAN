module.exports = {
  // ...other configuration options
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .exclude.add(/node_modules\/(?!your-module-to-exclude)/)
      .end()
      .use("babel-loader")
      .loader("babel-loader")
      .tap((options) => {
        // Modify options if needed
        return options;
      });
  }
};