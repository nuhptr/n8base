import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"

import prisma from "@/lib/db"

export const auth = betterAuth({
    database: prismaAdapter(prisma, { provider: "postgresql" }),
    emailAndPassword: {
        enabled: true, // Enable email and password authentication
        autoSignIn: true, // Automatically sign in the user after they confirm their email
    },
})
