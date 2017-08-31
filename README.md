# 开始
>react + material-ui 实现一个记事本[笔记、计划]...

1. crete-react-app noter
2. yarn eject
3. yarn add babel-plugin-import 使用antd提供的按需加载插件
    ```
    {
          test: /\.(js|jsx)$/,
          include: paths.appSrc,
          loader: require.resolve('babel-loader'),
          options: {
              plugins: [
                  [
                      'import', {
                          libraryName: 'material-ui',
                          "libraryDirectory": "./",
                          "camel2DashComponentName": false,
                          style: false
                      }
                  ]
              ],
              cacheDirectory: true
          }
      },
    ```
4. yarn add material-ui
5. yarn start
