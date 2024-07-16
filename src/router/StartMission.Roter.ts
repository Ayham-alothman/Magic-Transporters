import { Router } from "express";
import { StartMissionControllar } from "../controllar/StartMission.Controllar";

const BaseUrl=Router();
BaseUrl.post('/',StartMissionControllar);
export default BaseUrl;