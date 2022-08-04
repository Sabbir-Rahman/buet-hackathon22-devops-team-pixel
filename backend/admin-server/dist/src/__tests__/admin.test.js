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
const supertest_1 = __importDefault(require("supertest"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
//import jwt from 'jsonwebtoken'
const server_1 = __importDefault(require("../api/v1/utils/server"));
const app = (0, server_1.default)();
// testing the auth server
describe('Auth', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const mongoServer = yield mongodb_memory_server_1.MongoMemoryServer.create();
        yield mongoose_1.default.connect(mongoServer.getUri());
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.disconnect();
        yield mongoose_1.default.connection.close();
    }));
    describe('true test', () => {
        it('should return true', () => {
            expect(true).toBe(true);
        });
    });
    // testing the admin test route
    describe('admin test route', () => {
        it('should return 200', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app).get('/api/v1/admin/course/test');
            expect(response.status).toBe(200);
        }));
    });
    // testing the admin add course route
    describe('admin add course route', () => {
        it('should return 200', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app).post('/api/v1/admin/course/add')
                .send({ name: 'test course' });
            expect(response.status).toBe(200);
        }));
    });
    // testing the admin view courses route
    describe('admin view courses route', () => {
        it('should return status 200 and an array of the courses', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app).get('/api/v1/admin/course/view');
            expect(response.status).toBe(200);
            expect(response.body.data).toBeInstanceOf(Array);
        }));
    });
});
