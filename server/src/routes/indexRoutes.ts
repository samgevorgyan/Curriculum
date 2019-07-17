import  {Router} from 'express'

class IndexRoutes {
   public  router: Router = Router();
   constructor(){
this.config();
   }

   config(): void{
       console.log('mtav', );
       this.router.get('/', (req, res)=>{
           res.send('hello')
       })
   }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
