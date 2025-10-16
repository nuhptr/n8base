import { initTRPC, TRPCError } from "@trpc/server"
import { cache } from "react"

import { headers } from "next/headers"
import { auth } from "@/lib/auth"

// Example of a use case where you might want to pass something
// to your procedures' context.
// Here we pass a userId, but you can
// pass anything you want.
export const createTRPCContext = cache(async () => {
    return { userId: "user_123" }
})

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create({
    // transformer: superjson,
})

// Base router and procedure helpers
export const createTRPCRouter = t.router
export const createCallerFactory = t.createCallerFactory
export const baseProcedure = t.procedure

// add protectedProcedure
export const protectedProcedure = baseProcedure.use(async ({ ctx, next }) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if (!session)
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "You must be logged in to access this resource",
        })

    return next({ ctx: { ...ctx, auth: session } })
})
