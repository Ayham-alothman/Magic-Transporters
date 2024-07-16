import {Schema,model} from'mongoose';

interface Activity{
    idMover:string,
    items:[],
    state:string
}

const SchemaActivity=new Schema<Activity>({
    idMover:{type:String,required:true},
    items:{type:[],required:true},
    state:{type:String,enum:['loading','on-mission','delivery'],default:'loading'}
})

export const ActivityModel=model<Activity>('Activity',SchemaActivity);