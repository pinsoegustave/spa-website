import  nodemailer from "nodemailer"

export default async function (req,res){
    const { email } = req.body

    const user ='ngabosevelin@gmail.com' 

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user:user,
            pass:'zpfx qisa azei pnki'
        }
    });
    try {
        const mail = await transporter.sendMail({
            from: email,
            to: "mzeegustmann12@gmail.com",
            replyTo: email,
            subject: 'Cosmas Newsletter Subscription Client',
            html:`
            <p>The client has subscribed for Cosmas daily newsletters, blogs and new posts.</p>
            `

        })
        console.log("message sent:", mail.messageId)

        return res.status(200).json({message: "success"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "couldnot send the email. your  message was not sent"
        })
        
    }

   
}