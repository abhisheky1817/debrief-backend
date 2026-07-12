import db from "../config/dbConfig.js";

export const createMeeting = async (data) => {
  return await db.meeting.create({ data });
};

export const findMeetingsByUserId = async (userId) => {
  return await db.meeting.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
};

export const findMeetingById = async (id) => {
  return await db.meeting.findUnique({ where: { id } });
};

export const updateMeeting = async (id, data) => {
  return await db.meeting.update({ where: { id }, data });
};

export const deleteMeeting = async (id) => {
  return await db.meeting.delete({ where: { id } });
};