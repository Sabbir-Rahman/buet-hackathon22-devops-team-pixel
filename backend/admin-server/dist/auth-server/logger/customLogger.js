"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logGeneralError = exports.logGeneralInfo = void 0;
const deafultLogger_1 = __importDefault(require("./deafultLogger"));
const logGeneralInfo = (serviceName, file, method, message) => {
    deafultLogger_1.default.info(`service: ${serviceName} | file: ${file} | method: ${method} | message: ${message}`);
};
exports.logGeneralInfo = logGeneralInfo;
const logGeneralError = (serviceName, file, method, message) => {
    deafultLogger_1.default.error(`service: ${serviceName} | file: ${file} | method: ${method} | message: ${message}`);
};
exports.logGeneralError = logGeneralError;
