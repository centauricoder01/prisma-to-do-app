import { PrismaClient } from "@prisma/client";

// @prisma/client (It allows us to interact with your database through the Prisma ORM )

const prisma = new PrismaClient({
  log: ["query"],
});

export default prisma;
