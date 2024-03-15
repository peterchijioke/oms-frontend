import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

type Props = {};

export default function AppLandingHeader({}: Props) {
  return (
    <div className="w-full h-16 bg-white  shadow fixed px-24">
      <div className="h-full  hidden lg:flex justify-between gap-2">
        <div
          className={`w-1/5 h-full  flex flex-col justify-center cursor-pointer ${styles.logo}`}
        >
          <label className={`font-bold text-xl cursor-pointer ${styles.text}`}>
            OZORI OMS
          </label>
          <label className={`text-xs flex cursor-pointer ${styles.text}`}>
            Redefining how you see the homeless
          </label>
        </div>
        <div className="w-4/5 h-full  flex justify-end ">
          <div className="flex h-full w-1/2 flex-row  pl-5 items-center justify-end gap-6">
            <Link
              href="/dashboard"
              className={`cursor-pointer flex  ${styles.nav_button}`}
            >
              <li>Donation</li>
            </Link>
            <ul className={`cursor-pointer flex  ${styles.nav_button}`}>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const styless = {
  font: { fontFamily: "Jost" },
};
