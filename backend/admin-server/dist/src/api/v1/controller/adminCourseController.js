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
Object.defineProperty(exports, "__esModule", { value: true });
const customLogger_1 = require("../../../../logger/customLogger");
const services_1 = require("../services");
function test(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = {
            isSuccess: false,
            statusCode: 200,
            message: 'Admin test route ok',
            developerMessage: '',
            isReadOnly: false,
            data: { message: 'Admin test route ok' },
        };
        res.status(response.statusCode).json(response);
    });
}
function addCourse(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = {
            isSuccess: false,
            statusCode: 400,
            message: 'Add course failed',
            developerMessage: '',
            isReadOnly: false,
            data: {},
        };
        const course = yield services_1.adminCourseService.addCourse(req.body.name, req.body.description);
        if (course) {
            response.statusCode = 200;
            response.isSuccess = true;
            response.message = 'Course added succesfully';
            response.data = course;
        }
        else {
            (0, customLogger_1.logGeneralError)('admin-serive', '/controller/adminCourseController.ts', 'addCourse', 'Something wrong happen');
        }
        res.status(response.statusCode).json(response);
    });
}
function viewCourses(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = {
            isSuccess: false,
            statusCode: 400,
            message: 'View courses failed',
            developerMessage: '',
            isReadOnly: false,
            data: {},
        };
        const courses = yield services_1.adminCourseService.viewCourses();
        if (courses) {
            response.statusCode = 200;
            response.isSuccess = true;
            response.message = 'Courses viwed succesfully';
            response.data = courses;
        }
        else {
            (0, customLogger_1.logGeneralError)('admin-serive', '/controller/adminCourseController.ts', 'view courses', 'Something wrong happen');
        }
        res.status(response.statusCode).json(response);
    });
}
exports.default = {
    test,
    addCourse,
    viewCourses
};
