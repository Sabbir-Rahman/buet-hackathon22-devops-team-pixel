"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const course_1 = __importDefault(require("../models/course"));
const customLogger_1 = require("../../../../../auth-server/logger/customLogger");
const FILENAME = '/backend/src/api/vi/services/adminCourseServices.ts';
function addCourse(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const course = course_1.default.create({ name });
            return course;
        }
        catch (error) {
            (0, customLogger_1.logGeneralError)('admin-service', FILENAME, 'addCourse', String(error));
            return false;
        }
    });
}
function viewCourses() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const courses = course_1.default.find();
            return courses;
        }
        catch (error) {
            (0, customLogger_1.logGeneralError)('admin-service', FILENAME, 'viewCourses', String(error));
            return false;
        }
    });
}
exports.default = {
    addCourse,
    viewCourses
};
