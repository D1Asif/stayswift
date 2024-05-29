import RegistrationForm from "@/components/auth/RegistrationForm";
import SocialLogins from "@/components/auth/SocialLogins";


export default function RegisterPage() {
    return (
        <section className="grid min-h-screen mt-16 place-items-center">
            <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                <h4 className="font-bold text-2xl">Sign up</h4>
                <RegistrationForm />
                <SocialLogins mode="register" />
            </div>
        </section>
    )
}
