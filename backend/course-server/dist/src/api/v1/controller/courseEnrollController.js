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
function enrollCourse(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = {
            isSuccess: false,
            statusCode: 200,
            message: 'Course not enrolled',
            developerMessage: '',
            isReadOnly: false,
            data: {},
        };
        const course = yield services_1.courseEnrollService.enrollCourse(req.body.studentId, req.body.courseId);
        if (course) {
            response.statusCode = 200;
            response.isSuccess = true;
            response.message = 'Course enrolled succesfully';
            response.data = course;
        }
        else {
            (0, customLogger_1.logGeneralError)('admin-serive', '/controller/authController.ts', 'enrollCourse', 'Something wrong happen');
        }
        res.status(response.statusCode).json(response);
    });
}
function viewEnrolledCourse(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = {
            isSuccess: false,
            statusCode: 200,
            message: 'Admin not viwed',
            developerMessage: '',
            isReadOnly: false,
            data: {},
        };
        const courses = yield services_1.courseEnrollService.viewEnrolledCourse();
        if (courses) {
            response.statusCode = 200;
            response.isSuccess = true;
            response.message = 'Course viewed succesfully';
            response.data = courses;
        }
        else {
            (0, customLogger_1.logGeneralError)('admin-serive', '/controller/courseEnrollController.ts', 'viewEnrolledCourse', 'Something wrong happen');
        }
        res.status(response.statusCode).json(response);
    });
}
exports.default = {
    test,
    enrollCourse,
    viewEnrolledCourse
};
