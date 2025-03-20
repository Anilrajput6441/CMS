import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
configDotenv()

export function token_Gen(payload){
    return jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:"1h"
    })
}

export function token_Verifier(token){
    return jwt.verify(token,process.env.JWT_SECRET)
}