import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js';
import salonRoute from './routes/salon.js';


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
// declare the routes
// auth router
app.use('/api/v1/auth',authRoute); // domain/api/v1/auth/register or /login
app.use('/api/v1/users',userRoute); // domian/api/v1/user/delete/getsingle/update/getAll/getprofie
app.use('/api/v1/salons',salonRoute); // domian/api/v1/salons/delete/getsingle/update/getAll/getprofie


export { app }      

