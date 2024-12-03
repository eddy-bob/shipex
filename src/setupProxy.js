const { createProxyMiddleware } = require("http-proxy-middleware");
import { SERVER_URL } from "./utils/static";
module.exports = function (app) {
  app.use(
    "/v1",
    createProxyMiddleware({
      target: SERVER_URL,
      changeOrigin: true,
      pathRewrite: { "^/v1": "" },
    })
  );
};
