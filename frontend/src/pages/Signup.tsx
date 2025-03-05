import { SignupForm } from "@/components/authentication/signup-form";
import PurpleGrad from "@/components/backgrounds/purple-grad";

const Signup = () => {
  return (
    <PurpleGrad>
      <div className="flex min-h-svh flex-col items-center justify-center p-6 pt-24 md:p-10 md:pt-24">
        <div className="w-full max-w-sm md:max-w-3xl">
          <SignupForm />
        </div>
      </div>
    </PurpleGrad>
  );
};

export default Signup;
