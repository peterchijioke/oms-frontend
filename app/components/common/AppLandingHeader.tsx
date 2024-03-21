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
        <Link
          href="/"
          className={`w-1/5 h-full  flex flex-col justify-center cursor-pointer ${styles.logo}`}
        >
          <label
            className={`font-bold text-l cursor-pointer ${styles.text} uppercase`}
          >
            Orphanage Care Platform
          </label>
          <label className={`text-xs flex cursor-pointer ${styles.text}`}>
            Redefining how you see the homeless
          </label>
        </Link>
        <div className="w-4/5 h-full   flex justify-end ">
          <div className="flex h-full  flex-row  pl-5 items-center justify-end gap-7">
            <Link
              href="/dashboard"
              className={`cursor-pointer flex  ${styles.nav_button}`}
            >
              <div className="flex items-center flex-row gap-1">
                <MdiAbout />
                <li>About</li>
              </div>
            </Link>
            <Link
              href="/dashboard"
              className={`cursor-pointer flex  ${styles.nav_button}`}
            >
              <div className="flex items-center flex-row gap-1">
                <MdiLove />
                <li>Donation</li>
              </div>
            </Link>
            <Link
              href="/dashboard"
              className={`cursor-pointer flex  ${styles.nav_button}`}
            >
              <div className="flex items-center flex-row gap-1">
                <Fa6SolidChildren />
                <li>Our Children</li>
              </div>
            </Link>
            <Link
              href="/dashboard"
              className={`cursor-pointer flex  ${styles.nav_button}`}
            >
              <div className="flex items-center flex-row gap-1">
                <MaterialSymbolsLightContactPage />
                <li>Contact</li>
              </div>
            </Link>
            <Tabs href="/signup" icon={<MdiRegister />} title="Sign-up" />
            <Tabs href="/login" icon={<MdiLightLogin />} title="login" />
          </div>
        </div>
      </div>
    </div>
  );
}
