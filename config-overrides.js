const { override, fixBabelImports, addLessLoader, addWebpackPlugin , addDecoratorsLegacy } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');


module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true,
  }),
  addDecoratorsLegacy(),
  addLessLoader({
    lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
      javascriptEnabled: true,
      // modifyVars: { '@primary-color': '#1ea0d7' },
      modifyVars: { '@primary-color': '#0072b4' },
    },
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
);