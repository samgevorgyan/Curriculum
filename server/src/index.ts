import express, {Application} from 'express';
import indexRoutes from "./routes/indexRoutes";
import mailRoutes from "./routes/mailRoutes";
import morgan from "morgan";
import cors from "cors";
import os from "os";
import pp from "./db/mongo_connfig";

class Server {
    public app: Application

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {

        console.log('os',os.type() );
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));


    }

    routes(): void {
this.app.use('/', indexRoutes);
this.app.use('/mail',mailRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {

            console.log('run in server', this.app.get('port'));

        })
    }
}

const server = new Server();

server.start();
