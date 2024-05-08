// ButtonSection.tsx
"use client";
import AppModal from "@/app/components/common/AppModal";
import React, { useState } from "react";
import CreateForm from "./CreateForm";
import { constants } from "@/app/constant";
import { Fa6SolidChildren } from "@/app/icons/Fa6SolidChildren";

type Props = {};

export default function ButtonSection() {
  const [modal, setModal] = useState(false);

  return (
    <div className="w-full flex justify-end">
      <AppModal
        isOpen={modal}
        onClose={() => setModal(false)}
        component={
          <button
            onClick={() => setModal(true)}
            className={`rounded-[3px] w-full lg:w-60  cursor-pointer font-semibold flex flex-row items-center justify-center gap-4 h-fit text-[${constants.colors.primary}] bg-white p-3`}
          >
            <Fa6SolidChildren />
            Add Child
          </button>
        }
        form={<CreateForm />}
      />
    </div>
  );
}
