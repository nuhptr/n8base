import { baseProcedure, createTRPCRouter } from "@/trpc/init"
import prisma from "@/lib/db"

export const appRouter = createTRPCRouter({
    getUsers: baseProcedure.query(async () => {
        return await prisma.user.findMany()
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter
