"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
router.get('/test', controller_1.courseEnrollController.test);
router.post('/enroll', controller_1.courseEnrollController.enrollCourse);
router.get('/view', controller_1.courseEnrollController.viewEnrolledCourse);
exports.default = router;
