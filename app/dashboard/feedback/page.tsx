"use client";
import React, { useState } from "react";
import Wrapper from "../Wrapper";
import { constants } from "@/app/constant";
import { Fa6SolidChildren } from "@/app/icons/Fa6SolidChildren";
import AppTable from "./AppTable";
import AppModal from "@/app/components/common/AppModal";

type Props = {};

export default function page({}: Props) {
  const [modal, setModal] = useState(false);
  return (
    <Wrapper>
      <div
        className={` pt-24 w-full h-[48rem] overflow-auto bg-[${constants.colors.primary}] px-5 pb-8 md:px-20 gap-5 flex flex-col`}
      >
        <div className="w-full flex justify-end"></div>
        <AppTable />
      </div>
    </Wrapper>
  );
}
