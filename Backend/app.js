/* Imports Libraries and files */
import express from 'express'
import {configDotenv} from 'dotenv'
import connectDB from './configs/mongodb.config.js'
import cookieParser from 'cookie-parser'
import admin_routes from './routes/admin.routes.js'

configDotenv()

// Express App
const app = express()

// Middlewares
app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send('LETS GO')
})
app.use('/admin',admin_routes)

app.listen(process.env.PORT, ()=>{
    connectDB()
    console.log(`Server started at http://localhost:${process.env.PORT}`)
})