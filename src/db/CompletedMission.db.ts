import mongoose,{connect} from "mongoose";
import { ActivityModel } from "./scema/Activity.scema";

async function CompletMissionINDb() {
    try{
        await connect('mongodb://localhost:27017/Transporters');
        const Cmsiion= await ActivityModel.find({state:'delivery'});
        return Cmsiion

    }
    catch(e){throw e}
    finally{mongoose.connection.close()}
}

export {CompletMissionINDb}