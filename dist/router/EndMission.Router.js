"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var EndMission_Controllar_1 = require("../controllar/EndMission.Controllar");
var BaseUrl = (0, express_1.Router)();
BaseUrl.post('/', EndMission_Controllar_1.EndMissionControllar);
exports.default = BaseUrl;
