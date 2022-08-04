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
const customLogger_1 = require("../../../../logger/customLogger");
const FILENAME = '/backend/src/api/vi/services/authServices.ts';
function addAdmin(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const admin = course_1.default.create({ name });
            return admin;
        }
        catch (error) {
            (0, customLogger_1.logGeneralError)('auth-service', FILENAME, 'addAdmin', String(error));
            return false;
        }
    });
}
function viewAdmins() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const admin = course_1.default.find();
            return admin;
        }
        catch (error) {
            (0, customLogger_1.logGeneralError)('auth-service', FILENAME, 'viewAdmins', String(error));
            return false;
        }
    });
}
exports.default = {
    addAdmin,
    viewAdmins,
};
