import express from 'express'
import mongoose from 'mongoose'

import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'

dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("conected to db")
})
.catch((err)=>{
    console.log(err)
})
const app = express()
//for allowing to use json reqeuser
app.use(express.json())
app.listen(3000,()=>{
    console.log("SErver is sruning to this port 3000")
})


// routes cretion 
app.use('/api/user', userRouter)
app.use('/api/auth',authRouter)

//middleware to handle error in where to use this use next() function and send hhere
app.use((err,req,res,next)=> {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error"
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})
// 2:44