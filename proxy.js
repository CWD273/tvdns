const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Create an HTTP server and handle incoming requests
const server = http.createServer((req, res) => {
    // Add CORS headers to allow cross-origin requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Proxy the request to the target URL
    proxy.web(req, res, {
        target: 'http://fl2.moveonjoy.com/CARTOON_NETWORK/index.m3u8?checkedby:alliptvlinks.com'
    });
});

// Use the PORT environment variable provided by Render or default to 8080
const PORT = process.env.PORT || 8080;

// Start the server
server.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
