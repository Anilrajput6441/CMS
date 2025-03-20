import AdminModel from "../models/admin.model.js";
import { token_Verifier } from "../utilities/JWT.ut.js";

export async function isLoggedIn(req,res,next){
    try {
        const token = req.cookies.token;
        if(!token) return res.status(401).json('Access Denied Login Again');

        const {email} = token_Verifier(token);
        const admin = await AdminModel.findOne({email});
        req.admin = admin;

        next();
    } catch (error) {
        return res.status(401).json('Access Denied Login Again');
    }
}