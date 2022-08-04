"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
}, {
    timestamps: true,
});
const CourseModel = (0, mongoose_1.model)('course', courseSchema);
exports.default = CourseModel;
