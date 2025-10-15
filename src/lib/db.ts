import { PrismaClient } from "@/generated/prisma"

//* This ensures that we only have a single instance of Prisma Client
//* in development to prevent exhausting database connections.
//* In production, a new instance is created for each request.
const globalForPrisma = global as unknown as {
    prisma: PrismaClient
}

//* This is the Prisma Client instance that will be used throughout the app. */
const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma
    //* Prevent multiple instances of Prisma Client in development
}

export default prisma
