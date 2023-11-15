"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const guest_1 = __importDefault(require("../handlers/guest"));
const router = express_1.default.Router();
router.post("/create", guest_1.default.create);
exports.default = router;
