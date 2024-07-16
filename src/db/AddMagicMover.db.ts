import mongoose,{connect} from 'mongoose';
import { MagicMover } from './scema/MagicMover.scema';

async function AddMagicMoverntoDb(WeightLimitMagicMover:number){
 try{
      await connect('mongodb://localhost:27017/Transporters');
      const NewMagicMover=new MagicMover({
        
        LimitedWeight:WeightLimitMagicMover
      })
     await NewMagicMover.save();
     

     
 }
 catch(e){throw e}
 finally{mongoose.connection.close()}
 
}

export {AddMagicMoverntoDb}