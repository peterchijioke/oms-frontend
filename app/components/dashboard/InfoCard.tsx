"use client";

import { constants } from "@/app/constant";
import { IconParkSolidBaby } from "@/app/icons/IconParkSolidBaby";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  icon: any;
  value: string;
  title: string;
  path?: string;
};

export default function InfoCard({ icon: Icon, value, title, path }: Props) {
  const route = useRouter();
  return (
    <div
      onClick={() => (path ? route.push(path) : null)}
      className="relative flex flex-col space-y-[20px] p-3 h-[auto] items-center col-span-1 bg-white rounded-[5px]"
    >
      <div className="flex flex-row items-center w-full justify-between ">
        <Icon width={40} height={40} color={constants.colors.primary} />
        <label
          htmlFor="total"
          className="flex flex-col items-center text-[${constants.colors.primary}]"
        >
          <label className={`font-bold text-lg `} htmlFor="">
            {value}
          </label>
          {title}
        </label>
      </div>
      <button
        className={`flex h-12 cursor-pointer rounded-[5px] flex-col w-full items-center justify-center bg-[${constants.colors.primary}] text-white `}
      >
        View Details
      </button>
    </div>
  );
}
