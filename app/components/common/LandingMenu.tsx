"use client";
import { MynauiMenu } from "@/app/icons/MynauiMenu";
import React, { useState } from "react";
import TopMenu from "./TopMenu";

type Props = {};

export default function LandingMenu({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <button
        onClick={() => setOpen(!open)}
        data-collapse-toggle="navbar-default"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#2c3e50] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-[#2c3e50]"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <MynauiMenu />
      </button>

      {open && <TopMenu />}
    </React.Fragment>
  );
}
