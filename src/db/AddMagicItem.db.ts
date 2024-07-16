import mongoose,{connect} from "mongoose";
import { MagicItem } from "./scema/MagicItem.scema";
async function AddMagicItemIntoDb(NameMagicItem:string,WeightMagicItem:number){
  try{
    await connect('mongodb://localhost:27017/Transporters');
    const NewMagicItem=new MagicItem({
        Name:NameMagicItem,
        Weight:WeightMagicItem
    })
    await NewMagicItem.save();

  }
  catch(e){throw e}
  finally{mongoose.connection.close()}
}

export {AddMagicItemIntoDb}