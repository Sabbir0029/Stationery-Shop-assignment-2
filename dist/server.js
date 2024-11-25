"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
try {
    mongoose_1.default.connect(config_1.default.database_url);
    app_1.default.listen(config_1.default.path, () => {
        console.log(`Example app listening on port ${config_1.default.path}`);
    });
}
catch (error) {
    console.log(error);
}
