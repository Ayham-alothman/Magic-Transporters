import mongoose,{connect} from "mongoose";
import { MagicMover } from "./scema/MagicMover.scema";
async function GetWeightDb(id:string){
 try{
    await connect('mongodb://localhost:27017/Transporters');
      const DataMover=  await MagicMover.findById(id);
      return DataMover?.LimitedWeight;
 }
 catch(e){throw `do't found mover has this ${id}`}
 finally{mongoose.connection.close()}
}

export {GetWeightDb}