import React from "react";
import ImageCard from "@/public/asset/images/landing.jpg";
import Image from "next/image";
import FramerMotion from "./FramerMotion";
import styles from "../common/style.module.css";

type Props = {};

export default function Card({}: Props) {
  return (
    <FramerMotion>
      <div className="relative h-fit overflow-hidden flex flex-col  w-full bg-white rounded-lg shadow-md gap-2">
        <div
          className={`w-full h-52 relative cursor-pointer ${styles.socialIcon}`}
        >
          <Image
            className={`w-full relative  md:w-full md:h-auto`}
            src={ImageCard}
            alt=""
          />
        </div>
        <p
          style={{ fontFamily: "Jost" }}
          className="text-lg font-medium text-black p-3"
        >
          "Tailwind CSS is the only framework that I've seen scale on large
          teams. It's easy to customize, adapts to any design, and the build
          size is tiny."
        </p>
      </div>
    </FramerMotion>
  );
}
