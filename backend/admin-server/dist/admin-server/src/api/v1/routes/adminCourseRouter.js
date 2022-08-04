"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
router.get('/test', controller_1.adminCourseController.test);
router.post('/add', controller_1.adminCourseController.addCourse);
router.get('/view', controller_1.adminCourseController.viewCourses);
exports.default = router;
