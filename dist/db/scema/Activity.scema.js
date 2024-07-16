"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityModel = void 0;
var mongoose_1 = require("mongoose");
var SchemaActivity = new mongoose_1.Schema({
    idMover: { type: String, required: true },
    items: { type: [], required: true },
    state: { type: String, enum: ['loading', 'on-mission', 'delivery'], default: 'loading' }
});
exports.ActivityModel = (0, mongoose_1.model)('Activity', SchemaActivity);
