import express from "express";
import { mongooseConnect } from "./src/db/db.js";
import dotenv from 'dotenv';
dotenv.config();
const app = express();

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