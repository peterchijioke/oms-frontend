import React from "react";
import Image from "next/image";
import { ScaleAnimation } from "./FramerMotion";

type Props = {
  title?: string;
  caption: string;
  img?: any;
};

export default function CardNoShadow({ title, caption, img }: Props) {
  return (
    <ScaleAnimation>
      <div className="relative h-96  overflow-hidden flex flex-col  w-full bg-white gap-2">
        {img && (
          <div
            className={`w-full ${
              img ? "h-full" : "h-52"
            } relative rounded-t overflow-hidden`}
          >
            <Image
              className="w-full   md:w-full md:h-auto md:rounded-none mx-auto"
              src={img}
              alt=""
              layout="fill"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        {!img && (
          <>
            <label className="font-bold uppercase font-[jost] ">{title}</label>
            <p className={`font-[jost] font-normal`}>{caption}</p>
          </>
        )}
      </div>
    </ScaleAnimation>
  );
}
