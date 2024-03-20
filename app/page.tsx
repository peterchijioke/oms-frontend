import Image from "next/image";
import AppLandingHeader from "./components/common/AppLandingHeader";
import LandingImage from "../public/asset/images/landing.jpg";
import styles from "./components/common/style.module.css";
import LandingBanner from "./components/LandinBanner";
import RowCard from "./components/RowCard";
import FooterSection from "./components/common/FooterSection";
import Container from "./layout/Container";
import RowCard2 from "./components/RowCard2";
// import LandingImage from "../public/asset/images/homless.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <AppLandingHeader />
      <section className="h-fit w-full pt-16 relative">
        <LandingBanner />
        <Container>
          <div className="flex flex-col gap-20">
            <RowCard />
            <RowCard2 />
          </div>
        </Container>
      </section>
      <FooterSection />
    </main>
  );
}
