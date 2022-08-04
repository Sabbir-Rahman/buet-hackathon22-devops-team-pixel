"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
router.get('/test', controller_1.authController.test);
router.post('/create/admin', controller_1.authController.addAdmin);
router.get('/view/admin', controller_1.authController.viewAdmin);
exports.default = router;
