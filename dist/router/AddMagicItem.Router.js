"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AddMagicItem_Controllar_1 = require("../controllar/AddMagicItem.Controllar");
var BaseUrl = (0, express_1.Router)();
BaseUrl.post('/', AddMagicItem_Controllar_1.AddMagicItem);
exports.default = BaseUrl;
