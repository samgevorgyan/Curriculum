import {Router} from 'express'
import mailConfig from './../send-mail/send-mail'


class MailRoutes {
    public router: Router = Router();


    constructor() {
        this.config();
    }

    config(): void {
        console.log('mtav games',);
        this.router.post('/', (req, res) => {

            console.log('mtrav mail-i hamar', req.body.name);

            if (req.body) {
                if (req.body.name && req.body.email && req.body.msg) {



                    mailConfig.mailSmtpConfig().sendMail(mailConfig.mailSendConfig(req.body), function (error: any, response: any) {
                        if (error) {
                            console.log('ssssssssssssssssssssss', JSON.stringify(error));
                            let gg = JSON.stringify({status:"sss"})
                            res.status(500).send(gg)
                        } else {
                            console.log("Message sent: " + response.accepted);
                            console.log('ssssssssssssssssssssss', JSON.stringify(response));
                            res.status(200).send({status:'OK'},)
                        }
                    })
                }
             else {
                res.send('kisat prat zapros',)
            }
        }

    } )
}
}

const gamesRoutes = new MailRoutes();
export default gamesRoutes.router;
