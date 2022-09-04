const path =require("path")
const HTMLWebpackPlugin=require("html-webpack-plugin")
module.exports={
  // 指定入口文件
  entry:"./src/index.ts",
  // 指定打包文件所在目录
  output:{
    // 指定打包文件的目录
    path:path.resolve(__dirname,'dist'),
    // 打包后文件名称
    filename:"bundle.js",
    clean:true, // 在生成文件之前清空 output 目录
  },
  "mode": 'production',
  //指定打包时使用的模块
  module:{
    // 指定要加载的规则
    rules:[
      {
        // test指定规则生效的文件
        test:/\.ts$/,
        // 要使用的loader
        use:'ts-loader',
        // 要排除的文件
        exclude:/node_modules/
      },
      {
        test:/\.less$/,
        use:[
          "style-loader",
          "css-loader",
          {
            loader:"postcss-loader",
            options:{
              postcssOptions:{
                plugins:[
                  [
                    "postcss-preset-env",
                    {
                      browsers:"last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }

    ]
  },
  // 配置webpack插件
  plugins:[
    new HTMLWebpackPlugin({
      // 配置
      // title:'这是一个自定义的title'
      template:'./src/index.html'  //指定编译生成后的HTML模板 可以在这里这个html文件中指定结构
    })
  ],
  // 用来设置引用的模块
  resolve:{
    extensions:['.ts','.js']
  }
}