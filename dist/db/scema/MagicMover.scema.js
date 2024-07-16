"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagicMover = void 0;
var mongoose_1 = require("mongoose");
var MagicMoverScema = new mongoose_1.Schema({
    State: { type: String, enum: ['resting', 'loading', 'on-mission'], required: true, default: 'resting' },
    LimitedWeight: { type: Number, required: true },
});
exports.MagicMover = (0, mongoose_1.model)('MagicMover', MagicMoverScema);
