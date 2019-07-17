import nodeMailer from "nodemailer"

class SendMail {


    constructor( ) {
        this.mailSmtpConfig();
    }

mailSendConfig(obj: any){

return {
    from: "gago",
    to: 'samvelgevorgyan87@gmail.com',
    subject:  "NICE JOB OFFER ",

    html: ` 
<div  >
<h1>Hello Dear Samvel</h1>
<div>YOU HAVE GREAT EMAIL </div>
<ul style="list-style: none">
<li>Sender name - ${obj.name}</li>
<li>Sender email -  ${obj.email} </li>
<li style="font-size: 25px; color: #2b1df2"> Message -
${obj.msg}
</li>
</ul>
 </div>
  
`
}

}
    mailSmtpConfig(){

   return nodeMailer.createTransport({
       service: "gmail",
       host: "smtp.gmail.com",
       port: 587,
       auth: {
           user: "samvelgevorgyan87@gmail.com",
           pass: "asatur7790d9"
       },
       tls:{
           rejectUnauthorized:false,
       }
    });
}


}

const sendMail = new SendMail();

export default  sendMail;
