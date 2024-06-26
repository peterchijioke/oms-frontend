import React, { useState } from "react";
import Wrapper from "../Wrapper";
import { constants } from "@/app/constant";
import { Fa6SolidChildren } from "@/app/icons/Fa6SolidChildren";
import AppTable from "./AppTable";
import AppModal from "@/app/components/common/AppModal";
import CreateForm from "./CreateForm";
import ButtonSection from "./ButtonSection";

export default function page() {
  return (
    <Wrapper>
      <div
        className={` pt-24 w-full h-[48rem] overflow-auto bg-[${constants.colors.primary}] px-5 pb-8 md:px-20 gap-5 flex flex-col`}
      >
        <ButtonSection />
        <AppTable />
      </div>
    </Wrapper>
  );
}
