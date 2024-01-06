const nodemailer = require("nodemailer");

const sendMail=async(req,res)=>{
    const {msg,subject}=req.body
 
     //generate this fake data from https://ethereal.email/create
     const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'bruce.considine@ethereal.email',
            pass: '73xyY86jwx1VgRFeMm'
        }
    });

    
    const info = await transporter.sendMail({
        from: '"Siri Prasai" <siri@gmail.com>', // sender address
        to: process.env.MYGMAIL, // list of receivers
        subject: subject, // Subject line
        text: msg, // plain text body
        html: "", // html body
      });

      console.log("Message sent: %s", info.messageId);
      res.json({msg:"Check the mail at ethereal"})
}

module.exports=sendMail;