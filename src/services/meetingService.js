import AppError from "../utils/errors/appError.js";
import {
  createMeeting,
  findMeetingsByUserId,
  findMeetingById,
  deleteMeeting,
} from "../repositories/meetingRepository.js";

export const createMeetingService = async (userId, { title, description }) => {
  const meeting = await createMeeting({ title, description, userId });
  return meeting;
};

export const getMeetingsService = async (userId) => {
  return await findMeetingsByUserId(userId);
};

export const getMeetingByIdService = async (id, userId) => {
  const meeting = await findMeetingById(id);
  if (!meeting) throw new AppError("Meeting not found", 404);
  if (meeting.userId !== userId) throw new AppError("Unauthorized", 403);
  return meeting;
};

export const deleteMeetingService = async (id, userId) => {
  const meeting = await findMeetingById(id);
  if (!meeting) throw new AppError("Meeting not found", 404);
  if (meeting.userId !== userId) throw new AppError("Unauthorized", 403);
  await deleteMeeting(id);
};