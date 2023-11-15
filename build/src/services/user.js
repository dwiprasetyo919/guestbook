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
const user_1 = __importDefault(require("../repositories/user"));
const user_entity_1 = require("../models/user.entity");
class UserServices {
    create(email, password, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_entity_1.User();
            user.name = name;
            user.email = email;
            user.password = password;
            return yield user_1.default.create(user);
        });
    }
    update(email, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_entity_1.User();
            user.name = name;
            return yield user_1.default.updateByEmail(email, user);
        });
    }
}
exports.default = new UserServices();
