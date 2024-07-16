import mongoose,{connect} from "mongoose";
import { ActivityModel } from "./scema/Activity.scema";
import { MagicMover } from "./scema/MagicMover.scema";

async function ValditionStartMission(idmover:string,idactivity:string) {
    try{
        if(idmover.length!=24){throw `the id of mover not valid`}
        if(idactivity.length!=24){throw `the id of activity not valid`}
        
        await connect('mongodb://localhost:27017/Transporters');
        const idMover=new mongoose.Types.ObjectId(idmover);
        const idActivity=new mongoose.Types.ObjectId(idactivity);
        const docMover=await MagicMover.findOne({_id:idMover});
        const docActivity=await ActivityModel.findOne({_id:idActivity});
        if(docMover==null){throw `the id of mover not found`}
        if(docActivity==null){`the id of activity not found`}
        if(docMover.State!='loading'){throw `the mover curent not loading `}
        if(docActivity?.state!='loading'){throw `the activity curent not loading `}
        return;
        
        //const docActivity=await ActivityModel.findById(idactivity);
        //const docMover=await MagicMover.findById(idmover);
        //if(docActivity?.state!='loading'){throw `the cureent state of actvity not loading`}
        //if(docMover?.State!='loading'){throw `the cureent state of Mover not loading`}
    }
    catch(e){throw e}
}

export {ValditionStartMission}