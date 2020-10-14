const NodeMailer = require("nodemailer");
const http = require("http");

const Server = http.createServer((Req,Resp) => 
{
    const {method,url} = Req;
    const {headers} = Req;
    const To = headers['to'];
    const Messge = headers['message'];

    Resp.setHeader('Access-Control-Allow-Origin','*');

    SendMail().catch(console.error);
});

async function SendMail()
{
    
    let Transporter = nodemailer.createTransport(
        {
            host: 'smtp.hostinger.com',
            port: 587,
            secure: false,
            auth: 
            {
                user: 'contact@maxedouthustle.com',
                pass: 'Jackson1'
            }
        });
    
    let Info = await Transporter.sendMail(
        {
            from: 'contact@maxedouthustle.com',
            to: "castrovincent985@gmail.com",
            subject: "hello",
            text: "hello world?",
            html: "<b>hello world?</b>"
        });

    console.log(Info.messageId);
}

Server.listen(8080);