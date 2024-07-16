import { Request,Response } from "express";
import { SetStateMover } from "../db/SetStateMover.db";
import { UpdateActivity } from "../db/AddActivity.db";
import { ValditionStartMission } from "../db/ValdtionToStartMission";

async function StartMissionControllar(req:Request,res:Response){
    if(req.body.idmover&&req.body.idactivity){
        try{
            await ValditionStartMission(req.body.idmover,req.body.idactivity);
            await SetStateMover(req.body.idmover,'on-mission');
            await UpdateActivity(req.body.idactivity,'on-mission');
            res.status(200).end()
        }
        catch(e){
            res.status(403).json(e)
        }
    }
    else if(!req.body.idmover){
        res.status(400).json(`there miss data`)
    }
    res.status(403).end();
}

export {StartMissionControllar}