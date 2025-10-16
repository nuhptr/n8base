import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "./auth"

// Utility functions to protect server components
export const requireAuth = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if (!session) redirect("/login")

    return session
}

// Utility function to redirect authenticated users away from auth pages
export const requireUnauth = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if (session) redirect("/")
}
