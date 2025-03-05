import { LoginForm } from "@/components/authentication/login-form";
import PurpleGrad from "@/components/backgrounds/purple-grad";

export default function Login() {
  return (
    <PurpleGrad>
      <div className="flex min-h-svh flex-col items-center justify-center p-6 pt-24 md:p-10 md:pt-24">
        <div className="w-full max-w-sm md:max-w-3xl">
          <LoginForm />
        </div>
      </div>
    </PurpleGrad>
  );
}
