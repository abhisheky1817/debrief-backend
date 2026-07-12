import { PrismaClient } from "@prisma/client";
import { NODE_ENV } from "./serverConfig.js";

const globalForPrisma = global;

const dbConnect = globalForPrisma.prisma ?? new PrismaClient({
  log: NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

if (NODE_ENV !== "production") globalForPrisma.prisma = dbConnect;

export default dbConnect;