import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { MdiLightLogin } from "@/app/icons/MdiLightLogin";
import { MdiLove } from "@/app/icons/MdiLove";
import { MdiRegister } from "@/app/icons/MdiRegister";
import LandingMenu from "./LandingMenu";
import Tabs from "./Tabs";
import { MdiAbout } from "@/app/icons/MdiAbout";
import { Fa6SolidChildren } from "@/app/icons/Fa6SolidChildren";
import { MaterialSymbolsLightContactPage } from "@/app/icons/MaterialSymbolsLightContactPage";
import { MdiSignOut } from "@/app/icons/MdiSignOut";
import LogoTab from "./LogoTab";

type Props = {};

export default function AppLandingHeader({}: Props) {
  return (
    <div className="w-full h-16 bg-white fixed shadow px-5 z-10 lg:px-24  ">
      <div className="flex flex-row h-full w-full items-center  relative justify-between lg:hidden">
        <LandingMenu />
        <div className={`cursor-pointer flex  ${styles.nav_button}`}>
          <div className="flex items-center flex-row gap-1">
            <MdiLightLogin />
            <li>Login</li>
          </div>
        </div>
      </div>

      <div className="h-full  hidden lg:flex justify-between gap-2">
        <LogoTab />
        <div className="w-4/5 h-full   flex justify-end ">
          <div className="flex h-full  flex-row  pl-5 items-center justify-end gap-7">
            <Link
              href="#"
              className={`cursor-pointer flex  ${styles.nav_button}`}
            >
              <div className="flex items-center flex-row gap-1">
                <MdiAbout />
                <li>About</li>
              </div>
            </Link>
            <Link
              href="#"
              className={`cursor-pointer flex  ${styles.nav_button}`}
            >
              <div className="flex items-center flex-row gap-1">
                <MdiLove />
                <li>Donation</li>
              </div>
            </Link>
            <Link
              href="#"
              className={`cursor-pointer flex  ${styles.nav_button}`}
            >
              <div className="flex items-center flex-row gap-1">
                <Fa6SolidChildren />
                <li>Our Children</li>
              </div>
            </Link>
            <Link
              href="#"
              className={`cursor-pointer flex  ${styles.nav_button}`}
            >
              <div className="flex items-center flex-row gap-1">
                <MaterialSymbolsLightContactPage />
                <li>Contact</li>
              </div>
            </Link>
            <Tabs href="/signup" icon={<MdiRegister />} title="Sign-up" />
            <Tabs href="/login" icon={<MdiLightLogin />} title="login" />
            <Tabs title="Log-out" href="/" icon={<MdiSignOut />} />
          </div>
        </div>
      </div>
    </div>
  );
}
