const config = {
  local: true, //是否为本地开发
  clientId: 'localhost', // 必须填入响应的客户端（本地开发）
  titlename: 'Choerodon', //项目页面的title名称
  favicon: 'favicon.ico', //项目页面的icon图片名称
  fileServer: 'http://minio.choerodon.example.com',
  theme: {
    'primary-color': '#3F51B5',
  },
  cookieServer: '', //子域名token共享
  server: 'http://api.choerodon.example.com',
  webSocketServer: 'ws://websocket.choerodon.example.com',
  dashboard: {
    iam: {
      components: 'choerodon-front-iam/iam/src/app/iam/dashboard/*',
      locale: 'choerodon-front-iam/iam/src/app/iam/locale/dashboard/*',
    },
    agile: 'choerodon-front-agile/agile/src/app/agile/dashboard/*',
    wiki: 'choerodon-front-wiki/wiki/src/app/wiki/dashboard/*',
    testManager: 'choerodon-front-test-manager/testManager/src/app/testManager/dashboard/*',
  },
};

module.exports = config;