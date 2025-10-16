import { requireUnauth } from "@/lib/auth-utils"

import { LoginForm } from "@/features/auth/components/login-form"

const LoginPage = async () => {
    await requireUnauth() // Redirect if the user is authenticated

    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default LoginPage
