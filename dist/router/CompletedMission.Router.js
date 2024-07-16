"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CompletedMission_Controllar_1 = require("../controllar/CompletedMission.Controllar");
var BaseUrl = (0, express_1.Router)();
BaseUrl.get('/', CompletedMission_Controllar_1.CompletedMissionControllar);
exports.default = BaseUrl;
