"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logGeneralError = exports.logGeneralInfo = void 0;
const logGeneralInfo = (serviceName, file, method, message) => {
    // logger.info(
    //   `service: ${serviceName} | file: ${file} | method: ${method} | message: ${message}`
    //)
    console.log(`service: ${serviceName} | file: ${file} | method: ${method} | message: ${message}`);
};
exports.logGeneralInfo = logGeneralInfo;
const logGeneralError = (serviceName, file, method, message) => {
    // logger.error(
    //   `service: ${serviceName} | file: ${file} | method: ${method} | message: ${message}`
    // )
    console.log(`service: ${serviceName} | file: ${file} | method: ${method} | message: ${message}`);
};
exports.logGeneralError = logGeneralError;
