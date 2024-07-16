import express,{Application,Request,Response ,NextFunction} from 'express';
import bodyParser from 'body-parser';


const app:Application=express();

app.use(bodyParser.json());

import AddMover from './router/AddMoverMagic.Router';
import AddItem from './router/AddMagicItem.Router';
import LoadMagicMover from './router/LoadMagicMover.Router';
import StartMission from './router/StartMission.Roter';
import EndMover from './router/EndMission.Router'
import CompletedMission from './router/CompletedMission.Router'

app.use('/addmagicmover',AddMover);
app.use('/addmagicitem',AddItem);
app.use('/loadmagicmover',LoadMagicMover);
app.use('/startmission',StartMission);
app.use('/endmission',EndMover);

app.use('/completedmisiion',CompletedMission);


const Port=5000;
app.listen(Port,()=>{console.log(`listening on port number ${Port}`)})