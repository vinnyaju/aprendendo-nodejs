const httpServer = require('http');

const server = httpServer.createServer(
    (req, res) => {
        console.log(req);
        res.setHeader('Content-Type', 'text/plain');
        res.write('' + req.method);
        res.write(' ' + req.rawHeaders);

        res.end();
    }
);


server.listen(3000);