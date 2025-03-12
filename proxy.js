const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
    proxy.web(req, res, { target: 'http://fl2.moveonjoy.com/CARTOON_NETWORK/index.m3u8?checkedby:alliptvlinks.com' });
});

const PORT = process.env.PORT || 8080; // Use Render's PORT environment variable
server.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
