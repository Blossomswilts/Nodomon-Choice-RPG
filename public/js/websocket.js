const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(webSocketsServerPort);
console.log('Listening on port 8000');

const wsServer = new webSocketServer({
    httpServer: Server
});

const clients = {};

wsServer.on('request'), function (request) {
    const connection = request.accept(null, request.origin);
    clients[] = connection;
}

connection.on('message', function(message) {
    for(key in clients) {
        clients.[key].sendUTF(message.utf8Data);
    }
});