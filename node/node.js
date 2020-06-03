const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Response!");
});

server.listen(3000);