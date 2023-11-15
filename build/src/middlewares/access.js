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
const configs_1 = require("../configs");
class AccessMiddleware {
    handle(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { app_id, app_key } = request.headers;
            if (!app_id || !app_key) {
                return response.status(401).json({
                    error: "Unauthorized",
                });
            }
            if (app_id !== configs_1.app.appId || app_key !== configs_1.app.appKey) {
                return response.status(401).json({
                    error: "Unauthorized",
                });
            }
            next();
        });
    }
}
exports.default = new AccessMiddleware();
