const NodeMailer = require("nodemailer");
const http = require("http");
const {Email} = require("./smtp");
SendMail().catch(console.error);

const Server = http.createServer((Req,Resp) => 
{
    const {method,url} = Req;
    const {headers} = Req;
    const To = headers['to'];
    const Messge = headers['message'];

    Resp.setHeader('Access-Control-Allow-Origin','*');
    Resp.write("hello");

    console.log("Attempting to send an email");
    SendMail().catch(console.error);
}).listen(process.env.PORT || 5000,() => console.log("Server Started"));

async function SendMail()
{
    console.log("Starting To send email");
    let Transporter = NodeMailer.createTransport(
        {
            host: 'smtp.hostinger.com',
            port: 587,
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
        },function(Err,Info)
        {
            if(Err)
            {
                console.log(Err);
            }
            else
            {
                console.log(Info);
            }
        });
}