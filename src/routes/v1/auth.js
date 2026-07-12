import { Router } from "express";
import { signup, signin, getMe } from "../../controllers/authController.js";
import validate from "../../middlewares/zodValidator.js";
import { signupSchema, signinSchema } from "../../validators/authValidator.js";
import authMiddleware from "../../middlewares/authMiddleware.js";

const router = Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/signin", validate(signinSchema), signin);
router.get("/me", authMiddleware, getMe);

export default router;