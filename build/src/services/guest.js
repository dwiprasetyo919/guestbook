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
const guest_1 = __importDefault(require("../repositories/guest"));
const guest_entity_1 = require("../models/guest.entity");
class GuestServices {
    create(name, address, phone, note) {
        return __awaiter(this, void 0, void 0, function* () {
            const guest = new guest_entity_1.Guest();
            guest.name = name;
            guest.address = address;
            guest.phone = phone;
            guest.note = note;
            return yield guest_1.default.create(guest);
        });
    }
    update(id, name, address, phone, note) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new guest_entity_1.Guest();
            user.name = name;
            user.address = address;
            user.phone = phone;
            user.note = note;
            return yield guest_1.default.updateById(id, user);
        });
    }
}
exports.default = new GuestServices();
