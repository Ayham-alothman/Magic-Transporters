import { Request,Response } from "express";
import { AddMagicItemIntoDb } from "../db/AddMagicItem.db";

async function AddMagicItem(req:Request,res:Response) {
    if(req.body.nameitem&&req.body.weightitem){
        try{
            AddMagicItemIntoDb(req.body.nameitem,req.body.weightitem);
            res.status(200).end()
        }
        catch(e){res.status(403).json(e)}
    }
    else if(!req.body.nameitem||!req.body.weightitem){res.status(403).json('there miss data')}
    res.status(400).end()
}

export {AddMagicItem}