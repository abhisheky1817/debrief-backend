import { Router } from "express";
import {
  createMeeting,
  getMeetings,
  getMeetingById,
  deleteMeeting,
} from "../../controllers/meetingController.js";
import authMiddleware from "../../middlewares/authMiddleware.js";
import validate from "../../middlewares/zodValidator.js";
import { createMeetingSchema } from "../../validators/meetingValidator.js";

const router = Router();

router.use(authMiddleware);

router.post("/", validate(createMeetingSchema), createMeeting);
router.get("/", getMeetings);
router.get("/:id", getMeetingById);
router.delete("/:id", deleteMeeting);

export default router;