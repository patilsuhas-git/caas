const express = require('express');
const http = require('http');
const { Server } = require('socket.io')
const CAAS_FRONTEND_URL = process.env.CAAS_FRONTEND_URL || 'http://localhost:3000';
const SERVER_PORT = process.env.SERVER_PORT || 8081;
// replace the secret in production to be a different value
const CORS_APP_SECRET = process.env.CORS_APP_SECRET || 'abcd1234123';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        // origin: CAAS_FRONTEND_URL,
        origin: CAAS_FRONTEND_URL,
        methods: ["GET", "POST"],
        allowedHeaders: ["x-custom-auth"],
        credentials: true
    }
});

app.get('/', (request, response) => {
  response.send('<h1>Hello world!</h1>');
});

io.on('connection', (socket) => {
  socket.on('specialEvent', (msg) => {
    console.log("Special event received!!");
    io.emit('specialEventResponse', 'Thank you for sending a message to the socket server!');
  });
  console.log("A user connected to the socket!");
});

server.listen(SERVER_PORT, () => {
  console.log("Socket app listening on port: " + SERVER_PORT);;
});