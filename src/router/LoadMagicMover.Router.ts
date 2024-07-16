import {Router} from 'express';
import { LoadMagic } from '../controllar/LoadMagicMover.Controllar';
const BaseUrl=Router();

BaseUrl.post('/',LoadMagic);

export default BaseUrl;