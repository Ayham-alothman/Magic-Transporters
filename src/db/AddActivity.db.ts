import mongoose,{connect} from "mongoose";
import { ActivityModel } from "./scema/Activity.scema";

async function AddActivityIntoDb(idmover:string,items:[]) {
    try{
        await connect('mongodb://localhost:27017/Transporters');
        const NewActivity=new ActivityModel({
            idMover:idmover,
            items:items,
        })
        await NewActivity.save();

    }
    catch(e){throw e}
    finally{mongoose.connection.close()}
}

async function UpdateActivity(idactivity:string,state:string){
    try{
        await connect('mongodb://localhost:27017/Transporters');
        await ActivityModel.findByIdAndUpdate(idactivity,{state:state});
        return;

    }
    catch(e){throw e}
    finally{mongoose.connection.close();}
    
}


export {AddActivityIntoDb,UpdateActivity}