import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app= express();


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({
    limit:"16kb"
}))
app.use(express.json())
app.use(express.urlencoded ({
    extended:true,limit:"16kb"
}))
    
app.use(cookieParser())
    export { app }  

    
// routes import
 import authRoute from './routes/auth.js'   
// declare the routes
 app.use('/api/v1/auth',authRoute); // domain/api/v1/auth/register

