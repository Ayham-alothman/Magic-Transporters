import { Request,Response } from "express";
import { CompletMissionINDb } from "../db/CompletedMission.db";

async function CompletedMissionControllar(req:Request,res:Response) {
    try{
        const CompletedMission=await CompletMissionINDb();
        res.status(200).json(CompletedMission);
    }
    catch(e){res.status(403).json(e)}
}
export {CompletedMissionControllar}