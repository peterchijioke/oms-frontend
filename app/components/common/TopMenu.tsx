import { MdiLove } from "@/app/icons/MdiLove";
import Link from "next/link";
import React from "react";
import styles from "../../components/common/style.module.css";
import { MdiRegister } from "@/app/icons/MdiRegister";
import { MdiAbout } from "@/app/icons/MdiAbout";

type Props = {};

export default function TopMenu({}: Props) {
  return (
    <div className="w-full h-fit z-20 bg-white overflow-hidden absolute mt-[13rem] pt-3 rounded-br rounded-bl  shadow lg:hidden animate-in slide-in-from-top">
      <div className="flex gap-4 flex-col flex-grow p-3 h-fit bg-white">
        <Link href="/" className={`cursor-pointer flex  ${styles.nav_button}`}>
          <div className="flex items-center flex-row gap-1">
            <MdiAbout />
            <li>About</li>
          </div>
        </Link>
        <Link href="/" className={`cursor-pointer flex  ${styles.nav_button}`}>
          <div className="flex items-center flex-row gap-1">
            <MdiLove />
            <li>Donation</li>
          </div>
        </Link>
        <div className={`cursor-pointer flex  ${styles.nav_button}`}>
          <div className="flex items-center flex-row gap-1">
            <MdiRegister />
            <li>Sign-up</li>
          </div>
        </div>
      </div>
    </div>
  );
}
