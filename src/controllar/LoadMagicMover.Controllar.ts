import { Request,Response } from "express";
import { ValditionWeigths } from "../utility/ValditionWeight";
import { GetWeightDb } from "../db/GetWeigth.db";
import { SetStateMover } from "../db/SetStateMover.db";
import { AddActivityIntoDb } from "../db/AddActivity.db";

async function LoadMagic(req:Request,res:Response) {
     
    if(req.body.idmover&&Array.isArray(req.body.items)){
        try{
             const LoadWeigth= await GetWeightDb(req.body.idmover);
                
             await ValditionWeigths(req.body.items,LoadWeigth);
             await SetStateMover(req.body.idmover,'loading');
             await AddActivityIntoDb(req.body.idmover,req.body.items);
             res.status(200).end();

        }
        catch(e){res.status(403).json(e)}
    }
    else if(!req.body.idmover||!Array.isArray(req.body.items)){
        res.status(400).json('there miss data')
    }
    res.status(403).end()



}

export {LoadMagic}