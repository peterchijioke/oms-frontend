"use client";
import Link from "next/link";
import React from "react";
import styles from "../common/style.module.css";
import { usePathname } from "next/navigation";

type Props = {};

export default function LogoTab({}: Props) {
  const route = usePathname().split("/");
  return (
    <Link
      href={"/"}
      className={` h-full w-2/5  flex flex-col justify-center cursor-pointer ${styles.logo}`}
    >
      <label
        className={`font-bold lg:text-l cursor-pointer ${styles.text} uppercase`}
      >
        Orphanage Care Platform
      </label>
      {route.includes("dashboard") ? null : (
        <label
          className={`text-xs lg:flex hidden cursor-pointer ${styles.text}`}
        >
          Redefining how you see the homeless
        </label>
      )}
    </Link>
  );
}
