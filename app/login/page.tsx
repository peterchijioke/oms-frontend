import AppLandingHeader from "../components/common/AppLandingHeader";
import CustomInput from "../components/common/CustomInput";
import FooterSection from "../components/common/FooterSection";
import { ScaleAnimation } from "../components/common/FramerMotion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { constants } from "../constant";
import LoginForm from "./LoginForm";

export default function Login() {
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
              Login
            </label>
            <LoginForm />
          </div>
        </ScaleAnimation>
      </section>
      <FooterSection />
      <ToastContainer />
    </main>
  );
}
