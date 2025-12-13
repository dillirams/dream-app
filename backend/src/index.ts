import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { appRouter } from './route/route.js';

const app=express();
app.use(cors({
   origin:['http://localhost:5173','http://localhost:3000','https://dream.dillaxadhi.com'],
   credentials:true
}))

app.use(express.json());
app.use(cookieParser());
app.use('/user',appRouter)
app.listen(3000,()=>{
    console.log("the app is listeninig to port 3000");
})