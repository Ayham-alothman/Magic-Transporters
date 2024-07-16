import { Router } from "express";
import { AddMagicItem } from "../controllar/AddMagicItem.Controllar";
const BaseUrl=Router();

BaseUrl.post('/',AddMagicItem)

export default BaseUrl;