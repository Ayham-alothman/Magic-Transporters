import mongoose,{connect} from "mongoose";
import { MagicMover } from "./scema/MagicMover.scema";

async function SetStateMover(idmover:string,state:string) {
    try{    
        const arr=['resting','loading','on-mission']
        if(!arr.includes(state) ){throw `set state unknow`}
        await connect('mongodb://localhost:27017/Transporters');
        const Mover=await MagicMover.findById(idmover);
        
        const PriviousStateMover=Mover?.State;
        if(PriviousStateMover==undefined){throw ` do't found mover have id ${idmover} `}
        console.log(PriviousStateMover,state)
        
        if((state=='loading'&&PriviousStateMover=='resting')||(state=='on-mission'&&PriviousStateMover=='loading')||((state=='resting'&&PriviousStateMover=='on-mission')))
        {await MagicMover.findByIdAndUpdate(idmover,{State:`${state}`});return}
        throw ` do't set state ${state} and curent state to mover is ${PriviousStateMover} `
          
    }
    catch(e){throw e  }
    finally{mongoose.connection.close()}
}




export {SetStateMover}