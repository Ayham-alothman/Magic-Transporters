import {Router} from 'express';
import { AddMagicMover } from '../controllar/AddMagicMover.Controllar';
 
const BaseUrl= Router();
BaseUrl.post('/',AddMagicMover);

export default BaseUrl;