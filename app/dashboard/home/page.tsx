"use client";
import React from "react";
import Wrapper from "../Wrapper";
import { constants } from "@/app/constant";
import { IconParkSolidBaby } from "@/app/icons/IconParkSolidBaby";
import InfoCard from "@/app/components/dashboard/InfoCard";
import { MaterialSymbolsNews } from "@/app/icons/MaterialSymbolsNews";
import { Fa6SolidChildren } from "@/app/icons/Fa6SolidChildren";
import ChartComponent from "@/app/components/dashboard/ChartComponent";

type Props = {};

export default function page({}: Props) {
  return (
    <Wrapper>
      <div
        className={`h-full pt-24 w-full bg-[${constants.colors.primary}] px-5 pb-8 md:px-20 gap-5 flex flex-col`}
      >
        <div className="w-full grid md:grid-cols-3 gap-4 h-fit ">
          <InfoCard
            path="/dashboard/children"
            value="200"
            title="Children"
            icon={Fa6SolidChildren}
          />
          <InfoCard value="30" title="News" icon={MaterialSymbolsNews} />
          <InfoCard
            path="/dashboard/adoption"
            value="30"
            title="Adoption"
            icon={IconParkSolidBaby}
          />
        </div>
        <ChartComponent />
      </div>
    </Wrapper>
  );
}
