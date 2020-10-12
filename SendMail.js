const nodemailer = require("nodemailer");


async function SendMail(Email,Subject,Message)
{
    let TestAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: TestAccount.user, // generated ethereal user
          pass: TestAccount.pass, // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
          from:"asshole@fuckyou.com",
          to: "castrovincent985@gmail.com",
          subject:"fuck",
          text:"you",
          html:"<p>fuck you</p>"
      })
}


exports.SendMail = SendMail;