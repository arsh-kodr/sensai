import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

if (!globalForPrisma._prisma) {
  globalForPrisma._prisma = new PrismaClient({
    log: ["query", "error", "warn"],
  });
}

const db = globalForPrisma._prisma;

export { db };
