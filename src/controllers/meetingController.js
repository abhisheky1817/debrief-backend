import {
  createMeetingService,
  getMeetingsService,
  getMeetingByIdService,
  deleteMeetingService,
} from "../services/meetingService.js";

export const createMeeting = async (req, res, next) => {
  try {
    const meeting = await createMeetingService(req.user.id, req.body);
    res.status(201).json({ success: true, message: "Meeting created", data: meeting });
  } catch (error) {
    next(error);
  }
};

export const getMeetings = async (req, res, next) => {
  try {
    const meetings = await getMeetingsService(req.user.id);
    res.status(200).json({ success: true, data: meetings });
  } catch (error) {
    next(error);
  }
};

export const getMeetingById = async (req, res, next) => {
  try {
    const meeting = await getMeetingByIdService(req.params.id, req.user.id);
    res.status(200).json({ success: true, data: meeting });
  } catch (error) {
    next(error);
  }
};

export const deleteMeeting = async (req, res, next) => {
  try {
    await deleteMeetingService(req.params.id, req.user.id);
    res.status(200).json({ success: true, message: "Meeting deleted" });
  } catch (error) {
    next(error);
  }
};