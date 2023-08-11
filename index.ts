import express from 'express';
import dotenv from 'dotenv'
import { connect } from './src/db/db';

dotenv.config();
const app = express();

const myport = process.env.PORT
app.listen(myport, async () => {
    try {
        const mongoURL = process.env.URL
        if (mongoURL) await connect(mongoURL)

    } catch (error) {
        console.log('crashed', error);
    }
    console.log('listening to the port ', myport)
})