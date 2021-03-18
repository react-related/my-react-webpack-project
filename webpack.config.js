const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./src/index.html"), // html源文件
  filename: "index.html", // 生成的内存中首页的名称
  inject: true, // 是否将构建后的js注入该html，默认为true
});

module.exports = {
  mode: "development",
  // TODO: 这个dev.js有什么实质用处？与hot参数没看到区别。
  entry: ["./src/index.js", "./src/dev.js"], // 入口文件默认为src/index.js，打包文件默认为dist/main.js
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    // 下述扩展名在import时可以不写，会被按如下顺序自动匹配补全
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
    alias: {
      // 引入包时推荐使用@的绝对路径写法替代相对路径写法，虽然没有了IDE的智能提示，但在组件搬迁过程中能避免相对路径造成的问题
      "@": path.join(__dirname, "./src"),
    },
  },
  plugins: [
    htmlPlugin,
    new webpack.HotModuleReplacementPlugin(), // 实例化热加载插件
  ],
  module: {
    // webpack默认只能打包处理.js后缀的文件，无法主动处理.png .vue文件，需要通过第三方loader来实现。
    // 在module里配置第三方模块的规则
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // babelrc: true, // 是否使用.babelrc文件中的配置与presets融合，默认为true
            presets: [], // 需要用require.resolve('xxx')方式引入包，作为对.babelrc的差分补充
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.html$/i,
        exclude: "/node_module/",
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader?modules"], // 打包处理css的第三方loader，先执行css-loader再执行style-loader
      },
    ],
  },
  devtool: "cheap-module-source-map", // sourcemap调测代码
  devServer: {
    contentBase: path.join(__dirname, "./src/"),
    publicPath: "/",
    host: "127.0.0.1",
    port: 3020,
    hot: true,
    stats: {
      colors: true,
    },
  },
};
