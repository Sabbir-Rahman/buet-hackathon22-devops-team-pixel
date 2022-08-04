"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const express_1 = require("express");
const routes_1 = require("./routes");
const router = (0, express_1.Router)();
router.use('/', routes_1.courseEnrollRouter);
exports.default = router;
