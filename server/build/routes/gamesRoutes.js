"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var send_mail_1 = __importDefault(require("./../send-mail/send-mail"));
var GamesRoutes = /** @class */ (function () {
    function GamesRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    GamesRoutes.prototype.config = function () {
        console.log('mtav games');
        this.router.post('/', function (req, res) {
            console.log('mtrav mail-i hamar', req.body.name);
            if (req.body) {
                if (req.body.name && req.body.email && req.body.msg) {
                    res.send('to chto nado');
                    send_mail_1.default.mailSmtpConfig().sendMail(send_mail_1.default.mailSendConfig(req.body), function (error, response) {
                        if (error) {
                            console.log(error);
                            res.end("error");
                        }
                        else {
                            console.log("Message sent: " + response.message);
                            res.end("sent");
                        }
                    });
                }
                else {
                    res.send('kisat prat zapros');
                }
            }
        });
    };
    return GamesRoutes;
}());
var gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
