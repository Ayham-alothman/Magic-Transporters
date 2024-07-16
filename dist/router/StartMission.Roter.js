"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var StartMission_Controllar_1 = require("../controllar/StartMission.Controllar");
var BaseUrl = (0, express_1.Router)();
BaseUrl.post('/', StartMission_Controllar_1.StartMissionControllar);
exports.default = BaseUrl;
