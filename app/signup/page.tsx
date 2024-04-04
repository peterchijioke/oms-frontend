import AppLandingHeader from "../components/common/AppLandingHeader";
import CustomInput from "../components/common/CustomInput";
import FooterSection from "../components/common/FooterSection";
import { Animate, ScaleAnimation } from "../components/common/FramerMotion";
import { constants } from "../constant";
import SignupForm from "./SignupForm";

export default function Signup() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-between ">
      <AppLandingHeader />
      <section className="flex items-center h-full justify-center flex-grow w-full pt-28 pb-16 relative">
        <ScaleAnimation>
          <div className="h-fit p-8 bg-[#2c3e50] rounded-[10px] gap-10 flex flex-col ">
            <label
              htmlFor=""
              className="h-10 text-white font-semibold text-3xl text-center"
            >
              Register
            </label>
            <SignupForm />
          </div>
        </ScaleAnimation>
      </section>
      <FooterSection />
      <FooterSection />
    </main>
  );
}
