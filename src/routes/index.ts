import {Router} from 'express';

const index: Router = Router();

index.get('/', (req, res, next) => {
   res.send('foobar'); 
});

export default index;
