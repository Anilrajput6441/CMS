import { transporter } from "../configs/nodemailer.config.js";
import { configDotenv } from "dotenv";
configDotenv()

export async function send_Mail(email, otp) {
    try {

        const info = await transporter.sendMail({
            from: `"Gangwar" ${process.env.EMAIL}`,
            to: email,  // No need for template literals (`${email}`)
            subject: "Hello ✔",
            text: "Hello world?",
            html: `<b>Your OTP ${otp}</b>`,
        });

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

