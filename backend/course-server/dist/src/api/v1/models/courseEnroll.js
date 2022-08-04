"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const courseEnrollmentSchema = new mongoose_1.Schema({
    courseId: { type: String, required: true },
    studentId: { type: String, required: true },
    isApproved: { type: Boolean, default: false },
}, {
    timestamps: true,
});
const CourseEnrollModel = (0, mongoose_1.model)('courseEnroll', courseEnrollmentSchema);
exports.default = CourseEnrollModel;
