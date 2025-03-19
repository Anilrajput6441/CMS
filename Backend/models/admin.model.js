import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    email:{
        type:String,
        required: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|in|co|uk|io|info|biz)$/,
        unique:true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    phone:{
        type: String,
        required: true,
        unique: true,
        match: [/^\d{10}$/, "Phone number must be 10 digits"]
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    OTP:Number,
    Categories:[
        {
            title: String,
            image: Buffer,
            link: String,
            subCategories:[
                {
                    title: String,
                    image: Buffer,
                    link: String
                }
            ]
        }
    ]
},
{
    timestamps: true
})

const AdminModel = mongoose.model('admins',adminSchema)
export default AdminModel;