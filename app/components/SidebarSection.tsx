"use client";
import React from "react";
import { Fa6SolidChildren } from "../icons/Fa6SolidChildren";
import { constants } from "../constant";
import styles from "../components/common/style.module.css";
import { MaterialSymbolsDashboard } from "../icons/MaterialSymbolsDashboard";
import { MaterialSymbolsNews } from "../icons/MaterialSymbolsNews";
import { IconParkSolidBaby } from "../icons/IconParkSolidBaby";
import { MaterialSymbolsFeedback } from "../icons/MaterialSymbolsFeedback";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Animate } from "./common/FramerMotion";

type Props = {};

const navData = [
  {
    id: Math.random().toString(36).substr(2),
    icon: MaterialSymbolsDashboard,
    name: "home",
  },
  {
    id: Math.random().toString(36).substr(2),
    icon: Fa6SolidChildren,
    name: "children",
  },
  {
    id: Math.random().toString(36).substr(2),
    icon: MaterialSymbolsNews,
    name: "news",
  },
  {
    id: Math.random().toString(36).substr(2),
    icon: IconParkSolidBaby,
    name: "adoption",
  },
  {
    id: Math.random().toString(36).substr(2),
    icon: MaterialSymbolsFeedback,
    name: "feedback",
  },
];

export default function SidebarSection({}: Props) {
  const pathname = usePathname();
  const [activeId, setActiveId] = React.useState<string | undefined>();

  return (
    <div className=" lg:flex-initial hidden lg:flex w-24 h-dvh bg-white px-5 pt-24 flex-col overflow-scroll ">
      <div className="flex flex-col h-full w-full gap-4">
        {navData.map((data, i) => {
          const { icon: Icon, name, id } = data;
          return (
            <div
              key={data.id}
              onMouseLeave={() => {
                setActiveId(undefined);
              }}
              onMouseEnter={() => setActiveId(id)}
              className=""
            >
              {activeId === id && (
                <div className="w-[8rem] font-[Jost] uppercase h-12 font-semibold bg-white rounded-r-[10px] absolute z-50 left-24 mt-2 flex flex-col items-center justify-center">
                  {name}
                </div>
              )}
              <Link
                href={`/dashboard/${name}`}
                key={id}
                className={` link ${
                  pathname === "/name" ? "active" : ""
                }p-3 cursor-pointer rounded-[10px] bg-[${
                  constants?.colors.primary
                }] flex items-center justify-center transform transition duration-500 hover:scale-110`}
              >
                <Icon color="#fff" width={"2rem"} height={"2rem"} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
