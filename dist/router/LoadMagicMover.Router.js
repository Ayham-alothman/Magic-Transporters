"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var LoadMagicMover_Controllar_1 = require("../controllar/LoadMagicMover.Controllar");
var BaseUrl = (0, express_1.Router)();
BaseUrl.post('/', LoadMagicMover_Controllar_1.LoadMagic);
exports.default = BaseUrl;
