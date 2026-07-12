import { Router } from "express";
import { signup, signin } from "../../controllers/authController.js";
import validate from "../../middlewares/zodValidator.js";
import { signupSchema, signinSchema } from "../../validators/authValidator.js";

const router = Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/signin", validate(signinSchema), signin);

export default router;