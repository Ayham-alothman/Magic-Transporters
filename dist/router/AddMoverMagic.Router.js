"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AddMagicMover_Controllar_1 = require("../controllar/AddMagicMover.Controllar");
var BaseUrl = (0, express_1.Router)();
BaseUrl.post('/', AddMagicMover_Controllar_1.AddMagicMover);
exports.default = BaseUrl;
