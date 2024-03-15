import Image from "next/image";
import AppLandingHeader from "./components/common/AppLandingHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <AppLandingHeader />
    </main>
  );
}
