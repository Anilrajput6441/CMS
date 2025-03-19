import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Mongodb connected successfully')
    } catch (error) {
        console.log('Mongodb connection error: ',error.message)
        process.exit(1)
    }
}

export default connectDB