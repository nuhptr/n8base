import { requireUnauth } from "@/lib/auth-utils"

import { RegisterForm } from "@/features/auth/components/register-form"

const SignUpPage = async () => {
    await requireUnauth() // Redirect if the user is authenticated

    return <RegisterForm />
}

export default SignUpPage
