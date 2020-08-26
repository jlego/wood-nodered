/**
 * by jlego on 2020-8-12
 */
const RED = require('node-red');

module.exports = (app = {}, config = {}) => {
  app.Util = Util;
  const RED = require("node-red");
  RED.init(server,settings);

  // Serve the editor UI from /red
  app.use(settings.httpAdminRoot,RED.httpAdmin);

  // Serve the http nodes UI from /api
  app.use(settings.httpNodeRoot,RED.httpNode);
  if(app.addAppProp) app.addAppProp('Util', app.Util);
  return app;
}
