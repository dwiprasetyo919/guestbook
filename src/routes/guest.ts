import express from "express";
import GuestHandler from "../handlers/guest";

const router = express.Router();

router.get("/", GuestHandler.list);
router.post("/", GuestHandler.create);

export default router;
