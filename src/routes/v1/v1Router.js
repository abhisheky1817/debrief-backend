import { Router } from "express";
import authRouter from "./auth.js";
import meetingsRouter from "./meetings.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/meetings", meetingsRouter);

export default router;