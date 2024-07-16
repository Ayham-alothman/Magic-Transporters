import {Model, Schema,model} from 'mongoose';

interface MagicItem{
    Name:string,
    Weight:number
}
const SchemaMagicItem=new Schema<MagicItem>({
    Name:{type:String,required:true},
    Weight:{type:Number,required:true}
})

export const MagicItem=model<MagicItem>('MagicItem',SchemaMagicItem);0