"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagicItem = void 0;
var mongoose_1 = require("mongoose");
var SchemaMagicItem = new mongoose_1.Schema({
    Name: { type: String, required: true },
    Weight: { type: Number, required: true }
});
exports.MagicItem = (0, mongoose_1.model)('MagicItem', SchemaMagicItem);
0;
