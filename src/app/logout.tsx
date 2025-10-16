"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export const LogoutButton = () => {
    const router = useRouter()

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login")
                },
                onError: (context) => {
                    toast.error(context.error?.message || "Failed to logout")
                },
            },
        })
    }

    return <Button onClick={handleLogout}>Logout</Button>
}
