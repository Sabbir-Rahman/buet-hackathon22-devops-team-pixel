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
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const cors_1 = __importDefault(require("cors"));
const customLogger_1 = require("../logger/customLogger");
const v1_1 = require("./api/v1");
const mongodbConnect_1 = __importDefault(require("./api/v1/utils/mongodbConnect"));
const server_1 = __importDefault(require("./api/v1/utils/server"));
//const app = express()
const app = (0, server_1.default)();
const port = config_1.default.get('PORT') || 5010;
const FILENAME = '/backend/admin-server/src/app.ts';
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use('/api/v1/admin', v1_1.v1Router);
app.get('/', (req, res) => {
    res.send('Welcome from admin-server');
});
// catch all
// app.all('*', (_, res: Response) => {
//   res
//     .status(501)
//     .send({ message: 'This admin-service route is not implemented yet' })
// })
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    (0, customLogger_1.logGeneralInfo)('admin-server', FILENAME, 'app-listen', `Server listening on port ${port}`);
    yield (0, mongodbConnect_1.default)();
}));
