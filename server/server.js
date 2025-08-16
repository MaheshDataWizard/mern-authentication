import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const allowedOrigins = process.env.ALLOWED_ORIGINS
const port = process.env.PORT || 5000
app.use(express.json());
app.use(cookieParser())
app.use(cors({origin:allowedOrigins, credentials: true}));

connectDB();


//API Endpoint

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)

app.get("/", (req, res)=> res.send("API Working"));

app.listen(port,(req, res)=>{

    console.log(`App is running on localhost http://localhost:${port}`);

})