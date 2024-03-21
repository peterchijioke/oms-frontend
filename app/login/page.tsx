import AppLandingHeader from "../components/common/AppLandingHeader";
import CustomInput from "../components/common/CustomInput";
import FooterSection from "../components/common/FooterSection";
import { ScaleAnimation } from "../components/common/FramerMotion";

export default function Login() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-between ">
      <AppLandingHeader />
      <section className="flex items-center h-full justify-center flex-grow w-full pt-16 relative">
        <ScaleAnimation>
          <div className="h-fit p-8 bg-[#2c3e50] rounded-[10px] gap-10 flex flex-col ">
            <label
              htmlFor=""
              className="h-10 text-white font-semibold text-3xl text-center"
            >
              Login
            </label>
            <div className="flex flex-col gap-4">
              <CustomInput label="Full Name" />
              <CustomInput type="email" label="Email" />
            </div>
          </div>
        </ScaleAnimation>
      </section>
      <FooterSection />
    </main>
  );
}
