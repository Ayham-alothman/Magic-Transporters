import {Schema,model} from 'mongoose';

interface MagicMover{
    State:String,
    LimitedWeight:Number,   
}

const MagicMoverScema=new Schema<MagicMover>({
    State:{type:String,enum:['resting','loading','on-mission'],required:true,default:'resting'},
    LimitedWeight:{type:Number,required:true},
})

export const MagicMover = model<MagicMover>('MagicMover', MagicMoverScema);