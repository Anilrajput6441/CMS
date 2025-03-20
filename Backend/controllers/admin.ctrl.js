import AdminModel from '../models/admin.model.js';
import { OTP_Gen } from '../utilities/OTP.generator.js';
import { send_Mail } from '../utilities/sendMail.ut.js';
import { token_Gen } from '../utilities/JWT.ut.js';
import bcrypt from 'bcrypt'

export const allAdmin = async (req,res) => {
    try {
        const admins = await AdminModel.find();
        res.status(200).json(admins)

    } catch (error) {
        res.status(500).json({Message: 'Server Error', Error: error})
    }
}

export const deleteAllAdmin = async (req,res) => {
    try {
        const admins = await AdminModel.deleteMany();
        res.status(200).json(admins)

    } catch (error) {
        res.status(500).json({Message: 'Server Error', Error: error})
    }
}

export const signup =  async (req,res)=>{
    try {
        const {name, email, password, phone} = req.body;
        const hashPassword = await bcrypt.hash(password,10);
        console.log(typeof hashPassword)

        const OTP = OTP_Gen();

        const admin = await AdminModel.create({
            name,
            email,
            password: hashPassword,
            phone,
            OTP
        })

        await send_Mail(email,OTP)

        res.send("OTP is sent to your email");

    } catch (error) {
        if(error.code === 500) return res.status(500).json("Server Error");
        return res.json({Message: error.message})
    }
}

export const verify = async (req,res)=>{
    
    try {
        const { OTP } = req.body;

        const admin = await AdminModel.findOne({OTP});
        if(!admin) return res.send('Incorrect OTP')
        
        admin.isVerified = true;
        admin.OTP = null;
        await admin.save()

        return res.status(200).json({message: 'Email Verified Successfully', user: admin})

    } catch (error) {
        console.log("Error: ",error.message)
        return res.status(500).json({ error: err.message }); 
    }
}

export const login = async (req,res)=>{
    try {
        const {email, password} = req.body;
        console.log(email, password)
        const isAdmin = await AdminModel.findOne({email});
        if(!isAdmin) return res.status(401).json("Incorrect Email or Password");
        console.log(isAdmin)

        const result = bcrypt.compare(password,isAdmin.password);
        if(!result) return res.status(401).json("Incorrect Email or Password");

        const token = token_Gen({email});

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            maxAge: 1000*60*10,
            sameSite: 'lax'
        })

        res.send('Login Successfully')

    } catch (error) {
        res.status(500).json({Success: false, Message: 'Server Error', Error: error.message})
    }
}


// Next Day-------------
export const requestChangePassword = async (req,res) => {
    try {
        const admin = req.admin
        const OTP = OTP_Gen()

        admin.OTP = OTP
        await admin.save()
        send_Mail(admin.email,OTP)
        res.send('OTP is sent to your email');
    } catch (error) {
        res.status(500).json({Success: false, Message: 'Server Error'})
    }
}

export const ChangePassword = async (req,res) => {
    try {
        const {OTP,newPassword,oldPassword} = req.body;
        const admin = req.admin;

        if(admin.OTP !== OTP)  return res.send('Incorrect OTP');

        const result = await bcrypt.compare(oldPassword, admin.password)
            
        if(!result) return res.send('Incorrect Password');

        const hashPassword = await bcrypt.hash(newPassword,10);
        admin.password = hashPassword;
        admin.OTP = null;
        await admin.save();

        res.status(202).json({Message: 'Password Save Successfully', admin});
    } catch (error) {
        res.status(500).json({Success: false, Message: 'Server Error'})
    }
}//----------------------

export const dashboard = async(req,res)=>{
    try {
        const admin = req.admin;

        res.status(200).json(admin)
    } catch (error) {
        res.status(500).json({Success: false, Message: 'Server Error'})
    }
}