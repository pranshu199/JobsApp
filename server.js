import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
//DB and authencticate user
import connectDB from './db/connect.js';

//routesrs
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

app.use(express.json())
app.get('/', (req, res)=>{
    
    res.send("Welcome");
})
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000

const start = async ()=>{
    try {
        connectDB(process.env.MONGO_URL)
        app.listen(port, ()=>{
            console.log("server is running");
        })
    } catch (error) {
        console.log("error")
    }
}
start()

