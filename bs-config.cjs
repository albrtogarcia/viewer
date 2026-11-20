const targetUrl = "https://bbvacib.local";

module.exports = {
  proxy: { target: targetUrl, ws: true },
  browser: ["google chrome"],
  ghostMode: { clicks: true, scroll: true, forms: true, location: true },
  port: 3000,
  ui: { port: 3001 },
  notify: false,
};
