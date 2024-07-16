import { Router } from "express";
import { EndMissionControllar } from "../controllar/EndMission.Controllar";

const BaseUrl=Router();

BaseUrl.post('/',EndMissionControllar);
export default BaseUrl;