import express from "express";
import { mongooseConnect } from "./src/db/db.js";
import dotenv from 'dotenv';
import { Server } from "socket.io";
import http from 'http';

const server = http.createServer();
const io = new Server(server);
dotenv.config();
const app = express();
io.on('connection', (socket) => {
    console.log('one user connected');
    socket.on('chatMessage', (msg) => {
        console.log('recieved message', msg);
        io.emit(msg);
    });
    socket.on('disconnect', (msg) => {
        console.log('user disconnected');
    })
})
const port = process.env.PORT;
const url = process.env.URL;
app.listen(port, async () => {
    try {
        await mongooseConnect(url);
        console.log('listening to the port ', port)
    } catch (error) {
        console.log('errorIs', error);
    }
})