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
const db_1 = __importDefault(require("../loaders/db"));
const user_entity_1 = require("../models/user.entity");
class UserRepository {
    constructor() {
        this.user = db_1.default.getRepository(user_entity_1.User);
    }
    findOne(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.user.findOneBy(params);
        });
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.user.save(params);
        });
    }
    updateById(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.user.update(id, params);
        });
    }
    updateByEmail(email, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.user.update(email, params);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.user.delete(id);
        });
    }
}
exports.default = new UserRepository();
