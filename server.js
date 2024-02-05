"use strict";
const http = require("http");
const host = 'localhost';
const port = 8000;
const log = require("pretty-log")

const requestListener = function (req, res) {
        res.writeHead(200);
        res.end("Server is Running");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
        log.success(`Server is running on http://${host}:${port}`);
});
