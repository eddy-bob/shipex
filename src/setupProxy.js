const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/v1",
    createProxyMiddleware({
      target: "https://shippex-demo.bc.brandimic.com/",
      changeOrigin: true,
      pathRewrite: { "^/v1": "" },
    })
  );
};
