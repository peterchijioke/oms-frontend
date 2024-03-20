import React from "react";
import styles from "@/app/components/common/style.module.css";
import { MdiLove } from "../icons/MdiLove";

type Props = {};

export default function LandinBanner({}: Props) {
  return (
    <div
      className={`w-full h-96 relative flex flex-col  lg:px-24 px-5 items-center justify-center gap-5 ${styles.banner}`}
    >
      <label
        style={{
          fontFamily: "Jost",
        }}
        className={`tex-center text-sm text-center lg:text-xl font-black uppercase text-white`}
      >
        Think of that child without a parent
      </label>
      <button
        className={`outline-none flex flex-row hover:animate-out zoom-out-50 items-center justify-center gap-2 w-32 h-10 bg-white rounded-full ${styles.landingBtn}`}
      >
        <MdiLove />
        Donate
      </button>
    </div>
  );
}
