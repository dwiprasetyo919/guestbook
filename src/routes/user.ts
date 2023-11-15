import express from "express";
import UserHandler from "../handlers/user";

const router = express.Router();

router.post("/create", UserHandler.create);

export default router;
