"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./auth"));
const user_1 = __importDefault(require("./user"));
const guest_1 = __importDefault(require("./guest"));
const access_1 = __importDefault(require("../middlewares/access"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../../docs/swagger.json"));
const configs_1 = require("../configs");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send({
        code: 200,
        message: "Dummy API v1",
    });
});
swagger_json_1.default.host = `${configs_1.app.host}` || "localhost:3002";
router.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
router.use(access_1.default.handle);
router.use("/authentication", auth_1.default);
router.use("/user", user_1.default);
router.use("/guest", guest_1.default);
exports.default = router;
