import { Router } from "express";
import { CompletedMissionControllar } from "../controllar/CompletedMission.Controllar";

const BaseUrl=Router();

BaseUrl.get('/',CompletedMissionControllar);

export default BaseUrl;