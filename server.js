const http = require('http');

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
    console.log(req.headers.host)
    res.end(`Hello team`);
}).listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});