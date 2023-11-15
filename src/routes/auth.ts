import express from "express";
import AuthHandler from "../handlers/auth";

const router = express.Router();

router.post("/login", AuthHandler.login);

export default router;
