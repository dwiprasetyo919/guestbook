import express from "express";
import AuthRouter from "./auth";
import UserRouter from "./user";
import GuestRouter from "./guest";
import AccessMiddleware from "../middlewares/access";
import TokenMiddleware from "../middlewares/token";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../docs/swagger.json";
import { app } from "../configs";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    code: 200,
    message: "Dummy API v1",
  });
});

swaggerDocument.host = `${app.host}` || "localhost:3002";
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use(AccessMiddleware.handle);
router.use("/authentication", AuthRouter);
router.use("/user", UserRouter);
router.use("/guest", TokenMiddleware.handle,GuestRouter);

export default router;
