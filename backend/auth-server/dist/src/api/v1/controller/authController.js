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
const services_1 = require("../services");
const customLogger_1 = require("../../../../logger/customLogger");
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
function addAdmin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = {
            isSuccess: false,
            statusCode: 200,
            message: 'Admin not added',
            developerMessage: '',
            isReadOnly: false,
            data: {},
        };
        const admin = yield services_1.authService.addAdmin(req.body.name);
        if (admin) {
            response.statusCode = 200;
            response.isSuccess = true;
            response.message = 'Admin added succesfully';
            response.data = admin;
        }
        else {
            (0, customLogger_1.logGeneralError)('admin-serive', '/controller/authController.ts', 'addAdmin', 'Something wrong happen');
        }
        res.status(response.statusCode).json(response);
    });
}
function viewAdmin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = {
            isSuccess: false,
            statusCode: 200,
            message: 'Admin not viwed',
            developerMessage: '',
            isReadOnly: false,
            data: {},
        };
        const admins = yield services_1.authService.viewAdmins();
        if (admins) {
            response.statusCode = 200;
            response.isSuccess = true;
            response.message = 'Admin viewed succesfully';
            response.data = admins;
        }
        else {
            (0, customLogger_1.logGeneralError)('admin-serive', '/controller/authController.ts', 'viewAdmin', 'Something wrong happen');
        }
        res.status(response.statusCode).json(response);
    });
}
exports.default = {
    test,
    addAdmin,
    viewAdmin
};
