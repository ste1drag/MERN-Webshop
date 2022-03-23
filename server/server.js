const http = require('https');
const app = require('./app');

const server = http.createServer(app);

const port = 50000;

server.listen(port, () => {
    console.log('Server started on https://localhost:' + port);
})