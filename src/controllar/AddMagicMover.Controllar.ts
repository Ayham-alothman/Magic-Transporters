import {Request,Response} from 'express'
import { AddMagicMoverntoDb } from '../db/AddMagicMover.db';
async function AddMagicMover(req:Request,res:Response){
       if(req.body.limtedmover){
         try{
            await AddMagicMoverntoDb(req.body.limtedmover);
            res.status(200).json('Add new mover');
         }  
         catch(e){res.status(403).json(e)}
       }
       
       else if(!req.body.limtedmover){
           res.status(400).json(`there miss data`);
       }
       res.status(400).end();
}

export {AddMagicMover}