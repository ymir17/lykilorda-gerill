var http = require("http");

var url = "localhost";
var port = 8080;

http.createServer((req, res) => {
    res.statusCode = 200;
    res.end("Hello!");
}).listen(port, url, () => {
    console.log(`Server running at ${url}:${port}`);
});

