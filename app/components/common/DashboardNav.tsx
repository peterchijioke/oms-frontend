import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import ImageProfile from "../../../public/asset/images/download.png";

type Props = {};

export default function DashboardNav({}: Props) {
  return (
    <div className="w-full h-16 bg-white  shadow fixed px-24">
      <div className="h-full  hidden lg:flex justify-between gap-2">
        <Link
          href={"/"}
          className={`w-1/5 h-full  flex flex-col justify-center cursor-pointer ${styles.logo}`}
        >
          <label className={`font-bold text-xl cursor-pointer ${styles.text}`}>
            OZORI
          </label>
          <label className={`text-xs flex cursor-pointer ${styles.text}`}>
            Redefining how you see the homeless
          </label>
        </Link>
        <div className="w-4/5 h-full  flex justify-end ">
          <div className="flex h-full w-1/2 flex-row  pl-5 items-center justify-end gap-6">
            <Image
              width={40}
              height={40}
              alt="photo"
              className={`w-10 h-10 rounded-full ${styles.avatar} `}
              src={ImageProfile}
            />
            <ul className={`cursor-pointer flex  ${styles.nav_button}`}>
              <li>Log-out</li>
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
